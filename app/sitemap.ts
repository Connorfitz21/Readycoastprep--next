import type { MetadataRoute } from "next";

const updated = new Date("2026-08-08");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://readycoastprep.com/", lastModified: updated, changeFrequency: "weekly", priority: 1 },
    { url: "https://readycoastprep.com/guides", lastModified: updated, changeFrequency: "weekly", priority: 0.95 },
    { url: "https://readycoastprep.com/preparedness-plan", lastModified: updated, changeFrequency: "monthly", priority: 0.95 },
    { url: "https://readycoastprep.com/preparedness-pack", lastModified: updated, changeFrequency: "monthly", priority: 0.95 },
    { url: "https://readycoastprep.com/emergency-water-calculator", lastModified: updated, changeFrequency: "monthly", priority: 0.95 },
    { url: "https://readycoastprep.com/emergency-food-planner", lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://readycoastprep.com/hurricane-preparedness-checklist", lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://readycoastprep.com/emergency-water-storage", lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://readycoastprep.com/power-outage-checklist", lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://readycoastprep.com/emergency-food-supply-guide", lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: "https://readycoastprep.com/coastal-evacuation-guide", lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: "https://readycoastprep.com/emergency-communication-plan", lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: "https://readycoastprep.com/pet-hurricane-evacuation-guide", lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://readycoastprep.com/apartment-renter-emergency-preparedness", lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: "https://readycoastprep.com/winter-power-outage-cold-weather", lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://readycoastprep.com/extreme-heat-power-outage", lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://readycoastprep.com/about", lastModified: updated, changeFrequency: "yearly", priority: 0.5 },
    { url: "https://readycoastprep.com/privacy-policy", lastModified: updated, changeFrequency: "yearly", priority: 0.3 },
  ];
}
