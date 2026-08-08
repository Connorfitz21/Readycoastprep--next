import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CommunicationWorksheet from "./CommunicationWorksheet";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Family Emergency Communication Plan & Printable Worksheet | Ready Coast Prep",
  description: "Build and print a family emergency communication plan with contacts, meeting places, official alerts, backup methods, children, pets, medical needs, and outage contingencies.",
  alternates: { canonical: "https://readycoastprep.com/emergency-communication-plan" },
  openGraph: {
    title: "Emergency Communication Plan | Ready Coast Prep",
    description: "A practical, printable household communication plan for storms, evacuations, outages, and family reunification.",
    url: "https://readycoastprep.com/emergency-communication-plan",
    type: "article",
    images: ["/ready-coast-prep-social.png"],
  },
};

const quickChecklist = [
  "Choose one out-of-area contact every household member can reach",
  "Set one meeting place near home and another outside the neighborhood",
  "Save school, childcare, caregiver, medical, pharmacy, and pet contacts",
  "Enroll in official local alerts and confirm Wireless Emergency Alerts are enabled",
  "Keep a battery-powered or hand-crank NOAA Weather Radio available",
  "Write the plan on paper and place copies in bags, wallets, vehicles, and go-bags",
  "Decide when to text, when to call, and what short status message everyone will use",
  "Identify charging backups and a communication option that does not depend on home power",
  "Practice the plan and update it at least twice a year",
];

const layers = [
  { title: "Primary", text: "A short group text or individual text to the out-of-area contact. Keep the message simple: safe or need help, current location, destination, and next check-in time." },
  { title: "Backup", text: "A voice call, voicemail, messaging app, email, or agreed social-media check-in when texts do not deliver. Household members should know which option comes second." },
  { title: "No local service", text: "Use the written plan, meeting locations, school or caregiver procedures, local radio, NOAA Weather Radio, and the out-of-area contact as the information hub." },
  { title: "No power", text: "Use charged power banks, vehicle charging only when safe, low-power mode, paper contact cards, and a radio that does not depend on household electricity." },
];

const lessons = [
  { problem: "Everyone calls everyone at once, draining batteries and repeating conflicting information.", action: "Use one out-of-area contact as the household information hub and assign a single next check-in time." },
  { problem: "Plans exist only on a phone that is lost, dead, locked, or separated from its owner.", action: "Print wallet-size information and keep copies in bags, vehicles, school materials, and go-bags." },
  { problem: "Family members know a meeting place but not when they should go there.", action: "Define the trigger, such as home inaccessible, school released, evacuation ordered, or no contact after a set time." },
  { problem: "People rely on one app or social-media account for warnings.", action: "Use layered alerts: Wireless Emergency Alerts, local emergency alerts, NOAA Weather Radio, and a trusted local broadcast source." },
  { problem: "Children or dependent adults know numbers but do not know the plan.", action: "Practice age-appropriate actions, confirm pickup authorities, and provide written cards with names and numbers." },
];

const faq = [
  { q: "Why use an out-of-area contact?", a: "A person outside the affected area may be easier to reach and can relay status information so household members do not repeatedly call one another." },
  { q: "Should we text or call?", a: "Use the method most likely to work and follow emergency instructions. For non-life-threatening status updates, a short text can be efficient and conserve battery. Call 911 for an immediate emergency when service is available." },
  { q: "How often should the plan be updated?", a: "Review it at least twice a year and whenever phone numbers, schools, caregivers, medications, addresses, pets, or household needs change." },
  { q: "Does a phone replace a weather radio?", a: "No single alert method reaches everyone in every circumstance. NOAA Weather Radio and official local alerts provide additional warning paths when power, cellular service, or internet access is disrupted." },
];

export default function EmergencyCommunicationPlanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Emergency Communication Plan and Printable Worksheet",
    description: "A practical household communication and reunification plan for emergencies.",
    mainEntityOfPage: "https://readycoastprep.com/emergency-communication-plan",
    publisher: { "@type": "Organization", name: "Ready Coast Prep", url: "https://readycoastprep.com" },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white print:bg-white print:text-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="border-b border-slate-800 print:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/icon.png" alt="Ready Coast Prep" width={48} height={48} className="h-11 w-11 rounded-lg" />
            <div><p className="font-black tracking-wide">READY COAST</p><p className="text-xs font-bold tracking-[0.3em] text-amber-400">PREP</p></div>
          </Link>
          <Link href="/guides" className="text-sm font-semibold text-slate-300 hover:text-white">All guides</Link>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 py-12 sm:py-16 print:max-w-none print:px-0 print:py-0">
        <p className="text-sm font-bold tracking-[0.25em] text-amber-400 print:text-black">HOUSEHOLD COMMUNICATION AND REUNIFICATION</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl print:text-4xl">Emergency communication plan</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 print:text-black">Build a plan that still works when household members are separated, cellular networks are congested, power is out, or an evacuation changes where everyone is going.</p>
        <div className="mt-7 flex flex-wrap gap-3 print:hidden"><PrintButton /><Link href="#worksheet" className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold hover:bg-slate-900">Go to worksheet</Link></div>
        <div className="mt-8 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-5 text-sm leading-6 text-amber-100 print:border-black print:bg-white print:text-black">
          <strong>Important:</strong> Ready Coast Prep is a planning resource, not an active alert service. During an emergency, follow current instructions from local public-safety and emergency-management authorities. Call 911 for an immediate life-threatening emergency when service is available.
        </div>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-black print:bg-white">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">PRINTABLE CORE CHECKLIST</p>
          <h2 className="mt-2 text-2xl font-black">Build the plan before communications fail</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 print:grid-cols-2">
            {quickChecklist.map((item) => <label key={item} className="flex gap-3 rounded-xl border border-slate-700 p-4 text-sm leading-6 print:border-black"><input type="checkbox" className="mt-1 h-4 w-4"/><span>{item}</span></label>)}
          </div>
        </section>

        <section className="mt-12">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">LAYERED COMMUNICATION</p>
          <h2 className="mt-2 text-3xl font-black">Do not build the plan around one phone or one network</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {layers.map((item) => <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 print:border-black print:bg-white"><h3 className="font-bold text-amber-300 print:text-black">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-300 print:text-black">{item.text}</p></div>)}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-black print:bg-white">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">WHO NEEDS A SPECIFIC PLAN</p>
          <h2 className="mt-2 text-2xl font-black">Account for the people and responsibilities that complicate reunification</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 text-sm leading-6 text-slate-300 print:text-black">
            <div><h3 className="font-bold text-white print:text-black">Children and schools</h3><p className="mt-2">Know emergency release procedures, authorized pickup adults, alternate caregivers, and how the school communicates when normal pickup is impossible.</p></div>
            <div><h3 className="font-bold text-white print:text-black">Older adults and caregivers</h3><p className="mt-2">Assign check-in responsibility, record mobility or access needs, and make a backup plan when a regular caregiver cannot arrive.</p></div>
            <div><h3 className="font-bold text-white print:text-black">Medical and accessibility needs</h3><p className="mt-2">List providers, pharmacies, equipment companies, relay or interpretation needs, power requirements, and the person who has the current medication list.</p></div>
            <div><h3 className="font-bold text-white print:text-black">Pets</h3><p className="mt-2">Choose who retrieves each animal, record veterinarian and boarding contacts, and share the location of carriers, leashes, medications, and records.</p></div>
          </div>
        </section>

        <section className="mt-12">
          <p className="text-xs font-bold tracking-[0.2em] text-amber-400 print:text-black">RECURRING REAL-WORLD LESSONS</p>
          <h2 className="mt-2 text-3xl font-black">Common communication failures and the practical fix</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 print:text-black">These patterns are used only when they reinforce official preparedness guidance. They are presented as planning lessons, not as a substitute for current instructions.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {lessons.map((item) => <div key={item.problem} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 print:border-black print:bg-white"><p className="text-sm leading-6 text-slate-300 print:text-black"><strong>Observed problem:</strong> {item.problem}</p><p className="mt-3 text-sm leading-6 text-slate-300 print:text-black"><strong>Practical action:</strong> {item.action}</p></div>)}
          </div>
        </section>

        <div id="worksheet"><CommunicationWorksheet /></div>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-black print:bg-white">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">SOURCES AND METHODOLOGY</p>
          <h2 className="mt-2 text-2xl font-black">Official guidance sets the safety baseline</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300 print:text-black">This guide organizes recommendations from Ready.gov and FEMA family-planning resources, National Weather Service warning systems, and official local alert programs. Practical failure lessons are included only when they are consistent with those sources. Alert availability, school procedures, public-safety instructions, and communication service conditions vary by location and event.</p>
          <div className="mt-5 rounded-2xl border border-slate-700 p-5 print:border-black">
            <h3 className="text-lg font-bold">Why communication redundancy matters</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300 print:text-black">GAO reviews of Hurricanes Katrina and Maria documented severe damage to cellular, landline, radio, and broader telecommunications infrastructure. Those failures reduced situational awareness and delayed information sharing. The household-level response is not specialized equipment; it is a written contact plan, an out-of-area contact, text-first check-ins, offline information, backup power, and more than one way to receive warnings.</p>
            <div className="mt-4 flex flex-col gap-2 print:hidden">
              <a href="https://www.gao.gov/assets/a250104.html" target="_blank" rel="noreferrer" className="text-sm font-semibold text-sky-300 hover:text-sky-200">GAO: Katrina communications difficulties ↗</a>
              <a href="https://www.gao.gov/products/gao-21-297" target="_blank" rel="noreferrer" className="text-sm font-semibold text-sky-300 hover:text-sky-200">GAO: Hurricane Maria telecommunications restoration lessons ↗</a>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 print:hidden">
            <a href="https://www.ready.gov/plan" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 p-4 font-semibold hover:border-sky-400">Ready.gov: Make a Plan ↗</a>
            <a href="https://www.ready.gov/fema-app" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 p-4 font-semibold hover:border-sky-400">FEMA App and alerts ↗</a>
            <a href="https://www.weather.gov/wrn/wea" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 p-4 font-semibold hover:border-sky-400">NWS: Wireless Emergency Alerts ↗</a>
            <a href="https://www.weather.gov/nwr/" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 p-4 font-semibold hover:border-sky-400">NOAA Weather Radio ↗</a>
          </div>
          <p className="mt-5 text-xs leading-5 text-slate-400 print:text-black">Verify local alert enrollment, school and caregiver procedures, emergency numbers, and official instructions directly with the responsible organization.</p>
        </section>

        <section className="mt-12 print:hidden">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400">RELATED READY COAST PREP GUIDES</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3"><Link href="/coastal-evacuation-guide" className="rounded-xl border border-slate-800 bg-slate-900 p-4 font-semibold hover:border-sky-400">Coastal evacuation guide</Link><Link href="/power-outage-checklist" className="rounded-xl border border-slate-800 bg-slate-900 p-4 font-semibold hover:border-sky-400">Power outage checklist</Link><Link href="/hurricane-preparedness-checklist" className="rounded-xl border border-slate-800 bg-slate-900 p-4 font-semibold hover:border-sky-400">Hurricane checklist</Link></div>
        </section>

        <section className="mt-12">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">FREQUENTLY ASKED QUESTIONS</p>
          <div className="mt-5 space-y-3">{faq.map((item) => <details key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 print:border-black print:bg-white" open><summary className="cursor-pointer font-bold">{item.q}</summary><p className="mt-3 text-sm leading-6 text-slate-300 print:text-black">{item.a}</p></details>)}</div>
        </section>

        <p className="mt-12 border-t border-slate-800 pt-6 text-xs leading-5 text-slate-500 print:border-black print:text-black">Ready Coast Prep provides general educational planning information. It does not replace instructions from emergency services, local authorities, healthcare providers, schools, caregivers, telecommunications providers, or equipment manufacturers.</p>
      </article>
    </main>
  );
}
