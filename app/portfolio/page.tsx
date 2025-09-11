"use client";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import Circle from "../components/Circle/Circle";
import Card from "../components/Card/Card";
import ClientCircle from "../components/ClientCircle/ClientCircle";

function Portfolio() {
  const arr = [1, 2, 3];
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = ref.current;
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
        ref={ref}
        className={` md:h-full h-screen md:w-full w-full overflow-x-auto whitespace-nowrap no-scrollbar fixed z-10 pt-10 md:pt-4 md:px-4 md:pr-10 ${styles.scrollContainer}`}
      >
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Card key={item + index} animationDelay={index} />
        ))}
      </ul>
      {/* client circles */}
      {/* <ClientCircle right="54%" top="26%" size="1024px" /> */}
      {/* <ClientCircle right="2%" top="6%" size="1024px" /> */}
      {/* <ClientCircle right="26%" top="-30%" size="1024px" /> */}
    </div>
  );
}
export default Portfolio;
