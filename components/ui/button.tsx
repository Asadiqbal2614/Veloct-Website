import * as React from "react"
import { cn } from "@/lib/utils"

type ButtonVariant = "default" | "secondary" | "ghost" | "destructive" | "link"
type ButtonSize = "default" | "sm" | "lg" | "icon"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  default:
    "bg-gradient-to-br from-primary to-[#e06000] text-primary-foreground shadow-sm hover:brightness-110",
  secondary:
    "bg-accent-subtle border border-border text-foreground hover:bg-accent-subtle/80",
  ghost:
    "text-foreground hover:bg-accent-subtle",
  destructive:
    "bg-destructive text-white shadow-sm hover:bg-destructive/90",
  link: "text-primary underline-offset-4 hover:underline hover:brightness-125",
}

const sizeStyles: Record<ButtonSize, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3 text-sm",
  lg: "h-11 rounded-md px-8 text-base",
  icon: "h-10 w-10",
}

const commonStyles =
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-0.5 active:scale-[0.97] cursor-pointer"

export function Button({
  className,
  variant = "default",
  size = "default",
  asChild,
  ...props
}: ButtonProps) {
  if (asChild) {
    return (
      <span
        className={cn(commonStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props as React.HTMLAttributes<HTMLSpanElement>}
      />
    )
  }
  return (
    <button
      className={cn(commonStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    />
  )
}
