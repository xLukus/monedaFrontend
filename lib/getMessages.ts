import { locales } from "./i18n";
export async function getMessages(locale: "en" | "mk") {
  const messages = {
    en: {
      navbar: (await import("@/locales/en/NavbarEnglish.json")).default,
      home: (await import("@/locales/en/HomeEnglish.json")).default,
      footer: (await import("@/locales/en/FooterMK.json")).default,
      about: (await import("@/locales/en/AboutEnglish.json")).default,
      zanas: (await import("@/locales/en/zanasEnglish.json")).default,
      services: (await import("@/locales/en/ServicesEnglish.json")).default,
    },
    mk: {
      navbar: (await import("@/locales/mk/NavbarMK.json")).default,
      home: (await import("@/locales/mk/HomeMK.json")).default,
      footer: (await import("@/locales/mk/FooterMK.json")).default,
      about: (await import("@/locales/mk/AboutMK.json")).default,
      zanas: (await import("@/locales/mk/zanasMK.json")).default,
      services: (await import("@/locales/mk/ServicesMK.json")).default,
    },
  };

  return messages[locale];
}
