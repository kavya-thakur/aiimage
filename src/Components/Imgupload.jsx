import React from "react";

const Imgupload = (props) => {
  const showImageHandler = (e) => {
    const file = e.target.files[0];
    props.UploadImageHandler(file);
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed border-[#8DBCC7]/50 rounded-2xl p-8 md:p-12 lg:p-16 text-center bg-white/60 glass-card transition-all shadow-2xl"
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={showImageHandler}
        />
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full  flex items-center justify-center mb-2 shadow-lg">
            <svg
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16V4m0 0l-4 4m4-4l4 4M4 20h16"
                />
            </svg>
          </div>
          <p className="font-semibold text-gray-700 text-lg mb-1">
            Click or drag to upload your image
          </p>
          <p className="text-xs text-gray-500">PNG, JPG, or JPEG (max 10MB)</p>
        </div>
      </label>
    </div>
  );
};

export default Imgupload;
