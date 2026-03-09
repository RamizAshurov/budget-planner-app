import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSvgr from 'vite-plugin-svgr'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    vitePluginSvgr({
      svgrOptions: {
        icon: true,
        exportType: 'default'
      },
    }),
  ],
})
