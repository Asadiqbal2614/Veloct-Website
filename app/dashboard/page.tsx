'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { LogOut, RefreshCw, Trash2, Mail, Phone, Calendar, Users } from 'lucide-react'

interface Consultation {
  email: string
  action: string
  context: string
  timestamp: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [consultations, setConsultations] = useState<Consultation[]>([])
  const [authenticated, setAuthenticated] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  const loadConsultations = useCallback(async () => {
    setRefreshing(true)
    try {
      const res = await fetch('/api/submissions')
      if (res.ok) {
        const data = await res.json()
        setConsultations(data)
        return
      }
    } catch {
      // API fetch failed, fall back to localStorage
    }

    try {
      const raw = localStorage.getItem('veloct_contact_submissions')
      if (raw) {
        setConsultations(JSON.parse(raw))
      } else {
        setConsultations([])
      }
    } catch {
      setConsultations([])
    }
    setRefreshing(false)
  }, [])

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_authenticated')
    if (auth !== 'true') {
      router.push('/admin')
    } else {
      setAuthenticated(true)
      loadConsultations()
    }
  }, [router, loadConsultations])

  const clearAll = async () => {
    localStorage.removeItem('veloct_contact_submissions')
    setConsultations([])
    await fetch('/api/submissions', {
      method: 'DELETE',
    })
  }

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated')
    router.push('/admin')
  }

  if (!authenticated) return null

  const totalRequests = consultations.length
  const latestEmail =
    consultations.length > 0
      ? consultations[consultations.length - 1].email
      : 'N/A'
  const consultationsCount = consultations.filter(
    (c) => c.action === 'Book Consultation'
  ).length
  const proposalsCount = consultations.filter(
    (c) => c.action === 'Request a Proposal'
  ).length

  const stats = [
    { label: 'Total Requests', value: totalRequests, icon: Mail, delay: '0ms' },
    { label: 'Latest Email', value: latestEmail, icon: Mail, delay: '100ms' },
    { label: 'Consultations', value: consultationsCount, icon: Calendar, delay: '200ms' },
    { label: 'Proposals', value: proposalsCount, icon: Users, delay: '300ms' },
  ]

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
          <h1 className="font-display text-3xl font-semibold">Dashboard</h1>
          <div className="flex gap-3">
            <button
              onClick={loadConsultations}
              disabled={refreshing}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg border border-border hover:border-primary/30 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw size={16} className={refreshing ? 'animate-spin' : ''} />
              {refreshing ? 'Refreshing...' : 'Refresh'}
            </button>
            {consultations.length > 0 && (
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
                  "font-display font-semibold mb-1",
                  stat.label === 'Latest Email'
                    ? "text-base truncate"
                    : "text-3xl"
                )}>
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div
          className="paper-card overflow-hidden animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
        >
          <div className="p-6 border-b border-border">
            <h2 className="font-display text-xl font-semibold">
              Consultation Requests
            </h2>
          </div>

          {consultations.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">
              <Mail size={40} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg">No consultation requests yet.</p>
              <p className="text-sm mt-1">
                Requests from the contact form will appear here.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left px-6 py-4 micro-label">#</th>
                    <th className="text-left px-6 py-4 micro-label">Email</th>
                    <th className="text-left px-6 py-4 micro-label">Type</th>
                    <th className="text-left px-6 py-4 micro-label hidden md:table-cell">
                      Context
                    </th>
                    <th className="text-left px-6 py-4 micro-label hidden lg:table-cell">
                      Date
                    </th>
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
                      <td className="px-6 py-4 text-muted-foreground hidden md:table-cell max-w-[200px] truncate">
                        {c.context}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground hidden lg:table-cell whitespace-nowrap">
                        {new Date(c.timestamp).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
