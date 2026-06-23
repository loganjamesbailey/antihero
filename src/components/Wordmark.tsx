import Link from "next/link";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="KEEL — home"
      className={`inline-flex items-baseline gap-[0.05em] font-sans font-medium tracking-[0.42em] text-ink ${className}`}
    >
      KEEL
    </Link>
  );
}
