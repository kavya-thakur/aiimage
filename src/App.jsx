import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import { motion } from "framer-motion";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Footer() {
  const location = useLocation();
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];
  return (
    <motion.footer
      className="w-full mt-10 pt-8 pb-4 px-4 text-center shadow-lg backdrop-blur-md"
      style={{ background: "var(--footer-bg)" }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <nav className="flex justify-center gap-8 mb-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`relative text-base md:text-lg font-semibold text-[var(--footer-text)] px-2 py-1 transition-colors duration-300 ${
              location.pathname === link.to
                ? "gradient-text"
                : "hover:gradient-text"
            }`}
          >
            <span className="relative group">
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#3a8dde] to-[#6f3ad6] rounded-full transition-all duration-500 group-hover:w-full"></span>
            </span>
          </Link>
        ))}
      </nav>
      <p className="text-xs" style={{ color: "var(--footer-text)" }}>
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-bold gradient-text">KavyaAI</span> — All rights
        reserved.
      </p>
    </motion.footer>
  );
}

const App = () => {
  return (
    <Router>
      <div className=" min-h-screen overflow-hidden flex flex-col justify-between px-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <div className="px-4 bg-[#E7E7E2]">
        <Footer />
      </div>
    </Router>
  );
};

export default App;
