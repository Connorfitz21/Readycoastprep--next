"use client";

import { useState } from "react";

type Plan = {
  householdName: string;
  homeAddress: string;
  outOfAreaName: string;
  outOfAreaPhone: string;
  neighborhoodMeeting: string;
  outsideAreaMeeting: string;
  schoolCareContact: string;
  medicalContact: string;
  petContact: string;
  primaryMethod: string;
  backupMethod: string;
  localAlerts: string;
  radioStation: string;
  notes: string;
};

const initialPlan: Plan = {
  householdName: "", homeAddress: "", outOfAreaName: "", outOfAreaPhone: "",
  neighborhoodMeeting: "", outsideAreaMeeting: "", schoolCareContact: "",
  medicalContact: "", petContact: "", primaryMethod: "Text message",
  backupMethod: "", localAlerts: "", radioStation: "", notes: "",
};

const fields: Array<{ key: keyof Plan; label: string; placeholder?: string }> = [
  { key: "householdName", label: "Household or family name" },
  { key: "homeAddress", label: "Home address" },
  { key: "outOfAreaName", label: "Out-of-area contact name" },
  { key: "outOfAreaPhone", label: "Out-of-area contact phone" },
  { key: "neighborhoodMeeting", label: "Meeting place near home" },
  { key: "outsideAreaMeeting", label: "Meeting place outside the neighborhood" },
  { key: "schoolCareContact", label: "School, childcare, or caregiver contact" },
  { key: "medicalContact", label: "Medical, pharmacy, or equipment contact" },
  { key: "petContact", label: "Pet boarding, veterinarian, or reunification contact" },
  { key: "primaryMethod", label: "Primary communication method" },
  { key: "backupMethod", label: "Backup communication method" },
  { key: "localAlerts", label: "Local emergency alert system or app" },
  { key: "radioStation", label: "NOAA Weather Radio frequency or local radio station" },
];

export default function CommunicationWorksheet() {
  const [plan, setPlan] = useState<Plan>(initialPlan);
  const update = (key: keyof Plan, value: string) => setPlan((current) => ({ ...current, [key]: value }));

  return (
    <section className="mt-12 rounded-3xl border border-sky-500/40 bg-sky-500/10 p-6 sm:p-8 print:mt-6 print:border-black print:bg-white">
      <div className="flex flex-wrap items-start justify-between gap-4 print:block">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-sky-300 print:text-black">FILLABLE AND PRINTABLE WORKSHEET</p>
          <h2 className="mt-2 text-2xl font-black">Household emergency communication plan</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 print:text-black">
            Complete the fields, print a copy for each household member, and keep copies in wallets, school bags, vehicles, go-bags, and with a trusted out-of-area contact. Entries stay in this browser session and are not submitted to Ready Coast Prep.
          </p>
        </div>
        <button type="button" onClick={() => window.print()} className="rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-white hover:bg-sky-400 print:hidden">
          Print completed plan
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
        <span className="block text-xs font-bold uppercase tracking-wider text-slate-300 print:text-black">Important notes, access needs, medications, or instructions</span>
        <textarea
          value={plan.notes}
          onChange={(event) => update("notes", event.target.value)}
          rows={4}
          className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none focus:border-sky-400 print:border-0 print:border-b print:border-black print:bg-white print:px-0 print:text-black"
        />
      </label>
      <p className="mt-4 text-xs leading-5 text-slate-400 print:text-black">Plan reviewed or printed: ____________________ &nbsp;&nbsp; Next review date: ____________________</p>
    </section>
  );
}
