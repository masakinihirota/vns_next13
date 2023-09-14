import "@/styles/globals.css";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body suppressHydrationWarning={true}>
        {/* ↓ログイン画面に影響を与えている */}
        <main className="flex flex-col items-center min-h-screen bg-background">
          {children}
        </main>
      </body>
    </html>
  );
}
