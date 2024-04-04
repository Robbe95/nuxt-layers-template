export default defineNuxtConfig({
  build: {},
  devtools: { enabled: true },
  extends: [
    '../base',
  ],
  vue: {
    propsDestructure: true,
  },
})
