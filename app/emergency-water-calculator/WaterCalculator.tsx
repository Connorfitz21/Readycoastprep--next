"use client";
import { useMemo, useState } from "react";

export default function WaterCalculator() {
  const [people, setPeople] = useState(2);
  const [days, setDays] = useState(7);
  const [pets, setPets] = useState(0);
  const [extra, setExtra] = useState(0);
  const baseline = useMemo(() => Math.max(1, people) * Math.max(1, days), [people, days]);
  const petEstimate = useMemo(() => Math.max(0, pets) * Math.max(1, days) * 0.25, [pets, days]);
  const total = Math.ceil((baseline + petEstimate) * (1 + extra / 100));
  return <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-semibold">People<input className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 p-3" type="number" min="1" value={people} onChange={e=>setPeople(Number(e.target.value))}/></label>
      <label className="text-sm font-semibold">Days to plan for<input className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 p-3" type="number" min="1" max="30" value={days} onChange={e=>setDays(Number(e.target.value))}/></label>
      <label className="text-sm font-semibold">Dogs/cats<input className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 p-3" type="number" min="0" value={pets} onChange={e=>setPets(Number(e.target.value))}/></label>
      <label className="text-sm font-semibold">Extra household buffer<select className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 p-3" value={extra} onChange={e=>setExtra(Number(e.target.value))}><option value="0">None</option><option value="10">10%</option><option value="20">20%</option><option value="30">30%</option></select></label>
    </div>
    <div className="mt-7 border-t border-slate-700 pt-6">
      <p className="text-sm text-slate-400">People-only official baseline</p><p className="mt-1 text-3xl font-black">{baseline} gallons</p>
      <p className="mt-5 text-sm text-slate-400">Planning target with your selected pet estimate and buffer</p><p className="mt-1 text-4xl font-black text-sky-300">{total} gallons</p>
      <p className="mt-4 text-sm leading-6 text-slate-400">The people-only baseline uses one gallon per person per day. Pet needs vary by animal, size, diet, climate, and health; the pet amount here is only a planning allowance, not veterinary guidance. Increase your target for heat, illness, pregnancy, medical needs, cooking, or other household circumstances.</p>
    </div>
  </div>;
}
