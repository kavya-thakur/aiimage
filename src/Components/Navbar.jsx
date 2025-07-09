import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const location = useLocation();
  const menuItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  const menuContainer = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 14,
        when: "beforeChildren",
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 14,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const menuItem = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center relative">
        <nav className="hidden md:flex justify-between items-center py-4 px-4 backdrop-blur-xl bg-white/80 rounded-2xl fixed top-5 w-[60%] max-w-7xl mx-auto z-50 shadow-lg border border-gray-100">
          <div className="text-xl font-bold text-gray-800">
            Kav<span className="heading gradient-text">AI</span>
          </div>

          <ul className="flex space-x-6">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  to={item.to}
                  className={`transition-all duration-300 px-2 py-1 font-semibold text-base md:text-lg ${
                    location.pathname === item.to
                      ? "gradient-text"
                      : "text-gray-600 hover:gradient-text"
                  }`}
                >
                  <span className="relative group">
                    {item.label}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#3a8dde] to-[#6f3ad6] rounded-full transition-all duration-500 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-center relative">
        <nav className="flex justify-between items-center py-4 px-4 backdrop-blur-xl bg-white/80 rounded-2xl fixed top-5 w-[88%] z-50 shadow-lg border border-gray-100">
          <div className="text-xl font-bold text-gray-800">
            Kav<span className="heading gradient-text">AI</span>
          </div>

          {/* Hamburger to Cross Animated */}
          <motion.button
            className="relative w-8 h-8 focus:outline-none"
            onClick={() => setisOpen(!isOpen)}
            animate={isOpen ? "opened" : "closed"}
            initial={false}
          >
            <motion.span
              className="absolute top-1 left-0 h-0.5 w-full bg-gray-800"
              variants={{
                closed: { rotate: 0, y: 0 },
                opened: { rotate: 45, y: 6 },
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute top-3 left-0 h-0.5 w-full bg-gray-800"
              variants={{
                closed: { opacity: 1 },
                opened: { opacity: 0 },
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute top-5 left-0 h-0.5 w-full bg-gray-800"
              variants={{
                closed: { rotate: 0, y: 0 },
                opened: { rotate: -45, y: -6 },
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>

          {/* Dropdown Menu with Slide + Staggered Items */}
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                key="dropdown"
                variants={menuContainer}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-18 bg-white rounded-xl left-0 right-0 p-4 text-center shadow-lg z-10 border border-gray-100"
              >
                {menuItems.map((item, index) => (
                  <motion.li key={index} variants={menuItem}>
                    <Link
                      to={item.to}
                      className={`block px-2 py-1 font-semibold text-lg transition-all duration-300 ${
                        location.pathname === item.to
                          ? "gradient-text"
                          : "text-gray-700 hover:gradient-text"
                      }`}
                      onClick={() => setisOpen(false)}
                    >
                      <span className="relative group">
                        {item.label}
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#3a8dde] to-[#6f3ad6] rounded-full transition-all duration-500 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
