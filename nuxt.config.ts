// https://nuxt.com/docs/api/configuration/nuxt-config
/*export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon']
})*/

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/icon',
    [
      '@nuxtjs/robots',
      {
        userAgent : '*',
        disallow : '', //if no file or folder not allow -> allow all
        sitemap : 'https://www.itgenius.co.th/sitemap1.xml',
    
      },
    ] 
    
  ],
  
  runtimeConfig: {
    public:{
      wpUrlAPI : process.env.WP_URL_API || 'https://www.itgenius.co.th/sandbox_api/flutter_news_api'
    }
  }
})