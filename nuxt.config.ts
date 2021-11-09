import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        }
    },
    publicRuntimeConfig: {
        baseURL: process.env.BASE_URL || 'https://musing-ramanujan-b85675.netlify.app'
      }
})
