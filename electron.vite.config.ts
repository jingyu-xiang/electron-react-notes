import react from "@vitejs/plugin-react"
import { defineConfig, externalizeDepsPlugin } from "electron-vite"
import million from "million/compiler"
import { resolve } from "path"

export default defineConfig({
  main: {
    resolve: {
      alias: {
        "@main": resolve("src/main/lib"),
        "@shared": resolve("src/shared"),
      },
    },
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    assetsInclude: "src/renderer/src/assets/**",
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src"),
        "@shared": resolve("src/shared"),
      },
    },
    plugins: [million.vite({}), react()],
  },
})
