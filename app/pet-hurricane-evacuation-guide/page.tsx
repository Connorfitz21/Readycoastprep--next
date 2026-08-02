import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PetPlanWorksheet from "./PetPlanWorksheet";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Pet Hurricane and Evacuation Guide | Ready Coast Prep",
  description:
    "A practical pet hurricane and evacuation plan covering carriers, records, medications, food, water, lodging, shelters, backup caregivers, and a printable pet record.",
  alternates: { canonical: "/pet-hurricane-evacuation-guide" },
  openGraph: {
    title: "Pet Hurricane and Evacuation Guide | Ready Coast Prep",
    description:
      "Build a pet evacuation plan that works before roads, shelters, and lodging become constrained.",
    url: "/pet-hurricane-evacuation-guide",
    type: "article",
    images: ["/ready-coast-prep-social.png"],
  },
};

const kitItems = [
  "Sturdy carrier or crate sized for each pet, labeled with household contact information",
  "Secure collar or harness, leash, identification tags, and a backup restraint",
  "At least several days of familiar food and water, plus bowls and a manual can opener if needed",
  "Prescription medications, dosing instructions, and veterinarian-approved preventives",
  "Vaccination records, medical history, ownership documentation, and current photos",
  "Waste bags, litter and pan, bedding, cleaning supplies, towels, and sanitation items",
  "Basic pet first-aid supplies and any species-specific temperature or habitat equipment",
  "Comfort item, familiar blanket, and a small supply of treats for handling and stress",
];

const timeline = [
  {
    stage: "Before storm season",
    actions: [
      "Confirm that every pet can enter and remain safely in its carrier or crate.",
      "Update microchip registration, tags, vaccinations, prescriptions, and photographs.",
      "Identify a primary pet-friendly destination and two backups outside the hazard area.",
      "Ask a trusted person to serve as backup caregiver if you cannot reach home.",
    ],
  },
  {
    stage: "When a credible threat develops",
    actions: [
      "Refill medications and place records, food, water, carriers, and restraints together.",
      "Call lodging, hosts, boarding facilities, or shelters to verify current pet policies and availability.",
      "Bring outdoor pets inside early and keep cats and small animals in controlled spaces.",
      "Load nonessential pet supplies before evacuation traffic or severe weather begins.",
    ],
  },
  {
    stage: "At departure",
    actions: [
      "Place pets in carriers or secure restraints before exterior doors remain open for loading.",
      "Carry the printed pet record, medications, records, food, water, sanitation supplies, and photos.",
      "Tell the out-of-area contact and backup caregiver where the household is going.",
      "Never leave a pet behind because a destination has not been confirmed; use the backup plan early.",
    ],
  },
  {
    stage: "After the storm",
    actions: [
      "Keep pets leashed or contained because familiar scents, landmarks, fences, and routes may be altered.",
      "Avoid floodwater, debris, downed lines, displaced wildlife, spoiled food, and contaminated standing water.",
      "Watch for vomiting, diarrhea, breathing trouble, injury, heat stress, unusual behavior, or loss of appetite.",
      "Contact a veterinarian for illness or injury; emergency first aid does not replace veterinary care.",
    ],
  },
];

const lessons = [
  {
    title: "A pet-friendly hotel can stop being available",
    experience: "Households often know one hotel or shelter that accepts pets but do not confirm availability, deposits, species limits, or storm-specific policy changes.",
    action: "Keep at least three destination options and verify them when a threat develops. Record phone numbers and requirements offline.",
  },
  {
    title: "The carrier becomes the last-minute failure",
    experience: "A pet that has not entered a carrier for months may hide, resist, or injure itself while the household is trying to leave.",
    action: "Keep carriers accessible, label them, practice calm entry, and never wait until the evacuation order to find or assemble them.",
  },
  {
    title: "Records are stored separately from the animal",
    experience: "Vaccination and ownership records may be on a home computer, in a closed veterinary office, or inaccessible without service.",
    action: "Keep printed copies and offline digital copies with the pet kit, including a current photo showing the pet with an owner.",
  },
  {
    title: "Food is packed but medication is not",
    experience: "Routine medication, special diets, insulin storage, mobility equipment, and dosing instructions are easy to overlook during rapid departure.",
    action: "Maintain a written medical list and rotate a travel-ready supply under veterinary guidance. Plan temperature control for medications that require it.",
  },
  {
    title: "Post-storm freedom creates new risk",
    experience: "Damaged fences, debris, contaminated water, wildlife, and altered landmarks can cause injury or separation even after the weather improves.",
    action: "Keep pets contained and supervised until the property and neighborhood have been checked carefully.",
  },
];

