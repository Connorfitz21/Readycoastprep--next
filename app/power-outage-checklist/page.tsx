import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Power Outage Checklist | Ready Coast Prep",
  description:
    "A practical power outage checklist for food, lighting, phones, medical needs, heat, cooling, generators, carbon monoxide safety, and extended outages.",
  alternates: { canonical: "/power-outage-checklist" },
  openGraph: {
    title: "Power Outage Checklist | Ready Coast Prep",
    description:
      "Prepare for short and extended outages with a realistic household checklist, safety guidance, and common lessons from past outages.",
    url: "/power-outage-checklist",
    type: "article",
    images: ["/ready-coast-prep-social.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Power Outage Checklist | Ready Coast Prep",
    description:
      "A realistic household checklist for short and extended power outages.",
    images: ["/ready-coast-prep-social.png"],
  },
};

const planningLevels = [
  {
    duration: "0–4 hours",
    focus: "Protect food and preserve battery power",
    actions: [
      "Confirm the outage and report it to your utility.",
      "Keep refrigerator and freezer doors closed.",
      "Use flashlights or battery lanterns instead of candles.",
      "Switch phones to low-power mode and limit unnecessary use.",
    ],
  },
  {
    duration: "4–24 hours",
    focus: "Move from waiting to active conservation",
    actions: [
      "Move refrigerated perishables to a cooler with ice if they can be held at 40°F or below.",
      "Prioritize backup power for medical equipment, refrigeration, communications, and temperature control.",
      "Check on neighbors who may need assistance.",
      "Decide early whether extreme heat, cold, or medical needs require relocation.",
    ],
  },
  {
    duration: "1–3 days",
    focus: "Operate as an extended outage",
    actions: [
      "Use a written power budget instead of connecting devices at random.",
      "Monitor fuel, battery capacity, food temperatures, water service, and local advisories.",
      "Use shelf-stable meals before relying on refrigerated food of uncertain temperature.",
      "Plan charging, cooling, or warming periods rather than attempting normal household use.",
    ],
  },
  {
    duration: "3+ days",
    focus: "Reassess whether staying home remains safe",
    actions: [
      "Do not treat an uncertain restoration estimate as a guarantee.",
      "Account for fuel availability, blocked roads, reduced cell service, and closed businesses.",
      "Relocate before health, medication, sanitation, or indoor temperature becomes dangerous.",
      "Keep family or an out-of-area contact updated on your status and location.",
    ],
  },
];

const preparationChecklist = [
  "Battery lanterns or flashlights for each occupied area",
  "Spare batteries in the correct sizes",
  "Charged power banks and charging cables",
  "Battery-powered or hand-crank weather radio",
  "Appliance thermometers for refrigerator and freezer",
  "Cooler and frozen gel packs or a plan to obtain ice",
  "Shelf-stable meals that require little or no cooking",
  "Manual can opener",
  "Battery-backup carbon monoxide alarms",
  "Printed utility, medical, insurance, and family contact numbers",
  "Backup plan for refrigerated medications and powered medical devices",
  "Safe backup-power plan tested before an emergency",
];

const practicalLessons = [
  {
    title: "The first failure is often the plan, not the equipment",
    lesson:
      "People commonly own a generator, power station, or lantern but have not tested it under realistic loads. Extension cords are missing, batteries are discharged, fuel is stale, or the refrigerator startup demand exceeds the assumed load.",
    action:
      "Run a full practice test before storm season. Connect only the equipment you expect to use, record the actual load, and confirm how long your fuel or stored energy lasts.",
  },
  {
    title: "Backup power disappears quickly when used like grid power",
    lesson:
      "Real outage accounts repeatedly show that heating appliances, space heaters, large air conditioners, and cooking devices consume stored battery capacity far faster than lights, phones, routers, or refrigerators.",
    action:
      "Rank loads as life safety, food preservation, communications, comfort, and optional. Power the highest priority loads first and rotate them when practical.",
  },
  {
    title: "Fuel and access can become the limiting factors",
    lesson:
      "Long outages may also close gas stations, disable card readers, block roads, and create long lines. A generator that works perfectly is not a complete plan without safe fuel storage and resupply assumptions.",
    action:
      "Calculate expected hourly fuel use, store fuel legally and safely, rotate it according to manufacturer guidance, and establish a no-resupply operating plan.",
  },
  {
    title: "The refrigerator door becomes a household discipline problem",
    lesson:
      "Repeatedly checking food allows cold air to escape. People also wait too long to organize coolers, ice, and thermometers because every restoration estimate feels temporary.",
    action:
      "Post a note on the doors, designate one person to manage food, and decide in advance what moves to a cooler after four hours.",
  },
  {
    title: "Internet and cell service may degrade even when devices are charged",
    lesson:
      "Outages can affect routers, neighborhood equipment, cell sites, and overloaded networks. A charged phone does not guarantee data service.",
    action:
      "Keep a radio, printed contacts, offline maps, and an out-of-area check-in plan. Use text messages when voice or data service is unreliable.",
  },
];

