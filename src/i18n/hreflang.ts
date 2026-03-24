const site = 'https://dify-hosting.com';

const hreflangMap: Record<string, string> = {
  en: 'en-US',
  de: 'de-DE',
  fr: 'fr-FR',
  es: 'es-ES',
  it: 'it-IT',
};

export function getHreflang(path: string) {
  const langs = ['en', 'de', 'fr', 'es', 'it'];
  return langs.map((lang) => ({
    lang: hreflangMap[lang],
    url: `${site}/${lang}${path}`,
  }));
}

export function getSiteUrl(lang: string, path: string) {
  return `${site}/${lang}${path}`;
}
