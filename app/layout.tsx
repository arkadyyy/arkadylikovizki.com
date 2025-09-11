import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Circle from "./components/Circle/Circle";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Arkady Likovizki Portfolio",
  description: "Arkady likovizki, Fullstack developer portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} antialiased md:p-12 p-2 overflow-hidden md:h-screen md:w-screen`}
      >
        {/* <div className=""> */}
        <Navbar />
        {children}
        <div className="absolute inset-0 w-screen h-screen -z-10 pointer-events-none overflow-hidden [clip-path:inset(0)]">
          <Circle bottom="10rem" right="-10rem" size="344px" />
          <Circle bottom="14rem" right="50%" size="480px" />
          <Circle top="-30rem" right="16%" size="480px" />
        </div>

        {/* </div> */}
      </body>
    </html>
  );
}
