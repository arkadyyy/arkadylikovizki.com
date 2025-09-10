"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useScrollDetector } from "@/app/hooks/useScrollDetector";
import { useRouter } from "next/navigation";
function Heading() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { direction, lastEvent } = useScrollDetector();
  const router = useRouter();
  const tl = gsap.timeline();

  const handleClick = () => {
    if (containerRef.current) {
      const elements = gsap.utils.toArray(
        containerRef.current.querySelectorAll("h1, h3")
      );

      // Fly backwards on click
      tl.to(elements, {
        z: -100, // move back "into the screen"
        opacity: 0,
        duration: 1,
        ease: "power2.in",
        stagger: 0.1, // slightly faster stagger,
      }).then(() => router.push("/portfolio"));
    }
  };
  useEffect(() => {
    if (direction === "down") {
      console.log(`User scrolled down via ${lastEvent}`);
      handleClick();
    }
  }, [direction, lastEvent]);

  return (
    <div
      ref={containerRef}
      style={{ perspective: 800, willChange: "transform, opacity" }}
      className="relative bottom-50 z-10"
    >
      <h1 className="font-jakarta font-bold text-6xl md:text-[60px] 2xl:text-[80px]">
        Arkady
      </h1>
      <h1 className="font-jakarta font-bold text-6xl md:text-[60px] 2xl:text-[80px] leading-10 md:leading-13 relative right-0.5 md:right-1">
        Likovizki
      </h1>
      <div className="relative top-6 md:top-10">
        <h3 className="font-jakarta font-light text-3xl md:text-[2rem] 2xl:text-[3rem] text-dark-gray ">
          Fullstack Developer
        </h3>
        <h3 className="font-jakarta font-medium text-lg md:text-[2rem] 2xl:text-[2rem] text-dark-gray leading-4 md:leading-6 text-end">
          with a keen eye for design
        </h3>
      </div>
    </div>
  );
}

export default Heading;
