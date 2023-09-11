import ThemeProvider from "@/components/layout/providers";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: { template: `%s | My-Web` },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#F8F4EA" />
        <link rel="icon" type="image" href="/assets/favicon.png" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
