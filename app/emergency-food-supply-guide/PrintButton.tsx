"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-black text-slate-950 hover:bg-amber-300"
    >
      Print checklist
    </button>
  );
}
