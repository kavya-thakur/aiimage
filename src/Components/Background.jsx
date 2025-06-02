

import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-white overflow-hidden">
      {/* Static Grid Background */}
      <div className="absolute inset-0 opacity-20 [background-size:40px_40px] [background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />

      {/* Multiple Glowing Lines with Ladder Motion */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[400px] bg-gradient-to-b from-[#6a5acd] to-transparent opacity-60 animate-ladder"
            style={{
              left: `${20 + i * 15}%`,
              bottom: "-400px",
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Radial Fading Effect for Depth */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]" />

      {/* Animation Keyframes */}
      {/* <style>
        {`
          @keyframes ladderMotion {
            0% { transform: translateY(100%) translateX(0); opacity: 1; }
            10% { transform: translateY(80%) translateX(10px); opacity: 1; }
            20% { transform: translateY(60%) translateX(-10px); opacity: 1; }
            30% { transform: translateY(40%) translateX(10px); opacity: 1; }
            40% { transform: translateY(20%) translateX(-10px); opacity: 1; }
            50% { transform: translateY(0%) translateX(0); opacity: 1; }
            100% { transform: translateY(-300%); opacity: 0; }
          }

          .animate-ladder {
            animation: ladderMotion 3s infinite linear;
          }
        `}
      </style> */}
    </div>
  );
}
