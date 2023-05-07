import { useEffect, useState } from "react";

export const useLogoInMenu = () => {
  const [showImage, setShowImage] = useState();

  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setShowImage(false);
        return;
      }
      setShowImage(true);
    });
  });

  useEffect(() => {
    heroObserver.observe(document.querySelector("#hero"));
  })
  
  return showImage;
};
