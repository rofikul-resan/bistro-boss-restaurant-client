import { useEffect } from "react";

const ScrollToTop = ({ path }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [path]);
  return null;
};

export default ScrollToTop;
