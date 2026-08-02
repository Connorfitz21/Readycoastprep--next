"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-bold text-white hover:bg-sky-400"
    >
      Print checklist
    </button>
  );
}
