import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // nitro: {
    //     preset: 'lambda'
    //   },
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
        myURL: process.env.MY_URL || 'https://musing-ramanujan-b85675.netlify.app',

      }
})
