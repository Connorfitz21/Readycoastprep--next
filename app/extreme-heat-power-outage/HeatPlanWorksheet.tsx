"use client";

const fieldClass = "mt-1 w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 text-sm text-white print:border-black print:bg-white print:text-black";

export default function HeatPlanWorksheet() {
  return (
    <section className="rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8 print:border-black print:bg-white">
      <h2 className="text-3xl font-black">My extreme-heat outage plan</h2>
      <p className="mt-3 text-sm leading-6 text-slate-300 print:text-black">Complete this before the forecast turns dangerous. Print a copy for the household emergency binder.</p>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <label className="text-sm font-bold">Primary air-conditioned destination<input className={fieldClass} /></label>
        <label className="text-sm font-bold">Backup cooling location<input className={fieldClass} /></label>
        <label className="text-sm font-bold">Transportation plan<input className={fieldClass} /></label>
        <label className="text-sm font-bold">Person who will check on us<input className={fieldClass} /></label>
        <label className="text-sm font-bold">Local cooling-center information source<input className={fieldClass} /></label>
        <label className="text-sm font-bold">Utility outage number or website<input className={fieldClass} /></label>
        <label className="text-sm font-bold">Medical device or refrigerated medicine plan<input className={fieldClass} /></label>
        <label className="text-sm font-bold">Pet cooling and transportation plan<input className={fieldClass} /></label>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {[
          "Water and drinks are ready for every person and pet.",
          "Phones, power banks, fans, and medical backups are charged.",
          "Window coverings are closed before peak heat.",
          "We know who is at higher risk from heat or medication effects.",
          "We know where to go if indoor cooling fails.",
          "We have a departure trigger and will not wait for severe symptoms.",
        ].map((item) => (
          <label key={item} className="flex gap-3 rounded-xl border border-slate-700 p-3 text-sm print:border-slate-400">
            <input type="checkbox" className="mt-1 h-4 w-4" />
            <span>{item}</span>
          </label>
        ))}
      </div>
      <label className="mt-5 block text-sm font-bold">Our leave-home trigger<textarea rows={3} className={fieldClass} placeholder="Example: power is out, indoor temperature is continuing to rise, and our verified cooling destination is open." /></label>
      <label className="mt-5 block text-sm font-bold">Medications, health conditions, accessibility needs, and notes<textarea rows={4} className={fieldClass} /></label>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <label className="text-sm font-bold">Plan reviewed on<input type="date" className={fieldClass} /></label>
        <label className="text-sm font-bold">Next review date<input type="date" className={fieldClass} /></label>
      </div>
    </section>
  );
}
