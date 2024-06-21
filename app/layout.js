import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pokemon Search",
  description: "Pokemon Search",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-200">{children}</body>
    </html>
  );
}
