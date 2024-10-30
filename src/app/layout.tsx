import type { Metadata } from "next";
import { Poppins } from "@/utils/custom-fonts";
import "../../public/assets/css/globals.css";

export const metadata: Metadata = {
  title: "Immigify",
  description: "Immigration dashboard test - by Nnajiofor Uchenna Franklin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
