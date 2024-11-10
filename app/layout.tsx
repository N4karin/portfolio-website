import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { Provider } from "./components/Provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Nakarin",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-black dark:bg-gray-900 dark:text-white h-full selection:bg-gray dark:selection:bg-gray-800`}>
        <Provider>
          <Navbar />
          <main className="max-w-6xl mx-auto px-3 sm:px-5 lg:px-7">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
