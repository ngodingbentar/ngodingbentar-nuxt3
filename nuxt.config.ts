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
  plugins: [
    { src: '@/plugins/pagination.ts', ssr: false },
  ],
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict          : false,
        strictNullChecks: true,
      },
    },
  },
})
