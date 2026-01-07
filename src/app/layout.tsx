import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../theme";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fahmida Akter Nupur | Portfolio",
  description: "Competitive programmer and problem solver. Passionate about coding, algorithms, and building impactful solutions.",
  icons: {
    icon: '/favicon.png',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased font-serif"
        suppressHydrationWarning
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function () {
                  try {
                    const theme = localStorage.getItem('theme');
                    if (theme === 'dark') {
                      document.documentElement.classList.add('dark');
                    } else if (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                      document.documentElement.classList.add('dark');
                    }
                  } catch (_) {}
                })();
                `,
          }}
        />

        <ThemeProvider>
          <BackgroundBlobs />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
