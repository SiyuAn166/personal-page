import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";



export const metadata: Metadata = {
  title: "<Siyu An/>",
  description: "Siyu's Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <NextUIProvider>
          
            {children}
          
        </NextUIProvider>
        
      </body>
    </html>
  );
}
