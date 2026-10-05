import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-xl flex-col items-start justify-center px-4 py-24 sm:px-6">
      <p className="text-sm text-muted">404</p>
      <h1 className="mt-3 text-4xl font-medium tracking-[-0.05em]">
        This page is not on the map.
      </h1>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-medium text-canvas"
      >
        Back home
      </Link>
    </div>
  )
}
