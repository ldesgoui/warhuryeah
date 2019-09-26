export default {
  mode: "universal",

  generate: {
    fallback: true,
  },

  render: {
    csp: {
      reportOnly: true,
      policies: {
        "script-src": ["https://identity.netlify.com"],
        "report-uri": ["https://ldesgoui.report-uri.com/r/d/csp/wizard"],
      },
    },
  },

  loading: { color: "#000000" },

  css: ["typeface-barlow"],

  plugins: [],

  buildModules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss"],

  modules: ["@nuxtjs/pwa", "@bazzite/nuxt-optimized-images"],

  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /.ya?ml$/,
        use: "js-yaml-loader",
      })
    },
  },

  pwa: {
    meta: {
      twitterCreator: "WARHURYEAH",
    },
  },

  optimizedImages: {
    optimizeImages: true,
  },
}
