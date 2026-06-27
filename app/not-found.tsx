import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen planner-bg flex items-center justify-center p-4">
      <div className="text-center animate-fade-in-up">
        <h1 className="font-display text-8xl font-bold text-primary mb-4">
          404
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Page not found
        </p>
        <Link
          href="/"
          className="command-strip inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
