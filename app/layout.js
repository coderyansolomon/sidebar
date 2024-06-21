import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./_components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sidebar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <Sidebar />
        <div className="flex-grow bg-gray-800">
        {children}  
        </div>
      </body>
    </html>
  );
}
