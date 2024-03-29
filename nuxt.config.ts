// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["@/assets/styles/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/_variables";',
                },
            },
        },
    },
    components: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
  });
  
