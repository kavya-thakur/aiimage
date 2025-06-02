// import React from "react";
// import Home from "./Components/Home";
// import { GridBackgroundDemo } from "./Components/Background";

// const App = () => {
//   return (
//     <div className="max-w-7xl px-4 mx-auto flex flex-col items-center justify-center bg-gray-100 pt-40 overflow-hidden relative">
//       <GridBackgroundDemo/>
//       <div className="text-center mb-8 ">
//         <h1 className="text-3xl font-semibold capitalize text-gray-800">
//           AI Image enhancer
//         </h1>
//         <p className="capitalize text-sm mt-3 font-medium">
//           {" "}
//           upload your image an let AI enhance to in seconds
//         </p>
//       </div>
//       <Home />
//       <div>
//         <p>power by @kavyathakur</p>
//       </div>
//     </div>
//   );
// };

// export default App;
import React from "react";
import Home from "./Components/Home";
import { GridBackgroundDemo } from "./Components/Background";

const App = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <GridBackgroundDemo />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl px-4 mx-auto flex flex-col items-center justify-center pt-30">
        <div className="text-center mb-8">
          <h1 className="text-4xl tracking-tighter font-semibold capitalize text-gray-800">
            AI Image Enhancer
          </h1>
          <p className="text-sm mt-3 font-medium text-gray-700">
            Upload your image and let AI enhance it in seconds
          </p>
        </div>
        <Home />
        <div className="mt-10 text-sm text-gray-500">
          <p>Powered by @kavyathakur</p>
        </div>
      </div>
    </div>
  );
};

export default App;
