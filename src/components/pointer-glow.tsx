"use client";

import React, { useEffect, useState } from "react";

const PointerGlow = ({ children }: { children?: React.ReactNode }) => {
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setPointerPosition({ x: e.clientX, y: e.clientY });
    });

    return () => document.removeEventListener("mousemove", () => {});
  }, []);
  return (
    <div className=" w-full  relative">
      <div
        className=" size-40  xl:size-80 opacity-10 blur-xl z-50 cursor-follower rounded-full fixed -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          top: pointerPosition.y,
          left: pointerPosition.x,
        }}
      ></div>

      {children}
    </div>
  );
};

export default PointerGlow;
