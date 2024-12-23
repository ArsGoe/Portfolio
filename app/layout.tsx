import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Footer from "@/app/Footer/Footer";

const inter = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Mon portfolio",
    description: "Generated by create next app",
};

export default function RootLayout({
                                                                          children,
                                                                      }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${inter.variable} antialiased`}
        >
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
    }