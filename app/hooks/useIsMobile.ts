import { useState, useEffect, ChangeEvent } from "react";

const useIsMobile = (query = "(max-width: 768px)") => {
  // 1. Initialize state with the result of the media query check.
  // We use `useState` to track whether the media query matches.
  // The initial state is set based on the current viewport.
  const [isMobile, setIsMobile] = useState(() => {
    // We must check if `window` is defined to avoid issues with Server-Side Rendering (SSR).
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false; // Default to false for SSR
  });

  // 2. Add an effect to listen for changes to the media query.
  useEffect(() => {
    // Check if `window` is available.
    if (typeof window === "undefined") {
      return;
    }

    // Create a `MediaQueryList` object for the provided query.
    const mediaQueryList = window.matchMedia(query);

    // The event handler to run when the media query's status changes.
    const listener = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // 3. Add the event listener.
    mediaQueryList.addEventListener("change", listener);

    // 4. Clean up the listener when the component unmounts.
    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, [query]); // Re-run the effect if the query string changes.

  return isMobile;
};

export default useIsMobile;
