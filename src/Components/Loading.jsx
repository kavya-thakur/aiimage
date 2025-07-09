import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-80">
      <div className="animate-spin w-12 h-12 rounded-full border-4 border-t-transparent border-b-transparent border-l-[#ff512f] border-r-[#8DBCC7] bg-white/60 shadow-lg"></div>
    </div>
  );
};

export default Loading;
