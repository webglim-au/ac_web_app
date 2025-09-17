import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          floatPrecision: 2,
        },
      },
      include: "**/*.svg?react",
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        employee: resolve(__dirname, "employee.html"),
        admin: resolve(__dirname, "admin.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@sharedApp": resolve(__dirname, "./shared/app"),
      "@shared": resolve(__dirname, "./shared"),
      "@employee": resolve(__dirname, "./EmployeePortal"),
      "@admin": resolve(__dirname, "./SuperAdminPortal"),
      "@employeeApp": resolve(__dirname, "./EmployeePortal/app"),
      "@adminApp": resolve(__dirname, "./SuperAdminPortal/app"),
      "@sharedPages": resolve(__dirname, "./shared/pages"),
      "@sharedComponents": resolve(__dirname, "./shared/components"),
      "@sharedServices": resolve(__dirname, "./shared/services"),
      "@adminPages": resolve(__dirname, "./SuperAdminPortal/pages"),
      "@adminComponents": resolve(__dirname, "./SuperAdminPortal/components"),
      "@adminServices": resolve(__dirname, "./SuperAdminPortal/services"),
      "@employeePages": resolve(__dirname, "./EmployeePortal/pages"),
      "@employeeComponents": resolve(__dirname, "./EmployeePortal/components"),
      "@employeeServices": resolve(__dirname, "./EmployeePortal/services"),
      "@contexts": resolve(__dirname, "./shared/contexts"),
      "@hooks": resolve(__dirname, "./shared/hooks"),
      "@utils": resolve(__dirname, "./shared/utils"),
      "@store": resolve(__dirname, "./shared/store"),
      "@assets": resolve(__dirname, "./shared/assets"),
    },
  },
});
