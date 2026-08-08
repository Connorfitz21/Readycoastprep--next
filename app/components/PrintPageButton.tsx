"use client";

type PrintPageButtonProps = {
  label?: string;
};

export default function PrintPageButton({
  label = "Print this page",
}: PrintPageButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-sky-500 hover:bg-slate-800"
    >
      {label}
    </button>
  );
}
