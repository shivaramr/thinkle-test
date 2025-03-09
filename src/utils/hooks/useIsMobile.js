import { useState, useEffect } from "react";

// Custom hook to detect if the device is mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile devices typically have a width <= 768px
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
