"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-white hover:bg-sky-400 print:hidden"
    >
      Print this plan
    </button>
  );
}
