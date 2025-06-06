import React from "react";

const Imgupload = (props) => {
  const showImageHandler = (e) => {
    // console.log(e.target.files[0]);
    const file = e.target.files[0];
    props.UploadImageHandler(file)
  };
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed p-6 text-center text-sm border-[#8DBCC7]/50 rounded-lg hover:border-dashed hover:border-black transition-all"
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={showImageHandler}
        />
        <p className="font-medium text-gray-600">
          Click and drag to upload your image
        </p>
      </label>
    </div>
  );
};

export default Imgupload;
