import { useEffect, useState } from "react";

export function useHorizontalDistanceObserver(
  ref1: React.RefObject<HTMLElement>,
  ref2: React.RefObject<HTMLElement>,
  distance = 0
) {
  const [isWithinDistance, setIsWithinDistance] = useState(true);

  useEffect(() => {
    if (!ref1.current || !ref2.current) return;

    const calculateHorizontalDistance = () => {
      if (!ref1.current || !ref2.current) return;

      const rect1 = ref1.current.getBoundingClientRect();
      const rect2 = ref2.current.getBoundingClientRect();

      const horizontalDistance = Math.max(
        0,
        Math.max(rect2.left - rect1.right, rect1.left - rect2.right)
      );

      setIsWithinDistance(horizontalDistance <= distance);
      console.log(
        `Horizontal distance: ${horizontalDistance}, Within distance: ${horizontalDistance <= distance}`
      );
    };

    // Calculate the distance immediately on mount
    calculateHorizontalDistance();

    // const observer = new IntersectionObserver(
    //   (entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) {
    //         calculateHorizontalDistance();
    //       }
    //     });
    //   },
    //   { threshold: 1.0 }
    // );

    // observer.observe(ref1.current);
    calculateHorizontalDistance();
    window.addEventListener("resize", calculateHorizontalDistance);

    // Clean up observer and resize listener on component unmount
    return () => {
      // if (ref1.current) observer.unobserve(ref1.current);
      window.removeEventListener("resize", calculateHorizontalDistance);
    };
  }, [ref1, ref2, distance]);

  return isWithinDistance;
}
