import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Ready Coast Prep",
  description: "Privacy policy for Ready Coast Prep.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
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
        <p className="text-sm font-bold tracking-[0.25em] text-amber-400">PRIVACY POLICY</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">How this site handles information</h1>
        <p className="mt-4 text-sm text-slate-400">Effective date: August 1, 2026</p>

        <div className="mt-10 space-y-10 text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-white">Overview</h2>
            <p className="mt-4 leading-7">
              Ready Coast Prep is designed to provide preparedness information while collecting as little personal information as reasonably possible. This policy explains what information may be processed when you use readycoastprep.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Information you enter into readiness tools</h2>
            <p className="mt-4 leading-7">
              The household setup and inventory tools currently process the information you enter in your browser so the site can calculate readiness results. Ready Coast Prep does not currently provide user accounts or intentionally transmit that household information to a Ready Coast Prep database.
            </p>
            <p className="mt-3 leading-7">
              Do not enter names, addresses, medical records, account numbers, or other sensitive identifying information into the tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Analytics and technical data</h2>
            <p className="mt-4 leading-7">
              Ready Coast Prep uses Google Analytics to understand general site usage. Google Analytics may process information such as pages visited, approximate location, device and browser type, referring pages, interaction events, and IP-derived technical information. Google may use cookies or similar technologies for this purpose.
            </p>
            <p className="mt-3 leading-7">
              This information is used to evaluate site performance, find broken or confusing pages, and improve content. Ready Coast Prep does not use Analytics to intentionally identify individual visitors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Cookies and browser controls</h2>
            <p className="mt-4 leading-7">
              Cookies may be set by analytics or infrastructure providers. You can restrict or delete cookies through your browser settings. Blocking cookies may affect analytics but should not prevent access to the site’s public articles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Hosting and service providers</h2>
            <p className="mt-4 leading-7">
              The site is hosted using third-party infrastructure. Hosting, security, content delivery, and analytics providers may process limited technical data as necessary to deliver and protect the site. Their handling of information is governed by their own policies and applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">External links</h2>
            <p className="mt-4 leading-7">
              Ready Coast Prep links to government agencies, nonprofit organizations, and other external resources. This policy does not control those websites. Review the privacy policy of any external site you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Advertising</h2>
            <p className="mt-4 leading-7">
              Ready Coast Prep does not currently display personalized advertising. If advertising services are added, this policy and any required consent controls will be updated before or when those services are enabled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Children’s privacy</h2>
            <p className="mt-4 leading-7">
              The site is intended for a general audience and is not directed to children under 13. Ready Coast Prep does not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Policy changes</h2>
            <p className="mt-4 leading-7">
              This policy may be revised as the site adds features or services. The effective date at the top of this page will be updated when material changes are made.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Questions</h2>
            <p className="mt-4 leading-7">
              Privacy questions may be directed through any contact method published by Ready Coast Prep. No personal operator identity is required to use this site or review this policy.
            </p>
          </section>
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
