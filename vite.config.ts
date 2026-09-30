import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { keycloakify } from 'keycloakify/vite-plugin';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    keycloakify({
      themeName: 'serious-dev',
      accountThemeImplementation: 'none'
    })
  ]
});
