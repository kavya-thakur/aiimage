import React, { useRef, useLayoutEffect } from "react";
import test1 from "../assets/Pieter_profile.webp";
import test2 from "../assets/dylan_profile.webp";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Testimonial = () => {
  const headingRef = useRef([]);
  const paragraphRef = useRef([]);
  const sectionRef = useRef(null);
  const testimonials = [
    {
      name: "Pieter Pattyn",
      image: test1,
      text: "mikiAI enhanced my blurry photos into sharp, stunning visuals. Super easy to use!",
    },
    {
      name: "Dylan Kim",
      image: test2,
      text: "Used mikiAI for product shots—instant improvement. Saved me hours of editing.",
    },
  ];

  const headingLines = ["DON'T TAKE", "MY WORD", "FOR IT /"];
  const paragraphLines = [
    "Here’s what my clients say about our ",
    "collaboration. Their satisfaction and ",
    "meeting expectations are my top priorities,",
    "ensuring the best experience possible.",
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Wait until next paint
      requestAnimationFrame(() => {
        // Animate headings
        headingRef.current.forEach((el) => {
          const split = new SplitType(el, { types: "chars" });
          gsap.from(split.chars, {
            scrollTrigger: {
              trigger: el,
              start: "top 85%", // this is safe now
              once: true,
            },
            opacity: 0,
            y: 50,
            stagger: 0.03,
            duration: 0.6,
            ease: "power3.out",
          });
        });

        // Animate paragraph lines
        const lines = gsap.utils.toArray(".paragraph-line");
        gsap.set(lines, { opacity: 0, y: 40 });

        gsap.to(lines, {
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 85%",
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.05,
        });
      });

      // Force ScrollTrigger refresh after full load
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      setTimeout(refresh, 500); // fallback
    }, sectionRef);

    return () => {
      ctx.revert();
      window.removeEventListener("load", ScrollTrigger.refresh);
    };
  }, []);

  return (
    <section
      id="testimonials"
      className=" text-[#0E0E0D] pt-24 my-20 min-h-screen w-full max-w-7xl mx-auto"
    >
      <div className="w-full  mx-auto">
        <div className="overflow-hidden  ">
          <h1 className=" text-5xl md:text-6xl lg:text-[5rem] tracking-tight mb-2 line-span font-sans">
            {headingLines.map((line, index) => (
              <div key={index} className="overflow-hidden">
                <span
                  key={index}
                  className="block"
                  ref={(el) => (headingRef.current[index] = el)}
                >
                  {line}
                </span>
              </div>
            ))}
          </h1>
        </div>
        <h3 className="lg:pl-[44rem] text-base md:text-3xl lg:text-4xl font-bold">
          (Testimonials)
        </h3>
        <p
          className="py-5 line-span text-base text-wrap tracking-tight md:text-xl lg:text-2xl lg:pl-[44rem]"
          ref={paragraphRef}
        >
          {paragraphLines.map((line, index) => (
            <div key={index} className="overflow-hidden">
              <span
                key={index}
                className="block paragraph-line"
                ref={(el) => (paragraphRef.current[index] = el)}
              >
                {line}
              </span>
            </div>
          ))}
        </p>
        {testimonials.map((testimonial, index) => (
          <div
            className="borderr flex border-t-1 border-gray-500 py-10 justify-between w-full gap-10 lg:block"
            key={index}
          >
            <h5 className="text-4xl font-bold sm:hidden">0{index + 1}</h5>
            <div className="flex flex-col gap-4 lg:gap-10 w-full lg:flex-row-reverse lg:justify-between ">
              <img
                src={testimonial.image}
                className="object-cover rounded-xl lg:w-1/2 lg:h-1/2"
                alt=""
              />
              <div className="flex flex-col gap-2 md:mt-10">
                <h5 className="text-2xl font-bold lg:text-4xl text-[#737373]">
                  {testimonial.name}
                </h5>
                <p className="text-lg lg:text-5xl lg:font-medium md:max-w-2xl">
                  "{testimonial.text}"
                </p>

                <div className="flex gap-2 text-xs md:text-xl text-neutral-500 mt-4 items-start">
                  <span className="border border-neutral-500 rounded-full px-2 py-1 ">
                    DESIGN
                  </span>
                  <span className="border border-neutral-500 rounded-full px-2 py-1">
                    DEVELOPMENT
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
