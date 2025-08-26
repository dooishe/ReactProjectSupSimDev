import { useRef, useEffect } from "react";
export default function useAutoScroll(dependencies) {
  //кастомный хук для скролла
  const elementRef = useRef(null);
  useEffect(() => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [dependencies]);
  return elementRef;
}
