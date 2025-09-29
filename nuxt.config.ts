export default defineNuxtConfig({
  compatibilityDate: "2025-09-29",
  app: {
    head: {
      title: "ĐanHoa - Thời trang trang phục Khmer",
      meta: [{ name: "description", content: "Shop thời trang DanHoa" }],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/DanHoa-Circle_logo.ico",
        },
      ],
    },
  },
  modules: [
    "@pinia/nuxt",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
  ],

  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-icons/font/bootstrap-icons.css",
    "@/assets/css/main.css",
  ],

  fonts: {
    defaults: {
      preload: true,
      // weights: [400, 600, 700],
      // styles: ['normal'],
      // subsets: ['latin'],
    },
    families: [
      {
        name: "Inter",
        provider: "google",
        weights: [400, 600, 700],
        styles: ["normal"],
      },
    ],
  },

  image: {},

  vite: {
    css: { preprocessorOptions: { scss: {} } },
  },

  runtimeConfig: {
    dropboxAccessToken: "",
    public: {
      apiBase: "/api",
      firebase: {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
      },
    },
  },
});
