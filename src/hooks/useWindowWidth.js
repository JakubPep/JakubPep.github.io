import { useState, useEffect } from "react";

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    console.log(window.innerWidth);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}