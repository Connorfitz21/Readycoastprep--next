import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrintPageButton from "../components/PrintPageButton";

export const metadata: Metadata = {
  title: "Hurricane Preparedness Checklist: What to Do Before a Storm | Ready Coast Prep",
  description:
    "Use this printable hurricane preparedness checklist to plan what to do before a storm, when to evacuate, what supplies to protect, and how to stay safe after landfall.",
  alternates: { canonical: "https://readycoastprep.com/hurricane-preparedness-checklist" },
  openGraph: {
    title: "Hurricane Preparedness Checklist: What to Do Before a Storm | Ready Coast Prep",
    description:
      "Prepare your household before a hurricane with a practical checklist for supplies, evacuation, communications, and recovery.",
    url: "https://readycoastprep.com/hurricane-preparedness-checklist",
    type: "article",
    images: ["/ready-coast-prep-social.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hurricane Preparedness Checklist: What to Do Before a Storm | Ready Coast Prep",
    description:
      "A practical checklist for hurricane supplies, evacuation, communications, and recovery.",
    images: ["/ready-coast-prep-social.png"],
  },
};

const sections = [
  {
    title: "Before hurricane season",
    intro: "Complete these steps before a storm is on the forecast map.",
    items: [
      "Learn whether your home is in an evacuation or storm-surge zone.",
      "Choose an inland destination and at least two evacuation routes.",
      "Create a household communication plan with an out-of-area contact.",
      "Review insurance coverage and photograph important property.",
      "Inspect shutters, roof drainage, trees, and outdoor items.",
      "Plan for prescriptions, medical equipment, accessibility needs, children, seniors, and pets.",
    ],
  },
  {
    title: "Build your household supply baseline",
    intro:
      "Start with at least three days of essential supplies, then increase based on local risk and household needs.",
    items: [
      "Store at least one gallon of water per person per day for drinking and sanitation.",
      "Keep shelf-stable food that does not require refrigeration or extensive cooking.",
      "Maintain prescription medications, first-aid supplies, hygiene items, and sanitation supplies.",
      "Keep flashlights, spare batteries, charged power banks, and a battery or hand-crank weather radio.",
      "Protect identification, insurance records, contact information, and medical information in waterproof storage.",
      "Include cash, pet supplies, infant supplies, and items needed for disabilities or access and functional needs.",
    ],
  },
  {
    title: "When a hurricane threatens",
    intro:
      "Do not wait for hurricane-force winds. Complete preparations before tropical-storm-force winds arrive.",
    items: [
      "Follow the National Hurricane Center, your local National Weather Service office, and local emergency management.",
      "Refill prescriptions, fuel vehicles, charge devices, and test backup power equipment.",
      "Bring in or secure outdoor furniture, grills, trash cans, and loose equipment.",
      "Install shutters or approved window protection and clear gutters and drains.",
      "Set refrigerators and freezers colder and freeze containers of water if time allows.",
      "Confirm your evacuation decision point and leave immediately when local officials direct you to evacuate.",
    ],
  },
  {
    title: "Evacuation checklist",
    intro:
      "Base evacuation decisions on official instructions and local hazards, especially storm surge and flooding.",
    items: [
      "Take identification, medications, important documents, phones, chargers, water, food, clothing, and personal protective items.",
      "Bring supplies and records for pets, including carriers, leashes, food, water, and vaccination information.",
      "Tell your out-of-area contact where you are going and which route you plan to use.",
      "Avoid shortcuts through low-lying roads and never drive through floodwater.",
      "Leave early enough to complete travel before dangerous winds begin.",
      "Do not return until local authorities say the area is safe.",
    ],
  },
  {
    title: "If you shelter at home",
    intro:
      "Shelter at home only when officials have not ordered evacuation and the structure is suitable for the expected hazards.",
    items: [
      "Stay in an interior room away from windows and exterior doors.",
      "Keep weather alerts active and monitor official updates throughout the storm.",
      "Use flashlights instead of candles when power is out.",
      "Keep generators outdoors, far from doors, windows, and vents.",
      "Do not go outside during a temporary lull; dangerous winds can return quickly.",
      "Be prepared to move to a higher level if flooding develops, but avoid enclosed attics without roof access.",
    ],
  },
  {
    title: "After the storm",
    intro: "Many serious hazards remain after the wind and rain have passed.",
    items: [
      "Continue monitoring official instructions and return home only when authorized.",
      "Avoid floodwater, washed-out roads, downed power lines, unstable structures, and damaged trees.",
      "Never run a generator inside a home, garage, shed, or enclosed area.",
      "Photograph damage before cleanup and contact your insurer when conditions are safe.",
      "Discard food exposed to unsafe temperatures or contaminated water.",
      "Check on neighbors when it is safe, especially older adults and people with medical or accessibility needs.",
    ],
  },
];

const faq = [
  {
    question: "How much water should I store for a hurricane?",
    answer:
      "A common minimum baseline is one gallon per person per day for at least three days. Store more for hot weather, medical needs, pets, sanitation, or extended outages.",
  },
  {
    question: "When should I evacuate for a hurricane?",
    answer:
      "Follow local evacuation orders and leave early enough to complete travel before tropical-storm-force winds arrive.",
  },
  {
    question: "What is the greatest coastal hurricane danger?",
    answer:
      "Storm surge and large waves are among the greatest threats along the coast. Heavy rainfall and inland flooding can also be deadly far from the shoreline.",
  },
  {
    question: "Can I use a generator in my garage if the door is open?",
    answer:
      "No. Portable generators must remain outdoors and well away from doors, windows, and vents because carbon monoxide can enter the home.",
  },
];

export default function HurricanePreparednessChecklistPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Hurricane Preparedness Checklist",
    description:
      "A practical hurricane preparedness checklist covering evacuation, supplies, home protection, communications, power outages, and post-storm safety.",
    mainEntityOfPage:
      "https://readycoastprep.com/hurricane-preparedness-checklist",
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
          <Link
            href="/"
            className="flex items-center gap-4"
            aria-label="Ready Coast Prep home"
          >
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
              <p className="text-xs font-bold tracking-[0.35em] text-amber-400">
                PREP
              </p>
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
        <p className="text-sm font-bold tracking-[0.25em] text-amber-400">
          COASTAL PREPAREDNESS GUIDE
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
          Hurricane preparedness checklist
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Prepare before hurricane season, act early when a storm threatens,
          evacuate safely when directed, and avoid preventable hazards after
          landfall.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 print:hidden">
          <PrintPageButton label="Print hurricane checklist" />
          <Link href="/preparedness-plan" className="rounded-xl border border-sky-500/50 px-5 py-3 text-sm font-bold text-sky-300 hover:bg-sky-500/10">
            Add this to my plan
          </Link>
        </div>

        <div className="mt-8 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-5 text-sm leading-6 text-amber-100">
          <strong>Important:</strong> During an active threat, follow evacuation
          orders and instructions from local emergency management, the National
          Hurricane Center, and your local National Weather Service office.
        </div>

        <nav
          className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6"
          aria-label="Page contents"
        >
          <h2 className="text-xl font-bold">Checklist sections</h2>
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
              <p className="text-xs font-bold tracking-[0.2em] text-sky-400">
                STEP {index + 1}
              </p>
              <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                {section.title}
              </h2>
              <p className="mt-3 leading-7 text-slate-400">{section.intro}</p>
              <ul className="mt-6 space-y-4">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 leading-7 text-slate-200"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-sm font-black text-sky-300">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
          <p className="text-xs font-bold tracking-[0.2em] text-amber-400">
            OFFICIAL INFORMATION
          </p>
          <h2 className="mt-2 text-3xl font-black">
            Use authoritative sources during an active storm
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <OfficialLink
              href="https://www.nhc.noaa.gov/"
              title="National Hurricane Center"
              description="Forecast tracks, advisories, watches, warnings, and storm-surge products."
            />
            <OfficialLink
              href="https://www.weather.gov/safety/hurricane"
              title="National Weather Service"
              description="Hurricane safety guidance, local warnings, and post-storm hazards."
            />
            <OfficialLink
              href="https://www.ready.gov/hurricanes"
              title="Ready.gov Hurricanes"
              description="Federal planning, evacuation, supply, and recovery guidance."
            />
            <OfficialLink
              href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/hurricane.html"
              title="American Red Cross"
              description="Hurricane safety checklists and multilingual preparedness resources."
            />
          </div>
        </section>

        <section className="mt-10">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400">
            COMMON QUESTIONS
          </p>
          <h2 className="mt-2 text-3xl font-black">
            Hurricane preparedness FAQ
          </h2>
          <div className="mt-6 space-y-4">
            {faq.map((item) => (
              <details
                key={item.question}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
              >
                <summary className="cursor-pointer font-bold">
                  {item.question}
                </summary>
                <p className="mt-3 leading-7 text-slate-400">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-sky-500 p-7 text-white sm:p-9">
          <h2 className="text-3xl font-black">
            Turn the checklist into a household baseline
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-sky-50">
            Return to the dashboard to record household size, stored water,
            meals, safety equipment, and communication supplies.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-xl bg-slate-950 px-6 py-3 font-bold hover:bg-slate-900"
          >
            Open readiness dashboard
          </Link>
        </section>
      </article>
    </main>
  );
}

function OfficialLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl border border-slate-700 bg-slate-950 p-5 transition hover:border-sky-500"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-bold text-sky-300">{title}</h3>
        <span aria-hidden="true" className="text-sky-400">
          ↗
        </span>
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
    </a>
  );
}
