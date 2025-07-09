import React, { useLayoutEffect, useRef } from "react";
import {
  Sparkles,
  Cpu,
  Image,
  Star,
  User,
  Upload,
  ShoppingBag,
  MonitorUp,
  Brush,
  Zap,
  ImagePlus,
  BrainCircuit,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const EnhanceOverview = () => {
  const sectionRef = useRef(null);
  const headingRefs = useRef([]);
  const paraRefs = useRef([]);
  const cardRefs = useRef([]);

  const headingLines = ["Why Our AI Image ", "Enhancer Stands Out."];

  const paragraphLines = [
    "Not just a filter. Our AI intelligently upscales,",
    "denoises, and enhances your images in ",
    "seconds. Clarity and sharpness, redefined.",
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading (char-split)
      headingRefs.current.forEach((el) => {
        const split = new SplitType(el, { types: "chars" });

        gsap.from(split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          y: 50,
          opacity: 0,
          stagger: 0.03,
          duration: 0.6,
          ease: "power3.out",
        });
      });   

      // Animate paragraph (line-split)
      const lines = gsap.utils.toArray(".enhance-para-line");
      gsap.set(lines, { y: 40, opacity: 0 });
      gsap.to(lines, {
        scrollTrigger: {
          trigger: paraRefs.current[0],
          start: "top 85%",
          once: true,
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.05,
      });

      // Animate cards
      cardRefs.current.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              once: true,
            },
          }
        );
      });

      // Force ScrollTrigger refresh
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      setTimeout(refresh, 500);
    }, sectionRef);

    return () => {
      ctx.revert();
      window.removeEventListener("load", ScrollTrigger.refresh);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto  lg:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-6"
    >
      {/* LEFT TEXT */} 
      <div className="md:col-span-6 flex flex-col justify-center gap-4">
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          {headingLines.map((line, index) => (
            <div key={index} className="overflow-hidden">
              <span
                className="block heading-line"
                ref={(el) => (headingRefs.current[index] = el)}
              >
                {line}
              </span>
            </div>
          ))}
        </h2>

        <p className="text-neutral-600 text-base md:text-lg lg:text-xl tracking-tight text-wrap">
          {paragraphLines.map((line, index) => (
            <div key={index} className="overflow-hidden">
              <span
                className="block enhance-para-line"
                ref={(el) => (paraRefs.current[index] = el)}
              >
                {line}
              </span>
            </div>
          ))}
        </p>
        <ul className="mt-4 space-y-3 text-neutral-700 text-base">
          <li className="flex items-start gap-3">
            <Cpu className="text-purple-600 w-5 h-5 mt-1" />
            Deep learning-powered enhancement with high precision.
          </li>
          <li className="flex items-start gap-3">
            <Sparkles className="text-purple-600 w-5 h-5 mt-1" />
            Sharpens blurry images & restores fine details.
          </li>
          <li className="flex items-start gap-3">
            <Image className="text-purple-600 w-5 h-5 mt-1" />
            Works on any format — no compression or quality loss.
          </li>
          <li className="flex items-start gap-3">
            <Star className="text-purple-600 w-5 h-5 mt-1" />
            Fast, free, and privacy-friendly. No login required.
          </li>
        </ul>
      </div>

      {/* RIGHT CARDS */}
      <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Use-Cases */}
        <div
          ref={(el) => (cardRefs.current[0] = el)}
          className="bg-white p-5 rounded-3xl shadow-md hover:shadow-xl transition"
        >
          <h3 className="text-xl font-semibold mb-3 text-purple-600 flex items-center gap-2">
            <Brush className="w-5 h-5" /> Use-Cases
          </h3>
          <ul className="text-sm text-neutral-600 space-y-6">
            <li className="flex items-center gap-2">
              <User className="w-4 h-4" /> Portrait sharpening
            </li>
            <li className="flex items-center gap-2">
              <Upload className="w-4 h-4" /> Old photo restoration
            </li>
            <li className="flex items-center gap-2">
              <MonitorUp className="w-4 h-4" /> Low-res to HD conversion
            </li>
            <li className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" /> Product photo upscaling
            </li>
          </ul>
        </div>

        {/* How It Works */}
        <div
          ref={(el) => (cardRefs.current[1] = el)}
          className="bg-white p-5 rounded-3xl shadow-md hover:shadow-xl transition"
        >
          <h3 className="text-xl font-semibold mb-3 text-purple-600 flex items-center gap-2">
            <Zap className="w-5 h-5" /> How It Works
          </h3>
          <ul className="text-sm text-neutral-600 space-y-4">
            <li className="flex items-center gap-2">
              <Upload className="w-4 h-4" /> Upload any image
            </li>
            <li className="flex items-center gap-2">
              <BrainCircuit className="w-4 h-4" /> AI enhancement runs
              automatically
            </li>
            <li className="flex items-center gap-2">
              <ImagePlus className="w-4 h-4" /> Get your enhanced result
              instantly
            </li>
            <li className="flex items-center gap-2">
              <Star className="w-4 h-4" /> Download & compare before/after
            </li>
          </ul>
        </div>

        {/* Results Card */}
        <div
          ref={(el) => (cardRefs.current[2] = el)}
          className="col-span-1 sm:col-span-2 bg-gradient-to-r from-purple-500/20 to-white/10 p-6 rounded-3xl shadow-md"
        >
          <h3 className="text-xl font-bold mb-3 text-purple-700 dark:text-purple-400">
            Results That Speak for Themselves
          </h3>
          <p className="text-sm text-neutral-700">
            We've enhanced <strong>10,000+</strong> images — from pixelated
            photos to low-light captures. Trusted by designers, photographers,
            and everyday users worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnhanceOverview;
