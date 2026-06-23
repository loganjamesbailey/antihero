export type Product = {
  slug: string;
  name: string;
  category: string;
  // One idea, said once — the single line a piece carries.
  line: string;
  price: number;
  tone: "ink" | "tide" | "slate" | "sand" | "bone";
  materials: string;
  details: string[];
};

export const products: Product[] = [
  {
    slug: "waterline-tee",
    name: "Waterline Tee",
    category: "Tops",
    line: "The line you hold, worn close.",
    price: 48,
    tone: "bone",
    materials: "Heavyweight 240gsm organic cotton, garment-dyed.",
    details: [
      "A plain tee with one quiet mark at the hem — the waterline, where seen meets unseen.",
      "Boxy through the body, slightly dropped shoulder. Made to soften, not to fade.",
    ],
  },
  {
    slug: "ballast-overshirt",
    name: "Ballast Overshirt",
    category: "Outerwear",
    line: "Weight that keeps you upright.",
    price: 168,
    tone: "tide",
    materials: "12oz Japanese cotton canvas, unlined.",
    details: [
      "A shirt with the heft of a jacket. Cut to layer, built to outlast the season it was bought in.",
      "Two chest pockets, corozo buttons, no branding on the outside. The name is stitched where only you will find it.",
    ],
  },
  {
    slug: "below-deck-crew",
    name: "Below Deck Crew",
    category: "Knitwear",
    line: "Quiet, on purpose.",
    price: 138,
    tone: "ink",
    materials: "Lambswool, mid-gauge, fully fashioned.",
    details: [
      "A crew neck with nothing to prove. One idea: warmth that holds its shape.",
      "Ribbed collar, cuffs and hem. Knit to be worn in, not shown off.",
    ],
  },
  {
    slug: "leeward-trouser",
    name: "Leeward Trouser",
    category: "Bottoms",
    line: "Pointed somewhere, steady.",
    price: 128,
    tone: "slate",
    materials: "Cotton-twill with 2% stretch, mid-rise.",
    details: [
      "A straight trouser that reads dressed without trying. Sits at the waist, falls clean to the shoe.",
      "Hidden hook closure, slant pockets, no logo. Earned, not polished.",
    ],
  },
  {
    slug: "bearing-hood",
    name: "Bearing Hood",
    category: "Knitwear",
    line: "Know which way you're headed.",
    price: 158,
    tone: "ink",
    materials: "500gsm brushed-back loopwheel cotton.",
    details: [
      "A hood with structure — the kind that stands on its own. Heavy, honest, made to keep.",
      "Tonal drawcord, kangaroo pocket, ribbed trims. Worn for yourself, not for the room.",
    ],
  },
  {
    slug: "dead-reckoning-cap",
    name: "Dead Reckoning Cap",
    category: "Accessories",
    line: "Plot the course without the map.",
    price: 42,
    tone: "sand",
    materials: "Washed cotton twill, six-panel, unstructured.",
    details: [
      "A low cap that disappears into a fit. One small embroidered keel at the back — said once.",
      "Adjustable webbing strap, metal tri-glide. Nothing shouting for attention.",
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
