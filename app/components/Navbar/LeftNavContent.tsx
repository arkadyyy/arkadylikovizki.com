"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function LeftNavContent() {
  const pathname = usePathname();

  if (pathname === "/") return null;
  if (pathname === "/portfolio")
    return (
      <Link href={"/"} className="mb-4">
        <h1 className="font-jakarta font-bold text-[1.2rem]">Arkady</h1>
        <h1 className="font-jakarta font-bold text-[1.2rem] leading-2 relative">
          Likovizki
        </h1>
      </Link>
    );
}
