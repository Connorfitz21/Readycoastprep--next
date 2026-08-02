"use client";

import { useMemo, useState } from "react";

export default function FoodCalculator() {
  const [people, setPeople] = useState(2);
  const [days, setDays] = useState(7);
  const [mealsPerDay, setMealsPerDay] = useState(3);

  const totals = useMemo(() => {
    const meals = Math.max(1, people) * Math.max(1, days) * Math.max(1, mealsPerDay);
    return {
      meals,
      breakfast: Math.ceil(meals * 0.3),
      mainMeals: Math.ceil(meals * 0.45),
      snacks: Math.ceil(meals * 0.25),
    };
  }, [people, days, mealsPerDay]);

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 print:border-black print:bg-white">
      <p className="text-xs font-bold tracking-[0.2em] text-sky-400 print:text-black">HOUSEHOLD FOOD CALCULATOR</p>
      <h2 className="mt-2 text-3xl font-black">Plan meal-equivalents, not random cans</h2>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 print:text-black">
        This planning estimate uses your household size, number of days, and meals per day. It is not a medical nutrition prescription. Adjust for age, health, dietary restrictions, activity level, and package serving sizes.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <label className="text-sm font-semibold">
          People
          <input
            type="number"
            min="1"
            max="20"
            value={people}
            onChange={(event) => setPeople(Math.max(1, Number(event.target.value) || 1))}
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white print:border-black print:bg-white print:text-black"
          />
        </label>
        <label className="text-sm font-semibold">
          Days
          <input
            type="number"
            min="1"
            max="30"
            value={days}
            onChange={(event) => setDays(Math.max(1, Number(event.target.value) || 1))}
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white print:border-black print:bg-white print:text-black"
          />
        </label>
        <label className="text-sm font-semibold">
          Meals per person per day
          <input
            type="number"
            min="1"
            max="5"
            value={mealsPerDay}
            onChange={(event) => setMealsPerDay(Math.max(1, Number(event.target.value) || 1))}
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white print:border-black print:bg-white print:text-black"
          />
        </label>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-4">
        <Result label="Total meal-equivalents" value={totals.meals} />
        <Result label="Breakfast options" value={totals.breakfast} />
        <Result label="Main-meal options" value={totals.mainMeals} />
        <Result label="Snacks or light meals" value={totals.snacks} />
      </div>

      <p className="mt-5 text-xs leading-5 text-slate-400 print:text-black">
        The category split is a Ready Coast Prep planning aid, not a government formula. Count what your household will actually eat and verify servings on each package.
      </p>
    </div>
  );
}

function Result({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4 print:border-black print:bg-white">
      <p className="text-3xl font-black">{value}</p>
      <p className="mt-1 text-xs leading-5 text-slate-400 print:text-black">{label}</p>
    </div>
  );
}
