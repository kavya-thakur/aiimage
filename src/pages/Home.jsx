import React, { useEffect, useRef } from "react";
import ImagePreview from "../Components/ImagePreview";
import Imgupload from "../Components/Imgupload";
import { useState } from "react";
import { enhancedImageAPI } from "../utils/EnhancimageAPI";
import image from "../assets/heroimage.png";
import video from "../assets/gradient1.svg";
import EnhanceOverview from "../Components/EnhanceOverview";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SplitType from "split-type";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const mainHeadingRef = useRef(null);
  const paraRef = useRef(null);

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (!mainHeadingRef.current || !paraRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    const splitHeading = new SplitType(mainHeadingRef.current, {
      types: "words",
      tagName: "span",
    });

    const headingWords = splitHeading.words.map((word) => {
      const wrapper = document.createElement("div");
      wrapper.style.display = "inline-block";
      wrapper.style.overflow = "hidden";
      wrapper.style.verticalAlign = "bottom";
      wrapper.style.lineHeight = "1.2";
      wrapper.style.paddingBottom = "2px";

      word.parentNode.insertBefore(wrapper, word);
      wrapper.appendChild(word);
      return word;
    });

    const splitPara = new SplitType(paraRef.current, {
      types: "lines",
      tagName: "span",
    });

    const paraLines = splitPara.lines.map((line) => {
      const wrapper = document.createElement("div");
      wrapper.style.overflow = "hidden";
      wrapper.style.display = "block";
      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);
      return line;
    });

    tl.fromTo(
      headingWords,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.05, duration: 0.8 }
    )
      .fromTo(
        paraLines,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 },
        "-=0.3"
      )
      .fromTo(
        ".hero-button",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.2"
      )
      .fromTo(
        ".hero-image",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        "-=0.4"
      );
  }, []);

  return (
    <>
      {/* Landing Section */}
      <div className="w-full h-screen -z-10 absolute top-0 left-0 opacity-40 rounded-b-2xl">
        <img
          src={video}
          alt="gradient"
          className="w-full h-full object-cover rounded-b-4xl"
        />
      </div>
      <section className="w-full max-w-7xl mx-auto text-center py-30 z-10">
        <h1
          ref={mainHeadingRef}
          className="word-break-fix max-w-2xl leading-none mx-auto text-4xl md:text-6xl  font-bold  mb-6 text-neutral-800 "
        >
          Enhance Your Images Instantly with AI
        </h1>
        <p
          ref={paraRef}
          className="text-base md:text-lg text-gray-700 tracking-tight mb-8 md:max-w-lg md:mx-auto"
        >
          Experience next-level clarity, color, and detail. Upload your photo
          and let our AI do the magic—no signup required.
        </p>
        <a
          href="#enhance"
          className="hero-button inline-block px-8 py-4 rounded-2xl font-bold text-lg bg-neutral-800 text-white "
        >
          Get Started
        </a>
        <div className="w-full h-full mt-20 rounded-4xl overflow-hidden shadow-2xl">
          <img
            src={image}
            alt=""
            className="w-full h-full md:h-96 object-cover rounded-4xl"
          />
        </div>
      </section>
      {/* Main Enhance Card */}
      <div
        id="enhance"
        className="glass-card transition-all p-6 md:p-10 w-full max-w-7xl mx-auto  flex flex-col gap-8 relative"
      >
        <div className="hero-image w-full h-full absolute top-0 left-0 -z-10 ">
          <img
            src={video}
            alt=""
            className=" w-full h-full object-cover rounded-4xl opacity-50"
          />
        </div>
        <Imgupload UploadImageHandler={UploadImageHandler} />
        <ImagePreview
          loading={loading}
          uploaded={uploadImage}
          enhanced={enhancedImage?.image}
        />
      </div>
      <div className="px-4 ">
        <EnhanceOverview />
      </div>
    </>
  );
};

export default Home;
