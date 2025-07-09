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
import Footer from "./Components/Footer";


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

      <div className="px-4 ">
        <Footer />
      </div>
    </Router>
  );
};

export default App;
