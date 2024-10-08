import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "easymde/dist/easymde.min.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/nav/Navigation";
import KofiWidget from "@/components/KofiWidget";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samuel Gonzalez Ampuero",
  description: "Fullstack Web Developer Portfolio",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <KofiWidget username={"pepepapi"} />
        </ThemeProvider>
      </body>
    </html>
  );
}
