import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-bone">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-sans text-sm font-medium tracking-[0.42em]">KEEL</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone/55">
              Steady, and pointed somewhere — same as the name. Worn for
              yourself, not for the room.
            </p>
          </div>

          <div>
            <p className="eyebrow text-bone/40">Shop</p>
            <ul className="mt-5 space-y-3 text-sm text-bone/70">
              <li>
                <Link href="/collection" className="hover:text-bone">
                  The Collection
                </Link>
              </li>
              <li>
                <Link href="/product/ballast-overshirt" className="hover:text-bone">
                  Ballast Overshirt
                </Link>
              </li>
              <li>
                <Link href="/product/below-deck-crew" className="hover:text-bone">
                  Below Deck Crew
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-bone/40">House</p>
            <ul className="mt-5 space-y-3 text-sm text-bone/70">
              <li>
                <Link href="/about" className="hover:text-bone">
                  The Story
                </Link>
              </li>
              <li>
                <span className="text-bone/40">Stockists</span>
              </li>
              <li>
                <span className="text-bone/40">Contact</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-bone/10 pt-8 text-xs text-bone/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} KEEL. Below the waterline.</p>
          <p className="tracking-[0.18em] uppercase">One idea, said once.</p>
        </div>
      </div>
    </footer>
  );
}
