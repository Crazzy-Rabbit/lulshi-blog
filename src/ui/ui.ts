/**
 * This configures the translations for all ui text in your website.
 *
 * All languages will follow this ordering/structure and will fallback to the
 * default language for any entries that haven't been translated
 */

export default {
  "site.title": {
    text: "LuluShi Blog",
  },
  "site.description": {
    text: "LuluShi's personal blog",
  },
  "profile.description": {
    text: "Ph.D student in WCH SCU, Genomics & Genetics ",
  },
  "blog.lastUpdated": {
    text: "Last updated:",
  },
  "sidebar.tableOfContents": {
    text: "Table of Contents",
  },
  "project.platform": {
    text: "PLATFORM",
  },
  "project.stack": {
    text: "STACK",
  },
  "project.website": {
    text: "WEBSITE",
  },
} as const satisfies UIEntries;

type UIEntries = Record<string, UIEntry>;

export type UIEntry = { text: string };
