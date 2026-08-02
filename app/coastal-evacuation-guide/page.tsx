import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Coastal Evacuation Guide and Checklist | Ready Coast Prep",
  description:
    "A practical coastal evacuation guide covering zones, routes, timing, fuel, pets, medications, documents, traffic, shelter decisions, and a printable departure checklist.",
  alternates: { canonical: "/coastal-evacuation-guide" },
  openGraph: {
    title: "Coastal Evacuation Guide and Checklist | Ready Coast Prep",
    description:
      "Turn evacuation guidance into a household departure plan with clear decision points, common failure lessons, and a printable checklist.",
    url: "/coastal-evacuation-guide",
    type: "article",
    images: ["/ready-coast-prep-social.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coastal Evacuation Guide | Ready Coast Prep",
    description: "A realistic household evacuation plan for coastal storms.",
    images: ["/ready-coast-prep-social.png"],
  },
};

const checklist = [
  "Confirm your official local evacuation zone and save the map offline",
  "Choose a primary destination outside the evacuation area and a backup destination",
  "Plan two routes that do not depend on the same bridge, tunnel, ferry, or low-lying road",
  "Keep the vehicle maintained and avoid letting the fuel level fall below half a tank during storm threats",
  "Pack identification, insurance information, medication lists, and essential records",
  "Carry several days of prescriptions, medical supplies, and powered-device backup plans",
  "Pack pet carriers, leashes, food, water, records, identification, and a current photo",
  "Bring water, ready-to-eat food, chargers, power banks, paper maps, cash, and basic sanitation supplies",
  "Tell an out-of-area contact where you are going and when you expect to arrive",
  "Secure the home only while conditions remain safe, then leave when directed",
];

const decisionTimeline = [
  {
    stage: "Before storm season",
    purpose: "Remove the decisions that cause delay",
    actions: [
      "Find your official evacuation zone and learn which agency issues orders.",
      "Select destinations that are inland, outside flood-prone areas, and willing to receive your household and pets.",
      "Practice loading the vehicle and confirm that people, carriers, mobility equipment, and supplies fit.",
      "Save local emergency-management, transportation, shelter, and alert-system links.",
    ],
  },
  {
    stage: "Storm being monitored",
    purpose: "Move from a general plan to a storm-specific plan",
    actions: [
      "Check the National Hurricane Center and local emergency-management updates, not social-media screenshots alone.",
      "Confirm the destination, route, lodging or host availability, fuel, prescriptions, and pet arrangements.",
      "Charge devices, withdraw a reasonable amount of cash, and load nonessential supplies early.",
      "Identify the earliest condition that would cause your household to leave before an order, such as medical dependence, mobility limitations, or a single access road.",
    ],
  },
  {
    stage: "Watch, warning, or local order",
    purpose: "Leave while the plan still works",
    actions: [
      "Follow local evacuation instructions promptly. Local officials determine zones and orders.",
      "Recheck road, bridge, tunnel, ferry, and destination conditions immediately before departure.",
      "Use the planned route unless authorities direct otherwise; do not improvise through flooded roads.",
      "Send one departure message to your contact and limit unnecessary calls while traveling.",
    ],
  },
  {
    stage: "After departure",
    purpose: "Stay accountable and avoid premature return",
    actions: [
      "Notify your contact when you arrive and keep phones available for official alerts.",
      "Keep receipts for lodging, fuel, food, and emergency purchases.",
      "Do not return based only on clear weather at your destination. Wait for local reentry instructions.",
      "Expect road damage, downed lines, fuel shortages, restricted access, and limited medical services after the storm.",
    ],
  },
];

const practicalLessons = [
  {
    title: "The destination fails before the route does",
    experience:
      "Evacuees often focus on the road and assume lodging, relatives, shelters, or pet accommodations will remain available.",
    action:
      "Confirm a primary and backup destination before departure. Verify pet rules, accessibility, check-in requirements, and whether the location is outside the same hazard area.",
  },
  {
    title: "A familiar route can become a bottleneck",
    experience:
      "Coastal travel may depend on a small number of bridges, tunnels, ferries, causeways, or low-lying roads. One closure can redirect thousands of vehicles.",
    action:
      "Plan two materially different routes and save paper or offline maps. Check official transportation updates immediately before leaving.",
  },
  {
    title: "Packing expands until departure is delayed",
    experience:
      "Households commonly spend the final safe hours deciding what to bring, searching for documents, or trying to protect every possession.",
    action:
      "Use a fixed go-kit and a written loading order. Life safety, medication, identification, communication, water, food, and pet needs come before replaceable property.",
  },
  {
    title: "Fuel is a time problem, not only a quantity problem",
    experience:
      "Stations may have long lines, lose power, run short, or sit on the wrong side of evacuation traffic. A half-full tank can become inadequate during detours and idling.",
    action:
      "Top off early when a credible threat develops. Do not store unsafe quantities of fuel or wait for an evacuation order to join the longest lines.",
  },
  {
    title: "Family communication breaks under stress",
    experience:
      "Different vehicles, weak service, dead batteries, and changing destinations can separate households even when everyone owns a phone.",
    action:
      "Choose an out-of-area contact, a meeting point, and a rule for route changes. Use brief text updates and keep a printed contact list.",
  },
];

