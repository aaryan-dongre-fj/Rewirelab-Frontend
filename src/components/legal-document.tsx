import { BlurHeading, Reveal } from "@/components/motion"
import type { LegalDocument } from "@/lib/legal"

function RichText({ text }: { text: string }) {
  const parts = text.split(
    /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
  )

  return parts.map((part, index) =>
    part.includes("@") ? (
      <a key={index} href={`mailto:${part}`}>
        {part}
      </a>
    ) : (
      part
    ),
  )
}

export function LegalDocumentView({ document }: { document: LegalDocument }) {
  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <p className="text-sm text-muted">Last updated {document.updated}</p>
      </Reveal>
      <BlurHeading
        as="h1"
        text={document.title}
        className="mt-4 text-[clamp(2.5rem,6vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.06em]"
      />
      <Reveal delay={80} className="legal mt-10">
        {document.blocks.map((block, index) => {
          if (block.kind === "h2") {
            return <h2 key={index}>{block.text}</h2>
          }
          if (block.kind === "h3") {
            return <h3 key={index}>{block.text}</h3>
          }
          if (block.kind === "ul") {
            return (
              <ul key={index}>
                {block.items.map((item) => (
                  <li key={item}>
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            )
          }
          return (
            <p key={index}>
              <RichText text={block.text} />
            </p>
          )
        })}
      </Reveal>
    </article>
  )
}
