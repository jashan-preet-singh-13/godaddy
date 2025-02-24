import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Godaddy Task",
  description: "Godaddy task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-blue-500 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">My Header</h1>
          </div>
        </header>


        <main className="flex-grow bg-gray-100 p-4">
          <div className="container mx-auto">
            {children}
          </div>
        </main>

        <footer className="bg-gray-800 text-white p-4">
          <div className="container mx-auto text-center">
           My Footer
          </div>
        </footer>
      </body>
    </html>
  );
}
