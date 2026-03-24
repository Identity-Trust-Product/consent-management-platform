export function getLocalizedContent(
  obj: any,
  fallback: string,
  languageCode: string,
  field: string = "name"
): string {
  if (!obj) return fallback;

  const getValue = (data: any, path: string) => {
    return path.split(".").reduce((acc, part) => acc && acc[part], data);
  };

  // Try to find translation for the current language
  if (
    obj.translations &&
    typeof obj.translations === "object" &&
    (obj.translations as any)[languageCode]
  ) {
    const val = getValue((obj.translations as any)[languageCode], field);
    if (val) return val;
  }

  // Fallback to English if available in translations
  if (
    obj.translations &&
    typeof obj.translations === "object" &&
    (obj.translations as any)["en"]
  ) {
    const val = getValue((obj.translations as any)["en"], field);
    if (val) return val;
  }

  // Final fallback to the provided string (usually the default DB value)
  return fallback;
}
