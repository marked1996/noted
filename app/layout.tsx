import "./globals.css";
import { Inter } from "next/font/google";
// import Image from 'next/image';
// import gridBg from "../public/gridbg.svg"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Noted app",
  description: "An app for keeping notes",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body
      className={` m-auto ${inter.variable} bg-red m-auto mx-12 my-4 max-w-[1438px] overflow-x-hidden text-base text-dark md:my-8 lg:my-12`}
    >
      {children}
    </body>
  </html>
);

export default RootLayout;
