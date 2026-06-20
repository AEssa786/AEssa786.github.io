import { defineConfig, resolveConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import injectHTML from 'vite-plugin-html-inject'

export default defineConfig({
  plugins: [
    tailwindcss(),
    injectHTML()
  ],
  build: {
    rollupOptions:{
        input: {
            main: "index.html",
            services: "services.html",
            projects: "projects.html",
            contact: "contact.html",
            form_complete: "form-complete.html",

            portfolio: "Portfolio/index.html",
            portfolio_projects: "Portfolio/projects.html",
            portfolio_contact: "Portfolio/contact.html",
            portfolio_form_complete: "Portfolio/form-complete.html"
        }
    }
  }
})