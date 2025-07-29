"use client";

import { useAnimationFrame } from "motion/react";
import { useRef } from "react";

export default function AnimatedCube() {
  const cubeRef = useRef(null);

  useAnimationFrame((t) => {
    if (!cubeRef.current) return;

    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    cubeRef.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="absolute top-[0px] right-20 z-0">
      <div className="perspective-800 w-[100px] h-[100px]">
        <div className="w-full h-full relative preserve-3d" ref={cubeRef}>
          <div className="cube-side bg-red-500/60 front" />
          <div className="cube-side bg-blue-500/60 right" />
          <div className="cube-side bg-green-500/60 back" />
          <div className="cube-side bg-yellow-500/60 left" />
          <div className="cube-side bg-purple-500/60 top" />
          <div className="cube-side bg-pink-500/60 bottom" />
        </div>
      </div>

      {/* Estilos internos */}
      <style>{`
        .perspective-800 {
          perspective: 800px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .cube-side {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.6;
        }
        .front {
          transform: rotateY(0deg) translateZ(50px);
        }
        .right {
          transform: rotateY(90deg) translateZ(50px);
        }
        .back {
          transform: rotateY(180deg) translateZ(50px);
        }
        .left {
          transform: rotateY(-90deg) translateZ(50px);
        }
        .top {
          transform: rotateX(90deg) translateZ(50px);
        }
        .bottom {
          transform: rotateX(-90deg) translateZ(50px);
        }
      `}</style>
    </div>
  );
}
