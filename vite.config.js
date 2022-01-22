import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^@material-ui\/pickers$/,
        replacement: resolve(
          __dirname,
          "./node_modules/@material-ui/pickers/esm"
        ),
      },
    ],
  },
});
