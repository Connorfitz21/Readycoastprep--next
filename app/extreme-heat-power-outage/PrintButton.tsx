"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-black text-slate-950 hover:bg-sky-400"
    >
      Print heat plan
    </button>
  );
}
