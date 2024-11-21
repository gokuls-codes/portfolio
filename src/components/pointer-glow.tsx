"use client";

import React, { useEffect, useState } from "react";

const PointerGlow = ({ children }: { children?: React.ReactNode }) => {
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
  // const [opacity, setOpacity] = useState(1);
  // const timerRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setPointerPosition({ x: e.clientX, y: e.clientY });
      // if (opacity !== 1) setOpacity(1);
      // if (timerRef.current !== null) {
      //   clearTimeout(timerRef.current);
      // }

      // timerRef.current = setTimeout(() => {
      //   setOpacity(0);
      // }, 500);
    });

    return () => document.removeEventListener("mousemove", () => {});
  }, []);

  return (
    <div className=" w-full relative -z-10">
      <div
        className=" size-40 hidden transition-opacity duration-75 md:block  xl:size-80 blur-xl -z-10 cursor-follower rounded-full fixed -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          top: pointerPosition.y,
          left: pointerPosition.x,
          // opacity: opacity,
        }}
      ></div>

      {children}
    </div>
  );
};

export default PointerGlow;
