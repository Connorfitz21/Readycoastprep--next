"use client";

import { useEffect, useMemo, useState } from "react";

type HouseholdData = {
  householdName: string;
  adults: number;
  children: number;
  seniors: number;
  pets: number;
  medicalNeeds: boolean;
  accessibilityNeeds: boolean;
  hazards: string[];
  waterGallons: number;
  meals: number;
  firstAid: boolean;
  flashlights: boolean;
  weatherRadio: boolean;
  powerBanks: boolean;
};

type PlanDetails = {
  housing: "house" | "apartment" | "mobile";
  evacuationPlan: boolean;
  communicationPlan: boolean;
  backupDestination: boolean;
  transportationConcern: boolean;
  refrigeratedMedication: boolean;
  backupPower: boolean;
};

type ActionItem = {
  priority: number;
  title: string;
  reason: string;
  href: string;
  guide: string;
};

const defaultHousehold: HouseholdData = {
  householdName: "",
  adults: 1,
  children: 0,
  seniors: 0,
  pets: 0,
  medicalNeeds: false,
  accessibilityNeeds: false,
  hazards: [],
  waterGallons: 0,
  meals: 0,
  firstAid: false,
  flashlights: false,
  weatherRadio: false,
  powerBanks: false,
};

const defaultDetails: PlanDetails = {
  housing: "house",
  evacuationPlan: false,
  communicationPlan: false,
  backupDestination: false,
  transportationConcern: false,
  refrigeratedMedication: false,
  backupPower: false,
};

