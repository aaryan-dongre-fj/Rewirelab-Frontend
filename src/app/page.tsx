import type { Metadata } from "next";
import {
  BlurHeading,
  Reveal,
  RevealGroup,
  SwapLink,
} from "@/components/motion";
import { approach, siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

const showStudio = false

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 sm:py-8">
      <section className="rounded-[28px] px-6 py-14 sm:px-12 sm:py-20">
        <BlurHeading
          as="h1"
          text="Decoding human behavior,"
          accent="with precision."
          className="mt-6 max-w-3xl text-[clamp(2.6rem,6.2vw,4.75rem)] font-medium leading-[1.02] tracking-[-0.06em]"
        />
        <Reveal delay={80} className="mt-6 max-w-xl">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            {siteConfig.name} builds {siteConfig.productName}™. We work with
            people and organizations who want more than awareness: a precise
            read of why patterns repeat, and what it actually takes to change
            them.
          </p>
        </Reveal>
        <Reveal delay={140} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <SwapLink
            href={siteConfig.productUrl}
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-canvas"
          >
            {`Visit ${siteConfig.productName}`}
          </SwapLink>
          <SwapLink
            href="#approach"
            className="inline-flex items-center justify-center rounded-full border border-ink/15 px-5 py-3 text-sm font-medium hover:bg-ink/5"
          >
            Our approach
          </SwapLink>
        </Reveal>
      </section>

      <section id="approach" className="scroll-mt-24">
        <div className="rounded-[28px] bg-paper px-6 py-12 sm:px-12 sm:py-14">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              How we work
            </p>
          </Reveal>
          <BlurHeading
            text="From a pattern"
            accent="to a direction."
            className="mt-3 max-w-2xl text-3xl font-medium tracking-[-0.045em] sm:text-4xl"
          />
          <RevealGroup className="mt-10 grid gap-4 md:grid-cols-3">
            {approach.map((item, index) => (
              <article
                key={item.title}
                className="card-rise rounded-[22px] bg-canvas p-6"
                style={{ ["--i" as string]: index }}
              >
                <p className="text-sm text-muted">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-medium tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </RevealGroup>
        </div>
      </section>

      {showStudio ? (
        <section className="rounded-[28px] bg-ink px-6 py-12 text-canvas sm:px-12 sm:py-14">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-canvas/60">
              The studio
            </p>
          </Reveal>
          <BlurHeading
            text="Science, modeling,"
            accent="and a human finish."
            className="mt-3 max-w-2xl text-3xl font-medium tracking-[-0.045em] text-canvas sm:text-4xl"
          />
          <Reveal delay={80} className="mt-5 max-w-2xl">
            <p className="text-base leading-relaxed text-canvas/75 sm:text-lg">
              We build behavioral intelligence for people and organizations.
              Mapping is the start. The work is showing why a cycle repeats,
              then giving people a path that holds.
            </p>
          </Reveal>
        </section>
      ) : null}
    </div>
  );
}
