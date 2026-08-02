"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print:hidden rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950 hover:bg-amber-300"
    >
      Print apartment plan
    </button>
  );
}