const safetyRules = [
  {
    title: "Generator placement",
    text: "Operate portable generators outdoors at least 20 feet from doors, windows, and vents. Never use one in a home, basement, garage, carport, or other enclosed or partly enclosed space.",
  },
  {
    title: "Carbon monoxide detection",
    text: "Use battery-operated or battery-backup carbon monoxide alarms. Headache, dizziness, weakness, nausea, chest pain, and confusion can indicate exposure. Move to fresh air and call 911 when poisoning is suspected.",
  },
  {
    title: "Electrical connection",
    text: "Never connect a portable generator directly to household wiring through a wall outlet. Use properly rated cords or a professionally installed transfer equipment or interlock system that complies with local requirements.",
  },
  {
    title: "Fuel and refueling",
    text: "Allow equipment to cool before refueling. Store fuel only in approved containers and away from living areas, ignition sources, and flood exposure.",
  },
  {
    title: "Downed lines and standing water",
    text: "Treat every downed line as energized. Stay away from it and anything it touches. Do not operate electrical equipment while standing in water.",
  },
  {
    title: "Candles and open flame",
    text: "Use battery lighting whenever possible. Candles add fire risk when households are distracted, tired, or moving through dark rooms.",
  },
];

const faq = [
  {
    question: "How long will food stay safe when the power is out?",
    answer:
      "An unopened refrigerator keeps food safe for about four hours. A full freezer can hold a safe temperature for about 48 hours, or 24 hours when half full. Use appliance thermometers and discard unsafe perishables rather than tasting them.",
  },
  {
    question: "What should I power first during an outage?",
    answer:
      "Prioritize life-sustaining medical equipment, safe indoor temperature, refrigeration for medications or essential food, communications, lighting, and then lower-priority comfort loads.",
  },
  {
    question: "Can I run a generator in an open garage?",
    answer:
      "No. Opening a garage door does not make generator use safe. Portable generators belong outdoors at least 20 feet from doors, windows, and vents.",
  },
  {
    question: "Should I leave home during a long outage?",
    answer:
      "Leave before conditions become dangerous when the household cannot maintain safe temperatures, medical equipment, refrigerated medicine, sanitation, water, or reliable access to help. Follow local emergency instructions.",
  },
];