export default function PreparednessPlanner() {
  const [household, setHousehold] = useState<HouseholdData>(defaultHousehold);
  const [details, setDetails] = useState<PlanDetails>(defaultDetails);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedHousehold = window.localStorage.getItem("rcp-household");
      const savedDetails = window.localStorage.getItem("rcp-plan-details");

      if (savedHousehold) {
        setHousehold({ ...defaultHousehold, ...JSON.parse(savedHousehold) });
      }
      if (savedDetails) {
        setDetails({ ...defaultDetails, ...JSON.parse(savedDetails) });
      }
    } catch {
      // Continue with a blank local plan if browser storage cannot be read.
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;
    window.localStorage.setItem("rcp-plan-details", JSON.stringify(details));
  }, [details, loaded]);

  const people = Math.max(1, household.adults + household.children + household.seniors);
  const waterTarget = people * 3;
  const mealTarget = people * 9;

  const actions = useMemo<ActionItem[]>(() => {
    const items: Omit<ActionItem, "priority">[] = [];

    if (household.waterGallons < waterTarget) {
      items.push({
        title: `Add ${waterTarget - household.waterGallons} gallons of stored water`,
        reason: `Your current entry is below the three-day household baseline for ${people} people.`,
        href: "/emergency-water-storage",
        guide: "Water storage guide",
      });
    }

    if (household.meals < mealTarget) {
      items.push({
        title: `Add ${mealTarget - household.meals} shelf-stable meal equivalents`,
        reason: "Your food inventory is below three meals per person per day for three days.",
        href: "/emergency-food-supply-guide",
        guide: "Food supply guide",
      });
    }

    if (!details.communicationPlan || !household.weatherRadio || !household.powerBanks) {
      items.push({
        title: "Complete a communications and alert backup plan",
        reason: "A plan should still work when cellular service, charging, or household separation becomes a problem.",
        href: "/emergency-communication-plan",
        guide: "Communication plan",
      });
    }

    if (!details.evacuationPlan || !details.backupDestination || details.transportationConcern) {
      items.push({
        title: "Confirm an evacuation destination, route, and transportation backup",
        reason: "Departure decisions become harder when destinations, vehicles, bridges, shelters, or traffic are uncertain.",
        href: "/coastal-evacuation-guide",
        guide: "Evacuation guide",
      });
    }

    if (household.pets > 0) {
      items.push({
        title: `Build a complete plan for ${household.pets} pet${household.pets === 1 ? "" : "s"}`,
        reason: "Carriers, records, medication, lodging, food, and backup caregivers should be arranged before an evacuation.",
        href: "/pet-hurricane-evacuation-guide",
        guide: "Pet evacuation guide",
      });
    }

    if (household.medicalNeeds || household.accessibilityNeeds || details.refrigeratedMedication) {
      items.push({
        title: "Create a medical, medication, and accessibility continuity plan",
        reason: "Power, transportation, refrigeration, mobility, and caregiver disruptions can turn a manageable outage into an urgent relocation decision.",
        href: "/power-outage-checklist",
        guide: "Power outage checklist",
      });
    }

    if (!household.firstAid || !household.flashlights || !household.powerBanks || !details.backupPower) {
      items.push({
        title: "Close basic outage equipment gaps",
        reason: "Lighting, first aid, charging, and safe backup-power planning support nearly every emergency scenario.",
        href: "/power-outage-checklist",
        guide: "Power outage checklist",
      });
    }

    if (details.housing === "apartment") {
      items.push({
        title: "Complete the apartment and renter emergency worksheet",
        reason: "Shared utilities, stair access, elevators, parking areas, property management, and limited storage require a different plan.",
        href: "/apartment-renter-emergency-preparedness",
        guide: "Apartment and renter guide",
      });
    }

    if (household.hazards.includes("Hurricane") || household.hazards.includes("Flood")) {
      items.push({
        title: "Finish the phased coastal storm checklist",
        reason: "Home protection, evacuation timing, flood exposure, supplies, and post-storm reentry should be coordinated before a watch or warning.",
        href: "/hurricane-preparedness-checklist",
        guide: "Hurricane checklist",
      });
    }

    if (household.hazards.includes("Winter storm")) {
      items.push({
        title: "Prepare for loss of heat and freezing conditions",
        reason: "Safe heating, carbon monoxide prevention, pipes, medication, vehicles, and relocation thresholds require advance planning.",
        href: "/winter-power-outage-cold-weather",
        guide: "Winter outage guide",
      });
    }

    if (household.hazards.includes("Extreme heat")) {
      items.push({
        title: "Set a heat-outage cooling and relocation plan",
        reason: "Indoor temperatures, medication, pets, vulnerable household members, and transportation determine how long remaining home is safe.",
        href: "/extreme-heat-power-outage",
        guide: "Extreme heat guide",
      });
    }

    return items.slice(0, 8).map((item, index) => ({ ...item, priority: index + 1 }));
  }, [details, household, mealTarget, people, waterTarget]);

  const completedSignals = [
    household.waterGallons >= waterTarget,
    household.meals >= mealTarget,
    household.firstAid,
    household.flashlights,
    household.weatherRadio,
    household.powerBanks,
    details.communicationPlan,
    details.evacuationPlan,
    details.backupDestination,
  ].filter(Boolean).length;

  const progress = Math.round((completedSignals / 9) * 100);

  function updateDetail<K extends keyof PlanDetails>(key: K, value: PlanDetails[K]) {
    setDetails((current) => ({ ...current, [key]: value }));
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white print:bg-white print:text-black">
      <style>{`@media print { .no-print { display: none !important; } .print-card { break-inside: avoid; border-color: #cbd5e1 !important; background: white !important; color: black !important; } a { color: black !important; text-decoration: none !important; } }`}</style>

      <header className="no-print border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="font-black tracking-wide">READY COAST PREP</a>
          <nav className="flex gap-4 text-sm font-semibold text-slate-300">
            <a href="/#readiness-tool" className="hover:text-white">Readiness Tool</a>
            <a href="/#resources" className="hover:text-white">Guides</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          <div>
            <p className="text-sm font-bold tracking-[0.22em] text-amber-400 print:text-black">PERSONALIZED HOUSEHOLD PLAN</p>
            <h1 className="mt-3 text-4xl font-black sm:text-5xl">One plan that connects your score, risks, and guides</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300 print:text-black">
              This page turns locally saved household information into a prioritized action list. Your entries stay in this browser unless you clear them. Print the plan and keep it with your emergency documents.
            </p>
            <div className="no-print mt-7 flex flex-wrap gap-3">
              <button onClick={() => window.print()} className="rounded-xl bg-sky-500 px-6 py-3 font-bold hover:bg-sky-400">Print my plan</button>
              <a href="/#readiness-tool" className="rounded-xl border border-slate-700 px-6 py-3 font-bold hover:bg-slate-900">Update household inventory</a>
            </div>
          </div>
          <div className="print-card rounded-3xl border border-slate-700 bg-slate-900 p-6 text-center">
            <p className="text-sm text-slate-400 print:text-black">Core plan completion</p>
            <p className="mt-2 text-5xl font-black">{progress}%</p>
            <p className="mt-3 text-sm text-slate-400 print:text-black">Based on nine foundational planning signals</p>
          </div>
        </div>

        <section className="no-print mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400">PLAN DETAILS</p>
          <h2 className="mt-2 text-2xl font-black">Add the constraints your readiness score cannot see</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-bold">Housing type</span>
              <select value={details.housing} onChange={(event) => updateDetail("housing", event.target.value as PlanDetails["housing"])} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3">
                <option value="house">House or townhouse</option>
                <option value="apartment">Apartment or rented multifamily building</option>
                <option value="mobile">Mobile or manufactured home</option>
              </select>
            </label>
            <Toggle label="Written communication plan completed" checked={details.communicationPlan} onChange={(value) => updateDetail("communicationPlan", value)} />
            <Toggle label="Evacuation route and departure plan completed" checked={details.evacuationPlan} onChange={(value) => updateDetail("evacuationPlan", value)} />
            <Toggle label="Backup destination confirmed" checked={details.backupDestination} onChange={(value) => updateDetail("backupDestination", value)} />
            <Toggle label="Transportation could be a problem" checked={details.transportationConcern} onChange={(value) => updateDetail("transportationConcern", value)} />
            <Toggle label="Medication or supplies require refrigeration" checked={details.refrigeratedMedication} onChange={(value) => updateDetail("refrigeratedMedication", value)} />
            <Toggle label="Safe backup-power plan is available" checked={details.backupPower} onChange={(value) => updateDetail("backupPower", value)} />
          </div>
        </section>

        <section className="mt-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-amber-400 print:text-black">PRIORITIZED ACTION LIST</p>
              <h2 className="mt-2 text-3xl font-black">What your household should address next</h2>
            </div>
            <p className="text-sm text-slate-400 print:text-black">Generated {new Date().toLocaleDateString()}</p>
          </div>

          <div className="mt-6 space-y-4">
            {actions.length === 0 ? (
              <div className="print-card rounded-2xl border border-emerald-700 bg-emerald-950/40 p-6">
                <h3 className="text-xl font-bold">No major baseline gaps detected</h3>
                <p className="mt-2 text-slate-300 print:text-black">Review individual guides, test equipment, rotate supplies, and verify official local information regularly.</p>
              </div>
            ) : actions.map((action) => (
              <article key={`${action.priority}-${action.title}`} className="print-card rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500 font-black text-white">{action.priority}</span>
                  <div>
                    <h3 className="text-xl font-bold">{action.title}</h3>
                    <p className="mt-2 leading-7 text-slate-400 print:text-black">{action.reason}</p>
                    <a href={action.href} className="no-print mt-4 inline-block text-sm font-bold text-sky-400 hover:text-sky-300">Open {action.guide} →</a>
                    <p className="hidden print:mt-3 print:block print:text-sm">Related Ready Coast Prep resource: {action.guide}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="print-card mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
          <h2 className="text-2xl font-black">Household snapshot</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Snapshot label="Household" value={`${people} people`} />
            <Snapshot label="Pets" value={`${household.pets}`} />
            <Snapshot label="Stored water" value={`${household.waterGallons} of ${waterTarget} gal.`} />
            <Snapshot label="Food" value={`${household.meals} of ${mealTarget} meals`} />
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-400 print:text-black">Selected hazards: {household.hazards.length ? household.hazards.join(", ") : "None selected yet"}.</p>
        </section>

        <section className="print-card mt-8 rounded-2xl border border-amber-500/40 bg-amber-950/20 p-5">
          <h2 className="font-bold">Planning limitation</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300 print:text-black">This tool organizes general household preparation. It is not a live warning, evacuation order, medical assessment, shelter directory, or guarantee of safety. Confirm current instructions with responsible local officials and authoritative agencies.</p>
        </section>
      </section>
    </main>
  );
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (value: boolean) => void }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-slate-700 bg-slate-950 p-4">
      <span className="font-semibold">{label}</span>
      <input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} className="h-5 w-5 accent-sky-500" />
    </label>
  );
}

function Snapshot({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-700 p-4">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 print:text-black">{label}</p>
      <p className="mt-2 text-xl font-black">{value}</p>
    </div>
  );
}
