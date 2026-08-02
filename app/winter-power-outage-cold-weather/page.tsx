import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "./PrintButton";
import WinterPlanWorksheet from "./WinterPlanWorksheet";

export const metadata: Metadata = {
  title: "Winter Power Outage and Extreme Cold Guide | Ready Coast Prep",
  description:
    "A practical, printable winter power-outage plan covering safe heat, carbon monoxide, frozen pipes, food, medicine, pets, vehicles, apartments, and when to leave.",
  alternates: { canonical: "https://readycoastprep.com/winter-power-outage-cold-weather" },
  openGraph: {
    title: "Winter Power Outage and Extreme Cold Guide",
    description: "Prepare your household for freezing temperatures, unsafe indoor cold, frozen pipes, travel disruption, and prolonged loss of power.",
    url: "https://readycoastprep.com/winter-power-outage-cold-weather",
    type: "article",
  },
};

const checklist = [
  "Test smoke alarms and battery-powered or battery-backup carbon-monoxide detectors.",
  "Identify one safe primary heating method and one warm place you can reach if the home becomes unsafe.",
  "Never plan to heat the home with a gas oven, charcoal grill, camp stove, or outdoor fuel-burning device.",
  "Locate the main water shutoff, keep the required tool nearby, and insulate vulnerable pipes before freezing weather.",
  "Charge phones and power banks; place flashlights and headlamps where they can be reached in the dark.",
  "Refill prescriptions and confirm backup power or relocation plans for medical devices and refrigerated medicine.",
  "Store easy-to-prepare food, safe drinking water, warm layers, blankets, and supplies for every person and pet.",
  "Keep the vehicle fueled, clear snow from the exhaust before running it, and carry a winter roadside kit.",
  "Ask apartment management what backup power serves elevators, access doors, water pumps, alarms, and heat.",
  "Write down the conditions that mean your household will leave rather than continue sheltering at home.",
];

const timeline = [
  { title: "Before winter", text: "Service heating equipment, inspect chimneys or flues, weather-strip drafts, insulate exposed water lines, test alarms, and review insurance and emergency contacts." },
  { title: "48–24 hours before", text: "Charge devices, refill fuel safely, move vehicles from vulnerable locations, bring pets inside, pick up medication, and confirm where warming centers or shelters would be announced." },
  { title: "First 4 hours without power", text: "Report the outage, preserve phone batteries, keep refrigerator and freezer doors closed, monitor indoor temperature, and use only approved indoor heating equipment exactly as directed." },
  { title: "Extended outage", text: "Consolidate activity into a safe room, wear loose dry layers, check vulnerable household members, protect plumbing, reassess food and medicine temperatures, and leave before travel becomes impossible." },
];

const commonFailures = [
  { title: "Waiting until the home is dangerously cold", action: "Choose a warm destination and departure threshold in advance. Do not wait for symptoms of cold injury or impassable roads." },
  { title: "Using outdoor equipment indoors", action: "Generators, grills, camp stoves, and charcoal devices stay outdoors and away from openings. A gas range or oven is not a home heater." },
  { title: "Assuming a generator solves everything", action: "Prioritize loads, use outdoor-rated cords, keep the unit dry and more than 20 feet from doors, windows, and vents, and maintain working CO detection." },
  { title: "Discovering frozen plumbing too late", action: "Know the shutoff location, protect exposed pipes, keep safe heat reaching plumbing areas, and address loss of water as a reason to relocate." },
  { title: "Relying on one phone or one vehicle", action: "Keep paper contacts, radio access, more than one charging method, and a transportation backup." },
  { title: "Driving after conditions collapse", action: "Leave early when relocation is necessary. If travel is not essential, stay off icy roads and follow official advisories." },
];

const faq = [
  { q: "Can I use my gas oven to heat the home?", a: "No. CDC guidance says never use a gas range or oven to heat a home. It creates fire and carbon-monoxide risks. Use only equipment approved for indoor heating and follow its instructions." },
  { q: "How far should a portable generator be from the home?", a: "CDC guidance says operate it outdoors more than 20 feet from windows, doors, and vents. Never run it in a home, garage, basement, carport, or other enclosed or partly enclosed area." },
  { q: "When should I leave during a cold-weather outage?", a: "Leave before the home becomes unsafe or travel becomes unreliable. Triggers may include dangerous indoor cold, inability to power medical equipment, failed water service, unavailable safe heat, an official evacuation instruction, or worsening road conditions." },
  { q: "Should I drip faucets to prevent frozen pipes?", a: "Pipe guidance varies with the plumbing layout and local utility recommendations. Insulate vulnerable lines, maintain safe heat, know the shutoff, and follow local water-utility or licensed-plumber advice for your property." },
  { q: "Is a building generator enough for an apartment?", a: "Do not assume it powers individual units or heating. Ask management which systems receive backup power, how long fuel lasts, and what residents should do if elevators, water pumps, access controls, or heat fail." },
];

