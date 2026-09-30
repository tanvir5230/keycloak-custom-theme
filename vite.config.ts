import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { keycloakify } from 'keycloakify/vite-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    keycloakify({
      themeName: 'serious-dev',
      accountThemeImplementation: 'none'
    })
  ]
});
