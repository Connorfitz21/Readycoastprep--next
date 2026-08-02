import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FoodCalculator from "./FoodCalculator";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Emergency Food Supply Guide and Calculator | Ready Coast Prep",
  description:
    "Build a realistic emergency food supply with a household calculator, 3-day, 7-day, and 14-day planning levels, no-cook options, budget guidance, rotation, and disaster food-safety rules.",
  alternates: { canonical: "/emergency-food-supply-guide" },
  openGraph: {
    title: "Emergency Food Supply Guide and Calculator | Ready Coast Prep",
    description:
      "Plan food your household will actually eat during outages, evacuations, and coastal storms.",
    url: "/emergency-food-supply-guide",
    type: "article",
    images: ["/ready-coast-prep-social.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Food Supply Guide | Ready Coast Prep",
    description: "A practical emergency food plan for ordinary households.",
    images: ["/ready-coast-prep-social.png"],
  },
};

const printableChecklist = [
  "Count every household member and choose a realistic planning period",
  "Include ready-to-eat food that requires no electricity, refrigeration, or safe cooking water",
  "Add familiar meals instead of buying unfamiliar emergency food in bulk",
  "Check package serving sizes and total meal-equivalents",
  "Pack a manual can opener, utensils, paper goods, trash bags, and hand-cleaning supplies",
  "Account for allergies, diabetes, low-sodium needs, infant feeding, and other dietary requirements",
  "Store pet food, treats, bowls, and any feeding instructions separately",
  "Keep appliance thermometers in the refrigerator and freezer",
  "Store food above likely floodwater and away from heat, moisture, and pests",
  "Date the supply, rotate it into normal meals, and replace what is used",
  "Keep a separate evacuation food bin that is light enough to carry",
  "Pair the food plan with stored water and an outage-safe cooking plan",
];

const planningLevels = [
  {
    title: "3 days: immediate disruption",
    text: "Cover the federal preparedness baseline with food that can be eaten cold and carried if you must leave. Prioritize familiar, ready-to-eat items and household-specific needs.",
    examples: ["Canned proteins and beans", "Nut or seed butter", "Shelf-stable milk", "Crackers, tortillas, or cereal", "Fruit cups and dried fruit", "Ready-to-feed infant formula when applicable"],
  },
  {
    title: "7 days: realistic outage buffer",
    text: "Add variety, simple meals, and enough shelf-stable food to avoid relying on damaged stores, long lines, or unsafe refrigerated food during a prolonged outage.",
    examples: ["Pouches or cans that form complete meals", "Instant grains requiring little water", "Shelf-stable soups and stews", "Electrolyte drink mix", "Comfort foods and caffeine", "Extra pet food"],
  },
  {
    title: "14 days: coastal resilience target",
    text: "When space and budget allow, build toward two weeks by rotating normal pantry foods. This is especially useful where bridges, ferries, flooding, or utility restoration can delay resupply.",
    examples: ["Duplicate the foods your household finishes", "Separate no-cook and cook-required bins", "Spread purchases across normal grocery trips", "Track dates and package condition", "Store backup seasonings and condiments", "Keep a menu so ingredients form actual meals"],
  },
];

const practicalLessons = [
  {
    title: "A pantry full of ingredients is not the same as a meal plan",
    experience: "During outages, households discover that many stored foods require electricity, clean water, refrigeration, or several ingredients that were not stored together.",
    action: "Write a simple menu and test each meal under the conditions you expect. Keep at least the first three days fully no-cook.",
  },
  {
    title: "People stop eating food they dislike",
    experience: "Large quantities of unfamiliar bars, canned meals, or specialty survival food create waste and appetite fatigue, especially for children and older adults.",
    action: "Store foods already used at home. Buy a small amount, test it, and rotate successful items through normal meals before increasing the quantity.",
  },
  {
    title: "The missing tool can make the food unusable",
    experience: "Manual can openers, utensils, fuel, clean water, and a safe cooking location are frequently overlooked even when food quantities look adequate.",
    action: "Store the tool with the food. Treat each planned meal as a complete system: food, water, opening, preparation, eating, cleanup, and waste disposal.",
  },
  {
    title: "The refrigerator becomes a distraction after an outage",
    experience: "People repeatedly open doors, guess from smell, or spend scarce fuel trying to save low-value food while temperatures rise.",
    action: "Keep appliance thermometers installed, know the official time limits, and move only priority food to a cooler when it can be held at 40°F or below.",
  },
  {
    title: "Floodwater changes the decision completely",
    experience: "Packages that look sealed may not be waterproof, and contaminated food can remain unsafe even when the contents appear normal.",
    action: "Store food high. After flooding, follow official discard and sanitizing guidance rather than relying on appearance, smell, or taste.",
  },
];

