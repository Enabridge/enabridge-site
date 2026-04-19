import { en, type Dictionary } from "./en";
import { th } from "./th";
import type { Locale } from "./types";

export type { Dictionary, Locale };
export { getLocale } from "./get-locale";

const dictionaries = { en, th } as const;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
