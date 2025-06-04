// import React from "react";
// import Home from "./Components/Home";
// import { GridBackgroundDemo } from "./Components/Background";

// const App = () => {
//   return (
//     <>
//       <div className="relative min-h-screen bg-gray-100 overflow-hidden pb-5">
//         {/* Background */}
//         <div className="absolute inset-0 z-0">
//           <GridBackgroundDemo />
//         </div>

//         {/* Foreground content */}
//         <div className="relative z-10 max-w-7xl px-4 mx-auto flex flex-col items-center justify-center pt-30">
//           <div className="text-center mb-8">
//             <h1 className="text-4xl tracking-tight font-semibold capitalize text-gray-800">
//               AI{" "}
//               <span id="img" className="text-4xl text-[#EA2F14]">
//                 Image
//               </span>{" "}
//               Enhancer
//             </h1>
//             <p className="text-sm mt-3 font-medium text-[#EA2F14]/60">
//               Upload your image and let AI enhance it in seconds
//             </p>
//           </div>
//           <Home />
//           <div className="mt-10 text-sm text-gray-500">
//             <p>Powered by @kavyathakur</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;
import React from "react";
import Home from "./Components/Home";
import { GridBackgroundDemo } from "./Components/Background";
import { motion } from "framer-motion";

// Variants for text letter animation
const letterVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  }),
};

// Variant for other components
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const App = () => {
  const imageText = "Image".split("");

  return (
    <div className="relative min-h-auto bg-gray-100 overflow-hidden pb-5">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <GridBackgroundDemo />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl px-4 mx-auto flex flex-col items-center justify-center pt-30">
        {/* Heading Section */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl tracking-tight font-semibold capitalize text-gray-800"
            variants={fadeUp}
          >
            AI{" "}
            <span className="text-[#EA2F14] inline-block">
              {imageText.map((char, i) => (
                <motion.span
                  id="img"
                  key={i}
                  custom={i}
                  variants={letterVariant}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>{" "}
            Enhancer
          </motion.h1>

          <motion.p
            className="text-sm mt-3 font-medium text-[#EA2F14]/60"
            variants={fadeUp}
            transition={{ delay: 0.6 }}
          >
            Upload your image and let AI enhance it in seconds
          </motion.p>
        </motion.div>

        {/* Home Component Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Home />
        </motion.div>
      </div>
      <motion.footer
        className="w-full border-t border-gray-300 mt-20 pt-6 px-4 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <p className="text-sm text-gray-600">
          Turning pixels into perfection — with a touch of{" "}
          <span className="text-[#EA2F14] font-semibold">AI magic</span>.
        </p>
        <p className="text-xs text-gray-800 mt-1">Crafted by @kavyathakur</p>
      </motion.footer>
    </div>
  );
};

export default App;
