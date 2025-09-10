"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import scroll_down from "@/public/scroll_down.svg";
import { useScrollDetector } from "@/app/hooks/useScrollDetector";
import { useRouter } from "next/navigation";

function ScrollAction() {
  const router = useRouter();
  const [animate, setAnimate] = useState(false);
  const { direction, lastEvent } = useScrollDetector();

  // jumping mouse animation
  useEffect(() => {
    const t = setTimeout(() => {
      setAnimate(true);
    }, 3600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (direction === "down") {
      console.log(`User scrolled down via ${lastEvent}`);
    }
  }, [direction, lastEvent, router]);

  return (
    <Link
      className={`absolute bottom-50 cursor-pointer  ${
        animate ? "animate-bounce" : ""
      }`}
      href={"/portfolio"}
    >
      <Image src={scroll_down} alt="scroll down" />
    </Link>
  );
}

export default ScrollAction;
