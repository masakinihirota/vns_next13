import "@/styles/globals.css";
import React from "react";

import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // darkモードの切り替えを行っている
    // dark or light
    <html lang="en" className="dark">
      <head />
      <body suppressHydrationWarning={true}>
        {/* ↓ログイン画面に影響を与えている */}
        <main className="flex flex-col items-center min-h-screen bg-background">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
