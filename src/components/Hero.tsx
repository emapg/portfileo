import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    })
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    }, "-=0.5");
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="text-center z-10">
        <h1 ref={titleRef} className="text-6xl font-bold text-white mb-4">
          Creative Developer
        </h1>
        <p ref={subtitleRef} className="text-xl text-white/80">
          Bringing ideas to life through code and design
        </p>
      </div>
    </div>
  );
}