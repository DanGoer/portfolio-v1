// i18next config

const path = require("path");

module.exports = {
  i18n: {
    locale: "en",
    defaultLocale: "de",
    locales: ["en", "de"],
    localePath: path.resolve("./public/locales"),
    otherLanguages: ["en", "de"],
    defaultLanguage: "en",
    fallbackLng: ["en"],
  },
};
