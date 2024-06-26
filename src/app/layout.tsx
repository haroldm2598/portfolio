import "@/assets/styles/main.scss";
import type { Metadata } from "next";
import { montserrat } from "@/lib/fonts";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Header/Footer";

import { ReduxProvider } from "./StoreProvider";

export const metadata: Metadata = {
  title: "RoldDev | Portfolio",
  description: "a professional portfolio of harold mag-isa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