export default function WinterColdWeatherPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Winter Power Outage and Extreme Cold Guide",
    description: metadata.description,
    mainEntityOfPage: "https://readycoastprep.com/winter-power-outage-cold-weather",
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
        <p className="text-sm font-bold tracking-[0.2em] text-sky-400 print:text-black">YEAR-ROUND HOUSEHOLD READINESS</p>
        <h1 className="mt-3 max-w-5xl text-5xl font-black tracking-tight sm:text-6xl">Winter power outage and extreme cold guide</h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300 print:text-black">
          Cold-weather outages combine several problems at once: loss of heat, frozen plumbing, unsafe alternative heating, disrupted travel, food and medicine temperature concerns, and limited ways to relocate. This guide turns official winter-safety guidance and documented outage lessons into a household plan with clear actions and leave-home triggers.
        </p>

        <aside className="mt-8 rounded-2xl border border-amber-400/40 bg-amber-400/10 p-5 print:border-black print:bg-white">
          <h2 className="font-black">Safety notice</h2>
          <p className="mt-2 text-sm leading-6 text-slate-200 print:text-black">
            This page is general preparedness information, not a live forecast, medical diagnosis, utility notice, heating-equipment approval, or substitute for local emergency instructions. Follow current warnings, equipment manuals, building procedures, utility directions, and public-safety orders. Call 911 for immediate danger or suspected carbon-monoxide poisoning.
          </p>
        </aside>

        <section className="mt-12 rounded-3xl border border-sky-500/30 bg-sky-500/10 p-6 sm:p-8 print:border-black print:bg-white">
          <h2 className="text-3xl font-black">Cold-weather readiness checklist</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {checklist.map((item) => <label key={item} className="flex gap-3 rounded-xl border border-slate-700 bg-slate-950/40 p-4 text-sm leading-6 print:border-slate-400 print:bg-white"><input type="checkbox" className="mt-1 h-4 w-4" /><span>{item}</span></label>)}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-black">Plan by phase, not by panic</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {timeline.map((item) => <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 print:border-slate-400 print:bg-white"><h3 className="text-xl font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-300 print:text-black">{item.text}</p></div>)}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 print:border-slate-400 print:bg-white">
            <h2 className="text-2xl font-black">Heat safely</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300 print:text-black">
              <li>• Use only heating equipment listed for indoor use and follow clearances, ventilation, fuel, and supervision instructions.</li>
              <li>• Keep anything that can burn at least three feet from portable heaters and fireplaces.</li>
              <li>• Never use a gas oven, grill, charcoal device, camp stove, or generator to heat an indoor space.</li>
              <li>• Use flashlights or battery lanterns instead of candles when possible.</li>
              <li>• If the home cannot be kept safely warm, relocate to a verified warm location before roads deteriorate.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 print:border-slate-400 print:bg-white">
            <h2 className="text-2xl font-black">Recognize cold and CO danger</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300 print:text-black">
              <li>• Common carbon-monoxide symptoms include headache, dizziness, weakness, nausea, vomiting, chest pain, and confusion.</li>
              <li>• Hypothermia may involve shivering, confusion, drowsiness, poor coordination, or slurred speech.</li>
              <li>• Frostbite can cause numbness, pain, or skin-color changes, especially on fingers, toes, ears, nose, cheeks, and chin.</li>
              <li>• Move to fresh air and seek emergency help immediately when CO poisoning is suspected.</li>
              <li>• Older adults, infants, pregnant people, and people with heart, lung, mobility, or medical-device needs require earlier contingencies.</li>
            </ul>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 print:border-slate-400 print:bg-white"><h2 className="text-2xl font-black">Pipes and water</h2><p className="mt-4 text-sm leading-6 text-slate-300 print:text-black">Insulate exposed lines, keep safe heat reaching vulnerable plumbing, open cabinet doors only when safe for children and pets, and know the main shutoff. If a pipe freezes, use local utility or licensed-plumber guidance and never use an open flame to thaw it.</p></div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 print:border-slate-400 print:bg-white"><h2 className="text-2xl font-black">Food and medicine</h2><p className="mt-4 text-sm leading-6 text-slate-300 print:text-black">Keep refrigerator and freezer doors closed, use appliance thermometers, and follow food-safety time and temperature rules. Do not place food outdoors where temperature, animals, or contamination cannot be controlled. Ask a pharmacist or clinician in advance how temperature-sensitive medicine should be handled.</p></div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 print:border-slate-400 print:bg-white"><h2 className="text-2xl font-black">Vehicles and travel</h2><p className="mt-4 text-sm leading-6 text-slate-300 print:text-black">Avoid unnecessary travel during ice, low visibility, or official advisories. Carry warm clothing, blankets, water, food, lighting, a charger, traction aids, and a shovel. Before running a stranded vehicle, clear the exhaust pipe and follow current emergency guidance.</p></div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-black">Common failures and practical fixes</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {commonFailures.map((item) => <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 print:border-slate-400 print:bg-white"><h3 className="text-lg font-bold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-300 print:text-black"><span className="font-bold text-sky-300 print:text-black">Practical fix: </span>{item.action}</p></div>)}
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-slate-400 print:bg-white">
          <h2 className="text-3xl font-black">What documented outages teach</h2>
          <div className="mt-5 space-y-4 text-slate-300 print:text-black">
            <p>The joint FERC-NERC review of the February 2021 freeze documented widespread generation failures and rolling outages affecting millions of customers, with some households without power for days. For household planning, the lesson is not to assume an outage will be brief simply because cold weather is unusual for the region.</p>
            <p>CDC winter and outage guidance repeatedly emphasizes the same preventable hazards seen after severe storms: indoor use of generators or cooking devices, blocked ventilation, unsafe heating, delayed relocation, and risky travel. The practical plan therefore prioritizes safe heat, functioning CO detection, early leave-home decisions, and more than one way to receive information.</p>
            <p>These reports describe system-level and public-health patterns, not a prediction for a specific home. Local forecasts, utility restoration estimates, building conditions, and individual medical needs determine the appropriate action during an actual event.</p>
          </div>
        </section>

        <div className="mt-12"><WinterPlanWorksheet /></div>

        <section className="mt-12 print:break-before-page">
          <h2 className="text-3xl font-black">Frequently asked questions</h2>
          <div className="mt-5 space-y-4">{faq.map((item) => <details key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 print:border-slate-400 print:bg-white" open><summary className="cursor-pointer font-bold">{item.q}</summary><p className="mt-3 text-sm leading-6 text-slate-300 print:text-black">{item.a}</p></details>)}</div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-slate-400 print:bg-white">
          <h2 className="text-3xl font-black">Sources and methodology</h2>
          <p className="mt-4 leading-7 text-slate-300 print:text-black">The safety baseline comes from current CDC, Ready.gov, National Weather Service, American Red Cross, and federal grid-reliability guidance. Practical recommendations address recurring household failures only when they align with those sources. Equipment instructions, local building procedures, utility notices, medical advice, and active emergency orders take precedence.</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a className="text-sky-400 underline" href="https://www.cdc.gov/winter-weather/safety/index.html" target="_blank" rel="noreferrer">CDC: preparing for a winter storm</a></li>
            <li><a className="text-sky-400 underline" href="https://www.cdc.gov/winter-weather/safety/stay-safe-during-after-a-winter-storm-safety.html" target="_blank" rel="noreferrer">CDC: safety during and after a winter storm</a></li>
            <li><a className="text-sky-400 underline" href="https://www.cdc.gov/natural-disasters/response/what-to-do-protect-yourself-during-a-power-outage.html" target="_blank" rel="noreferrer">CDC: protecting yourself during a power outage</a></li>
            <li><a className="text-sky-400 underline" href="https://www.ready.gov/winter-ready" target="_blank" rel="noreferrer">Ready.gov: winter readiness</a></li>
            <li><a className="text-sky-400 underline" href="https://www.weather.gov/safety/winter" target="_blank" rel="noreferrer">National Weather Service: winter weather safety</a></li>
            <li><a className="text-sky-400 underline" href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/winter-storm.html" target="_blank" rel="noreferrer">American Red Cross: winter storm safety</a></li>
            <li><a className="text-sky-400 underline" href="https://www.ferc.gov/news-events/news/final-report-february-2021-freeze-underscores-winterization-recommendations" target="_blank" rel="noreferrer">FERC and NERC: final report on the February 2021 freeze</a></li>
          </ul>
        </section>

        <section className="mt-12 print:hidden">
          <h2 className="text-2xl font-black">Continue your household plan</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold hover:bg-slate-900" href="/power-outage-checklist">Power outage checklist</Link>
            <Link className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold hover:bg-slate-900" href="/emergency-food-supply-guide">Emergency food</Link>
            <Link className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold hover:bg-slate-900" href="/emergency-communication-plan">Communication plan</Link>
            <Link className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold hover:bg-slate-900" href="/apartment-renter-emergency-preparedness">Apartment and renter guide</Link>
            <Link className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold hover:bg-slate-900" href="/pet-hurricane-evacuation-guide">Pet emergency plan</Link>
          </div>
        </section>
      </article>
    </main>
  );
}
