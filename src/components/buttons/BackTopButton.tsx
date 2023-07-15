import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

const BackTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isVisible && (
    <div className="w-full flex justify-center md:justify-end">
      <button
        data-testid="back-top-button"
        className="flex justify-center items-center border-2 border-white rounded-full py-4 px-4"
        onClick={scrollToTop}
      >
        <ArrowUpIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default BackTopButton;