"use client"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-xl flex-col items-start justify-center px-4 py-24 sm:px-6">
      <h1 className="text-4xl font-medium tracking-[-0.05em]">
        Something went wrong.
      </h1>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-medium text-canvas"
      >
        Try again
      </button>
    </div>
  )
}
