"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { SwapLink } from "@/components/motion"
import { siteConfig } from "@/lib/config"

const nav = [
  { href: "/#approach", label: "Approach" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header-in fixed inset-x-0 top-0 z-50 border-b border-ink/8 bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="text-[1.05rem] font-medium tracking-[-0.04em] text-ink"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <SwapLink
            href={siteConfig.productUrl}
            className="ml-2 inline-flex items-center rounded-full bg-ink px-4 py-2 text-sm font-medium text-canvas"
          >
            {siteConfig.productName}
          </SwapLink>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-ink/10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      <div className={`menu-panel md:hidden ${open ? "is-open" : ""}`}>
        <div>
          <nav
            id="mobile-nav"
            className="border-t border-ink/8 bg-canvas px-4 py-4"
            aria-label="Mobile"
            inert={open ? undefined : true}
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-3 text-base text-ink hover:bg-ink/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <SwapLink
                href={siteConfig.productUrl}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-4 py-3 text-sm font-medium text-canvas"
              >
                {siteConfig.productName}
              </SwapLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
