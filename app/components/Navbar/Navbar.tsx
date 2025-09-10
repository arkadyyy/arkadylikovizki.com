"use client";

import Link from "next/link";
import github_svg from "../../../public/github_svg.svg";
import linkdein_svg from "../../../public/linkedin_svg.svg";
import whatsapp_svg from "../../../public/whatsapp_svg.svg";
import Image from "next/image";
import LeftNavContent from "./LeftNavContent";

const Navbar = (params: {}) => {
  return (
    <nav className="flex justify-between items-center h-20 mb-6 md:mb-0 p-4 md:p-0">
      <div>
        <LeftNavContent />
      </div>
      <div className="flex items-center justify-center gap-4 mr-1 md:mr-0">
        <Link href={"https://wa.me/+9720527323002"}>
          <Image alt="whatsapp" src={whatsapp_svg} />
        </Link>
        <Link href={"https://github.com/arkadyyy"}>
          <Image alt="github" src={github_svg} />
        </Link>
        <Link href={"https://www.linkedin.com/in/arkady-likovizki-3ab1ba183/"}>
          <Image alt="linkedin" src={linkdein_svg} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
