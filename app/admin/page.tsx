'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, LogIn, Eye, EyeOff } from 'lucide-react'

export default function AdminPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (username === process.env.NEXT_PUBLIC_ADMIN_USER && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      sessionStorage.setItem('admin_authenticated', 'true')
      router.push('/dashboard')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="min-h-screen planner-bg flex items-center justify-center p-4">
      <Link
        href="/"
        className="fixed top-6 left-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Website
      </Link>

      <div className="glass-panel animate-scale-in rounded-2xl p-8 w-full max-w-md" style={{ borderColor: 'rgba(51, 65, 85, 0.6)' }}>
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/assets/logo.png"
            alt="VELOCT"
            width={180}
            height={48}
            className="h-12 w-auto mb-4"
          />
          <h1 className="text-2xl font-semibold text-foreground">
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
            <label className="micro-label block mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-background/50 border border-slate-600 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all duration-200"
              placeholder="Enter username"
              autoComplete="username"
            />
          </div>

          <div>
            <label className="micro-label block mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-background/50 border border-slate-600 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all duration-200 pr-10"
                placeholder="Enter password"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="command-strip w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
          >
            <LogIn size={18} />
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
