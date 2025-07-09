import React, { useLayoutEffect, useRef } from "react";
import {
  ShieldCheck,
  ImagePlus,
  Cpu,
  Star,
  Upload,
  BrainCircuit,
  Lock,
  Award,
  HeartHandshake,
  Smile,
  Globe,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Testimonial from "../Components/Testimonial";
import dylanProfile from "../assets/dylan_profile.webp";
import pieterProfile from "../assets/Pieter_profile.webp";
import gradient from "../assets/gradient1.svg";

const team = [
  { name: "Pieter Pattyn", role: "Co-Founder & AI Lead", image: pieterProfile },
  { name: "Dylan Kim", role: "Co-Founder & Product", image: dylanProfile },
  { name: "Kavya S.", role: "Frontend Engineer", image: null },
];

const trustedLogos = [
  <svg key="1" width="60" height="24">
    <rect width="60" height="24" rx="6" fill="#E5E7EB" />
    <text x="50%" y="60%" textAnchor="middle" fill="#888" fontSize="12">
      DesignCo
    </text>
  </svg>,
  <svg key="2" width="60" height="24">
    <rect width="60" height="24" rx="6" fill="#E5E7EB" />
    <text x="50%" y="60%" textAnchor="middle" fill="#888" fontSize="12">
      Pixelify
    </text>
  </svg>,
  <svg key="3" width="60" height="24">
    <rect width="60" height="24" rx="6" fill="#E5E7EB" />
    <text x="50%" y="60%" textAnchor="middle" fill="#888" fontSize="12">
      Startly
    </text>
  </svg>,
  <svg key="4" width="60" height="24">
    <rect width="60" height="24" rx="6" fill="#E5E7EB" />
    <text x="50%" y="60%" textAnchor="middle" fill="#888" fontSize="12">
      PhotoPro
    </text>
  </svg>,
];

const coreValues = [
  {
    icon: <HeartHandshake className="w-6 h-6 text-purple-600" />,
    title: "Integrity",
    desc: "We put user privacy and trust above all else.",
  },
  {
    icon: <Award className="w-6 h-6 text-purple-600" />,
    title: "Excellence",
    desc: "We strive for the highest quality in every pixel.",
  },
  {
    icon: <Smile className="w-6 h-6 text-purple-600" />,
    title: "Simplicity",
    desc: "We make advanced AI accessible to everyone.",
  },
  {
    icon: <Globe className="w-6 h-6 text-purple-600" />,
    title: "Global Impact",
    desc: "We empower creators and businesses worldwide.",
  },
];

const howItWorks = [
  {
    icon: <Upload className="w-5 h-5 text-purple-600" />,
    title: "Upload",
    desc: "Choose any image—no signup required.",
  },
  {
    icon: <BrainCircuit className="w-5 h-5 text-purple-600" />,
    title: "AI Enhances",
    desc: "Our deep learning model upscales and denoises instantly.",
  },
  {
    icon: <ImagePlus className="w-5 h-5 text-purple-600" />,
    title: "Download",
    desc: "Get your high-res, crystal-clear result in seconds.",
  },
];

const securityBadges = [
  {
    icon: <Lock className="w-5 h-5 text-purple-600" />,
    label: "End-to-End Encrypted",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
    label: "No Image Storage",
  },
  {
    icon: <Cpu className="w-5 h-5 text-purple-600" />,
    label: "AI Only, No Humans",
  },
  {
    icon: <Star className="w-5 h-5 text-purple-600" />,
    label: "99.99% Uptime",
  },
];

const About = () => {
  const sectionRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".bento-card").forEach((card, i) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        });
      });
      gsap.from(".about-hero-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".about-hero-desc", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-2 md:px-8 py-16 max-w-7xl mx-auto min-h-screen mt-20"
    >
      {/* Hero/Intro */}
      <div className="relative z-10 flex flex-col items-center text-center mb-20">
        <h1 className="about-hero-title text-5xl md:text-7xl font-extrabold gradient-text2 mb-6">
          About mikiAI
        </h1>
        <p className="about-hero-desc text-lg md:text-2xl text-neutral-700 max-w-2xl mx-auto mb-4">
          AI-powered image enhancement for everyone. No logins, no limits—just
          stunning results, instantly.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-2">
          {securityBadges.map((b, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur rounded-full text-sm font-medium text-neutral-800 shadow-sm border border-neutral-200"
            >
              {b.icon} {b.label}
            </span>
          ))}
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 bento-grid">
        {/* Mission */}
        <div className="bento-card md:col-span-2 bg-gradient-to-br from-purple-400/80 via-purple-200/80 to-white/80 rounded-3xl p-10 shadow-2xl flex flex-col justify-between min-h-[260px] border border-purple-100 relative overflow-hidden">
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-200/40 rounded-full blur-2xl z-0" />
          <h2 className="text-2xl font-bold text-neutral-800 drop-shadow mb-2 z-10 relative">
            Our Mission
          </h2>
          <p className="text-neutral-900 text-base z-10 relative">
            To democratize professional-grade image enhancement—making it
            accessible, fast, and free for creators, businesses, and dreamers
            everywhere.
          </p>
        </div>
        {/* Vision */}
        <div className="bento-card md:col-span-2 bg-gradient-to-tr from-pink-200/80 via-white/80 to-purple-100/80 rounded-3xl p-10 shadow-xl flex flex-col justify-between min-h-[260px] border border-pink-100 relative overflow-hidden">
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-pink-200/40 rounded-full blur-2xl z-0" />
          <h2 className="text-2xl font-bold text-purple-700 mb-2 z-10 relative">
            Our Vision
          </h2>
          <p className="text-purple-900/90 text-base z-10 relative">
            A world where creative freedom and clarity are never limited by
            technology. mikiAI is your smart assistant for better pixels, always
            evolving.
          </p>
        </div>
        {/* Our Story */}
        <div className="bento-card md:col-span-2 bg-gradient-to-br from-blue-100/80 via-white/80 to-purple-50/80 rounded-3xl p-10 shadow-lg flex flex-col justify-between min-h-[260px] border border-blue-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200/40 rounded-full blur-2xl z-0" />
          <h2 className="text-2xl font-bold text-blue-700 mb-2 z-10 relative">
            Our Story
          </h2>
          <p className="text-blue-900/90 text-base z-10 relative">
            Founded by passionate engineers and artists, mikiAI was born from
            the frustration of blurry, low-res images. We built a tool that
            empowers anyone to create, share, and shine—no technical skills
            required.
          </p>
        </div>
        {/* How It Works */}
        <div className="bento-card md:col-span-3 bg-gradient-to-br from-white via-purple-50 to-blue-50 rounded-3xl p-10 shadow-2xl flex flex-col gap-6 border border-purple-100 relative overflow-hidden min-h-[320px]">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-purple-100/40 rounded-full blur-2xl z-0" />
          <h2 className="text-2xl font-bold text-purple-700 mb-4 z-10 relative">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row gap-6 z-10 relative">
            {howItWorks.map((step, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col items-center text-center gap-2"
              >
                <div className="bg-purple-100 p-3 rounded-full mb-2 shadow-lg border border-purple-200">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-lg text-purple-800">
                  {step.title}
                </h3>
                <p className="text-neutral-700 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Core Values */}
        <div className="bento-card md:col-span-3 bg-gradient-to-br from-yellow-100/80 via-white/80 to-purple-50/80 rounded-3xl p-10 shadow-xl flex flex-col gap-6 border border-yellow-100 relative overflow-hidden min-h-[320px]">
          <div className="absolute -bottom-10 right-1/2 translate-x-1/2 w-40 h-40 bg-yellow-200/40 rounded-full blur-2xl z-0" />
          <h2 className="text-2xl font-bold text-yellow-700 mb-4 z-10 relative">
            Core Values
          </h2>
          <div className="grid grid-cols-2 gap-4 z-10 relative">
            {coreValues.map((val, i) => (
              <div key={i} className="flex items-start gap-3">
                {val.icon}
                <div>
                  <h4 className="font-semibold text-base text-yellow-900">
                    {val.title}
                  </h4>
                  <p className="text-yellow-900/80 text-sm">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Security & Privacy */}
        <div className="bento-card md:col-span-2 bg-gradient-to-br from-green-100/80 via-white/80 to-purple-50/80 rounded-3xl p-10 shadow-lg flex flex-col gap-4 border border-green-100 relative overflow-hidden min-h-[260px]">
          <div className="absolute top-0 left-0 w-24 h-24 bg-green-200/40 rounded-full blur-2xl z-0" />
          <h2 className="text-2xl font-bold text-green-700 mb-2 z-10 relative">
            Security & Privacy
          </h2>
          <ul className="space-y-2 text-green-900 text-base z-10 relative">
            <li className="flex items-center gap-2">
              <Lock className="text-green-600 w-5 h-5" /> End-to-end encrypted
              processing
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="text-green-600 w-5 h-5" /> We never store
              your images
            </li>
            <li className="flex items-center gap-2">
              <Cpu className="text-green-600 w-5 h-5" /> 100% AI-powered, no
              human review
            </li>
            <li className="flex items-center gap-2">
              <Star className="text-green-600 w-5 h-5" /> 99.99% uptime and
              reliability
            </li>
          </ul>
        </div>
        {/* Trusted By */}
        <div className="bento-card md:col-span-4 bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl p-10 shadow-2xl flex flex-col items-center justify-center gap-4 border border-blue-100 relative overflow-hidden min-h-[180px]">
          <div className="absolute -top-8 right-1/3 w-32 h-32 bg-blue-200/40 rounded-full blur-2xl z-0" />
          <h2 className="text-2xl font-bold text-blue-700 mb-2 z-10 relative">
            Trusted by Creators & Teams Worldwide
          </h2>
          <div className="flex flex-wrap gap-6 items-center justify-center z-10 relative">
            {trustedLogos}
          </div>
          <p className="text-blue-900/80 text-sm mt-2 z-10 relative">
            Over <strong>50,000+</strong> images enhanced for designers,
            developers, marketers, and more.
          </p>
        </div>
        
      </div>

      {/* Testimonials */}
      <div className="mt-24">
        <Testimonial />
      </div>
    </section>
  );
};

export default About;
