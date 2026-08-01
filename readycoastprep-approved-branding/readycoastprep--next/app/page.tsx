"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

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

const initialHousehold: HouseholdData = {
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

const hazardOptions = [
  "Hurricane",
  "Flood",
  "Power outage",
  "Tornado",
  "Wildfire",
  "Winter storm",
  "Earthquake",
  "Extreme heat",
];

export default function Home() {
  const [household, setHousehold] =
    useState<HouseholdData>(initialHousehold);

  const [setupOpen, setSetupOpen] = useState(false);
  const [setupComplete, setSetupComplete] = useState(false);
  const [step, setStep] = useState(1);

  const people =
    household.adults + household.children + household.seniors;

  const minimumWater = Math.max(people, 1) * 3;
  const minimumMeals = Math.max(people, 1) * 9;

  const readiness = useMemo(() => {
    if (!setupComplete) {
      return {
        total: 0,
        water: 0,
        food: 0,
        medical: 0,
        communication: 0,
      };
    }

    const water = Math.min(
      20,
      Math.round((household.waterGallons / minimumWater) * 20),
    );

    const food = Math.min(
      15,
      Math.round((household.meals / minimumMeals) * 15),
    );

    const medical =
      (household.firstAid ? 8 : 0) +
      (household.medicalNeeds ? 3 : 5) +
      (household.accessibilityNeeds ? 2 : 2);

    const communication =
      (household.weatherRadio ? 5 : 0) +
      (household.powerBanks ? 3 : 0) +
      (household.flashlights ? 2 : 0);

    const householdProfile =
      household.householdName.trim().length > 0 ? 10 : 0;

    const hazards = household.hazards.length > 0 ? 10 : 0;

    const total = Math.min(
      100,
      water +
        food +
        medical +
        communication +
        householdProfile +
        hazards,
    );

    return {
      total,
      water,
      food,
      medical,
      communication,
    };
  }, [household, minimumMeals, minimumWater, setupComplete]);

  const waterDays =
    people > 0
      ? Math.floor((household.waterGallons / people) * 10) / 10
      : 0;

  const foodDays =
    people > 0
      ? Math.floor((household.meals / (people * 3)) * 10) / 10
      : 0;

  function updateField<K extends keyof HouseholdData>(
    field: K,
    value: HouseholdData[K],
  ) {
    setHousehold((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleHazard(hazard: string) {
    setHousehold((current) => {
      const selected = current.hazards.includes(hazard);

      return {
        ...current,
        hazards: selected
          ? current.hazards.filter((item) => item !== hazard)
          : [...current.hazards, hazard],
      };
    });
  }

  function finishSetup() {
    setSetupComplete(true);
    setSetupOpen(false);
    setStep(1);
  }

  function nextStep() {
    if (step < 4) {
      setStep((current) => current + 1);
    }
  }

  function previousStep() {
    if (step > 1) {
      setStep((current) => current - 1);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center">
            <Image
              src="/ready-coast-prep-logo.png"
              alt="Ready Coast Prep. Prepare today. Protect tomorrow."
              width={691}
              height={325}
              priority
              className="h-auto w-[300px] max-w-[62vw] object-contain"
            />
          </div>

          <button
            onClick={() => setSetupOpen(true)}
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold hover:bg-slate-900"
          >
            {setupComplete ? "Review setup" : "Finish setup"}
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="mb-4 text-sm font-bold tracking-[0.25em] text-amber-400">
              HOUSEHOLD PREPAREDNESS
            </p>

            <h1 className="max-w-3xl text-5xl font-black tracking-tight sm:text-6xl">
              Prepare today. Protect tomorrow.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Build a household emergency plan, identify critical
              gaps, and improve your readiness one action at a time.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setSetupOpen(true)}
                className="rounded-xl bg-sky-500 px-6 py-3 font-bold text-white hover:bg-sky-400"
              >
                {setupComplete
                  ? "Update household setup"
                  : "Start household setup"}
              </button>

              <button className="rounded-xl border border-slate-700 px-6 py-3 font-bold hover:bg-slate-900">
                View inventory
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex h-52 w-52 flex-col items-center justify-center rounded-full border-[14px] border-slate-800 bg-slate-900">
              <div className="flex items-start">
                <p className="text-5xl font-black">
                  {readiness.total}
                </p>

                <span className="mt-2 text-sm text-slate-400">
                  /100
                </span>
              </div>

              <p className="mt-2 text-xs font-bold tracking-wider text-sky-400">
                READINESS
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            label="Water available"
            value={`${waterDays} days`}
            detail={
              setupComplete
                ? `${Math.max(
                    0,
                    minimumWater - household.waterGallons,
                  )} gallons needed for 3 days`
                : "Complete setup to calculate"
            }
          />

          <MetricCard
            label="Food available"
            value={`${foodDays} days`}
            detail={
              setupComplete
                ? `${Math.max(
                    0,
                    minimumMeals - household.meals,
                  )} meals needed for 3 days`
                : "Complete setup to calculate"
            }
          />

          <MetricCard
            label="Plan status"
            value={setupComplete ? "In progress" : "Not started"}
            detail="Communication and evacuation"
          />

          <MetricCard
            label="Household"
            value={setupComplete ? `${people} people` : "Not entered"}
            detail={
              household.pets > 0
                ? `${household.pets} pet${
                    household.pets === 1 ? "" : "s"
                  }`
                : "No pets entered"
            }
          />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-xs font-bold tracking-[0.2em] text-sky-400">
              PRIORITIES
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Your highest-impact actions
            </h2>

            <div className="mt-6 space-y-4">
              {!setupComplete ? (
                <Priority
                  number={1}
                  text="Complete household setup"
                  action={() => setSetupOpen(true)}
                />
              ) : (
                <>
                  {household.waterGallons < minimumWater && (
                    <Priority
                      number={1}
                      text={`Add ${Math.max(
                        0,
                        minimumWater - household.waterGallons,
                      )} gallons of water`}
                    />
                  )}

                  {household.meals < minimumMeals && (
                    <Priority
                      number={2}
                      text={`Add ${Math.max(
                        0,
                        minimumMeals - household.meals,
                      )} shelf-stable meals`}
                    />
                  )}

                  {!household.weatherRadio && (
                    <Priority
                      number={3}
                      text="Add a battery or hand-crank weather radio"
                    />
                  )}
                </>
              )}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-xs font-bold tracking-[0.2em] text-sky-400">
              SCORE
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Where your score comes from
            </h2>

            <div className="mt-6 space-y-5">
              <ScoreBar
                label="Water"
                points={`${readiness.water} / 20`}
                percent={(readiness.water / 20) * 100}
              />

              <ScoreBar
                label="Food"
                points={`${readiness.food} / 15`}
                percent={(readiness.food / 15) * 100}
              />

              <ScoreBar
                label="Medical and safety"
                points={`${readiness.medical} / 15`}
                percent={(readiness.medical / 15) * 100}
              />

              <ScoreBar
                label="Communication"
                points={`${readiness.communication} / 10`}
                percent={(readiness.communication / 10) * 100}
              />
            </div>
          </section>
        </div>
      </section>

      {setupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl sm:p-8">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <p className="text-xs font-bold tracking-[0.25em] text-sky-400">
                  STEP {step} OF 4
                </p>

                <h2 className="mt-2 text-3xl font-black">
                  Household setup
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  You can close this and return at any time.
                </p>
              </div>

              <button
                onClick={() => setSetupOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-xl text-slate-300 hover:bg-slate-700"
                aria-label="Close setup"
              >
                ×
              </button>
            </div>

            <div className="mb-8 h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full bg-sky-500 transition-all"
                style={{ width: `${step * 25}%` }}
              />
            </div>

            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-2xl font-bold">
                    Who are you preparing for?
                  </h3>

                  <p className="mt-2 text-slate-400">
                    This determines your minimum water and food
                    requirements.
                  </p>
                </div>

                <InputField
                  label="Household name"
                  value={household.householdName}
                  onChange={(value) =>
                    updateField("householdName", value)
                  }
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <NumberField
                    label="Adults"
                    value={household.adults}
                    onChange={(value) =>
                      updateField("adults", value)
                    }
                  />

                  <NumberField
                    label="Children"
                    value={household.children}
                    onChange={(value) =>
                      updateField("children", value)
                    }
                  />

                  <NumberField
                    label="Older adults"
                    value={household.seniors}
                    onChange={(value) =>
                      updateField("seniors", value)
                    }
                  />

                  <NumberField
                    label="Pets"
                    value={household.pets}
                    onChange={(value) =>
                      updateField("pets", value)
                    }
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-2xl font-bold">
                    Individual planning needs
                  </h3>

                  <p className="mt-2 text-slate-400">
                    Plans should account for medication, equipment,
                    mobility, sensory, and communication needs.
                  </p>
                </div>

                <CheckOption
                  label="Someone uses prescription medication or medical equipment"
                  checked={household.medicalNeeds}
                  onChange={(checked) =>
                    updateField("medicalNeeds", checked)
                  }
                />

                <CheckOption
                  label="Someone has mobility, sensory, or accessibility needs"
                  checked={household.accessibilityNeeds}
                  onChange={(checked) =>
                    updateField("accessibilityNeeds", checked)
                  }
                />
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-2xl font-bold">
                    Which hazards concern you?
                  </h3>

                  <p className="mt-2 text-slate-400">
                    Select the events your household should prepare
                    for.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {hazardOptions.map((hazard) => (
                    <CheckOption
                      key={hazard}
                      label={hazard}
                      checked={household.hazards.includes(hazard)}
                      onChange={() => toggleHazard(hazard)}
                    />
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-2xl font-bold">
                    What do you have now?
                  </h3>

                  <p className="mt-2 text-slate-400">
                    Estimates are fine. You can update them later.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <NumberField
                    label="Gallons of stored water"
                    value={household.waterGallons}
                    onChange={(value) =>
                      updateField("waterGallons", value)
                    }
                  />

                  <NumberField
                    label="Shelf-stable meals"
                    value={household.meals}
                    onChange={(value) =>
                      updateField("meals", value)
                    }
                  />
                </div>

                <CheckOption
                  label="First-aid kit"
                  checked={household.firstAid}
                  onChange={(checked) =>
                    updateField("firstAid", checked)
                  }
                />

                <CheckOption
                  label="Working flashlights"
                  checked={household.flashlights}
                  onChange={(checked) =>
                    updateField("flashlights", checked)
                  }
                />

                <CheckOption
                  label="Battery or hand-crank weather radio"
                  checked={household.weatherRadio}
                  onChange={(checked) =>
                    updateField("weatherRadio", checked)
                  }
                />

                <CheckOption
                  label="Charged phone power banks"
                  checked={household.powerBanks}
                  onChange={(checked) =>
                    updateField("powerBanks", checked)
                  }
                />
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-slate-800 pt-6">
              <button
                onClick={() => setSetupOpen(false)}
                className="mr-auto rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-300 hover:bg-slate-800"
              >
                Skip for now
              </button>

              {step > 1 && (
                <button
                  onClick={previousStep}
                  className="rounded-xl border border-slate-700 px-5 py-3 font-semibold hover:bg-slate-800"
                >
                  Back
                </button>
              )}

              {step < 4 ? (
                <button
                  onClick={nextStep}
                  className="rounded-xl bg-sky-500 px-6 py-3 font-bold hover:bg-sky-400"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={finishSetup}
                  className="rounded-xl bg-sky-500 px-6 py-3 font-bold hover:bg-sky-400"
                >
                  Build my baseline
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
  detail: string;
};

function MetricCard({ label, value, detail }: MetricCardProps) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-black">{value}</p>
      <p className="mt-2 text-xs text-slate-500">{detail}</p>
    </article>
  );
}

type PriorityProps = {
  number: number;
  text: string;
  action?: () => void;
};

function Priority({ number, text, action }: PriorityProps) {
  return (
    <button
      onClick={action}
      className="flex w-full items-center gap-4 rounded-xl border border-slate-800 p-4 text-left hover:bg-slate-800"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-500 font-black">
        {number}
      </span>

      <span className="font-semibold">{text}</span>
    </button>
  );
}

type ScoreBarProps = {
  label: string;
  points: string;
  percent: number;
};

function ScoreBar({ label, points, percent }: ScoreBarProps) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span>{label}</span>
        <span className="font-bold">{points}</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-sky-500"
          style={{
            width: `${Math.max(0, Math.min(percent, 100))}%`,
          }}
        />
      </div>
    </div>
  );
}

type InputFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

function InputField({
  label,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold">
        {label}
      </span>

      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-sky-500"
      />
    </label>
  );
}

type NumberFieldProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
};

function NumberField({
  label,
  value,
  onChange,
}: NumberFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold">
        {label}
      </span>

      <input
        type="number"
        min="0"
        value={value}
        onChange={(event) =>
          onChange(Math.max(0, Number(event.target.value)))
        }
        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-sky-500"
      />
    </label>
  );
}

type CheckOptionProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

function CheckOption({
  label,
  checked,
  onChange,
}: CheckOptionProps) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-slate-600">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-5 w-5 accent-sky-500"
      />

      <span className="font-medium">{label}</span>
    </label>
  );
}