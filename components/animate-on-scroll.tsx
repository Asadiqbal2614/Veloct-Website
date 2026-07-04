"use client"

import { type ReactNode } from "react"
import { useInView } from "@/hooks/use-in-view"

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
}

export default function AnimateOnScroll({ children, className = "", delay = 0, threshold }: AnimateOnScrollProps) {
  const { ref, inView } = useInView({ threshold })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
