import type { MetadataRoute } from "next";
import { en } from "@/i18n/en";
import { siteUrl } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${siteUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/how-we-work`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/openbridge`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/company`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/agentic-ai`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = en.services.items.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = en.caseStudies.map((cs) => ({
    url: `${siteUrl}/case-studies/${cs.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes];
}
