import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Searching Project Demo",
  description: "Searching Cities information tool",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
