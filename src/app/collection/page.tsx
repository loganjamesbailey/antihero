import type { Metadata } from "next";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Collection — KEEL",
  description: "Quiet pieces, each carrying one idea, said once.",
};

export default function CollectionPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <p className="eyebrow">The collection</p>
      <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
        Nothing busy. Nothing trying too hard.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-slate">
        Each piece carries one idea, said once. Built to be worn in, not shown
        off.
      </p>

      <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
