import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@src/": `${path.resolve(__dirname, "src")}/`
    }
  },
  plugins: [
    vue(),
    VueI18nPlugin({
      globalSFCScope: true
    })
  ]
});