const zoneDifferences = [
  {
    label: "Evacuation zone",
    text: "A locally designated area used to organize evacuation decisions. It may account for storm surge, road capacity, isolation risk, and local planning factors.",
  },
  {
    label: "Flood zone",
    text: "A mapped area used primarily to describe flood risk and, in many cases, insurance or building requirements. It is not a substitute for a local evacuation zone.",
  },
  {
    label: "Storm-surge map",
    text: "A planning or forecast product showing potential coastal inundation. National maps are useful for awareness but do not replace official local evacuation instructions.",
  },
];

const faq = [
  {
    question: "Should I evacuate because I am in a FEMA flood zone?",
    answer:
      "Use your official local evacuation zone and current instructions. Flood zones, storm-surge maps, and evacuation zones serve different purposes. Local emergency managers issue evacuation orders.",
  },
  {
    question: "How early should I leave?",
    answer:
      "There is no universal departure time. Leave when local officials direct you, and consider leaving earlier when your household has medical, mobility, transportation, pet, or single-route constraints. Complete preparations before tropical-storm-force winds make travel and outdoor work dangerous.",
  },
  {
    question: "Is a public shelter my first choice?",
    answer:
      "A safe home of family or friends outside the hazard area, or confirmed lodging, may provide more comfort and flexibility. Public shelters are an essential safety option but may have limited space, supplies, privacy, and pet accommodations. Check current local shelter rules.",
  },
  {
    question: "What should stay in the vehicle during storm season?",
    answer:
      "Keep chargers, paper maps, basic first aid, water, shelf-stable snacks, reflective gear, a flashlight, sanitation supplies, and household-specific items. Do not leave heat-sensitive medications, batteries, or excessive water in a hot vehicle for long periods.",
  },
];

