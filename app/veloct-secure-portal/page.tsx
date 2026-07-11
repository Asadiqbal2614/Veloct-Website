'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, LogIn, Eye, EyeOff } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export default function SecurePortalPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()

    const { error: authError } = await supabase.auth.signInWithPassword({
      email: username,
      password,
    })

    setLoading(false)

    if (authError) {
      setError(authError.message)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#00164A] flex items-center justify-center p-4">
      <Link
        href="/"
        className="fixed top-6 left-6 flex items-center gap-2 text-sm text-slate-500 dark:text-white/60 hover:text-[#FE7004] transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Website
      </Link>

      <div className="bg-slate-50 border border-slate-200/80 shadow-sm dark:bg-white/5 dark:border-white/10 animate-scale-in rounded-2xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/assets/logo1.png"
            alt="VELOCT"
            width={180}
            height={48}
            className="block dark:hidden h-12 w-auto mb-4"
          />
          <Image
            src="/assets/logo.png"
            alt="VELOCT"
            width={180}
            height={48}
            className="hidden dark:block h-12 w-auto mb-4"
          />
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Admin Login
          </h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-5 animate-fade-in-up">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <div>
            <label className="micro-label block mb-2 text-slate-500 dark:text-white/60">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 outline-none focus:border-[#FE7004] focus:ring-2 focus:ring-[#FE7004]/20 transition-all duration-200"
              placeholder="Enter username"
              autoComplete="username"
            />
          </div>

          <div>
            <label className="micro-label block mb-2 text-slate-500 dark:text-white/60">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-[#FE7004]/15 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 outline-none focus:border-[#FE7004] focus:ring-2 focus:ring-[#FE7004]/20 transition-all duration-200 pr-10"
                placeholder="Enter password"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="command-strip w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50"
          >
            <LogIn size={18} />
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