export default function PowerOutageChecklistPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Power Outage Checklist",
    description:
      "A practical household checklist for short and extended power outages.",
    mainEntityOfPage: "https://readycoastprep.com/power-outage-checklist",
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
    <main className="min-h-screen bg-slate-950 text-white print:bg-white print:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <header className="border-b border-slate-800 print:hidden">
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
          <div className="flex items-center gap-3">
            <PrintButton />
            <Link
              href="/"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold hover:bg-slate-900"
            >
              Back to dashboard
            </Link>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 py-12 sm:py-16 print:max-w-none print:px-0 print:py-0">
        <p className="text-sm font-bold tracking-[0.25em] text-amber-400 print:text-black">
          HOUSEHOLD OUTAGE GUIDE
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl print:text-4xl">
          Power outage checklist
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 print:text-black">
          Prepare for the first dark hour and the third day. This guide separates immediate safety, food protection, medical needs, backup power, and the point when staying home is no longer the safest option.
        </p>

        <div className="mt-8 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-5 text-sm leading-6 text-amber-100 print:border-black print:bg-white print:text-black">
          <strong>Most important rule:</strong> Never create a second emergency while solving the outage. Carbon monoxide, fire, unsafe food, heat, cold, and improvised electrical connections can become more dangerous than the loss of power itself.
        </div>

        <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-black print:bg-white">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">PRINTABLE BASELINE</p>
              <h2 className="mt-2 text-3xl font-black">Before the outage</h2>
            </div>
            <PrintButton />
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {preparationChecklist.map((item) => (
              <div key={item} className="flex gap-3 rounded-xl border border-slate-700 bg-slate-950/50 p-4 print:border-black print:bg-white">
                <span className="mt-0.5 h-5 w-5 shrink-0 rounded border-2 border-slate-500" aria-hidden="true" />
                <span className="text-sm leading-6 text-slate-300 print:text-black">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">OUTAGE DURATION PLAN</p>
          <h2 className="mt-2 text-3xl font-black">What changes as the outage continues</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-400 print:text-black">
            Do not prepare for every outage as if it will end in one hour. Use these thresholds to make decisions before food, batteries, indoor temperature, or medical needs become urgent.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {planningLevels.map((level) => (
              <div key={level.duration} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 print:border-black print:bg-white">
                <p className="text-sm font-black text-amber-400 print:text-black">{level.duration}</p>
                <h3 className="mt-2 text-xl font-bold">{level.focus}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300 print:text-black">
                  {level.actions.map((action) => (
                    <li key={action} className="flex gap-3">
                      <span className="text-sky-400 print:text-black">•</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-black print:bg-white">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">FOOD DECISIONS</p>
          <h2 className="mt-2 text-3xl font-black">Protect the cold, then use temperature instead of guesswork</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-950 p-5 print:border print:border-black print:bg-white">
              <p className="text-4xl font-black text-amber-400 print:text-black">4 hr</p>
              <p className="mt-2 text-sm leading-6 text-slate-300 print:text-black">Approximate safe time for an unopened refrigerator.</p>
            </div>
            <div className="rounded-2xl bg-slate-950 p-5 print:border print:border-black print:bg-white">
              <p className="text-4xl font-black text-amber-400 print:text-black">48 hr</p>
              <p className="mt-2 text-sm leading-6 text-slate-300 print:text-black">Approximate safe time for a full, unopened freezer.</p>
            </div>
            <div className="rounded-2xl bg-slate-950 p-5 print:border print:border-black print:bg-white">
              <p className="text-4xl font-black text-amber-400 print:text-black">24 hr</p>
              <p className="mt-2 text-sm leading-6 text-slate-300 print:text-black">Approximate safe time for a half-full, unopened freezer.</p>
            </div>
          </div>
          <ul className="mt-6 space-y-4 leading-7 text-slate-300 print:text-black">
            <li><strong className="text-white print:text-black">Keep doors closed.</strong> Decide what you need before opening either appliance.</li>
            <li><strong className="text-white print:text-black">Use thermometers.</strong> Refrigerators should remain at 40°F or below and freezers at 0°F or below before the outage.</li>
            <li><strong className="text-white print:text-black">Use a cooler correctly.</strong> Ice or frozen packs must keep perishable food at 40°F or below.</li>
            <li><strong className="text-white print:text-black">Never taste-test safety.</strong> Food can be dangerous even when it looks or smells normal.</li>
            <li><strong className="text-white print:text-black">When in doubt, throw it out.</strong> The cost of replacing food is lower than the consequences of foodborne illness during a disaster.</li>
          </ul>
        </section>

        <section className="mt-10">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">REAL-WORLD LESSONS</p>
          <h2 className="mt-2 text-3xl font-black">What experienced households repeatedly learn</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-400 print:text-black">
            These themes recur in homeowner outage accounts and align with official safety guidance. They are presented as planning lessons, not as substitutes for manufacturer instructions or local emergency direction.
          </p>
          <div className="mt-6 space-y-5">
            {practicalLessons.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 print:border-black print:bg-white">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-400 print:text-black"><strong className="text-slate-200 print:text-black">Observed problem:</strong> {item.lesson}</p>
                <p className="mt-3 leading-7 text-slate-300 print:text-black"><strong className="text-amber-300 print:text-black">Practical action:</strong> {item.action}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-red-500/30 bg-red-500/10 p-6 sm:p-8 print:border-black print:bg-white">
          <p className="text-xs font-bold tracking-[0.2em] text-red-300 print:text-black">LIFE-SAFETY RULES</p>
          <h2 className="mt-2 text-3xl font-black">Generator, carbon monoxide, fire, and electrical safety</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {safetyRules.map((rule) => (
              <div key={rule.title} className="rounded-xl border border-red-300/20 bg-slate-950/40 p-5 print:border-black print:bg-white">
                <h3 className="font-bold text-white print:text-black">{rule.title}</h3>
                <p className="mt-2 text-sm leading-6 text-red-50/80 print:text-black">{rule.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-black print:bg-white">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">MEDICAL AND TEMPERATURE PLAN</p>
          <h2 className="mt-2 text-3xl font-black">Make the relocation decision early</h2>
          <ul className="mt-6 space-y-4 leading-7 text-slate-300 print:text-black">
            <li>Ask medical-equipment providers how the device behaves during power loss and what backup source is approved.</li>
            <li>Discuss refrigerated medications with a pharmacist before an emergency. Keep labels, instructions, and pharmacy contact information available.</li>
            <li>Notify the utility when a household member relies on critical powered medical equipment, while recognizing that registration may not guarantee faster restoration.</li>
            <li>Identify two places that can provide safe heating, cooling, charging, and refrigeration. Confirm transportation before roads become hazardous.</li>
            <li>Do not use an oven, grill, camp stove, or generator to heat indoor living space.</li>
          </ul>
        </section>

        <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-black print:bg-white">
          <h2 className="text-3xl font-black">Frequently asked questions</h2>
          <div className="mt-6 space-y-5">
            {faq.map((item) => (
              <div key={item.question} className="border-t border-slate-700 pt-5 first:border-t-0 first:pt-0 print:border-black">
                <h3 className="text-lg font-bold">{item.question}</h3>
                <p className="mt-2 leading-7 text-slate-400 print:text-black">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-sky-500/30 bg-sky-500/10 p-6 sm:p-8 print:border-black print:bg-white">
          <h2 className="text-2xl font-black">Official safety references</h2>
          <p className="mt-3 leading-7 text-slate-300 print:text-black">
            Use local utility and emergency-management instructions during an active event. These federal resources provide the safety baseline used in this guide.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 print:hidden">
            <a className="rounded-xl border border-sky-400/30 bg-slate-950/40 p-4 font-semibold text-sky-200 hover:border-sky-300" href="https://www.cdc.gov/natural-disasters/response/what-to-do-protect-yourself-during-a-power-outage.html" target="_blank" rel="noreferrer">CDC power outage safety ↗</a>
            <a className="rounded-xl border border-sky-400/30 bg-slate-950/40 p-4 font-semibold text-sky-200 hover:border-sky-300" href="https://www.cdc.gov/food-safety/foods/keep-food-safe-after-emergency.html" target="_blank" rel="noreferrer">CDC food safety after an outage ↗</a>
            <a className="rounded-xl border border-sky-400/30 bg-slate-950/40 p-4 font-semibold text-sky-200 hover:border-sky-300" href="https://www.foodsafety.gov/food-safety-charts/food-safety-during-power-outage" target="_blank" rel="noreferrer">FoodSafety.gov food chart ↗</a>
            <a className="rounded-xl border border-sky-400/30 bg-slate-950/40 p-4 font-semibold text-sky-200 hover:border-sky-300" href="https://www.ready.gov/power-outages" target="_blank" rel="noreferrer">Ready.gov power outages ↗</a>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3 print:hidden">
          <Link href="/emergency-water-storage" className="rounded-lg border border-slate-700 px-4 py-3 text-sm font-semibold hover:bg-slate-900">Emergency water storage</Link>
          <Link href="/hurricane-preparedness-checklist" className="rounded-lg border border-slate-700 px-4 py-3 text-sm font-semibold hover:bg-slate-900">Hurricane checklist</Link>
          <Link href="/" className="rounded-lg bg-amber-400 px-4 py-3 text-sm font-black text-slate-950 hover:bg-amber-300">Return to dashboard</Link>
        </div>
      </article>
    </main>
  );
}
