export default defineNuxtConfig({
  app: {
    head: {
      title: 'NgodingBentar',
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
  css    : ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      'tailwindcss/nesting'   : {},
      'tailwindcss'           : {},
      'autoprefixer'          : {},
    },
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict          : false,
        strictNullChecks: true,
      },
    },
  },
})
