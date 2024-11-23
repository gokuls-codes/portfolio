"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

const PointerGlow = () => {
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
  const [showPointer, setShowPointer] = useState(false);
  const timerRef = useRef<null | NodeJS.Timeout>(null);

  const handleMouseMove = (e: MouseEvent) => {
    setPointerPosition({ x: e.clientX, y: e.clientY });
    setShowPointer(true);
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setShowPointer(false);
    }, 5000);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (timerRef.current !== null) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className=" w-full relative -z-10 pointer-events-none">
      <div
        className={cn(
          " size-80 lg:size-[500px] hidden transition-opacity duration-300 ease-in-out md:block blur-xl -z-10 cursor-follower rounded-full fixed -translate-x-1/2 -translate-y-1/2",
          showPointer ? "opacity-100" : "opacity-0"
        )}
        style={{
          top: pointerPosition.y,
          left: pointerPosition.x,
        }}
      />
    </div>
  );
};

export default PointerGlow;
