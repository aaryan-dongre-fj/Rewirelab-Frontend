import Link from "next/link"
import { Reveal } from "@/components/motion"
import { siteConfig } from "@/lib/config"

const social = [
  { href: siteConfig.social.instagram, label: "Instagram" },
  { href: siteConfig.social.linkedin, label: "LinkedIn" },
  { href: siteConfig.social.facebook, label: "Facebook" },
] as const

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/8">
      <Reveal className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-lg font-medium tracking-[-0.04em]">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Decoding human behavior, with precision. Predictive intelligence
            for an emotionally stable world.
          </p>
          <p className="mt-6 text-sm text-muted">{siteConfig.address}</p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Navigate
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#approach" className="hover:underline">
                Approach
              </Link>
            </li>
            <li>
              <a href={siteConfig.productUrl} className="hover:underline">
                {siteConfig.productName}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Legal
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            {social.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
      <p className="border-t border-ink/8 px-4 py-5 text-center text-xs text-muted sm:px-6">
        {siteConfig.copyright}
      </p>
    </footer>
  )
}
