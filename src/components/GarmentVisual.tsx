import type { Product } from "@/lib/products";

const toneMap: Record<Product["tone"], { from: string; to: string; mark: string }> = {
  ink: { from: "#1a242c", to: "#10171d", mark: "#f2eee4" },
  tide: { from: "#2b3d48", to: "#1c2a32", mark: "#e6ddca" },
  slate: { from: "#737d84", to: "#525d65", mark: "#f2eee4" },
  sand: { from: "#ded4c0", to: "#c7baa1", mark: "#3a3320" },
  bone: { from: "#f4f1e9", to: "#e3ddcf", mark: "#2a2118" },
};

/**
 * Stand-in garment visual: a quiet tonal panel with a single embossed keel mark.
 * Swapped for real lookbook photography once shot — the "said once" placeholder.
 */
export function GarmentVisual({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const tone = toneMap[product.tone];
  const onLight = product.tone === "sand" || product.tone === "bone";

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `linear-gradient(155deg, ${tone.from}, ${tone.to})`,
      }}
      role="img"
      aria-label={`${product.name} — ${product.category}`}
    >
      {/* The waterline: a single hairline crossing the lower third. */}
      <div
        className="absolute inset-x-0"
        style={{
          top: "66%",
          height: "1px",
          backgroundColor: onLight ? "rgba(42,33,24,0.22)" : "rgba(242,238,228,0.18)",
        }}
      />

      {/* One mark, said once — a minimal keel silhouette. */}
      <svg
        className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-[140%]"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden
      >
        <path
          d="M32 6 C 30 26, 24 42, 32 58 C 40 42, 34 26, 32 6 Z"
          stroke={tone.mark}
          strokeOpacity="0.5"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div
        className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5"
        style={{ color: onLight ? "#2a2118" : "#f2eee4" }}
      >
        <span className="text-[0.65rem] uppercase tracking-[0.22em] opacity-70">
          {product.category}
        </span>
        <span className="text-[0.65rem] uppercase tracking-[0.22em] opacity-70">
          KEEL
        </span>
      </div>
    </div>
  );
}
