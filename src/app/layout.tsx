import type { Metadata } from "next";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Tweetzy",
  description: "Tweetzy - A Twitter Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="md:max-w-screen-xl mx-auto px-4">
          <Navbar />
          <div className="">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
