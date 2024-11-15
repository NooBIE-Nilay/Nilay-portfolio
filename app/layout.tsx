import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import PageTransition from "@/components/ui/pageTransition";
import StairTransition from "@/components/ui/stairTransition";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata: Metadata = {
  title: "Nilay's Portfolio",
  description: "Portfolio Website for Nilay Banerjee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="favicon.png" />
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <ToastContainer theme="dark" hideProgressBar={true} />
      </body>
    </html>
  );
}