const faq = [
  {
    question: "Do emergency shelters have to accept pets?",
    answer: "Pet arrangements vary by jurisdiction and facility. Some shelters co-locate animals nearby, some accept only service animals in human areas, and others have separate rules. Verify current local shelter information before departure.",
  },
  {
    question: "How much pet food and water should I pack?",
    answer: "Pack several days of the pet's familiar food and water, then adjust for evacuation distance, likely outage duration, medical needs, and local guidance. Avoid sudden diet changes during an already stressful event.",
  },
  {
    question: "Is a microchip enough identification?",
    answer: "Use multiple layers: a registered microchip with current contact information, visible tags, a labeled carrier, printed records, and current photographs. A microchip helps only when registration information is accurate and a scanner is available.",
  },
  {
    question: "What about horses, livestock, birds, reptiles, or exotic pets?",
    answer: "They require species-specific transport, shelter, temperature, ventilation, containment, and care plans. Work with a veterinarian, local agriculture or animal-control agency, and experienced transport or boarding providers well before an emergency.",
  },
];

export default function PetHurricaneEvacuationGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Pet Hurricane and Evacuation Guide",
    description: "A practical pet emergency and evacuation plan for coastal storms.",
    mainEntityOfPage: "https://readycoastprep.com/pet-hurricane-evacuation-guide",
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
            <div><p className="text-lg font-black tracking-wide">READY COAST</p><p className="text-xs font-bold tracking-[0.35em] text-amber-400">PREP</p></div>
          </Link>
          <div className="flex items-center gap-3"><PrintButton /><Link href="/" className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold hover:bg-slate-900">Back to dashboard</Link></div>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 py-12 sm:py-16 print:max-w-none print:px-0 print:py-0">
        <p className="text-sm font-bold tracking-[0.25em] text-amber-400 print:text-black">PET AND HOUSEHOLD GUIDE</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl print:text-4xl">Pet hurricane and evacuation guide</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 print:text-black">Pets turn an evacuation into a transportation, lodging, medical, identification, and reunification problem. Solve those constraints before a storm forces the decision.</p>

        <div className="mt-8 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-5 text-sm leading-6 text-amber-100 print:border-black print:bg-white print:text-black">
          <strong>Verify current local rules:</strong> Shelter access, animal intake, lodging availability, transportation, and evacuation orders change by jurisdiction and event. Follow local emergency management, animal control, shelter, and veterinary instructions. This guide is not veterinary advice and does not replace professional care.
        </div>

        <PetPlanWorksheet />

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-black print:bg-white">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">PET EVACUATION KIT</p>
          <h2 className="mt-2 text-3xl font-black">Pack for control, continuity, and identification</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {kitItems.map((item) => <label key={item} className="flex gap-3 rounded-xl border border-slate-700 p-4 text-sm leading-6 print:border-black"><input type="checkbox" className="mt-1 h-4 w-4 shrink-0" /><span>{item}</span></label>)}
          </div>
        </section>

        <section className="mt-12">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">ACTION TIMELINE</p>
          <h2 className="mt-2 text-3xl font-black">Do the difficult pet tasks before departure day</h2>
          <div className="mt-6 space-y-5">
            {timeline.map((item) => <div key={item.stage} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 print:border-black print:bg-white"><h3 className="text-xl font-bold">{item.stage}</h3><ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300 print:text-black">{item.actions.map((action) => <li key={action} className="flex gap-3"><span className="text-sky-400 print:text-black">•</span><span>{action}</span></li>)}</ul></div>)}
          </div>
        </section>

        <section className="mt-12">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">REAL-WORLD FAILURE POINTS</p>
          <h2 className="mt-2 text-3xl font-black">What commonly breaks the plan</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {lessons.map((item) => <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 print:border-black print:bg-white"><h3 className="text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400 print:text-black"><strong>Recurring experience:</strong> {item.experience}</p><p className="mt-3 text-sm leading-6 text-slate-200 print:text-black"><strong>Practical action:</strong> {item.action}</p></div>)}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-black print:bg-white">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">SOURCES AND METHODOLOGY</p>
          <h2 className="mt-2 text-3xl font-black">Official guidance sets the safety baseline</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300 print:text-black">This guide consolidates current federal pet-emergency guidance and converts it into a household workflow. Real-world lessons are included only when they are consistent with official safety recommendations. They illustrate common planning failures; they do not override local orders, shelter policies, veterinary direction, or animal-control instructions.</p>
          <div className="mt-5 rounded-2xl border border-slate-700 p-5 print:border-black">
            <h3 className="text-lg font-bold">Documented shelter and displacement realities</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300 print:text-black">CDC guidance notes that many human evacuation centers cannot accept pets, while displaced animals may be without food, water, supervision, or medical care and may behave unpredictably under stress. That is why this plan emphasizes confirmed lodging, a backup caregiver, carrier practice, identification, medical records, and supplies that travel with the animal.</p>
            <div className="mt-4 flex flex-col gap-2 print:hidden">
              <a href="https://www.cdc.gov/healthy-pets/emergency-preparedness/pets-in-evacuation-centers.html" target="_blank" rel="noreferrer" className="text-sm font-semibold text-sky-300 hover:text-sky-200">CDC: Pets in evacuation centers ↗</a>
              <a href="https://www.cdc.gov/niosh/emres/response/animals.html" target="_blank" rel="noreferrer" className="text-sm font-semibold text-sky-300 hover:text-sky-200">CDC/NIOSH: Displaced domestic animals after emergencies ↗</a>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 print:block">
            <a href="https://www.cdc.gov/healthy-pets/emergency-preparedness/index.html" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 p-4 text-sm font-semibold hover:border-sky-400 print:block print:border-black">CDC: Pet Safety in Emergencies ↗</a>
            <a href="https://www.cdc.gov/healthy-pets/emergency-preparedness/preparedness-kit.html" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 p-4 text-sm font-semibold hover:border-sky-400 print:block print:border-black">CDC: Pet Disaster Preparedness Kit ↗</a>
            <a href="https://www.cdc.gov/healthy-pets/emergency-preparedness/pets-in-evacuation-centers.html" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 p-4 text-sm font-semibold hover:border-sky-400 print:block print:border-black">CDC: Pets in Evacuation Centers ↗</a>
            <a href="https://www.ready.gov/sites/default/files/2023-06/ready.gov_prepare-pets-for-disasters.pdf" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 p-4 text-sm font-semibold hover:border-sky-400 print:block print:border-black">Ready.gov: Prepare Pets for Disasters ↗</a>
          </div>
        </section>

        <section className="mt-12">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="mt-2 text-3xl font-black">Pet evacuation questions</h2>
          <div className="mt-6 space-y-4">{faq.map((item) => <details key={item.question} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 print:border-black print:bg-white" open><summary className="cursor-pointer font-bold">{item.question}</summary><p className="mt-3 text-sm leading-6 text-slate-300 print:text-black">{item.answer}</p></details>)}</div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-800 p-6 print:hidden">
          <h2 className="text-2xl font-black">Connect the pet plan to the household plan</h2>
          <div className="mt-5 flex flex-wrap gap-3"><Link href="/coastal-evacuation-guide" className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-bold">Coastal evacuation</Link><Link href="/emergency-communication-plan" className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold">Communication plan</Link><Link href="/emergency-water-storage" className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold">Water storage</Link><Link href="/emergency-food-supply-guide" className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold">Emergency food</Link></div>
        </section>
      </article>
    </main>
  );
}
