import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-black text-white py-12 px-6 md:px-20 border-t border-[#D6D3DC] mt-20 rounded-3xl mb-5 max-w-7xl mx-auto "
    >
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Branding */}
        <div>
          <h2 className="text-5xl md:text-4xl lg:text-6xl tracking-tighter font-bold text-center">
            Try MikiAI <span className="block text-[#b89bf4]">Today</span>
          </h2>
          <p className="text-sm text-gray-300 mt-3 text-center">
            {/* ai image enhancer  */}
            Your personal AI image enhancer.
          </p>
          <div className="flex mt-4 space-x-4 text-[#d3bff8] justify-center">
            <FaTwitter className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaGithub className="cursor-pointer" />
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-2 text-sm md:text-base lg:text-lg">Menu</h3>
          <ul className="space-y-1 text-sm md:text-base lg:text-lg text-gray-400 cursor-pointer flex flex-col gap-2">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-10">
        © {new Date().getFullYear()} MikiAI. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
