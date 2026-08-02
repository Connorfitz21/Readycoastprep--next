import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Ready Coast Prep",
  description:
    "Learn how Ready Coast Prep helps households build practical emergency plans and improve coastal preparedness.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-4" aria-label="Ready Coast Prep home">
            <Image
              src="/ready-coast-prep-icon.png"
              alt="Ready Coast Prep lighthouse logo"
              width={56}
              height={56}
              className="h-12 w-12 rounded-xl object-cover"
            />
            <div>
              <p className="text-lg font-black tracking-wide">READY COAST</p>
              <p className="text-xs font-bold tracking-[0.35em] text-amber-400">PREP</p>
            </div>
          </Link>
          <Link href="/" className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold hover:bg-slate-900">
            Back to home
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
        <p className="text-sm font-bold tracking-[0.25em] text-amber-400">ABOUT READY COAST PREP</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
          Practical preparedness without the noise
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Ready Coast Prep is an independent preparedness resource built to help households make clear, practical decisions before emergencies happen. The site focuses on coastal hazards, hurricanes, evacuation planning, power outages, emergency supplies, and household readiness.
        </p>

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
          <h2 className="text-2xl font-bold">What this site is designed to do</h2>
          <ul className="mt-5 space-y-4 text-slate-300">
            <li className="flex gap-3"><span className="text-amber-400">•</span><span>Turn broad emergency guidance into manageable household actions.</span></li>
            <li className="flex gap-3"><span className="text-amber-400">•</span><span>Help readers identify gaps in water, food, communications, medical supplies, and evacuation planning.</span></li>
            <li className="flex gap-3"><span className="text-amber-400">•</span><span>Point readers toward authoritative government and nonprofit resources for active warnings and official instructions.</span></li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Independent and privacy-conscious</h2>
          <p className="mt-4 leading-7 text-slate-300">
            Ready Coast Prep is operated under the site brand rather than a public personal profile. The operator does not publish personal identifying information on the site. This choice does not change the goal: provide useful, accurate, and clearly organized preparedness information.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Important limitation</h2>
          <p className="mt-4 leading-7 text-slate-300">
            Ready Coast Prep is an educational planning resource. It is not an emergency alert service and does not replace instructions from emergency managers, local officials, the National Weather Service, the National Hurricane Center, FEMA, or first responders. During an active emergency, follow official local guidance.
          </p>
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/hurricane-preparedness-checklist" className="rounded-xl bg-sky-500 px-5 py-3 font-bold hover:bg-sky-400">
            View hurricane checklist
          </Link>
          <Link href="/privacy-policy" className="rounded-xl border border-slate-700 px-5 py-3 font-bold hover:bg-slate-900">
            Privacy policy
          </Link>
        </div>
      </article>

      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-slate-400">
          <p>© 2026 Ready Coast Prep</p>
          <div className="flex gap-5">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
