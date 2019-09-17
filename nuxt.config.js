export default {
  mode: "universal",

  generate: {
    fallback: true,
  },

  loading: { color: "#000000" },

  css: ["typeface-barlow"],

  plugins: [],

  buildModules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss"],

  modules: ["@nuxtjs/pwa"],

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
}
