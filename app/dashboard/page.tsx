'use client'

import { useState, useEffect, useCallback, FormEvent, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { LogOut, RefreshCw, Trash2, Mail, Calendar, Users, Briefcase, GraduationCap, FileText, Pencil, Award, CalendarDays, Tag, Lock, Unlock, Clock, CheckCircle, XCircle } from 'lucide-react'

interface Consultation {
  id: string
  email: string
  action: string
  context: string
  company?: string
  companySize?: string
  budget?: string
  timeline?: string
  timestamp: string
}

interface CareerSubmission {
  id: string
  fullName: string
  email: string
  contact: string
  day: string
  month: string
  year: string
  education: string
  specialization?: string
  experience: string
  city: string
  country: string
  timestamp: string
  resume_url?: string
}

interface BlogPost {
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  imageUrl?: string
  tags?: string
  readingTime?: number
}

type Tab = 'queries' | 'careers' | 'blogs'

export default function DashboardPage() {
  const router = useRouter()
  const [consultations, setConsultations] = useState<Consultation[]>([])
  const [careers, setCareers] = useState<CareerSubmission[]>([])
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [authenticated, setAuthenticated] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [activeTab, setActiveTab] = useState<Tab>('queries')

  // Blog form state
  const [blogTitle, setBlogTitle] = useState('')
  const [blogSlug, setBlogSlug] = useState('')
  const [blogExcerpt, setBlogExcerpt] = useState('')
  const [blogContent, setBlogContent] = useState('')
  const [blogImageUrl, setBlogImageUrl] = useState('')
  const [blogTags, setBlogTags] = useState('')
  const [slugLocked, setSlugLocked] = useState(true)
  const [focusKeyword, setFocusKeyword] = useState('')
  const [editingSlug, setEditingSlug] = useState<string | null>(null)
  const [blogPublishing, setBlogPublishing] = useState(false)
  const [blogSuccess, setBlogSuccess] = useState('')
  const [blogError, setBlogError] = useState('')

  const loadData = useCallback(async () => {
    setRefreshing(true)
    try {
      const [subRes, careerRes, blogRes] = await Promise.all([
        fetch('/api/submissions'),
        fetch('/api/careers'),
        fetch('/api/blogs'),
      ])
      if (subRes.ok) setConsultations(await subRes.json())
      if (careerRes.ok) setCareers(await careerRes.json())
      if (blogRes.ok) setBlogs(await blogRes.json())
    } catch {
      // best-effort
    } finally {
      setRefreshing(false)
    }
  }, [])

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_authenticated')
    if (auth !== 'true') {
      router.push('/admin')
    } else {
      setAuthenticated(true)
      loadData()
    }
  }, [router, loadData])

  const clearAll = async () => {
    if (activeTab === 'queries') {
      setConsultations([])
      await fetch('/api/submissions', { method: 'DELETE' })
    } else if (activeTab === 'careers') {
      setCareers([])
      await fetch('/api/careers', { method: 'DELETE' })
    }
  }

  const handleDelete = async (id: string, type: 'queries' | 'careers') => {
    const endpoint = type === 'queries' ? '/api/submissions' : '/api/careers'
    try {
      const res = await fetch(`${endpoint}?id=${id}`, { method: 'DELETE' })
      if (res.ok) {
        if (type === 'queries') {
          setConsultations((prev) => prev.filter((item) => item.id !== id))
        } else {
          setCareers((prev) => prev.filter((item) => item.id !== id))
        }
      }
    } catch {
      // best-effort
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated')
    router.push('/admin')
  }

  const handlePublishBlog = async (e: FormEvent) => {
    e.preventDefault()
    setBlogPublishing(true)
    setBlogSuccess('')
    setBlogError('')

    const isEditing = !!editingSlug

    try {
      const url = isEditing ? `/api/blogs/${editingSlug}` : '/api/blogs'
      const method = isEditing ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: blogTitle,
          slug: blogSlug,
          excerpt: blogExcerpt,
          content: blogContent,
          imageUrl: blogImageUrl,
          tags: blogTags,
          readingTime,
          date: new Date().toISOString(),
        }),
      })

      if (res.ok) {
        setBlogSuccess(isEditing ? 'Blog updated successfully!' : 'Blog published successfully!')
        setBlogTitle('')
        setBlogSlug('')
        setBlogExcerpt('')
        setBlogContent('')
        setBlogImageUrl('')
        setBlogTags('')
        setFocusKeyword('')
        setSlugLocked(true)
        setEditingSlug(null)
        loadData()
      } else {
        const err = await res.json()
        setBlogError(
          typeof err.error === 'object'
            ? err.error.message || err.error.hint || JSON.stringify(err.error)
            : err.error || 'Failed to publish blog'
        )
      }
    } catch {
      setBlogError('Network error. Please try again.')
    } finally {
      setBlogPublishing(false)
    }
  }

  const resetForm = () => {
    setBlogTitle('')
    setBlogSlug('')
    setBlogExcerpt('')
    setBlogContent('')
    setBlogImageUrl('')
    setBlogTags('')
    setFocusKeyword('')
    setSlugLocked(true)
    setEditingSlug(null)
    setBlogSuccess('')
    setBlogError('')
  }

  const handleEditBlog = (blog: BlogPost) => {
    setBlogTitle(blog.title)
    setBlogSlug(blog.slug)
    setBlogExcerpt(blog.excerpt)
    setBlogContent(blog.content)
    setBlogImageUrl(blog.imageUrl || '')
    setBlogTags(blog.tags || '')
    setSlugLocked(true)
    setEditingSlug(blog.slug)
    setBlogSuccess('')
    setBlogError('')
  }

  const handleDeleteBlog = async (slug: string) => {
    try {
      const res = await fetch(`/api/blogs/${slug}`, { method: 'DELETE' })
      if (res.ok) {
        setBlogs((prev) => prev.filter((b) => b.slug !== slug))
      }
    } catch {
      // best-effort
    }
  }

  // Auto-generate slug from title
  useEffect(() => {
    if (slugLocked && !editingSlug) {
      setBlogSlug(
        blogTitle
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '')
      )
    }
  }, [blogTitle, slugLocked, editingSlug])

  const readingTime = useMemo(() => {
    const words = blogContent.trim() ? blogContent.trim().split(/\s+/).length : 0
    return Math.max(1, Math.ceil(words / 200))
  }, [blogContent])

  const seoScore = useMemo(() => {
    let score = 0
    const targetKeyword = focusKeyword.toLowerCase().trim().replace(/\s+/g, '-')
    const checks = {
      titleLength: blogTitle.length >= 40 && blogTitle.length <= 60,
      keywordInTitle: focusKeyword && blogTitle.toLowerCase().includes(focusKeyword.toLowerCase()),
      keywordInSlug: focusKeyword && blogSlug.toLowerCase().includes(targetKeyword),
      excerptLength: blogExcerpt.length >= 120 && blogExcerpt.length <= 160,
    }
    if (checks.titleLength) score += 25
    if (checks.keywordInTitle) score += 25
    if (checks.keywordInSlug) score += 25
    if (checks.excerptLength) score += 25
    return { score, checks }
  }, [blogTitle, blogSlug, blogExcerpt, focusKeyword])

  if (!authenticated) return null

  const totalQueries = consultations.length
  const latestEmail = consultations.length > 0
    ? consultations[consultations.length - 1].email
    : 'N/A'
  const consultationsCount = consultations.filter((c) => c.action === 'Book Consultation').length
  const proposalsCount = consultations.filter((c) => c.action === 'Request a Proposal').length
  const totalCareers = careers.length
  const totalBlogs = blogs.length

  const queriesStats = [
    { label: 'Total Requests', value: totalQueries, icon: Mail, delay: '0ms' },
    { label: 'Latest Email', value: latestEmail, icon: Mail, delay: '100ms' },
    { label: 'Consultations', value: consultationsCount, icon: Calendar, delay: '200ms' },
    { label: 'Proposals', value: proposalsCount, icon: Users, delay: '300ms' },
  ]

  const topSpecialization = (() => {
    const valid = careers.filter((c) => c.specialization && c.specialization.trim())
    if (valid.length === 0) return 'N/A'
    const freq: Record<string, number> = {}
    valid.forEach((c) => {
      freq[c.specialization!] = (freq[c.specialization!] || 0) + 1
    })
    return Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0]
  })()

  const newThisWeek = careers.filter((c) => {
    const d = new Date(c.timestamp)
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    return d >= weekAgo
  }).length

  const careersStats = [
    { label: 'Total Applications', value: totalCareers, icon: Briefcase, delay: '0ms' },
    { label: 'Latest Applicant', value: careers.length > 0 ? careers[careers.length - 1].fullName : 'N/A', icon: Users, delay: '100ms' },
    { label: 'Top Specialization', value: topSpecialization, icon: Award, delay: '200ms' },
    { label: 'New This Week', value: newThisWeek, icon: CalendarDays, delay: '300ms' },
  ]

  const blogsStats = [
    { label: 'Total Published', value: totalBlogs, icon: FileText, delay: '0ms' },
    { label: 'Latest Title', value: blogs.length > 0 ? blogs[blogs.length - 1].title : 'N/A', icon: FileText, delay: '100ms' },
    { label: 'Total Words', value: blogs.length > 0 ? blogs.reduce((s, b) => s + b.content.split(/\s+/).length, 0).toLocaleString() : '0', icon: FileText, delay: '200ms' },
  ]

  const stats = activeTab === 'queries' ? queriesStats : activeTab === 'careers' ? careersStats : blogsStats

  return (
    <div className="min-h-screen planner-bg">
      <header className="glass-panel border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/logo.png"
              alt="VELOCT"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <span className="micro-label hidden sm:block">Admin Panel</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className=" text-3xl font-semibold">Dashboard</h1>
          <div className="flex gap-3">
            <button
              onClick={loadData}
              disabled={refreshing}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg border border-border hover:border-primary/30 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw size={16} className={refreshing ? 'animate-spin' : ''} />
              {refreshing ? 'Refreshing...' : 'Refresh'}
            </button>
            {activeTab !== 'blogs' && (activeTab === 'queries' ? consultations.length > 0 : careers.length > 0) && (
              <button
                onClick={clearAll}
                className="flex items-center gap-2 text-sm text-destructive hover:text-red-300 transition-colors px-4 py-2 rounded-lg border border-destructive/30 hover:border-destructive/60 cursor-pointer"
              >
                <Trash2 size={16} />
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 p-1 rounded-xl bg-white/5 border border-border w-fit">
          <button
            onClick={() => setActiveTab('queries')}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
              activeTab === 'queries'
                ? "bg-[#FE7004] text-white shadow-lg shadow-[#FE7004]/20"
                : "text-white/60 hover:text-white hover:bg-white/5"
            )}
          >
            <Mail size={16} />
            Client Queries
          </button>
          <button
            onClick={() => setActiveTab('careers')}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
              activeTab === 'careers'
                ? "bg-[#FE7004] text-white shadow-lg shadow-[#FE7004]/20"
                : "text-white/60 hover:text-white hover:bg-white/5"
            )}
          >
            <Briefcase size={16} />
            Career Applications
          </button>
          <button
            onClick={() => setActiveTab('blogs')}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
              activeTab === 'blogs'
                ? "bg-[#FE7004] text-white shadow-lg shadow-[#FE7004]/20"
                : "text-white/60 hover:text-white hover:bg-white/5"
            )}
          >
            <FileText size={16} />
            Manage Blogs
          </button>
        </div>

        <div className={cn(
          "grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8",
          activeTab === 'blogs' ? 'md:grid-cols-3' : 'lg:grid-cols-4'
        )}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="paper-card p-6 animate-slide-up relative overflow-hidden"
              style={{ animationDelay: stat.delay }}
            >
              <div className="flex items-start justify-between mb-3">
                <stat.icon size={20} className="text-primary/70" />
              </div>
              <p className={cn(
                "mb-1",
                stat.label === 'Latest Title'
                  ? "text-xl font-semibold text-white"
                  : stat.label === 'Latest Email'
                    ? "text-lg sm:text-xl font-bold text-white break-words"
                    : "text-3xl font-bold text-white"
              )}>
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {activeTab === 'queries' && (
          <div className="paper-card overflow-hidden animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="p-6 border-b border-border">
              <h2 className=" text-xl font-semibold">Consultation Requests</h2>
            </div>

            {consultations.length === 0 ? (
              <div className="p-12 text-center text-muted-foreground">
                <Mail size={40} className="mx-auto mb-4 opacity-30" />
                <p className="text-lg">No consultation requests yet.</p>
                <p className="text-sm mt-1">Requests from the contact form will appear here.</p>
              </div>
            ) : (
              <div className="w-full overflow-x-auto">
                <table className="w-full text-sm whitespace-nowrap">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left px-6 py-4 micro-label">#</th>
                      <th className="text-left px-6 py-4 micro-label">Email</th>
                      <th className="text-left px-6 py-4 micro-label">Type</th>
                      <th className="text-left px-6 py-4 micro-label">Company</th>
                      <th className="text-left px-6 py-4 micro-label">Size</th>
                      <th className="text-left px-6 py-4 micro-label">Budget</th>
                      <th className="text-left px-6 py-4 micro-label">Timeline</th>
                      <th className="text-left px-6 py-4 micro-label">Context</th>
                      <th className="text-left px-6 py-4 micro-label">Date</th>
                      <th className="text-left px-6 py-4 micro-label">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...consultations].reverse().map((c, i) => (
                      <tr
                        key={`${c.email}-${i}`}
                        className="border-b border-border/50 hover:bg-white/[0.02] transition-colors animate-slide-up"
                        style={{ animationDelay: `${500 + i * 50}ms` }}
                      >
                        <td className="px-6 py-4 font-medium text-primary">{i + 1}</td>
                        <td className="px-6 py-4">
                          <a href={`mailto:${c.email}`} className="text-primary hover:underline">{c.email}</a>
                        </td>
                        <td className="px-6 py-4">
                          <span className="micro-label text-primary">
                            {c.action === 'Book Consultation' ? 'Consultation' : 'Proposal'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">
                          {c.company || '-'}
                        </td>
                        <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">
                          {c.companySize || '-'}
                        </td>
                        <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">
                          {c.budget || '-'}
                        </td>
                        <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">
                          {c.timeline || '-'}
                        </td>
                        <td className="px-6 py-4 text-muted-foreground max-w-[180px] truncate">
                          {c.context}
                        </td>
                        <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">
                          {new Date(c.timestamp).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => handleDelete(c.id, 'queries')}
                            className="text-muted-foreground hover:text-red-500 transition-colors cursor-pointer"
                          >
                            <Trash2 size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === 'careers' && (
          <div className="paper-card overflow-hidden animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="p-6 border-b border-border">
              <h2 className=" text-xl font-semibold">Career Applications</h2>
            </div>

            {careers.length === 0 ? (
              <div className="p-12 text-center text-muted-foreground">
                <Briefcase size={40} className="mx-auto mb-4 opacity-30" />
                <p className="text-lg">No career applications yet.</p>
                <p className="text-sm mt-1">Applications from the career page will appear here.</p>
              </div>
            ) : (
              <div className="w-full overflow-x-auto">
                <table className="w-full text-sm whitespace-nowrap">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left px-6 py-4 micro-label">#</th>
                      <th className="text-left px-6 py-4 micro-label">Name</th>
                      <th className="text-left px-6 py-4 micro-label">Email</th>
                      <th className="text-left px-6 py-4 micro-label">Education</th>
                      <th className="text-left px-6 py-4 micro-label">Specialization</th>
                      <th className="text-left px-6 py-4 micro-label">Experience</th>
                      <th className="text-left px-6 py-4 micro-label">City</th>
                      <th className="text-left px-6 py-4 micro-label">Resume</th>
                      <th className="text-left px-6 py-4 micro-label">Date</th>
                      <th className="text-left px-6 py-4 micro-label">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...careers].reverse().map((c, i) => (
                      <tr
                        key={`${c.email}-${i}`}
                        className="border-b border-border/50 hover:bg-white/[0.02] transition-colors animate-slide-up"
                        style={{ animationDelay: `${500 + i * 50}ms` }}
                      >
                        <td className="px-6 py-4 font-medium text-primary">{i + 1}</td>
                        <td className="px-6 py-4 text-white font-medium">{c.fullName}</td>
                        <td className="px-6 py-4">
                          <a href={`mailto:${c.email}`} className="text-primary hover:underline">{c.email}</a>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{c.education}</td>
                        <td className="px-6 py-4 text-muted-foreground">{c.specialization || '-'}</td>
                        <td className="px-6 py-4 text-muted-foreground">{c.experience}</td>
                        <td className="px-6 py-4 text-muted-foreground">{c.city}, {c.country}</td>
                        <td className="px-6 py-4">
                          {c.resume_url ? (
                            <a
                              href={c.resume_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                            >
                              View CV
                            </a>
                          ) : (
                            <span className="text-xs text-white/30">No CV</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">
                          {new Date(c.timestamp).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => handleDelete(c.id, 'careers')}
                            className="text-muted-foreground hover:text-red-500 transition-colors cursor-pointer"
                          >
                            <Trash2 size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === 'blogs' && (
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Create Blog Form */}
            <div className="paper-card overflow-hidden animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <h2 className=" text-xl font-semibold">
                    {editingSlug ? 'Edit Blog' : 'Create New Blog'}
                  </h2>
                  {editingSlug && (
                    <button
                      onClick={resetForm}
                      className="text-xs text-white/40 hover:text-white transition-colors cursor-pointer"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>
              </div>
              <form onSubmit={handlePublishBlog} className="p-6 space-y-5">
                {blogSuccess && (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-3 text-sm text-green-400">
                    {blogSuccess}
                  </div>
                )}
                {blogError && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-sm text-red-400">
                    {typeof blogError === 'string' ? blogError : 'An unexpected error occurred'}
                  </div>
                )}

                <div>
                  <label className="micro-label text-white/60 block mb-1.5">
                    Blog Title <span className="text-[#FE7004]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                    placeholder="e.g. The Future of AI in the Gulf"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#FE7004]/15 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="micro-label text-white/60 block mb-1.5">
                    URL Slug <span className="text-[#FE7004]">*</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      required
                      readOnly={slugLocked}
                      value={blogSlug}
                      onChange={(e) => setBlogSlug(e.target.value)}
                      placeholder="e.g. future-of-ai-in-gulf"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#FE7004]/15 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => setSlugLocked(!slugLocked)}
                      className="px-3 py-3 rounded-xl border border-[#FE7004]/15 text-white/60 hover:text-[#FE7004] hover:border-[#FE7004]/50 transition-all cursor-pointer"
                      title={slugLocked ? 'Edit slug' : 'Lock slug'}
                    >
                      {slugLocked ? <Lock size={16} /> : <Unlock size={16} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="micro-label text-white/60 block mb-1.5">
                    Blog Cover Image URL
                  </label>
                  <input
                    type="text"
                    value={blogImageUrl}
                    onChange={(e) => setBlogImageUrl(e.target.value)}
                    placeholder="e.g. /images/blog-one.jpg or an external unsplash link"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#FE7004]/15 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="micro-label text-white/60 block mb-1.5">
                    Tags / Keywords
                  </label>
                  <div className="relative">
                    <Tag size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                    <input
                      type="text"
                      value={blogTags}
                      onChange={(e) => setBlogTags(e.target.value)}
                      placeholder="e.g. AI, Technology, Saudi Arabia"
                      className="w-full pl-9 pr-4 py-3 rounded-xl bg-white/5 border border-[#FE7004]/15 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="micro-label text-white/60 block mb-1.5">
                    Excerpt / Short Description <span className="text-[#FE7004]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={blogExcerpt}
                    onChange={(e) => setBlogExcerpt(e.target.value)}
                    placeholder="A brief summary of the blog post..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#FE7004]/15 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="micro-label text-white/60 block mb-1.5">
                    Main Content <span className="text-[#FE7004]">*</span>
                  </label>
                  <textarea
                    required
                    value={blogContent}
                    onChange={(e) => setBlogContent(e.target.value)}
                    placeholder="Write your article here..."
                    rows={14}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#FE7004]/15 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all resize-y"
                  />
                  <div className="flex items-center gap-1.5 text-xs text-white/40 mt-1.5">
                    <Clock size={12} />
                    <span>{readingTime} min read &middot; {blogContent.trim() ? blogContent.trim().split(/\s+/).length : 0} words</span>
                  </div>
                </div>

                {/* SEO Checklist */}
                <div className="rounded-xl bg-white/[0.03] border border-white/10 p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-white">SEO Checklist</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      seoScore.score >= 80 ? 'bg-green-500/20 text-green-400' :
                      seoScore.score >= 50 ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {seoScore.score}/100
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        seoScore.score >= 80 ? 'bg-green-500' :
                        seoScore.score >= 50 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${seoScore.score}%` }}
                    />
                  </div>

                  {/* Focus Keyword */}
                  <div>
                    <label className="micro-label text-white/60 block mb-1.5">
                      Focus Keyword
                    </label>
                    <input
                      type="text"
                      value={focusKeyword}
                      onChange={(e) => setFocusKeyword(e.target.value)}
                      placeholder="e.g. AI"
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 transition-all"
                    />
                  </div>

                  {/* Checklist */}
                  <div className="space-y-2 text-xs">
                    <div className={`flex items-center gap-2 ${seoScore.checks.titleLength ? 'text-green-400' : 'text-white/40'}`}>
                      {seoScore.checks.titleLength ? <CheckCircle size={12} /> : <XCircle size={12} />}
                      <span>Title length 40-60 chars ({blogTitle.length})</span>
                    </div>
                    <div className={`flex items-center gap-2 ${seoScore.checks.keywordInTitle ? 'text-green-400' : 'text-white/40'}`}>
                      {seoScore.checks.keywordInTitle ? <CheckCircle size={12} /> : <XCircle size={12} />}
                      <span>Keyword in Title</span>
                    </div>
                    <div className={`flex items-center gap-2 ${seoScore.checks.keywordInSlug ? 'text-green-400' : 'text-white/40'}`}>
                      {seoScore.checks.keywordInSlug ? <CheckCircle size={12} /> : <XCircle size={12} />}
                      <span>Keyword in URL Slug</span>
                    </div>
                    <div className={`flex items-center gap-2 ${seoScore.checks.excerptLength ? 'text-green-400' : 'text-white/40'}`}>
                      {seoScore.checks.excerptLength ? <CheckCircle size={12} /> : <XCircle size={12} />}
                      <span>Excerpt 120-160 chars ({blogExcerpt.length})</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={blogPublishing}
                  className="command-strip w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-[#FE7004]/20 hover:shadow-[#FE7004]/40 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {blogPublishing ? (editingSlug ? 'Updating...' : 'Publishing...') : (editingSlug ? 'Update Blog' : 'Publish Blog')}
                </button>
              </form>
            </div>

            {/* Published Blogs List */}
            <div className="paper-card overflow-hidden animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="p-6 border-b border-border">
                <h2 className=" text-xl font-semibold">Published Blogs ({blogs.length})</h2>
              </div>

              {blogs.length === 0 ? (
                <div className="p-12 text-center text-muted-foreground">
                  <FileText size={40} className="mx-auto mb-4 opacity-30" />
                  <p className="text-lg">No blogs published yet.</p>
                  <p className="text-sm mt-1">Use the form to create your first blog post.</p>
                </div>
              ) : (
                <div className="divide-y divide-border/50">
                  {[...blogs]
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((blog) => (
                      <div key={blog.slug} className="p-6 hover:bg-white/[0.02] transition-colors">
                        <div className="flex items-center justify-between gap-4">
                          <div className="min-w-0 flex-1">
                            <h3 className=" text-base font-semibold text-white truncate">
                              {blog.title}
                            </h3>
                            <p className="text-xs text-white/40 mt-1">
                              /{blog.slug} &middot; {new Date(blog.date).toLocaleDateString()}
                              {blog.readingTime && <span> &middot; {blog.readingTime} min read</span>}
                              {blog.tags && <span> &middot; {blog.tags}</span>}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              onClick={() => handleEditBlog(blog)}
                              className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                            >
                              <Pencil size={12} />
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteBlog(blog.slug)}
                              className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                            >
                              <Trash2 size={12} />
                              Delete
                            </button>
                            <Link
                              href={`/blogs/${blog.slug}`}
                              className="text-xs text-[#FE7004] hover:underline ml-1"
                            >
                              View
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
