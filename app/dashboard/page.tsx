'use client'

import { useState, useEffect, useCallback, FormEvent, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { createClient } from '@/lib/supabase/client'
import { LogOut, RefreshCw, Trash2, Mail, Calendar, Users, Briefcase, GraduationCap, FileText, Pencil, Award, CalendarDays, Tag, Lock, Unlock, Clock, CheckCircle, XCircle, Plus, ToggleLeft, ToggleRight } from 'lucide-react'
import type { BlogPost, JobPosting } from '@/lib/types'

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

type Tab = 'queries' | 'careers' | 'blogs' | 'jobs'

export default function DashboardPage() {
  const router = useRouter()
  const [consultations, setConsultations] = useState<Consultation[]>([])
  const [careers, setCareers] = useState<CareerSubmission[]>([])
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [jobs, setJobs] = useState<JobPosting[]>([])
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

  // Job form state
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [jobExperience, setJobExperience] = useState('')
  const [jobLocation, setJobLocation] = useState('')
  const [jobLastDate, setJobLastDate] = useState('')
  const [editingJobId, setEditingJobId] = useState<string | null>(null)
  const [jobPublishing, setJobPublishing] = useState(false)
  const [jobSuccess, setJobSuccess] = useState('')
  const [jobError, setJobError] = useState('')

  const loadData = useCallback(async () => {
    setRefreshing(true)
    try {
      const [subRes, careerRes, blogRes, jobsRes] = await Promise.all([
        fetch('/api/submissions'),
        fetch('/api/careers'),
        fetch('/api/blogs'),
        fetch('/api/jobs'),
      ])
      if (subRes.ok) setConsultations(await subRes.json())
      if (careerRes.ok) setCareers(await careerRes.json())
      if (blogRes.ok) setBlogs(await blogRes.json())
      if (jobsRes.ok) setJobs(await jobsRes.json())
    } catch {
      // best-effort
    } finally {
      setRefreshing(false)
    }
  }, [])

  useEffect(() => {
    ;(async () => {
      const supabase = createClient()
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.replace('/')
      } else {
        setAuthenticated(true)
        loadData()
      }
    })()
  }, [router, loadData])

  const clearAll = async () => {
    if (activeTab === 'queries') {
      setConsultations([])
      await fetch('/api/submissions', { method: 'DELETE' })
    } else if (activeTab === 'careers') {
      setCareers([])
      await fetch('/api/careers', { method: 'DELETE' })
    } else if (activeTab === 'jobs') {
      setJobs([])
      await fetch('/api/jobs', { method: 'DELETE' })
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

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.replace('/')
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

  // --- Job CRUD ---

  const resetJobForm = () => {
    setJobTitle('')
    setJobDescription('')
    setJobExperience('')
    setJobLocation('')
    setJobLastDate('')
    setEditingJobId(null)
    setJobSuccess('')
    setJobError('')
  }

  const handleEditJob = (job: JobPosting) => {
    setJobTitle(job.title)
    setJobDescription(job.description)
    setJobExperience(job.experience)
    setJobLocation(job.location)
    setJobLastDate(job.last_date)
    setEditingJobId(job.id)
    setJobSuccess('')
    setJobError('')
  }

  const handleToggleJobStatus = async (job: JobPosting) => {
    try {
      const res = await fetch(`/api/jobs/${job.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ is_active: !job.is_active }),
      })
      if (res.ok) {
        setJobs((prev) =>
          prev.map((j) => (j.id === job.id ? { ...j, is_active: !j.is_active } : j))
        )
      }
    } catch {
      // best-effort
    }
  }

  const handleDeleteJob = async (id: string) => {
    try {
      const res = await fetch(`/api/jobs?id=${id}`, { method: 'DELETE' })
      if (res.ok) {
        setJobs((prev) => prev.filter((j) => j.id !== id))
      }
    } catch {
      // best-effort
    }
  }

  const handlePublishJob = async (e: FormEvent) => {
    e.preventDefault()
    setJobPublishing(true)
    setJobSuccess('')
    setJobError('')

    const isEditing = !!editingJobId

    try {
      const url = isEditing ? `/api/jobs/${editingJobId}` : '/api/jobs'
      const method = isEditing ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: jobTitle,
          description: jobDescription,
          experience: jobExperience,
          location: jobLocation,
          last_date: jobLastDate,
        }),
      })

      if (res.ok) {
        setJobSuccess(isEditing ? 'Job updated successfully!' : 'Job created successfully!')
        resetJobForm()
        loadData()
      } else {
        const err = await res.json()
        setJobError(err.error || 'Failed to save job')
      }
    } catch {
      setJobError('Network error. Please try again.')
    } finally {
      setJobPublishing(false)
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
    const text = blogContent.trim()
    const words = text ? text.split(/\s+/).length : 0
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

  const activeJobsCount = jobs.filter((j) => j.is_active).length
  const jobsStats = [
    { label: 'Total Positions', value: jobs.length, icon: Briefcase, delay: '0ms' },
    { label: 'Active Listings', value: activeJobsCount, icon: ToggleRight, delay: '100ms' },
    { label: 'Latest Job', value: jobs.length > 0 ? jobs[0].title : 'N/A', icon: FileText, delay: '200ms' },
    { label: 'Inactive', value: jobs.length - activeJobsCount, icon: ToggleLeft, delay: '300ms' },
  ]

  const stats = activeTab === 'queries' ? queriesStats : activeTab === 'careers' ? careersStats : activeTab === 'jobs' ? jobsStats : blogsStats

  return (
    <div className="min-h-screen bg-white dark:bg-[#00164A] transition-colors duration-300">
      <header className="bg-slate-100/70 backdrop-blur-sm border-b border-gray-200 dark:bg-white/5 dark:border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/logo1.png"
              alt="VELOCT"
              width={120}
              height={32}
              className="block dark:hidden h-8 w-auto"
            />
            <Image
              src="/assets/logo.png"
              alt="VELOCT"
              width={120}
              height={32}
              className="hidden dark:block h-8 w-auto"
            />
            <span className="micro-label hidden sm:block text-slate-500 dark:text-white/60">Admin Panel</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-slate-500 dark:text-white/60 hover:text-red-500 transition-colors cursor-pointer"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">Dashboard</h1>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={loadData}
              disabled={refreshing}
              className="flex items-center gap-2 text-sm text-slate-500 dark:text-white/60 hover:text-[#FE7004] transition-colors px-4 py-2 rounded-lg border border-gray-200 dark:border-white/10 hover:border-[#FE7004]/30 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw size={16} className={refreshing ? 'animate-spin' : ''} />
              {refreshing ? 'Refreshing...' : 'Refresh'}
            </button>
            {activeTab !== 'blogs' && (
              activeTab === 'queries' ? consultations.length > 0 :
              activeTab === 'careers' ? careers.length > 0 :
              activeTab === 'jobs' ? jobs.length > 0 : false
            ) && (
              <button
                onClick={clearAll}
                className="flex items-center gap-2 text-sm text-red-500 hover:text-red-300 transition-colors px-4 py-2 rounded-lg border border-red-500/30 hover:border-red-500/60 cursor-pointer"
              >
                <Trash2 size={16} />
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Tabs */}
          <div className="flex gap-1 mb-6 p-1 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 overflow-x-auto w-full sm:w-fit">
            <button
              onClick={() => setActiveTab('queries')}
              className={cn(
                "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap",
                activeTab === 'queries'
                  ? "bg-[#FE7004] text-white shadow-lg shadow-[#FE7004]/20"
                  : "text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/5"
              )}
          >
            <Mail size={16} />
            Client Queries
          </button>
          <button
            onClick={() => setActiveTab('careers')}
            className={cn(
                "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap",
                activeTab === 'careers'
                  ? "bg-[#FE7004] text-white shadow-lg shadow-[#FE7004]/20"
                  : "text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/5"
            )}
          >
            <Briefcase size={16} />
            Career Applications
          </button>
          <button
            onClick={() => setActiveTab('jobs')}
            className={cn(
                "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap",
                activeTab === 'jobs'
                  ? "bg-[#FE7004] text-white shadow-lg shadow-[#FE7004]/20"
                  : "text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/5"
            )}
          >
            <Briefcase size={16} />
            Manage Jobs
          </button>
          <button
            onClick={() => setActiveTab('blogs')}
            className={cn(
                "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap",
              activeTab === 'blogs'
                  ? "bg-[#FE7004] text-white shadow-lg shadow-[#FE7004]/20"
                  : "text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/5"
            )}
          >
            <FileText size={16} />
            Manage Blogs
          </button>
        </div>

        <div className={cn(
          "grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8",
              activeTab === 'blogs' ? 'md:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4'
        )}>
          {/* Stats cards rendered below */}
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-50 border border-slate-200/80 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none rounded-xl p-6 animate-slide-up relative overflow-hidden"
              style={{ animationDelay: stat.delay }}
            >
              <div className="flex items-start justify-between mb-3">
                <stat.icon size={20} className="text-[#FE7004]/70" />
              </div>
                <p className={cn(
                  "mb-1",
                  stat.label === 'Latest Title'
                    ? "text-xl font-semibold text-slate-900 dark:text-white"
                    :                     stat.label === 'Latest Email'
                      ? "text-lg sm:text-xl font-bold text-slate-900 dark:text-white break-all"
                      : "text-3xl font-bold text-slate-900 dark:text-white"
                )}>
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 dark:text-white/60 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {activeTab === 'queries' && (
          <div className="bg-slate-50 border border-slate-200/80 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none rounded-xl overflow-hidden animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-white/10">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">Consultation Requests</h2>
            </div>

            {consultations.length === 0 ? (
              <div className="p-6 sm:p-12 text-center text-slate-500 dark:text-white/60">
                <Mail size={40} className="mx-auto mb-4 opacity-30" />
                <p className="text-lg text-slate-500 dark:text-white/60">No consultation requests yet.</p>
                <p className="text-sm mt-1 text-slate-400 dark:text-white/40">Requests from the contact form will appear here.</p>
              </div>
            ) : (
              <div className="w-full overflow-x-auto">
                <table className="w-full text-sm whitespace-nowrap">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-white/10">
                      <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">#</th>
                      <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Email</th>
                      <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Type</th>
                      <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Company</th>
                      <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Size</th>
                      <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Budget</th>
                      <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Timeline</th>
                      <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Context</th>
                      <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Date</th>
                      <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...consultations].reverse().map((c, i) => (
                      <tr
                        key={`${c.email}-${i}`}
                        className="border-b border-gray-200/50 dark:border-white/5 hover:bg-white/[0.02] transition-colors animate-slide-up"
                        style={{ animationDelay: `${500 + i * 50}ms` }}
                      >
                        <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-[#FE7004]">{i + 1}</td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4">
                          <a href={`mailto:${c.email}`} className="text-[#FE7004] hover:underline">{c.email}</a>
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4">
                          <span className="micro-label text-[#FE7004]">
                            {c.action === 'Book Consultation' ? 'Consultation' : 'Proposal'}
                          </span>
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-500 dark:text-white/60 whitespace-nowrap">
                          {c.company || '-'}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-500 dark:text-white/60 whitespace-nowrap">
                          {c.companySize || '-'}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-500 dark:text-white/60 whitespace-nowrap">
                          {c.budget || '-'}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-500 dark:text-white/60 whitespace-nowrap">
                          {c.timeline || '-'}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-500 dark:text-white/60 max-w-[120px] sm:max-w-[180px] truncate">
                          {c.context}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-500 dark:text-white/60 whitespace-nowrap">
                          {new Date(c.timestamp).toLocaleDateString()}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4">
                          <button
                            onClick={() => handleDelete(c.id, 'queries')}
                            className="text-slate-500 dark:text-white/60 hover:text-red-500 transition-colors cursor-pointer"
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
          <div className="bg-slate-50 border border-slate-200/80 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none rounded-xl overflow-hidden animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-white/10">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">Career Applications</h2>
            </div>

            {careers.length === 0 ? (
              <div className="p-6 sm:p-12 text-center text-slate-500 dark:text-white/60">
                <Briefcase size={40} className="mx-auto mb-4 opacity-30" />
                <p className="text-lg text-slate-500 dark:text-white/60">No career applications yet.</p>
                <p className="text-sm mt-1 text-slate-400 dark:text-white/40">Applications from the career page will appear here.</p>
              </div>
            ) : (
              <div className="w-full overflow-x-auto">
                <table className="w-full text-sm whitespace-nowrap">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-white/10">
                      <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">#</th>
                      <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Name</th>
                      <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Email</th>
                      <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Education</th>
                      <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Specialization</th>
                      <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Experience</th>
                      <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">City</th>
                      <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Resume</th>
                      <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Date</th>
                      <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...careers].reverse().map((c, i) => (
                      <tr
                        key={`${c.email}-${i}`}
                        className="border-b border-gray-200/50 dark:border-white/5 hover:bg-white/[0.02] transition-colors animate-slide-up"
                        style={{ animationDelay: `${500 + i * 50}ms` }}
                      >
                        <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-[#FE7004]">{i + 1}</td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-900 dark:text-white font-medium">{c.fullName}</td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4">
                          <a href={`mailto:${c.email}`} className="text-[#FE7004] hover:underline">{c.email}</a>
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-500 dark:text-white/60">{c.education}</td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-500 dark:text-white/60">{c.specialization || '-'}</td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-500 dark:text-white/60">{c.experience}</td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-500 dark:text-white/60">{c.city}, {c.country}</td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4">
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
                            <span className="text-xs text-slate-400 dark:text-white/30">No CV</span>
                          )}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-500 dark:text-white/60 whitespace-nowrap">
                          {new Date(c.timestamp).toLocaleDateString()}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4">
                          <button
                            onClick={() => handleDelete(c.id, 'careers')}
                            className="text-slate-500 dark:text-white/60 hover:text-red-500 transition-colors cursor-pointer"
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

        {activeTab === 'jobs' && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Create/Edit Job Form */}
            <div className="bg-slate-50 border border-slate-200/80 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none rounded-xl overflow-hidden animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-white/10">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-base sm:text-xl font-semibold text-slate-900 dark:text-white">
                    {editingJobId ? 'Edit Position' : 'Create New Position'}
                  </h2>
                  {editingJobId && (
                    <button
                      onClick={resetJobForm}
                      className="text-xs text-slate-400 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>
              </div>
              <form onSubmit={handlePublishJob} className="p-4 sm:p-6 space-y-5">
                {jobSuccess && (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-3 text-sm text-green-400">
                    {jobSuccess}
                  </div>
                )}
                {jobError && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-sm text-red-400">
                    {typeof jobError === 'string' ? jobError : 'An unexpected error occurred'}
                  </div>
                )}

                <div>
                  <label className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                    Job Title <span className="text-[#FE7004]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="e.g. Senior Full-Stack Developer"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                    Description <span className="text-[#FE7004]">*</span>
                  </label>
                  <textarea
                    required
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Describe the role, responsibilities, and requirements..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all resize-y"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                      Experience <span className="text-[#FE7004]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={jobExperience}
                      onChange={(e) => setJobExperience(e.target.value)}
                      placeholder="e.g. 3-5 years"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                      Location <span className="text-[#FE7004]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={jobLocation}
                      onChange={(e) => setJobLocation(e.target.value)}
                      placeholder="e.g. Remote / Dubai"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                    Last Date to Apply <span className="text-[#FE7004]">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={jobLastDate}
                    onChange={(e) => setJobLastDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all [color-scheme:dark]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={jobPublishing}
                  className="command-strip w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 shadow-lg shadow-[#FE7004]/20 hover:shadow-[#FE7004]/40 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Plus size={16} />
                  {jobPublishing ? (editingJobId ? 'Updating...' : 'Publishing...') : (editingJobId ? 'Update Position' : 'Create Position')}
                </button>
              </form>
            </div>

            {/* Job Listings Table */}
            <div className="bg-slate-50 border border-slate-200/80 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none rounded-xl overflow-hidden animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-white/10">
                  <h2 className="text-base sm:text-xl font-semibold text-slate-900 dark:text-white">All Positions ({jobs.length})</h2>
                </div>

                {jobs.length === 0 ? (
                  <div className="p-6 sm:p-12 text-center text-slate-500 dark:text-white/60">
                    <Briefcase size={32} className="sm:size-40 mx-auto mb-4 opacity-30" />
                    <p className="text-base sm:text-lg text-slate-500 dark:text-white/60">No job positions yet.</p>
                    <p className="text-sm mt-1 text-slate-400 dark:text-white/40">Use the form to create your first job listing.</p>
                  </div>
                ) : (
                  <div className="w-full overflow-x-auto">
                    <table className="w-full text-sm whitespace-nowrap">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-white/10">
                          <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Title</th>
                          <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Status</th>
                          <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Experience</th>
                          <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Location</th>
                          <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Last Date</th>
                          <th className="text-left px-3 sm:px-6 py-3 sm:py-4 micro-label text-slate-500 dark:text-white/60">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jobs.map((job, i) => (
                        <tr
                          key={job.id}
                          className="border-b border-gray-200/50 dark:border-white/5 hover:bg-white/[0.02] transition-colors animate-slide-up"
                          style={{ animationDelay: `${500 + i * 50}ms` }}
                        >
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-900 dark:text-white font-medium">{job.title}</td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4">
                            <button
                              onClick={() => handleToggleJobStatus(job)}
                              className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                                job.is_active
                                  ? 'bg-green-500/10 border-green-500/30 text-green-400 hover:bg-green-500/20'
                                  : 'bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10 text-slate-400 dark:text-white/40 hover:text-slate-600 dark:hover:text-white/60'
                              }`}
                            >
                              {job.is_active ? <ToggleRight size={12} /> : <ToggleLeft size={12} />}
                              {job.is_active ? 'Active' : 'Inactive'}
                            </button>
                          </td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-500 dark:text-white/60">{job.experience}</td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-500 dark:text-white/60">{job.location}</td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4 text-slate-500 dark:text-white/60">
                            {new Date(job.last_date).toLocaleDateString()}
                          </td>
                          <td className="px-3 sm:px-6 py-3 sm:py-4">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => handleEditJob(job)}
                                className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                              >
                                <Pencil size={14} />
                              </button>
                              <button
                                onClick={() => handleDeleteJob(job.id)}
                                className="text-slate-500 dark:text-white/60 hover:text-red-500 transition-colors cursor-pointer"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'blogs' && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Create Blog Form */}
            <div className="bg-slate-50 border border-slate-200/80 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none rounded-xl overflow-hidden animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-white/10">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-base sm:text-xl font-semibold text-slate-900 dark:text-white">
                    {editingSlug ? 'Edit Blog' : 'Create New Blog'}
                  </h2>
                  {editingSlug && (
                    <button
                      onClick={resetForm}
                      className="text-xs text-slate-400 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>
              </div>
              <form onSubmit={handlePublishBlog} className="p-4 sm:p-6 space-y-5">
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
                  <label className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                    Blog Title <span className="text-[#FE7004]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                    placeholder="e.g. The Future of AI in Business"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                    URL Slug <span className="text-[#FE7004]">*</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      required
                      readOnly={slugLocked}
                      value={blogSlug}
                      onChange={(e) => setBlogSlug(e.target.value)}
                      placeholder="e.g. future-of-ai-in-business"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => setSlugLocked(!slugLocked)}
                      className="px-3 py-3 rounded-xl border border-gray-300 dark:border-[#FE7004]/15 text-slate-500 dark:text-white/60 hover:text-[#FE7004] hover:border-[#FE7004]/50 transition-all cursor-pointer"
                      title={slugLocked ? 'Edit slug' : 'Lock slug'}
                    >
                      {slugLocked ? <Lock size={16} /> : <Unlock size={16} />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                    Blog Cover Image URL
                  </label>
                  <input
                    type="text"
                    value={blogImageUrl}
                    onChange={(e) => setBlogImageUrl(e.target.value)}
                    placeholder="e.g. /images/blog-one.jpg or an external unsplash link"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                    Tags / Keywords
                  </label>
                  <div className="relative">
                    <Tag size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white/30 pointer-events-none" />
                    <input
                      type="text"
                      value={blogTags}
                      onChange={(e) => setBlogTags(e.target.value)}
                      placeholder="e.g. AI, Technology, Innovation"
                      className="w-full pl-9 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                    Excerpt / Short Description <span className="text-[#FE7004]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={blogExcerpt}
                    onChange={(e) => setBlogExcerpt(e.target.value)}
                    placeholder="A brief summary of the blog post..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all"
                  />
                </div>

                <div>
                  <label className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                    Main Content <span className="text-[#FE7004]">*</span>
                  </label>
                  <textarea
                    value={blogContent}
                    onChange={(e) => setBlogContent(e.target.value)}
                    placeholder="Write your article here..."
                    rows={12}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 focus:ring-1 focus:ring-[#FE7004]/30 transition-all resize-y font-mono"
                  />
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-white/40 mt-1.5">
                    <Clock size={12} />
                    <span>{readingTime} min read &middot; {blogContent.trim() ? blogContent.trim().split(/\s+/).length : 0} words</span>
                  </div>
                </div>

                {/* SEO Checklist */}
                <div className="rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">SEO Checklist</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      seoScore.score >= 80 ? 'bg-green-500/20 text-green-400' :
                      seoScore.score >= 50 ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {seoScore.score}/100
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="h-2 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
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
                    <label className="micro-label text-slate-500 dark:text-white/60 block mb-1.5">
                      Focus Keyword
                    </label>
                    <input
                      type="text"
                      value={focusKeyword}
                      onChange={(e) => setFocusKeyword(e.target.value)}
                      placeholder="e.g. AI"
                      className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#FE7004]/50 transition-all"
                    />
                  </div>

                  {/* Checklist */}
                  <div className="space-y-2 text-xs">
                    <div className={`flex items-center gap-2 ${seoScore.checks.titleLength ? 'text-green-400' : 'text-slate-400 dark:text-white/40'}`}>
                      {seoScore.checks.titleLength ? <CheckCircle size={12} /> : <XCircle size={12} />}
                      <span>Title length 40-60 chars ({blogTitle.length})</span>
                    </div>
                    <div className={`flex items-center gap-2 ${seoScore.checks.keywordInTitle ? 'text-green-400' : 'text-slate-400 dark:text-white/40'}`}>
                      {seoScore.checks.keywordInTitle ? <CheckCircle size={12} /> : <XCircle size={12} />}
                      <span>Keyword in Title</span>
                    </div>
                    <div className={`flex items-center gap-2 ${seoScore.checks.keywordInSlug ? 'text-green-400' : 'text-slate-400 dark:text-white/40'}`}>
                      {seoScore.checks.keywordInSlug ? <CheckCircle size={12} /> : <XCircle size={12} />}
                      <span>Keyword in URL Slug</span>
                    </div>
                    <div className={`flex items-center gap-2 ${seoScore.checks.excerptLength ? 'text-green-400' : 'text-slate-400 dark:text-white/40'}`}>
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
            <div className="bg-slate-50 border border-slate-200/80 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none rounded-xl overflow-hidden animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-white/10">
                <h2 className="text-base sm:text-xl font-semibold text-slate-900 dark:text-white">Published Blogs ({blogs.length})</h2>
              </div>

              {blogs.length === 0 ? (
                <div className="p-6 sm:p-12 text-center text-slate-500 dark:text-white/60">
                  <FileText size={32} className="sm:size-40 mx-auto mb-4 opacity-30" />
                  <p className="text-base sm:text-lg text-slate-500 dark:text-white/60">No blogs published yet.</p>
                  <p className="text-sm mt-1 text-slate-400 dark:text-white/40">Use the form to create your first blog post.</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200/50 dark:divide-white/10">
                  {[...blogs]
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((blog) => (
                      <div key={blog.slug} className="p-4 sm:p-6 hover:bg-white/[0.02] transition-colors">
                        <div className="flex items-center justify-between gap-4">
                          <div className="min-w-0 flex-1">
                            <h3 className="text-base font-semibold text-slate-900 dark:text-white truncate">
                              {blog.title}
                            </h3>
                            <p className="text-xs text-slate-400 dark:text-white/40 mt-1">
                              /{blog.slug} &middot; {new Date(blog.date).toLocaleDateString()}
                              {blog.readingTime && <span> &middot; {blog.readingTime} min read</span>}
                              {blog.tags && <span> &middot; {blog.tags}</span>}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-2 shrink-0 flex-wrap sm:flex-nowrap">
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
