"use client";

const fields = [
  "Building address and unit",
  "Property manager / emergency maintenance number",
  "Primary exit and stairwell",
  "Backup exit and stairwell",
  "Outdoor meeting location",
  "Out-of-area contact",
  "Evacuation destination",
  "Transportation backup",
  "Nearest shelter or cooling/warming location",
  "Insurance company and policy number",
];

export default function RenterPlanWorksheet() {
  return (
    <section className="rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8 print:border-slate-400 print:bg-white print:text-black">
      <p className="text-xs font-bold tracking-[0.2em] text-amber-400 print:text-black">FILLABLE WORKSHEET</p>
      <h2 className="mt-2 text-3xl font-black">Apartment emergency plan</h2>
      <p className="mt-3 max-w-3xl text-slate-300 print:text-black">
        Complete this before an emergency, print a copy, and keep it with your go-bag. Do not include passwords or sensitive account credentials on a copy that may be carried outside your home.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {fields.map((label) => (
          <label key={label} className="block text-sm font-semibold">
            {label}
            <input
              className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-3 text-white outline-none focus:border-sky-400 print:border-slate-500 print:bg-white print:text-black"
              aria-label={label}
            />
          </label>
        ))}
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-semibold">
          Medical, mobility, or accessibility needs
          <textarea className="mt-2 min-h-28 w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-3 text-white print:border-slate-500 print:bg-white print:text-black" />
        </label>
        <label className="block text-sm font-semibold">
          Pet, child, caregiver, or neighbor support plan
          <textarea className="mt-2 min-h-28 w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-3 text-white print:border-slate-500 print:bg-white print:text-black" />
        </label>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <label className="block text-sm font-semibold">Plan completed<input className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-3 text-white print:bg-white print:text-black" placeholder="Date" /></label>
        <label className="block text-sm font-semibold">Next review<input className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-3 text-white print:bg-white print:text-black" placeholder="Date" /></label>
        <label className="block text-sm font-semibold">Insurance inventory updated<input className="mt-2 w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-3 text-white print:bg-white print:text-black" placeholder="Date" /></label>
      </div>
    </section>
  );
}
