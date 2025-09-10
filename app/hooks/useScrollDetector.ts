"use client";
import { useEffect, useState } from "react";

/**
 * Custom hook to detect user scroll attempts.
 * Works on both desktop (wheel/trackpad) and mobile (touchmove).
 *
 * Returns:
 *   - direction: "up" | "down" | null
 *   - lastEvent: "wheel" | "touch" | null
 */
export function useScrollDetector() {
  const [direction, setDirection] = useState<"up" | "down" | null>(null);
  const [lastEvent, setLastEvent] = useState<"wheel" | "touch" | null>(null);

  useEffect(() => {
    let lastTouchY: number | null = null;

    const onWheel = (e: WheelEvent) => {
      setDirection(e.deltaY > 0 ? "down" : "up");
      setLastEvent("wheel");
    };

    const onTouchStart = (e: TouchEvent) => {
      lastTouchY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (lastTouchY !== null) {
        const currentY = e.touches[0].clientY;
        setDirection(currentY < lastTouchY ? "down" : "up");
        setLastEvent("touch");
        lastTouchY = currentY;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return { direction, lastEvent };
}
