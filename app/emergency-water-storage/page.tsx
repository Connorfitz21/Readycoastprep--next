import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrintPageButton from "../components/PrintPageButton";

export const metadata: Metadata = {
  title: "Emergency Water Storage: How Much Water to Store & How | Ready Coast Prep",
  description:
    "Calculate how much emergency water your household needs, then learn safe containers, sanitation, storage, rotation, and emergency treatment using official guidance.",
  alternates: { canonical: "https://readycoastprep.com/emergency-water-storage" },
  openGraph: {
    title: "Emergency Water Storage: How Much Water to Store & How | Ready Coast Prep",
    description:
      "A practical guide to calculating, storing, rotating, and safely using an emergency household water supply.",
    url: "https://readycoastprep.com/emergency-water-storage",
    type: "article",
    images: ["/ready-coast-prep-social.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Water Storage: How Much Water to Store & How | Ready Coast Prep",
    description:
      "Calculate and build a safe emergency water supply for your household.",
    images: ["/ready-coast-prep-social.png"],
  },
};

const supplyExamples = [
  { household: "1 person", threeDays: "3 gallons", twoWeeks: "14 gallons" },
  { household: "2 people", threeDays: "6 gallons", twoWeeks: "28 gallons" },
  { household: "4 people", threeDays: "12 gallons", twoWeeks: "56 gallons" },
  { household: "6 people", threeDays: "18 gallons", twoWeeks: "84 gallons" },
];

const sections = [
  {
    title: "Calculate your baseline",
    intro:
      "Store at least one gallon of water per person per day. Keep a three-day supply at minimum and work toward two weeks when space and budget allow.",
    items: [
      "Multiply the number of people in your household by one gallon, then multiply by the number of days you are planning for.",
      "Include additional water for pets, pregnancy, illness, medical needs, hot weather, and strenuous activity.",
      "Use the stored supply for drinking, cooking, brushing teeth, and other essential hygiene when tap water is unsafe.",
      "Build the supply gradually if the full amount is difficult to purchase or store at once.",
    ],
  },
  {
    title: "Choose safe containers",
    intro:
      "Commercially bottled water is the safest and most reliable option. For water filled at home, use food-grade containers designed for water storage.",
    items: [
      "Choose durable, unbreakable containers with tight-fitting lids.",
      "A narrow opening helps prevent hands or utensils from contaminating the water.",
      "Never use a container that previously held bleach, pesticides, fuel, or another toxic substance.",
      "Avoid glass when breakage is a concern, especially in evacuation supplies.",
    ],
  },
  {
    title: "Clean and sanitize containers",
    intro:
      "Sanitize reusable containers before filling them, even when they appear clean.",
    items: [
      "Wash the container with soap and rinse it completely with clean water.",
      "Mix one teaspoon of unscented household chlorine bleach containing 5% to 9% sodium hypochlorite with one quart of water.",
      "Pour the solution into the container, close it, and shake so the solution touches every interior surface.",
      "Wait at least 30 seconds, pour out the solution, and allow the container to air-dry before filling it with clean water.",
    ],
  },
  {
    title: "Label, store, and rotate",
    intro:
      "Good storage practices protect the water from heat, sunlight, chemicals, and accidental misuse.",
    items: [
      "Label each container as drinking water and write the fill or purchase date on it.",
      "Store water in a cool location away from direct sunlight.",
      "Keep it away from gasoline, pesticides, paint, cleaners, and other chemicals.",
      "Follow the expiration date on commercially bottled water and replace home-filled water every six months.",
      "Store water in more than one location when possible so one damaged area does not eliminate your entire supply.",
    ],
  },
  {
    title: "Use stored water without contaminating it",
    intro:
      "Clean water can become unsafe if hands, cups, or dirty tools contact the inside of the container.",
    items: [
      "Pour water from the container instead of dipping hands or cups into it.",
      "Use a clean scoop or dispensing device every time when pouring is not possible.",
      "Keep the lid closed between uses.",
      "Use bottled, boiled, or properly treated water for drinking, cooking, making ice, washing dishes, and brushing teeth during a water advisory.",
    ],
  },
  {
    title: "Make water safe during an emergency",
    intro:
      "Follow local health department instructions first. Boiling is the preferred way to kill germs when safe bottled water is unavailable.",
    items: [
      "If water is cloudy, allow it to settle and filter it through a clean cloth, paper towel, or coffee filter.",
      "Bring clear water to a rolling boil for one minute, then let it cool naturally in a clean, covered container.",
      "At elevations above 6,500 feet, the CDC recommends boiling for three minutes.",
      "When boiling is not possible, use only regular, unscented household bleach and follow current CDC or EPA concentration-specific directions.",
      "Boiling, filtering, or disinfecting cannot make water contaminated by fuel, toxic chemicals, or radioactive material safe. Use another water source.",
    ],
  },
];

const faq = [
  {
    question: "How much emergency water should I store?",
    answer:
      "Store at least one gallon per person per day for three days. A two-week supply is preferable when space and budget allow, with additional water for pets, medical needs, hot climates, pregnancy, or illness.",
  },
  {
    question: "How often should home-filled emergency water be replaced?",
    answer:
      "The CDC recommends replacing water filled into your own containers every six months. Follow the printed expiration date for commercially bottled water.",
  },
  {
    question: "Can I store water in old milk jugs or chemical containers?",
    answer:
      "Food-grade water storage containers are preferred. Never use containers that previously held toxic chemicals. Thin containers such as milk jugs are also less durable and harder to sanitize reliably.",
  },
  {
    question: "Does a portable filter make any water safe?",
    answer:
      "No. Portable filters vary and may not remove viruses, bacteria, chemicals, salts, or fuel. Follow the filter instructions and official public-health guidance for the specific emergency.",
  },
];

export default function EmergencyWaterStoragePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Emergency Water Storage Guide",
    description:
      "A practical guide to calculating, storing, rotating, and safely using an emergency household water supply.",
    mainEntityOfPage: "https://readycoastprep.com/emergency-water-storage",
    publisher: {
      "@type": "Organization",
      name: "Ready Coast Prep",
      logo: {
        "@type": "ImageObject",
        url: "https://readycoastprep.com/ready-coast-prep-icon.png",
      },
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-4" aria-label="Ready Coast Prep home">
            <Image
              src="/ready-coast-prep-icon.png"
              alt="Ready Coast Prep lighthouse logo"
              width={56}
              height={56}
              priority
              className="h-12 w-12 rounded-xl object-cover"
            />
            <div>
              <p className="text-lg font-black tracking-wide">READY COAST</p>
              <p className="text-xs font-bold tracking-[0.35em] text-amber-400">PREP</p>
            </div>
          </Link>
          <Link
            href="/guides"
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold hover:bg-slate-900"
          >
            All guides
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <p className="text-sm font-bold tracking-[0.25em] text-amber-400">HOUSEHOLD SUPPLY GUIDE</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
          Emergency water storage
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Calculate a realistic household supply, store it safely, and know what to do when your normal water source is unavailable or unsafe.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 print:hidden">
          <PrintPageButton label="Print water guide" />
          <Link href="/preparedness-plan" className="rounded-xl border border-sky-500/50 px-5 py-3 text-sm font-bold text-sky-300 hover:bg-sky-500/10">
            Add this to my plan
          </Link>
        </div>

        <div className="mt-8 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-5 text-sm leading-6 text-amber-100">
          <strong>Baseline:</strong> Store at least one gallon per person per day for three days. Build toward a two-week supply when possible.
        </div>

        <section className="mt-10 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <div className="border-b border-slate-800 p-6">
            <h2 className="text-2xl font-bold">Quick household estimates</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              These totals cover people only. Add more for pets and special household needs.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-slate-800/70 text-slate-300">
                <tr>
                  <th className="px-6 py-4 font-bold">Household</th>
                  <th className="px-6 py-4 font-bold">3-day minimum</th>
                  <th className="px-6 py-4 font-bold">2-week goal</th>
                </tr>
              </thead>
              <tbody>
                {supplyExamples.map((row) => (
                  <tr key={row.household} className="border-t border-slate-800">
                    <td className="px-6 py-4 font-semibold text-white">{row.household}</td>
                    <td className="px-6 py-4 text-slate-300">{row.threeDays}</td>
                    <td className="px-6 py-4 text-slate-300">{row.twoWeeks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <nav className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6" aria-label="Page contents">
          <h2 className="text-xl font-bold">Guide sections</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {sections.map((section, index) => (
              <a
                key={section.title}
                href={`#section-${index + 1}`}
                className="rounded-lg px-3 py-2 text-sm text-sky-300 hover:bg-slate-800 hover:text-sky-200"
              >
                {index + 1}. {section.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-10 space-y-8">
          {sections.map((section, index) => (
            <section
              id={`section-${index + 1}`}
              key={section.title}
              className="scroll-mt-24 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8"
            >
              <p className="text-xs font-bold tracking-[0.2em] text-sky-400">STEP {index + 1}</p>
              <h2 className="mt-2 text-2xl font-black sm:text-3xl">{section.title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{section.intro}</p>
              <ul className="mt-6 space-y-4">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-slate-200">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-sm font-black text-sky-300">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
          <p className="text-xs font-bold tracking-[0.2em] text-amber-400">OFFICIAL GUIDANCE</p>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">Verify treatment instructions before use</h2>
          <p className="mt-4 leading-7 text-slate-400">
            Bleach concentrations and treatment directions can vary. Use current instructions from public-health authorities and follow local advisories during an emergency.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href="https://www.cdc.gov/water-emergency/about/how-to-create-and-store-an-emergency-water-supply.html"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 p-4 font-semibold text-sky-300 hover:border-sky-500 hover:bg-slate-800"
            >
              CDC: Create and store an emergency water supply ↗
            </a>
            <a
              href="https://www.cdc.gov/water-emergency/about/index.html"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 p-4 font-semibold text-sky-300 hover:border-sky-500 hover:bg-slate-800"
            >
              CDC: Make water safe in an emergency ↗
            </a>
            <a
              href="https://www.epa.gov/ground-water-and-drinking-water/emergency-disinfection-drinking-water"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 p-4 font-semibold text-sky-300 hover:border-sky-500 hover:bg-slate-800"
            >
              EPA: Emergency disinfection of drinking water ↗
            </a>
            <a
              href="https://www.ready.gov/water"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 p-4 font-semibold text-sky-300 hover:border-sky-500 hover:bg-slate-800"
            >
              Ready.gov: Water preparedness ↗
            </a>
          </div>
        </section>

        <section className="mt-10">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400">COMMON QUESTIONS</p>
          <h2 className="mt-2 text-3xl font-black">Emergency water storage FAQ</h2>
          <div className="mt-6 space-y-4">
            {faq.map((item) => (
              <details key={item.question} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <summary className="cursor-pointer font-bold text-white">{item.question}</summary>
                <p className="mt-3 leading-7 text-slate-400">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </article>

      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-slate-400">
          <p>© 2026 Ready Coast Prep</p>
          <div className="flex gap-5">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