const noCookGroups = [
  { title: "Protein", items: "Tuna or chicken pouches, canned beans, nut or seed butter, shelf-stable protein drinks" },
  { title: "Energy and grains", items: "Crackers, tortillas, dry cereal, granola, oats that can be soaked safely, snack bars" },
  { title: "Fruit and vegetables", items: "Fruit cups, canned fruit, dried fruit, canned vegetables, shelf-stable vegetable pouches" },
  { title: "Fluids and comfort", items: "Stored water, shelf-stable milk, electrolyte mix, coffee or tea options, familiar snacks" },
];

const budgetPlan = [
  "Start with one extra shelf-stable meal per person during each normal grocery trip.",
  "Prioritize calories and complete meals before convenience accessories or specialty products.",
  "Use store brands and foods already in your normal rotation.",
  "Do not count food that requires equipment or water you have not planned to provide.",
  "Label a dedicated bin, but rotate older food into weekly meals before it expires.",
  "Track cost per meal-equivalent instead of cost per package.",
];

const faq = [
  {
    question: "How much emergency food should I store?",
    answer: "Begin with at least several days of nonperishable food for every household member, then build toward a longer buffer when space, budget, local hazards, and household needs justify it. Count actual meal-equivalents and package servings rather than cans alone.",
  },
  {
    question: "Does all emergency food need to be no-cook?",
    answer: "The first portion should be usable without electricity, refrigeration, or cooking. Additional food may use a safe outdoor cooking method, but never use grills, camp stoves, or fuel-burning equipment indoors or in enclosed spaces.",
  },
  {
    question: "Can I keep refrigerated food after four hours without power?",
    answer: "Official guidance says an unopened refrigerator generally keeps food safe for up to four hours. Perishable food should be discarded after that unless it has been maintained at 40°F or below with a cold source.",
  },
  {
    question: "Can flood-exposed cans be saved?",
    answer: "Some undamaged commercially prepared cans and retort pouches may be cleaned and sanitized using official procedures. Food in non-waterproof packages, damaged containers, or containers with certain lids and closures should be discarded.",
  },
];

export default function EmergencyFoodSupplyGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Emergency Food Supply Guide and Calculator",
    description: "A practical household emergency food plan for outages, evacuations, floods, and coastal storms.",
    mainEntityOfPage: "https://readycoastprep.com/emergency-food-supply-guide",
    dateModified: "2026-08-01",
    publisher: {
      "@type": "Organization",
      name: "Ready Coast Prep",
      logo: { "@type": "ImageObject", url: "https://readycoastprep.com/ready-coast-prep-icon.png" },
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
    <main className="min-h-screen bg-slate-950 text-white print:bg-white print:text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <header className="border-b border-slate-800 print:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-4" aria-label="Ready Coast Prep home">
            <Image src="/ready-coast-prep-icon.png" alt="Ready Coast Prep lighthouse logo" width={56} height={56} priority className="h-12 w-12 rounded-xl object-cover" />
            <div>
              <p className="text-lg font-black tracking-wide">READY COAST</p>
              <p className="text-xs font-bold tracking-[0.35em] text-amber-400">PREP</p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <PrintButton />
            <Link href="/" className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold hover:bg-slate-900">Back to dashboard</Link>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 py-12 sm:py-16 print:max-w-none print:px-0 print:py-0">
        <p className="text-sm font-bold tracking-[0.25em] text-amber-400 print:text-black">HOUSEHOLD FOOD RESILIENCE</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl print:text-4xl">Emergency food supply guide</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 print:text-black">
          Build a food supply around meals your household will actually eat, the utilities you may lose, the water you can spare, and the possibility that flooding or evacuation makes part of the pantry unusable.
        </p>

        <div className="mt-8 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-5 text-sm leading-6 text-amber-100 print:border-black print:bg-white print:text-black">
          <strong>Separate planning from food safety:</strong> A stocked pantry prepares you for disruption. After an outage or flood, official temperature and contamination rules determine what is still safe. Never taste questionable food to test it.
        </div>

        <section className="mt-10">
          <FoodCalculator />
        </section>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-black print:bg-white">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">PRINTABLE SUPPLY CHECK</p>
          <h2 className="mt-2 text-3xl font-black">Build a complete food system</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {printableChecklist.map((item) => (
              <label key={item} className="flex gap-3 rounded-xl border border-slate-700 p-4 text-sm leading-6 print:border-black">
                <input type="checkbox" className="mt-1 h-4 w-4 shrink-0" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">PLANNING LEVELS</p>
          <h2 className="mt-2 text-3xl font-black">Build in layers instead of buying everything at once</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {planningLevels.map((level) => (
              <div key={level.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 print:border-black print:bg-white">
                <h3 className="text-xl font-bold">{level.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300 print:text-black">{level.text}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300 print:text-black">
                  {level.examples.map((item) => <li key={item} className="flex gap-2"><span className="text-amber-400 print:text-black">•</span><span>{item}</span></li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">NO-COOK FOUNDATION</p>
          <h2 className="mt-2 text-3xl font-black">Make the first three days independent of utilities</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 print:text-black">
            The best opening layer works when the power is out, the stove is unavailable, tap water is restricted, and cleanup must be minimal.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {noCookGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 print:border-black print:bg-white">
                <h3 className="text-lg font-bold">{group.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300 print:text-black">{group.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-black print:bg-white">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">BUDGET METHOD</p>
          <h2 className="mt-2 text-3xl font-black">Grow the pantry without a specialty-food shopping spree</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {budgetPlan.map((item, index) => (
              <li key={item} className="flex gap-3 rounded-xl border border-slate-700 p-4 text-sm leading-6 print:border-black">
                <span className="font-black text-amber-400 print:text-black">{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <p className="text-xs font-bold tracking-[0.2em] text-amber-400 print:text-black">RECURRING REAL-WORLD LESSONS</p>
          <h2 className="mt-2 text-3xl font-black">What breaks in otherwise reasonable plans</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 print:text-black">
            These patterns are included because they repeatedly appear in outage and evacuation experiences and support official preparedness and food-safety guidance.
          </p>
          <div className="mt-6 space-y-4">
            {practicalLessons.map((lesson) => (
              <div key={lesson.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 print:border-black print:bg-white">
                <h3 className="text-xl font-bold">{lesson.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300 print:text-black"><strong>Observed problem:</strong> {lesson.experience}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300 print:text-black"><strong>Practical action:</strong> {lesson.action}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-red-500/40 bg-red-500/10 p-6 sm:p-8 print:border-black print:bg-white">
          <p className="text-xs font-bold tracking-[0.2em] text-red-300 print:text-black">OUTAGE AND FLOOD SAFETY</p>
          <h2 className="mt-2 text-3xl font-black">Use time, temperature, and contamination rules</h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-red-50 print:text-black">
            <li><strong>Refrigerator:</strong> Food generally remains safe for up to 4 hours when the door stays closed.</li>
            <li><strong>Freezer:</strong> A full freezer generally holds temperature for about 48 hours; a half-full freezer for about 24 hours when unopened.</li>
            <li><strong>Cooler transfer:</strong> Use ice or frozen gel packs and keep perishable food at 40°F or below.</li>
            <li><strong>Floodwater:</strong> Discard food in non-waterproof packaging and any food that may have contacted flood or storm water unless official guidance specifically explains how an undamaged container can be sanitized.</li>
            <li><strong>Judgment:</strong> Never taste food to determine safety. When in doubt, throw it out.</li>
          </ul>
        </section>

        <section className="mt-12">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">RELATED READY COAST PREP GUIDES</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3 print:hidden">
            <Link href="/emergency-water-storage" className="rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:border-sky-500"><h3 className="font-bold">Emergency water storage</h3><p className="mt-2 text-sm text-slate-400">Calculate, store, sanitize, and rotate the water this food plan depends on.</p></Link>
            <Link href="/power-outage-checklist" className="rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:border-sky-500"><h3 className="font-bold">Power outage checklist</h3><p className="mt-2 text-sm text-slate-400">Protect refrigeration, cooking, lighting, communication, and medical needs.</p></Link>
            <Link href="/coastal-evacuation-guide" className="rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:border-sky-500"><h3 className="font-bold">Coastal evacuation guide</h3><p className="mt-2 text-sm text-slate-400">Build a carryable departure food plan around routes, destinations, and delays.</p></Link>
          </div>
        </section>

        <section className="mt-12">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">OFFICIAL SOURCES</p>
          <h2 className="mt-2 text-3xl font-black">Verify safety decisions at the source</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 print:hidden">
            <ExternalLink href="https://www.ready.gov/food">Ready.gov emergency food guidance</ExternalLink>
            <ExternalLink href="https://www.cdc.gov/food-safety/foods/keep-food-safe-after-emergency.html">CDC food safety after an emergency</ExternalLink>
            <ExternalLink href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/emergencies/keep-your-food-safe-during-emergencies">USDA food safety during outages, floods, and fires</ExternalLink>
            <ExternalLink href="https://www.foodsafety.gov/food-safety-charts/food-safety-during-power-outage">FoodSafety.gov power-outage chart</ExternalLink>
          </div>
        </section>

        <section className="mt-12">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">FREQUENTLY ASKED QUESTIONS</p>
          <div className="mt-6 space-y-4">
            {faq.map((item) => (
              <details key={item.question} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 print:border-black print:bg-white" open>
                <summary className="cursor-pointer font-bold">{item.question}</summary>
                <p className="mt-3 text-sm leading-6 text-slate-300 print:text-black">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <p className="mt-12 border-t border-slate-800 pt-6 text-xs leading-5 text-slate-500 print:border-black print:text-black">
          Last reviewed August 1, 2026. Ready Coast Prep consolidates official guidance into household planning tools. It does not replace active instructions from public-health, emergency-management, or utility authorities.
        </p>
      </article>
    </main>
  );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-sm font-semibold hover:border-sky-500 hover:text-sky-300">{children} <span aria-hidden="true">↗</span></a>;
}
