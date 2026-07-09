import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "M Hassan Asghar | Full Stack Developer Portfolio",
  description: "Results-driven Full Stack Developer with professional experience building scalable web applications using React, Next.js, Node.js, Express, and MongoDB.",
  metadataBase: new URL("https://bazariox-store.vercel.app"), // Fallback base URL based on dev's projects
  openGraph: {
    title: "M Hassan Asghar | Full Stack Developer Portfolio",
    description: "Results-driven Full Stack Developer with professional experience building scalable web applications using React, Next.js, Node.js, Express, and MongoDB.",
    type: "website",
    locale: "en_US",
    siteName: "Hassan Asghar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "M Hassan Asghar | Full Stack Developer Portfolio",
    description: "Results-driven Full Stack Developer with professional experience building scalable web applications using React, Next.js, Node.js, Express, and MongoDB.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans text-slate-900 bg-white dark:text-slate-100 dark:bg-brandDark`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
