import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://readycoastprep.com/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://readycoastprep.com/preparedness-plan",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: "https://readycoastprep.com/hurricane-preparedness-checklist",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://readycoastprep.com/emergency-water-storage",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://readycoastprep.com/power-outage-checklist",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://readycoastprep.com/emergency-food-supply-guide",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://readycoastprep.com/coastal-evacuation-guide",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://readycoastprep.com/emergency-communication-plan",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://readycoastprep.com/pet-hurricane-evacuation-guide",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://readycoastprep.com/apartment-renter-emergency-preparedness",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://readycoastprep.com/winter-power-outage-cold-weather",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://readycoastprep.com/extreme-heat-power-outage",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://readycoastprep.com/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://readycoastprep.com/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
