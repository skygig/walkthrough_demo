import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "jotai";

export const metadata: Metadata = {
  title: "Walkthrough",
  description: "The Mobile-First Walkthrough",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
