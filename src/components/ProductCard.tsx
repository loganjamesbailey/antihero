import Link from "next/link";
import type { Product } from "@/lib/products";
import { GarmentVisual } from "./GarmentVisual";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <GarmentVisual
        product={product}
        className="aspect-[3/4] w-full transition-[transform,filter] duration-500 ease-out group-hover:brightness-[1.04]"
      />
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-lg leading-snug text-ink">
          {product.name}
        </h3>
        <span className="shrink-0 text-sm text-slate">${product.price}</span>
      </div>
      <p className="mt-1 text-sm italic text-slate">{product.line}</p>
    </Link>
  );
}
