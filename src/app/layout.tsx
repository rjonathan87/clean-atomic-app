"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import { useState } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Movie</h1>
            <hr />
            {children}
          </div>
          <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
              <p>&copy; 2023 Movie App. All rights reserved.</p>
            </div>
          </footer>
        </QueryClientProvider>
      </body>
    </html>
  );
}