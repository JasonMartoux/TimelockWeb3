import { defineConfig, envField } from "astro/config";

import alpinejs from "@astrojs/alpinejs";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      THIRDWEB_CLIENT_API_KEY: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },

  integrations: [alpinejs(), react()],
});