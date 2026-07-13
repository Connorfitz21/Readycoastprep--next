export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xl font-black tracking-wide">READY COAST</p>
            <p className="text-xs font-bold tracking-[0.35em] text-sky-400">
              PREP
            </p>
          </div>

          <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold hover:bg-slate-900">
            Finish setup
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
              Plan. Prepare. Protect.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Build a household emergency plan, identify critical gaps, and
              improve your readiness one action at a time.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-xl bg-sky-500 px-6 py-3 font-bold text-white hover:bg-sky-400">
                Start household setup
              </button>

              <button className="rounded-xl border border-slate-700 px-6 py-3 font-bold hover:bg-slate-900">
                View inventory
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex h-52 w-52 flex-col items-center justify-center rounded-full border-[14px] border-slate-800 bg-slate-900">
              <p className="text-5xl font-black">0</p>
              <p className="text-sm text-slate-400">out of 100</p>
              <p className="mt-2 text-xs font-bold tracking-wider text-sky-400">
                READINESS
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            label="Water available"
            value="0 days"
            detail="Complete setup to calculate"
          />
          <MetricCard
            label="Food available"
            value="0 days"
            detail="Complete setup to calculate"
          />
          <MetricCard
            label="Plan status"
            value="Not started"
            detail="Communication and evacuation"
          />
          <MetricCard
            label="Needs attention"
            value="0"
            detail="Missing or expired items"
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
              <Priority number={1} text="Complete household setup" />
              <Priority number={2} text="Record emergency water supplies" />
              <Priority number={3} text="Choose an evacuation destination" />
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
              <ScoreBar label="Water" points="0 / 20" percent={0} />
              <ScoreBar label="Food" points="0 / 15" percent={0} />
              <ScoreBar
                label="Medical and safety"
                points="0 / 15"
                percent={0}
              />
              <ScoreBar
                label="Communication"
                points="0 / 10"
                percent={0}
              />
            </div>
          </section>
        </div>
      </section>
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
};

function Priority({ number, text }: PriorityProps) {
  return (
    <button className="flex w-full items-center gap-4 rounded-xl border border-slate-800 p-4 text-left hover:bg-slate-800">
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
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
