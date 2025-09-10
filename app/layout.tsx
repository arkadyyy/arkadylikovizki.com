import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Circle from "./components/Circle/Circle";
// import { headers } from "next/headers";

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
  // const headersList = headers();
  // const pathname = (await headersList.get("x-pathname")) || "/";
  return (
    <html lang="en">
      <body className={`${jakarta.variable} antialiased overflow-hidden`}>
        <div className="md:p-12 p-2 h-screen w-screen bg-black/40">
          <Navbar />
          {children}
          {/* bg blurry circles */}
          <Circle bottom="10rem" right="-10rem" size="344px" />
          <Circle bottom="14rem" right="50%" size="480px" />
          <Circle top="-30rem" right="16%" size="480px" />
        </div>
      </body>
    </html>
  );
}
