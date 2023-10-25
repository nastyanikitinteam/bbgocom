const withPlugins = require("next-compose-plugins");
const { i18n } = require("next-i18next");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;

module.exports = withPlugins(
  [
    {
      i18n: {
        localeDetection: false,
        defaultLocale: "en",
        locales: ["en", "ru", "th"],
      },
    },
  ],
  nextConfig
);
