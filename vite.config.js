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

          goblinPouch: 'Portfolio/projects/GoblinPouch/details.html',
          monthlyClaim: 'Portfolio/projects/MonthlyClaim/details.html',
          ecomStore: 'Portfolio/projects/EcomStore/details.html',
          eventBooking: 'Portfolio/projects/EventBooking/details.html',
          productChecker: 'Portfolio/projects/ProductChecker/details.html',
          secureFileShare: 'Portfolio/projects/SecureFileShare/details.html',

        }
    }
  }
})