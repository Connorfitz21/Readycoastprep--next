import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "./PrintButton";
import HeatPlanWorksheet from "./HeatPlanWorksheet";

export const metadata: Metadata = {
  title: "Extreme Heat and Power Outage Guide | Ready Coast Prep",
  description:
    "A practical, printable extreme-heat and power-outage plan covering cooling, hydration, fans, medications, medical devices, apartments, pets, food, and when to relocate.",
  alternates: { canonical: "https://readycoastprep.com/extreme-heat-power-outage" },
  openGraph: {
    title: "Extreme Heat and Power Outage Guide",
    description: "Prepare for dangerous indoor heat, loss of air conditioning, medical needs, pets, food safety, and early relocation.",
    url: "https://readycoastprep.com/extreme-heat-power-outage",
    type: "article",
  },
};

const checklist = [
  "Identify an air-conditioned destination and a backup before extreme heat arrives.",
  "Confirm how local cooling centers, transportation assistance, and emergency alerts will be announced.",
  "Store drinking water and plan for people whose clinicians have prescribed fluid or sodium restrictions.",
  "Charge phones, power banks, cooling devices, and backup power for essential medical equipment.",
  "Ask a clinician or pharmacist how heat and power loss affect medications, refrigeration, and medical devices.",
  "Install or test window coverings and reduce indoor heat gain before the hottest part of the day.",
  "Plan check-ins for older adults, infants, pregnant people, people living alone, and anyone with chronic illness or limited mobility.",
  "Prepare safe transportation, carriers, water, and a cooled destination for pets.",
  "Place refrigerator and freezer thermometers where they are easy to read and review outage food-safety rules.",
  "Write down the conditions that mean the household will relocate instead of remaining in a warming home.",
];

const timeline = [
  { title: "Before hot weather", text: "Service air conditioning, improve shade and weather sealing, identify cooling locations, review medications, and build a household check-in list." },
  { title: "48–24 hours before", text: "Charge devices, close blinds before peak sun, prepare water and no-cook food, confirm transportation, refill prescriptions, and verify local heat alerts and cooling resources." },
  { title: "First hours without power", text: "Report the outage, preserve phone batteries, reduce activity and appliance use, take cool showers or use wet cloths, monitor symptoms and indoor conditions, and confirm that the cooling destination remains open." },
  { title: "Indoor heat keeps rising", text: "Do not wait for severe illness. Move higher-risk people, pets, and anyone dependent on powered medical equipment to verified cooling before transportation or health conditions worsen." },
];

const commonFailures = [
  { title: "Treating a fan like air conditioning", action: "Use fans only within official heat guidance. CDC advises fan use for body cooling only when indoor temperatures are below 90°F; when it is hotter, seek air conditioning." },
  { title: "Waiting for visible distress", action: "Use a prewritten departure trigger. Confusion, fainting, severe weakness, or suspected heat stroke require immediate emergency action, not continued monitoring at home." },
  { title: "Assuming a cooling center solves transportation", action: "Verify the location, hours, accessibility, pet policy, and a way to get there before power fails or transit service changes." },
  { title: "Changing medications without guidance", action: "Some medications increase heat risk or degrade in high temperatures. Make a clinician-approved plan and never stop or alter medicine on your own." },
  { title: "Forgetting upper floors and shared systems", action: "Apartments can heat unevenly, and elevators or access systems may fail. Ask management about backup systems and plan a stair-safe departure early." },
  { title: "Using the car as a cooling room", action: "Never leave a person or pet in a parked vehicle. A running vehicle also creates fuel, exhaust, and supervision risks; use a verified cooled destination instead." },
];

const faq = [
  { q: "When is it too hot to rely on a fan?", a: "CDC says to use fans for body cooling only when indoor temperatures are below 90°F. Above that, a fan can increase body temperature. Seek an air-conditioned place rather than treating airflow as adequate cooling." },
  { q: "What are warning signs of heat stroke?", a: "Heat stroke can involve confusion, loss of consciousness, very high body temperature, hot skin, or other severe symptoms. Call 911 immediately and begin rapid cooling while help is coming." },
  { q: "Should I drink electrolyte beverages?", a: "Water is appropriate for many people, but individual fluid and electrolyte needs vary. People with heart, kidney, endocrine, or fluid-restriction concerns should follow clinician guidance rather than a generic rule." },
  { q: "What should I do about refrigerated medicine during an outage?", a: "Make a plan with a pharmacist or clinician before an outage. Storage limits vary by product. Do not place medicine directly on ice or discard it based only on a general website rule." },
  { q: "When should my household leave?", a: "Relocate before anyone becomes seriously ill and before transportation becomes difficult. Triggers may include loss of effective cooling, rising indoor temperature, heat symptoms, failed medical equipment, unavailable water, or an official instruction." },
];

export default function ExtremeHeatPowerOutagePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Extreme Heat and Power Outage Guide",
    description: metadata.description,
    mainEntityOfPage: "https://readycoastprep.com/extreme-heat-power-outage",
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
        <p className="text-sm font-bold tracking-[0.2em] text-orange-300 print:text-black">YEAR-ROUND HOUSEHOLD READINESS</p>
        <h1 className="mt-3 max-w-5xl text-5xl font-black tracking-tight sm:text-6xl">Extreme heat and power outage guide</h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300 print:text-black">
          Extreme heat becomes more dangerous when air conditioning, elevators, refrigeration, communications, or medical equipment lose power. This guide combines official health guidance, outage planning, and recurring household failure lessons into a practical plan focused on early cooling decisions rather than waiting for a medical emergency.
        </p>

        <aside className="mt-8 rounded-2xl border border-amber-400/40 bg-amber-400/10 p-5 print:border-black print:bg-white">
          <h2 className="font-black">Health and safety notice</h2>
          <p className="mt-2 text-sm leading-6 text-slate-200 print:text-black">
            This page is general preparedness information, not medical advice, a live heat warning, a cooling-center directory, or a substitute for current local instructions. Call 911 for suspected heat stroke, loss of consciousness, severe confusion, or immediate danger. Follow clinician and pharmacist directions for medications, fluid restrictions, and medical devices.
          </p>
        </aside>

        <section className="mt-12 rounded-3xl border border-orange-400/30 bg-orange-400/10 p-6 sm:p-8 print:border-black print:bg-white">
          <h2 className="text-3xl font-black">Extreme-heat outage checklist</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {checklist.map((item) => <label key={item} className="flex gap-3 rounded-xl border border-slate-700 bg-slate-950/40 p-4 text-sm leading-6 print:border-slate-400 print:bg-white"><input type="checkbox" className="mt-1 h-4 w-4" /><span>{item}</span></label>)}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-black">Plan by phase</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {timeline.map((item) => <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 print:border-slate-400 print:bg-white"><h3 className="text-xl font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-300 print:text-black">{item.text}</p></div>)}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 print:border-slate-400 print:bg-white">
            <h2 className="text-2xl font-black">Cool the person, not just the room</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300 print:text-black">
              <li>• Move to air conditioning when available; even a few hours in a cool place can reduce heat risk.</li>
              <li>• Take cool showers or baths, use cool wet cloths, wear loose lightweight clothing, and reduce exertion.</li>
              <li>• Close shades before direct sun reaches the windows and avoid ovens or heat-producing appliances.</li>
              <li>• CDC advises using fans for body cooling only when indoor temperatures are below 90°F.</li>
              <li>• Check on people living alone and anyone with health, age, pregnancy, mobility, or medication-related risk.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 print:border-slate-400 print:bg-white">
            <h2 className="text-2xl font-black">Recognize escalating illness</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300 print:text-black">
              <li>• Heat exhaustion may involve heavy sweating, weakness, dizziness, headache, nausea, or fainting.</li>
              <li>• Heat stroke is an emergency and may involve confusion, unconsciousness, very high temperature, or hot skin.</li>
              <li>• Move the person to a cooler area, remove excess clothing, cool rapidly with wet cloths or cold packs, and call 911 for suspected heat stroke.</li>
              <li>• Do not give fluids to an unconscious or confused person.</li>
              <li>• Symptoms, risk factors, and treatment decisions require professional medical judgment.</li>
            </ul>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 print:border-slate-400 print:bg-white"><h2 className="text-2xl font-black">Water and medications</h2><p className="mt-4 text-sm leading-6 text-slate-300 print:text-black">Keep water accessible and drink regularly unless a clinician has given different instructions. Some prescriptions and common over-the-counter medicines affect thirst, sweating, circulation, electrolytes, or heat tolerance. Never adjust them without medical guidance, and protect medications from excessive heat.</p></div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 print:border-slate-400 print:bg-white"><h2 className="text-2xl font-black">Apartments and access</h2><p className="mt-4 text-sm leading-6 text-slate-300 print:text-black">Upper floors and sun-facing units may heat quickly. Ask which shared systems receive backup power, including elevators, access doors, water pumps, and common-area cooling. People unable to use stairs need an earlier, building-specific relocation plan.</p></div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 print:border-slate-400 print:bg-white"><h2 className="text-2xl font-black">Pets, food, and vehicles</h2><p className="mt-4 text-sm leading-6 text-slate-300 print:text-black">Provide cool water and a cooled destination for pets, protect paws from hot surfaces, and never leave anyone in a parked vehicle. Keep refrigerator and freezer doors closed and follow food-safety time and temperature guidance during extended outages.</p></div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-black">Common failures and practical fixes</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {commonFailures.map((item) => <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 print:border-slate-400 print:bg-white"><h3 className="text-lg font-bold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-300 print:text-black"><span className="font-bold text-orange-300 print:text-black">Practical fix: </span>{item.action}</p></div>)}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-slate-400 print:bg-white">
          <h2 className="text-3xl font-black">What public-health experience teaches</h2>
          <div className="mt-5 space-y-4 text-slate-300 print:text-black">
            <p>CDC heat guidance treats cooling access as a health intervention, not a comfort preference. It notes that even several hours in air conditioning can reduce risk and specifically warns that fans are not adequate at very high indoor temperatures.</p>
            <p>CDC clinical guidance also identifies a recurring but less visible problem: commonly used medications may affect thirst, sweating, circulation, electrolytes, cognition, or drug stability during heat. The practical lesson is to make a medication and power-outage plan with a clinician or pharmacist before a heat emergency.</p>
            <p>These are population-level lessons, not a prediction for a particular person or building. Current HeatRisk information, indoor conditions, health status, access to transportation, and local emergency instructions determine the safest action during an actual event.</p>
          </div>
        </section>

        <div className="mt-12"><HeatPlanWorksheet /></div>

        <section className="mt-12 print:break-before-page">
          <h2 className="text-3xl font-black">Frequently asked questions</h2>
          <div className="mt-5 space-y-4">{faq.map((item) => <details key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 print:border-slate-400 print:bg-white" open><summary className="cursor-pointer font-bold">{item.q}</summary><p className="mt-3 text-sm leading-6 text-slate-300 print:text-black">{item.a}</p></details>)}</div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-slate-400 print:bg-white">
          <h2 className="text-3xl font-black">Sources and methodology</h2>
          <p className="mt-4 leading-7 text-slate-300 print:text-black">The safety baseline comes from current CDC and Ready.gov heat and outage guidance. Practical recommendations address recurring household failures only when they align with those sources. Medical advice, medication instructions, local cooling-center information, utility notices, building procedures, and active emergency orders take precedence.</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a className="text-sky-400 underline" href="https://www.cdc.gov/extreme-heat/prevention/index.html" target="_blank" rel="noreferrer">CDC: heat and your health</a></li>
            <li><a className="text-sky-400 underline" href="https://www.cdc.gov/heat-health/hcp/clinical-guidance/how-to-use-the-heatrisk-tool-and-air-quality-index.html" target="_blank" rel="noreferrer">CDC: HeatRisk actions and air quality</a></li>
            <li><a className="text-sky-400 underline" href="https://www.cdc.gov/heat-health/hcp/clinical-guidance/heat-and-medications-guidance-for-clinicians.html" target="_blank" rel="noreferrer">CDC: heat and medications</a></li>
            <li><a className="text-sky-400 underline" href="https://www.cdc.gov/natural-disasters/response/what-to-do-protect-yourself-during-a-power-outage.html" target="_blank" rel="noreferrer">CDC: protecting yourself during a power outage</a></li>
            <li><a className="text-sky-400 underline" href="https://www.ready.gov/heat" target="_blank" rel="noreferrer">Ready.gov: extreme heat</a></li>
          </ul>
        </section>

        <section className="mt-12 print:hidden">
          <h2 className="text-2xl font-black">Continue your household plan</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold hover:bg-slate-900" href="/power-outage-checklist">Power outage checklist</Link>
            <Link className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold hover:bg-slate-900" href="/emergency-water-storage">Emergency water</Link>
            <Link className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold hover:bg-slate-900" href="/emergency-communication-plan">Communication plan</Link>
            <Link className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold hover:bg-slate-900" href="/apartment-renter-emergency-preparedness">Apartment and renter guide</Link>
            <Link className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold hover:bg-slate-900" href="/pet-hurricane-evacuation-guide">Pet emergency plan</Link>
          </div>
        </section>
      </article>
    </main>
  );
}
