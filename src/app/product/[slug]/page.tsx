import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";
import { GarmentVisual } from "@/components/GarmentVisual";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not found — KEEL" };
  return {
    title: `${product.name} — KEEL`,
    description: product.line,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <Link
        href="/collection"
        className="text-sm uppercase tracking-[0.18em] text-slate transition-colors hover:text-ink"
      >
        &larr; Collection
      </Link>

      <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
        <GarmentVisual
          product={product}
          className="aspect-[4/5] w-full md:sticky md:top-24"
        />

        <div className="md:py-4">
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 font-display text-xl italic text-slate">
            {product.line}
          </p>

          <p className="mt-8 text-2xl text-ink">${product.price}</p>

          <button
            type="button"
            className="mt-8 w-full border border-ink bg-ink py-4 text-sm uppercase tracking-[0.22em] text-bone transition-colors hover:bg-transparent hover:text-ink sm:w-auto sm:px-16"
          >
            Add to bag
          </button>

          <div className="mt-12 space-y-5 border-t border-ink/10 pt-8 text-base leading-relaxed text-slate">
            {product.details.map((d, i) => (
              <p key={i}>{d}</p>
            ))}
          </div>

          <div className="mt-8 border-t border-ink/10 pt-8">
            <p className="eyebrow">Materials</p>
            <p className="mt-3 text-base text-slate">{product.materials}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