export default function CoastalEvacuationGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Coastal Evacuation Guide and Checklist",
    description: "A practical household evacuation guide for coastal storms.",
    mainEntityOfPage: "https://readycoastprep.com/coastal-evacuation-guide",
    dateModified: "2026-08-01",
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
        <p className="text-sm font-bold tracking-[0.25em] text-amber-400 print:text-black">COASTAL HOUSEHOLD GUIDE</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl print:text-4xl">Coastal evacuation guide</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 print:text-black">
          Evacuation succeeds when the major decisions are made before the road fills, the weather deteriorates, or the destination changes. Use this guide to turn official local instructions into a household departure plan.
        </p>

        <div className="mt-8 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-5 text-sm leading-6 text-amber-100 print:border-black print:bg-white print:text-black">
          <strong>Authority matters:</strong> Ready Coast Prep is a planning resource. Your local emergency-management agency determines evacuation zones, orders, shelters, and reentry. Follow current official instructions over any general checklist.
        </div>

        <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-black print:bg-white">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">PRINTABLE DEPARTURE CHECK</p>
          <h2 className="mt-2 text-3xl font-black">Ten items that make the plan executable</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
              <label key={item} className="flex gap-3 rounded-xl border border-slate-700 p-4 text-sm leading-6 print:border-black">
                <input type="checkbox" className="mt-1 h-4 w-4 shrink-0" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">DO NOT CONFUSE THE MAPS</p>
          <h2 className="mt-2 text-3xl font-black">Evacuation zones are not flood zones</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {zoneDifferences.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 print:border-black print:bg-white">
                <h3 className="text-lg font-bold">{item.label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300 print:text-black">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">DECISION TIMELINE</p>
          <h2 className="mt-2 text-3xl font-black">Make fewer decisions when time is short</h2>
          <div className="mt-6 space-y-5">
            {decisionTimeline.map((item) => (
              <div key={item.stage} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 print:border-black print:bg-white">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold">{item.stage}</h3>
                  <p className="text-sm font-semibold text-amber-400 print:text-black">{item.purpose}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300 print:text-black">
                  {item.actions.map((action) => <li key={action} className="flex gap-3"><span className="text-sky-400 print:text-black">•</span><span>{action}</span></li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-black print:bg-white">
          <p className="text-xs font-bold tracking-[0.2em] text-amber-400 print:text-black">REAL-WORLD LESSONS</p>
          <h2 className="mt-2 text-3xl font-black">Where evacuation plans commonly fail</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400 print:text-black">
            These recurring experiences are included only where they reinforce official preparedness guidance. They are translated into specific actions rather than treated as universal rules.
          </p>
          <div className="mt-6 space-y-5">
            {practicalLessons.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-700 p-5 print:border-black">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300 print:text-black"><strong>What people experience:</strong> {item.experience}</p>
                <p className="mt-2 text-sm leading-6 text-sky-200 print:text-black"><strong>Build it into the plan:</strong> {item.action}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">OFFICIAL PLANNING TOOLS</p>
          <h2 className="mt-2 text-3xl font-black">Verify the live situation before acting</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Ready.gov evacuation guidance", "https://www.ready.gov/evacuation", "Federal planning guidance for routes, destinations, go-bags, transportation, pets, and household communication."],
              ["National Hurricane Center", "https://www.nhc.noaa.gov/", "Official tropical cyclone forecasts, watches, warnings, storm-surge information, and forecast discussions."],
              ["National storm-surge risk maps", "https://www.nhc.noaa.gov/nationalsurge/", "General coastal storm-surge awareness maps. These do not replace local evacuation-zone maps."],
              ["FEMA mobile app", "https://www.ready.gov/fema-app", "Weather alerts, preparedness information, shelter resources, and disaster information for selected locations."],
            ].map(([name, href, description]) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-sky-500 print:border-black print:bg-white">
                <div className="flex items-start justify-between gap-4"><h3 className="font-bold">{name}</h3><span className="text-sky-400 print:hidden">↗</span></div>
                <p className="mt-2 text-sm leading-6 text-slate-400 print:text-black">{description}</p>
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500 print:text-black">Last reviewed August 1, 2026. Local zones, shelters, transportation restrictions, and reentry rules can change. Verify them with the responsible jurisdiction.</p>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-black print:bg-white">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">SOURCES AND METHODOLOGY</p>
          <h2 className="mt-2 text-3xl font-black">How this guide was built</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300 print:text-black">
            Ready Coast Prep uses official emergency-management guidance as the safety baseline. This guide draws primarily from Ready.gov and FEMA evacuation planning resources, National Hurricane Center forecasts and storm-surge information, and current instructions issued by state and local emergency-management and transportation agencies.
          </p>
          <p className="mt-4 text-sm leading-6 text-slate-300 print:text-black">
            Recurring lessons from evacuation experiences are included only when they are consistent with official guidance. Those experiences are converted into practical planning actions, such as choosing more than one route, confirming a destination before departure, carrying paper or offline maps, planning for pets and medications, and leaving additional time for households with mobility or transportation constraints. Anecdotes do not override current evacuation orders or agency instructions.
          </p>
          <div className="mt-6 rounded-2xl border border-slate-700 p-5 print:border-black">
            <h3 className="text-lg font-bold">Documented lessons behind the practical advice</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300 print:text-black">Federal reviews after major hurricanes found that damaged communications, extended disruptions, staffing constraints, and uncertainty about when help would arrive complicated evacuation and continuity decisions for vulnerable populations. That evidence supports planning for longer durations, redundant communication, earlier decisions for medically dependent households, and more than one workable destination or route.</p>
            <div className="mt-4 flex flex-col gap-2 print:hidden">
              <a href="https://www.gao.gov/assets/a113863.html" target="_blank" rel="noreferrer" className="text-sm font-semibold text-sky-300 hover:text-sky-200">GAO: Evacuation of vulnerable populations after hurricanes ↗</a>
              <a href="https://www.gao.gov/products/gao-06-808t" target="_blank" rel="noreferrer" className="text-sm font-semibold text-sky-300 hover:text-sky-200">GAO: Hurricane Katrina planning and communication lessons ↗</a>
            </div>
          </div>
          <div className="mt-5 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5 print:border-black print:bg-white">
            <p className="text-sm leading-6 text-amber-100 print:text-black"><strong>Important limitation:</strong> This is a general planning guide, not a live evacuation order, route-clearance notice, shelter directory, or reentry authorization. Conditions and local rules change. Confirm your evacuation zone, route status, shelter availability, transportation restrictions, and reentry requirements with the responsible jurisdiction before acting.</p>
          </div>
        </section>

        <section className="mt-12">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="mt-2 text-3xl font-black">Evacuation planning questions</h2>
          <div className="mt-6 space-y-4">
            {faq.map((item) => (
              <details key={item.question} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 print:border-black print:bg-white" open>
                <summary className="cursor-pointer font-bold">{item.question}</summary>
                <p className="mt-3 text-sm leading-6 text-slate-300 print:text-black">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-sky-500/30 bg-sky-500/10 p-6 sm:p-8 print:border-black print:bg-white">
          <h2 className="text-2xl font-black">Continue the household plan</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300 print:text-black">Evacuation depends on water, power, communication, medications, and storm timing. Use the related guides to close those gaps before a threat develops.</p>
          <div className="mt-5 flex flex-wrap gap-3 print:hidden">
            <Link href="/hurricane-preparedness-checklist" className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-bold hover:bg-sky-400">Hurricane checklist</Link>
            <Link href="/emergency-water-storage" className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold hover:bg-slate-900">Water storage guide</Link>
            <Link href="/power-outage-checklist" className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold hover:bg-slate-900">Power outage checklist</Link>
          </div>
        </section>
      </article>
    </main>
  );
}
