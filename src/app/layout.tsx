"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Poppins } from "next/font/google";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "./globals.css";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />

        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>

        <Footer />
      </body>
    </html>
  );
}
