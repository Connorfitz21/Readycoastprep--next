import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Preparedness Guides & Printable Checklists | Ready Coast Prep",
  description:
    "Browse practical household preparedness guides, calculators, printable checklists, evacuation plans, outage guidance, renter resources, and seasonal emergency planning.",
  alternates: { canonical: "https://readycoastprep.com/guides" },
  openGraph: {
    title: "Emergency Preparedness Guides & Printable Checklists",
    description:
      "Practical preparedness guides organized around the decisions households actually need to make.",
    url: "https://readycoastprep.com/guides",
    type: "website",
  },
};

const groups = [
  {
    title: "Household essentials",
    description: "Start with the supplies and plans most households depend on across multiple emergencies.",
    links: [
      ["Emergency water storage", "/emergency-water-storage", "Calculate how much water to store and how to store it safely."],
      ["Emergency food supply", "/emergency-food-supply-guide", "Plan no-cook food, longer outages, rotation, and food safety."],
      ["Power outage checklist", "/power-outage-checklist", "Prepare for food, charging, medical needs, generators, heat, and cold."],
      ["Preparedness plan", "/preparedness-plan", "Turn household details into a prioritized, printable action plan."],
    ],
  },
  {
    title: "Evacuation & communication",
    description: "Build a plan that still works when household members are separated or you have to leave.",
    links: [
      ["Coastal evacuation guide", "/coastal-evacuation-guide", "Routes, timing, fuel, documents, pets, traffic, and reentry."],
      ["Emergency communication plan", "/emergency-communication-plan", "Contacts, meeting places, alerts, backup methods, and a printable worksheet."],
      ["Pet hurricane & evacuation", "/pet-hurricane-evacuation-guide", "Carriers, records, medications, shelter planning, and backup caregivers."],
    ],
  },
  {
    title: "Calculators & printable tools",
    description: "Turn general preparedness guidance into numbers and a plan for your household.",
    links: [
      ["Emergency water calculator", "/emergency-water-calculator", "Calculate a household water target and see the gap between the baseline and your planning buffer."],
      ["Emergency food planner", "/emergency-food-planner", "Plan how many meal slots your household needs to cover during a disruption."],
      ["Printable household preparedness pack", "/preparedness-pack", "Print one working sheet for contacts, evacuation, water, food, power, pets, documents, and next actions."],
    ],
  },
  {
    title: "Weather & seasonal hazards",
    description: "Use hazard-specific guidance without losing the year-round household basics.",
    links: [
      ["Hurricane preparedness checklist", "/hurricane-preparedness-checklist", "A practical hurricane checklist from advance preparation through recovery."],
      ["Winter power outage & cold weather", "/winter-power-outage-cold-weather", "Heating safety, pipes, carbon monoxide, travel, pets, and medical needs."],
      ["Extreme heat & power outage", "/extreme-heat-power-outage", "Cooling decisions, heat illness, medications, pets, apartments, and outages."],
    ],
  },
  {
    title: "Housing & special constraints",
    description: "Adapt preparedness to limited storage, shared systems, transportation limits, and rental housing.",
    links: [
      ["Apartment & renter preparedness", "/apartment-renter-emergency-preparedness", "Limited storage, stairs, elevators, building systems, insurance, and evacuation."],
    ],
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-black tracking-wide">READY COAST PREP</Link>
          <Link href="/preparedness-plan" className="rounded-lg border border-amber-400/50 px-4 py-2 text-sm font-bold text-amber-300 hover:bg-amber-400/10">
            Build my plan
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <p className="text-sm font-bold tracking-[0.25em] text-amber-400">GUIDE LIBRARY</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
          Practical preparedness guides for real households
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Start with the problem you need to solve. Each guide combines official safety guidance with practical household actions, printable tools, and links to the relevant primary sources.
        </p>

        <div className="mt-12 space-y-10">
          {groups.map((group) => (
            <section key={group.title}>
              <h2 className="text-2xl font-black">{group.title}</h2>
              <p className="mt-2 max-w-3xl text-slate-400">{group.description}</p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {group.links.map(([title, href, description]) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-500/60 hover:bg-slate-900/80"
                  >
                    <h3 className="text-lg font-black text-white">{title}</h3>
                    <p className="mt-2 leading-6 text-slate-400">{description}</p>
                    <p className="mt-4 text-sm font-bold text-sky-300">Open guide →</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <aside className="mt-14 rounded-3xl border border-amber-400/30 bg-amber-400/10 p-7">
          <h2 className="text-xl font-black">Not sure where to start?</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Use the readiness tool to identify your biggest gaps, then build a prioritized household action plan. No account is required and the planning data stays in your browser.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/#readiness-tool" className="rounded-xl bg-sky-500 px-5 py-3 font-bold hover:bg-sky-400">
              Check my readiness
            </Link>
            <Link href="/preparedness-plan" className="rounded-xl border border-amber-400/50 px-5 py-3 font-bold text-amber-300 hover:bg-amber-400/10">
              Build my action plan
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
