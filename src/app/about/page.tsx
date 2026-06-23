import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — KEEL",
  description:
    "A keel is the part of a boat you never see — the spine below the waterline.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <p className="eyebrow">The story</p>
      <h1 className="mt-6 font-display text-4xl leading-tight text-ink md:text-5xl">
        Below the waterline.
      </h1>

      <div className="mt-12 space-y-7 text-lg leading-relaxed text-slate">
        <p>
          A keel is the part of a boat you never see — the spine that runs below
          the waterline. It does one quiet job:{" "}
          <span className="text-ink">keep the whole thing upright and pointed where it&rsquo;s going.</span>{" "}
          Without it, you drift. Or you go over.
        </p>
        <p>
          We took the name because that&rsquo;s the whole idea. Clothes for the
          person who already knows which way they&rsquo;re headed, and
          doesn&rsquo;t need a crowd to confirm it. Worn for yourself, not for
          the room.
        </p>
        <p>
          The designs are quiet on purpose. No loud logos, nothing shouting for
          attention. Most pieces carry one idea, said once — nothing busy,
          nothing trying too hard. A piece should mean something to the person
          wearing it before it means anything to anyone looking. Earned, not
          polished. Worn in, not shown off.
        </p>
        <p className="font-display text-2xl italic leading-snug text-ink">
          That&rsquo;s the line we hold. Steady, and pointed somewhere — same as
          the name.
        </p>
      </div>
    </article>
  );
}
