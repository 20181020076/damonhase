import React, { useEffect, useState } from "react";

const Scroller = () => {
  const [scroll, setScroll] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(window.innerHeight);
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  return (
    <div className="w-full text-nowrap bg-bone text-black mt-3  overflow-hidden">
      <div className="text-2xl w-full overflow-x-auto flex font-bold   uppercase gap-6 py-3 pl-4">
        <span>WorldWide  SHIPPING</span>
        <span>WorldWide  SHIPPING</span>
        <span>WorldWide  SHIPPING</span>

      </div>
    </div>
  );
};

export default Scroller;
