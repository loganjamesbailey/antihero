import Link from "next/link";
import { Wordmark } from "./Wordmark";

const nav = [
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Wordmark className="text-sm" />
        <nav className="flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.8rem] uppercase tracking-[0.18em] text-slate transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <span className="text-[0.8rem] uppercase tracking-[0.18em] text-ink/30">
            Bag (0)
          </span>
        </nav>
      </div>
    </header>
  );
}
