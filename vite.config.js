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
            portfolio_form_complete: "Portfolio/form-complete.html",

          goblinPouch: resolve(__dirname, 'Portfolio/projects/GoblinPouch/details.html'),
          monthlyClaim: resolve(__dirname, 'Portfolio/projects/MonthlyClaim/details.html'),
          ecomStore: resolve(__dirname, 'Portfolio/projects/EcomStore/details.html'),
          eventBooking: resolve(__dirname, 'Portfolio/projects/EventBooking/details.html'),
          productChecker: resolve(__dirname, 'Portfolio/projects/ProductChecker/details.html'),
          secureFileShare: resolve(__dirname, 'Portfolio/projects/SecureFileShare/details.html'),

        }
    }
  }
})