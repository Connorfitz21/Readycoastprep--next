import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "./PrintButton";
import RenterPlanWorksheet from "./RenterPlanWorksheet";

export const metadata: Metadata = {
  title: "Apartment and Renter Emergency Preparedness | Ready Coast Prep",
  description:
    "A practical, printable emergency plan for apartments and rentals: limited storage, stairwells, outages, flooding, insurance, landlords, pets, and evacuation.",
  alternates: { canonical: "https://readycoastprep.com/apartment-renter-emergency-preparedness" },
  openGraph: {
    title: "Apartment and Renter Emergency Preparedness",
    description: "Prepare for outages, flooding, fire, evacuation, and recovery when you live in an apartment or rental home.",
    url: "https://readycoastprep.com/apartment-renter-emergency-preparedness",
    type: "article",
  },
};

const checklist = [
  "Photograph every room, major possession, serial number, and the condition of the unit.",
  "Save the property manager, after-hours maintenance, utility, insurance, and local emergency numbers offline.",
  "Walk the primary and backup stairwell routes; never assume the elevator will operate during an outage or fire.",
  "Keep a compact go-bag where it can be reached without crossing the kitchen or another likely hazard area.",
  "Store water and shelf-stable food in several smaller locations instead of one overloaded closet or shelf.",
  "Confirm where vehicles may be moved if the parking lot, street, or garage is vulnerable to flooding.",
  "Ask management how building alarms, access doors, generators, pumps, and emergency notices work during an outage.",
  "Review renter's insurance, deductibles, exclusions, and whether separate flood or earthquake coverage is needed.",
  "Make a plan for pets, prescriptions, mobility devices, refrigerated medicine, and evacuation without a car.",
  "Keep paper copies of the lease, insurance, inventory, contacts, and identification with a protected digital backup.",
];

const constraints = [
  { title: "Limited storage", text: "Use stackable water containers, under-bed bins, door organizers, and food you already rotate. Spread weight across safe locations and do not block exits, sprinklers, electrical panels, or utility access." },
  { title: "Shared systems", text: "Water, elevators, garage doors, entry systems, pumps, alarms, and ventilation may depend on building power. Ask what has backup power and what residents must do when it fails." },
  { title: "No structural control", text: "Renters usually cannot install shutters, alter wiring, or modify common areas. Report hazards early, document requests in writing, and focus on actions you can control." },
  { title: "Transportation limits", text: "Urban renters may rely on transit, rides, or shared vehicles. Identify two evacuation options before a storm, including one that does not depend on normal transit service." },
  { title: "Neighbor dependence", text: "Multifamily emergencies affect hallways, stairs, parking, and utilities. Coordinate with trusted neighbors without assuming someone else will check on you." },
  { title: "Temporary displacement", text: "A building can be inaccessible even when your unit has little damage. Plan where you could stay, what you would take, and how you would pay for several nights away." },
];

const faq = [
  { q: "Should an apartment emergency kit be smaller?", a: "It can be more compact, but it still needs to support the people and pets in the household. Prioritize water, food that requires little preparation, lighting, charging, medications, communications, documents, and evacuation supplies. Use several small storage zones rather than one oversized container." },
  { q: "Can I rely on the building generator?", a: "Do not assume it powers apartments. Many systems support only life-safety equipment, emergency lighting, alarms, pumps, or selected elevators. Ask management exactly what is backed up and for how long." },
  { q: "Does renter's insurance cover flooding?", a: "Standard renter's policies commonly cover belongings for certain losses such as fire or storms, but generally exclude flood and earthquake damage. Coverage varies, so confirm the policy and ask about separate coverage before a disaster." },
  { q: "What should I do about elevators during an emergency?", a: "Know the building's instructions and the locations of exit stairs. Do not use elevators during a fire, and do not depend on them during power failures. Residents who cannot use stairs should discuss an individualized assistance plan with management and local emergency officials." },
];

export default function ApartmentRenterPreparednessPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Apartment and Renter Emergency Preparedness",
    description: metadata.description,
    mainEntityOfPage: "https://readycoastprep.com/apartment-renter-emergency-preparedness",
    publisher: { "@type": "Organization", name: "Ready Coast Prep" },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white print:bg-white print:text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="border-b border-slate-800 print:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-black tracking-wide">READY COAST PREP</Link>
          <div className="flex items-center gap-4"><Link href="/#resources" className="text-sm font-semibold text-slate-300 hover:text-white">All guides</Link><PrintButton /></div>
        </div>
      </header>

      <article className="mx-auto max-w-6xl px-6 py-12 print:max-w-none print:px-0 print:py-0">
        <p className="text-sm font-bold tracking-[0.2em] text-amber-400 print:text-black">YEAR-ROUND HOUSEHOLD READINESS</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">Apartment and renter emergency preparedness</h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300 print:text-black">
          Most preparedness advice assumes you control the building, have a garage, and can store large quantities of supplies. Renters often have none of those advantages. This guide converts official preparedness, fire-safety, insurance, and evacuation guidance into a realistic plan for apartments, condos, and rental homes.
        </p>

        <aside className="mt-8 rounded-2xl border border-amber-400/40 bg-amber-400/10 p-5 print:border-black print:bg-white">
          <h2 className="font-black">Planning notice</h2>
          <p className="mt-2 text-sm leading-6 text-slate-200 print:text-black">
            This is general planning information, not legal advice or a substitute for building instructions, fire-department orders, lease terms, or local emergency directions. Landlord and tenant responsibilities vary by jurisdiction. During an emergency, follow current instructions from building management and public-safety officials.
          </p>
        </aside>

        <section className="mt-12">
          <h2 className="text-3xl font-black">Why renters need a different plan</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {constraints.map((item) => <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 print:border-slate-400 print:bg-white"><h3 className="text-xl font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-300 print:text-black">{item.text}</p></div>)}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-sky-500/30 bg-sky-500/10 p-6 sm:p-8 print:border-black print:bg-white">
          <h2 className="text-3xl font-black">The renter readiness checklist</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {checklist.map((item) => <label key={item} className="flex gap-3 rounded-xl border border-slate-700 bg-slate-950/40 p-4 text-sm leading-6 print:border-slate-400 print:bg-white"><input type="checkbox" className="mt-1 h-4 w-4" /><span>{item}</span></label>)}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 print:border-slate-400 print:bg-white">
            <h2 className="text-2xl font-black">Before an outage</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300 print:text-black">
              <li>• Ask whether emergency lighting, access doors, water pumps, fire alarms, garage exits, and elevators have backup power.</li>
              <li>• Keep flashlights near the bed and exit; avoid candles in crowded living spaces.</li>
              <li>• Charge devices early and keep a battery bank that you have tested.</li>
              <li>• Know how to manually exit the parking area and building if electronic access fails.</li>
              <li>• Plan for heat or cold because apartment temperatures can become unsafe quickly.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 print:border-slate-400 print:bg-white">
            <h2 className="text-2xl font-black">Before flooding or severe weather</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300 print:text-black">
              <li>• Move vehicles out of low areas before roads and garages begin to flood.</li>
              <li>• Bring balcony furniture, grills, plants, and loose objects indoors when safe and permitted.</li>
              <li>• Move documents, electronics, medications, and irreplaceable items above likely water levels.</li>
              <li>• Ground-floor renters should know where they will go before water reaches the property.</li>
              <li>• Upper-floor residents should still plan for loss of elevators, water, sewer, air conditioning, and access.</li>
            </ul>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-slate-400 print:bg-white">
          <h2 className="text-3xl font-black">Fire and high-rise reality</h2>
          <p className="mt-4 leading-7 text-slate-300 print:text-black">
            Walk every exit route before an emergency. Know at least two ways out when possible, keep hallways and doors clear, and never use an elevator during a fire. If smoke, heat, or flames block your exit, follow fire-department guidance: remain in the unit, close doors, call 911, and signal your location rather than entering an unsafe stairwell. Residents who may need evacuation assistance should make a building-specific plan in advance.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-black">Real-world evidence behind the plan</h2>
          <div className="mt-5 space-y-4 text-slate-300 print:text-black">
            <p>FEMA's 2024 National Household Survey found renters reported lower rates of insurance and emergency supplies than homeowners, even though renter knowledge of evacuation routes was similar. That gap supports focusing on affordable supplies, insurance review, and documentation rather than assuming renters are simply less interested in preparedness.</p>
            <p>U.S. Fire Administration apartment guidance emphasizes knowing exit stairs, practicing escape routes, and reporting damaged alarms or emergency lighting. These recommendations are especially important because residents share corridors and life-safety systems they do not control.</p>
            <p>Consumer Financial Protection Bureau guidance notes that renter's insurance can protect belongings, but standard policies typically do not cover flood or earthquake losses. It also recommends preserving housing, insurance, financial, identity, and medical records before a disaster.</p>
          </div>
        </section>

        <div className="mt-12"><RenterPlanWorksheet /></div>

        <section className="mt-12 print:break-before-page">
          <h2 className="text-3xl font-black">Frequently asked questions</h2>
          <div className="mt-5 space-y-4">{faq.map((item) => <details key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 print:border-slate-400 print:bg-white" open><summary className="cursor-pointer font-bold">{item.q}</summary><p className="mt-3 text-sm leading-6 text-slate-300 print:text-black">{item.a}</p></details>)}</div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-slate-400 print:bg-white">
          <h2 className="text-3xl font-black">Sources and methodology</h2>
          <p className="mt-4 leading-7 text-slate-300 print:text-black">The safety baseline comes from current federal preparedness, fire-safety, financial-protection, and disaster-recovery guidance. Practical recommendations address recurring renter constraints only when they align with those sources. Building procedures, laws, insurance terms, and live emergency conditions must always be verified locally.</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a className="text-sky-400 underline" href="https://www.ready.gov/" target="_blank" rel="noreferrer">Ready.gov: emergency planning and supplies</a></li>
            <li><a className="text-sky-400 underline" href="https://www.usfa.fema.gov/prevention/home-fires/prepare-for-fire/home-fire-escape-plans/" target="_blank" rel="noreferrer">U.S. Fire Administration: home and apartment escape planning</a></li>
            <li><a className="text-sky-400 underline" href="https://www.consumerfinance.gov/consumer-tools/disasters-and-emergencies/get-prepared-before-disaster-emergency-strikes/" target="_blank" rel="noreferrer">Consumer Financial Protection Bureau: preparing finances and records</a></li>
            <li><a className="text-sky-400 underline" href="https://www.fema.gov/sites/default/files/documents/fema_icpd_2024-national-household-survey-on-disaster-preparedness-findings_05072025.pdf" target="_blank" rel="noreferrer">FEMA: 2024 National Household Survey on Disaster Preparedness</a></li>
          </ul>
        </section>

        <section className="mt-12 print:hidden">
          <h2 className="text-2xl font-black">Continue your household plan</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold hover:bg-slate-900" href="/power-outage-checklist">Power outage checklist</Link>
            <Link className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold hover:bg-slate-900" href="/emergency-water-storage">Water storage</Link>
            <Link className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold hover:bg-slate-900" href="/coastal-evacuation-guide">Coastal evacuation</Link>
            <Link className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold hover:bg-slate-900" href="/emergency-communication-plan">Communication plan</Link>
          </div>
        </section>
      </article>
    </main>
  );
}
