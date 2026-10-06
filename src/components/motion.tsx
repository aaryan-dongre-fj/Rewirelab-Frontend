"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Link from "next/link"

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setShown(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setShown(true)
        observer.disconnect()
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, shown }
}

export function RevealGroup({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  const { ref, shown } = useInView<HTMLDivElement>()

  return (
    <div ref={ref} className={`${shown ? "is-in" : ""} ${className}`}>
      {children}
    </div>
  )
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const { ref, shown } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal-block ${shown ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function BlurHeading({
  text,
  accent,
  as: Tag = "h2",
  className = "",
}: {
  text: string
  accent?: string
  as?: "h1" | "h2"
  className?: string
}) {
  const { ref, shown } = useInView<HTMLHeadingElement>()
  const words = [
    ...text.split(" ").filter(Boolean).map((word) => ({ word, serif: false })),
    ...(accent?.split(" ").filter(Boolean).map((word) => ({ word, serif: true })) ??
      []),
  ]

  return (
    <Tag ref={ref} className={`${className} ${shown ? "is-in" : ""}`}>
      {words.map(({ word, serif }, index) => (
        <span
          key={`${word}-${index}`}
          className={`blur-word${serif ? " font-serif italic tracking-[-0.03em]" : ""}`}
          style={{ animationDelay: `${index * 70}ms` }}
        >
          {word}
        </span>
      ))}
    </Tag>
  )
}

export function SwapLink({
  href,
  children,
  className = "",
}: {
  href: string
  children: string
  className?: string
}) {
  const inner = (
    <>
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </>
  )

  if (href.startsWith("http")) {
    return (
      <a href={href} className={`swap-btn ${className}`}>
        {inner}
      </a>
    )
  }

  return (
    <Link href={href} className={`swap-btn ${className}`}>
      {inner}
    </Link>
  )
}
