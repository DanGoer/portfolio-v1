// i18next config

const path = require("path");

module.exports = {
  i18n: {
    locale: "de",
    defaultLocale: "de",
    locales: ["en", "de"],
    defaultLanguage: "de",
  },
  fallbackLng: { default: ["de"], "de-CH": ["de"] },
  localePath: path.resolve("./public/locales"),
};
