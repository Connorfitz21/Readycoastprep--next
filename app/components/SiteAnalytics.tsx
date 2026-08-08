"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function send(name: string, params: Record<string, string> = {}) {
  window.gtag?.("event", name, params);
}

export default function SiteAnalytics() {
  useEffect(() => {
    const click = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a") as HTMLAnchorElement | null;
      const button = target?.closest("button") as HTMLButtonElement | null;
      const label = (link?.innerText || button?.innerText || "").trim().slice(0, 80);
      const href = link?.getAttribute("href") || "";
      if (href.startsWith("/guides/") || href.includes("preparedness") || href.includes("checklist") || href.includes("calculator")) send("guide_open", { label, href });
      if (/readiness/i.test(label)) send("readiness_start", { label });
      if (/build my plan|preparedness plan|my plan/i.test(label)) send("plan_open", { label, href });
      if (/print/i.test(label)) send("print_action", { label });
      if (/install/i.test(label)) send("install_app_click", { label });
      if (href.startsWith("http") && !href.includes("readycoastprep.com")) send("official_resource_click", { label, href });
    };
    document.addEventListener("click", click, true);
    return () => document.removeEventListener("click", click, true);
  }, []);
  return null;
}
