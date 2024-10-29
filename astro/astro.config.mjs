// @ts-check
import { defineConfig, envField } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  env: {
    schema: {
      THIRDWEB_CLIENT_API_KEY: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },
});
