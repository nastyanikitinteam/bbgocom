module.exports = {
  locales: ["en", "ru", "th"],
  sourceLocale: "en",
  fallbackLocales: {
    default: "en",
  },
  catalogs: [
    {
      path: "src/translations/locales/{locale}/messages",
      include: ["src/pages", "src/components", "src/scenes"],
    },
  ],
  format: "po",
};
