import { useEffect, useState } from "react";
import useActiveSection from "./useActiveSection";

export const useLogoInMenu = () => {
  const sectionIds = ["hero", "about", "psycho-work", "offer", "contact"];
  const activeSection = useActiveSection(sectionIds);
  const [showImage, setShowImage] = useState();

  useEffect(() => {
    setShowImage(activeSection !== "hero");
  }, [activeSection]);

  return showImage;
};
