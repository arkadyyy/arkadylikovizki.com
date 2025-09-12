"use client";
import { RefObject, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import Card from "../components/Card/Card";

function Portfolio() {
  const cardContainerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = cardContainerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return; // only act on vertical scrolling
      e.preventDefault();
      el.scrollLeft += e.deltaY; // convert vertical scroll to horizontal
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <ul
        ref={cardContainerRef}
        className={` md:h-full h-screen md:w-full w-full overflow-x-auto whitespace-nowrap no-scrollbar fixed z-10 pt-10 md:pt-4 md:px-4 md:pr-10 ${styles.scrollContainer}`}
      >
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Card
            rootRef={cardContainerRef as RefObject<HTMLElement>}
            key={item + index}
            animationDelay={index}
          />
        ))}
      </ul>
    </div>
  );
}
export default Portfolio;
