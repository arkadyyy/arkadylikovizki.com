import { useRef, useState, useEffect, Ref, RefObject } from "react";

const useCenterIntersection = (rootElementRef: RefObject<HTMLElement>) => {
  const [isCentered, setIsCentered] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Check if the root element reference is available
    if (!rootElementRef?.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCentered(entry.isIntersecting);
      },
      {
        root: rootElementRef.current, // Use the passed-in scroll container as the root
        rootMargin: "0px -50% 0px -50%", // Create a horizontal line in the middle of the root
        threshold: 1, // A small threshold can be more reliable
      }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [rootElementRef]); // Re-run the effect if the root element reference changes

  return [elementRef, isCentered];
};

export default useCenterIntersection;
