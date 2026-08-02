"use client";

import { useState } from "react";

type PetPlan = {
  petName: string;
  speciesBreed: string;
  ageWeight: string;
  microchip: string;
  veterinarian: string;
  medications: string;
  feeding: string;
  carrierLocation: string;
  destination: string;
  backupCaregiver: string;
  behaviorNeeds: string;
};

const initialPlan: PetPlan = {
  petName: "",
  speciesBreed: "",
  ageWeight: "",
  microchip: "",
  veterinarian: "",
  medications: "",
  feeding: "",
  carrierLocation: "",
  destination: "",
  backupCaregiver: "",
  behaviorNeeds: "",
};

const fields: Array<{ key: keyof PetPlan; label: string }> = [
  { key: "petName", label: "Pet name" },
  { key: "speciesBreed", label: "Species, breed, and identifying marks" },
  { key: "ageWeight", label: "Age and approximate weight" },
  { key: "microchip", label: "Microchip number and registry" },
  { key: "veterinarian", label: "Veterinarian name and phone" },
  { key: "medications", label: "Medications, doses, and schedule" },
  { key: "feeding", label: "Food type, amount, and feeding schedule" },
  { key: "carrierLocation", label: "Carrier, crate, leash, or harness location" },
  { key: "destination", label: "Primary pet-friendly evacuation destination" },
  { key: "backupCaregiver", label: "Backup caregiver or boarding contact" },
];

export default function PetPlanWorksheet() {
  const [plan, setPlan] = useState<PetPlan>(initialPlan);
  const update = (key: keyof PetPlan, value: string) =>
    setPlan((current) => ({ ...current, [key]: value }));

  return (
    <section className="mt-12 rounded-3xl border border-sky-500/40 bg-sky-500/10 p-6 sm:p-8 print:mt-6 print:border-black print:bg-white">
      <div className="flex flex-wrap items-start justify-between gap-4 print:block">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-sky-300 print:text-black">FILLABLE AND PRINTABLE PET PLAN</p>
          <h2 className="mt-2 text-2xl font-black">One-page pet emergency record</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 print:text-black">
            Complete one copy for each pet. Print it for the carrier, go-bag, vehicle, and backup caregiver. Entries stay in this browser session and are not submitted to Ready Coast Prep.
          </p>
        </div>
        <button type="button" onClick={() => window.print()} className="rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-white hover:bg-sky-400 print:hidden">
          Print completed pet plan
        </button>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 print:grid-cols-2">
        {fields.map((field) => (
          <label key={field.key} className="block rounded-xl border border-slate-700 bg-slate-950/40 p-4 print:border-black print:bg-white">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-300 print:text-black">{field.label}</span>
            <input
              value={plan[field.key]}
              onChange={(event) => update(field.key, event.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-sky-400 print:border-0 print:border-b print:border-black print:bg-white print:px-0 print:text-black"
            />
          </label>
        ))}
      </div>

      <label className="mt-4 block rounded-xl border border-slate-700 bg-slate-950/40 p-4 print:border-black print:bg-white">
        <span className="block text-xs font-bold uppercase tracking-wider text-slate-300 print:text-black">Behavior, handling, mobility, medical, or safety notes</span>
        <textarea
          value={plan.behaviorNeeds}
          onChange={(event) => update("behaviorNeeds", event.target.value)}
          rows={4}
          className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-sky-400 print:border-0 print:border-b print:border-black print:bg-white print:px-0 print:text-black"
        />
      </label>
      <p className="mt-4 text-xs leading-5 text-slate-400 print:text-black">Current photo attached: Yes / No &nbsp;&nbsp; Records updated: ____________________</p>
    </section>
  );
}
