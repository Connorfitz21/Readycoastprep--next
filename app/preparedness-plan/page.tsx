import type { Metadata } from "next";
import PreparednessPlanner from "./PreparednessPlanner";

export const metadata: Metadata = {
  title: "Personalized Household Preparedness Plan | Ready Coast Prep",
  description:
    "Turn your household readiness score, risks, housing constraints, pets, medical needs, and current supplies into a prioritized printable emergency plan.",
  alternates: {
    canonical: "https://readycoastprep.com/preparedness-plan",
  },
};

export default function PreparednessPlanPage() {
  return <PreparednessPlanner />;
}
