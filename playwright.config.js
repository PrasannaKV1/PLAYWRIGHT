// @ts-check
import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ["html"], // Local HTML report
    [
      "playwright-mail-reporter",
      {
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        secure: process.env.MAIL_SECURE === "true", // convert string to boolean
        username: process.env.MAIL_USERNAME,
        password: process.env.MAIL_PASSWORD,
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO, // Comma-separated emails
        subject: process.env.MAIL_SUBJECT,
      },
    ],
  ],
  use: {
    screenshot: "only-on-failure",
    trace: "on-first-retry",
    viewport: null,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
