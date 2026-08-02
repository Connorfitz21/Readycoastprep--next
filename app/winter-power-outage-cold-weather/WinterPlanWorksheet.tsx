"use client";

import { useState } from "react";

const fields = [
  ["Primary safe-heating plan", "Example: central heat, inspected fireplace, listed indoor heater"],
  ["Backup warm location", "Friend, family, hotel, warming center, or shelter"],
  ["Transportation plan", "Primary vehicle, ride, transit, or neighbor"],
  ["Utility outage number", "Phone number or app"],
  ["Water shutoff location", "Describe access and required tool"],
  ["Medical or mobility needs", "Medication, powered equipment, caregiver, mobility support"],
  ["Pet cold-weather plan", "Indoor location, supplies, carrier, medication"],
  ["Household check-in contact", "Name and phone"],
];

export default function WinterPlanWorksheet() {
  const [values, setValues] = useState<Record<string, string>>({});

  return (
    <section className="rounded-3xl border border-sky-500/30 bg-sky-500/10 p-6 sm:p-8 print:border-black print:bg-white">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">FILLABLE + PRINTABLE</p>
          <h2 className="mt-2 text-3xl font-black">My cold-weather outage plan</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-300 print:text-black">Complete this before freezing weather, print a copy, and store it with your emergency contacts and household supplies.</p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {fields.map(([label, placeholder]) => (
          <label key={label} className="block rounded-xl border border-slate-700 bg-slate-950/40 p-4 print:border-slate-400 print:bg-white">
            <span className="text-sm font-bold">{label}</span>
            <textarea
              value={values[label] ?? ""}
              onChange={(event) => setValues((current) => ({ ...current, [label]: event.target.value }))}
              placeholder={placeholder}
              rows={3}
              className="mt-2 w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white placeholder:text-slate-500 print:border-slate-400 print:bg-white print:text-black"
            />
          </label>
        ))}
      </div>
      <label className="mt-4 block rounded-xl border border-slate-700 bg-slate-950/40 p-4 print:border-slate-400 print:bg-white">
        <span className="text-sm font-bold">Leave-home triggers and notes</span>
        <textarea
          value={values.notes ?? ""}
          onChange={(event) => setValues((current) => ({ ...current, notes: event.target.value }))}
          placeholder="Examples: indoor temperature is no longer safe, medical equipment cannot be powered, local officials direct evacuation, water service fails, or transportation may soon become unavailable."
          rows={4}
          className="mt-2 w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white placeholder:text-slate-500 print:border-slate-400 print:bg-white print:text-black"
        />
      </label>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-bold">Plan reviewed on<input type="date" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white print:border-slate-400 print:bg-white print:text-black" /></label>
        <label className="block text-sm font-bold">Next review date<input type="date" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white print:border-slate-400 print:bg-white print:text-black" /></label>
      </div>
    </section>
  );
}
