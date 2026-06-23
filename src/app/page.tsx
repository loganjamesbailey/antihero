import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* Hero — the wordmark sitting on its waterline. */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">
          <p className="eyebrow">Below the waterline</p>

          <h1 className="mt-8 max-w-3xl font-display text-4xl font-normal leading-[1.08] tracking-tight text-ink md:text-6xl">
            Steady, and pointed
            <span className="italic"> somewhere.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-slate md:text-lg">
            A keel is the part of a boat you never see — the spine below the
            waterline that keeps the whole thing upright and headed where it&rsquo;s
            going. We made clothes for the same idea.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/collection"
              className="group inline-flex items-center gap-3 border-b border-ink pb-1 text-sm uppercase tracking-[0.18em] text-ink"
            >
              See the collection
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
            <Link
              href="/about"
              className="text-sm uppercase tracking-[0.18em] text-slate transition-colors hover:text-ink"
            >
              The story
            </Link>
          </div>
        </div>

        {/* The waterline rule. */}
        <div className="mx-auto max-w-6xl px-6">
          <div className="hairline" />
        </div>
      </section>

      {/* Manifesto */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[0.4fr_1fr] md:gap-16">
          <p className="eyebrow pt-2">The line we hold</p>
          <div className="max-w-2xl space-y-6 font-display text-2xl font-normal leading-[1.5] text-ink md:text-[1.75rem]">
            <p>
              Clothes for the person who already knows which way they&rsquo;re
              headed, and doesn&rsquo;t need a crowd to confirm it.
            </p>
            <p className="text-slate">
              The designs are quiet on purpose. No loud logos, nothing shouting
              for attention. Most pieces carry one idea, said once.
            </p>
            <p className="text-slate">
              A piece should mean something to the person wearing it before it
              means anything to anyone looking. Earned, not polished. Worn in,
              not shown off.
            </p>
          </div>
        </div>
      </section>

      {/* Featured pieces */}
      <section className="border-t border-ink/10 bg-bone/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl text-ink md:text-3xl">
              First pieces
            </h2>
            <Link
              href="/collection"
              className="text-sm uppercase tracking-[0.18em] text-slate transition-colors hover:text-ink"
            >
              View all
            </Link>
          </div>

          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing band */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
        <p className="eyebrow">Same as the name</p>
        <p className="mx-auto mt-6 max-w-2xl font-display text-3xl leading-snug text-ink md:text-4xl">
          Worn for yourself,
          <span className="italic"> not for the room.</span>
        </p>
      </section>
    </>
  );
}
