import React, { useEffect, useState } from "react";
import background from "../../assets/images/prof.jpg";

const Prof = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="rotate"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vh", // Set the width to 100% of the viewport height
        height: "100vw", // Set the height to 100% of the viewport width
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        overflow: "hidden",
        transformOrigin: "top left",
        transform: "rotate(270deg) translateX(-100%)", // Rotate and move left by the width of the viewport
      }}>
      {/* <img src={background} alt={"Professor Rela"} /> */}
    </div>
  );
};

export default Prof;


