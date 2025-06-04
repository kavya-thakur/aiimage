import React from "react";
import Loading from "./Loading";

const ImagePreview = (props) => {
  return (
    <div className="mt-8 grid grid-col-1 md:grid-col-2 gap-6 w-full max-w-4xl px-2 ">
      {/* original image here */}
      <div className="bg-white shadow-xl rounded-xl overflow-hidden ">
        <h2 className="font-semibold text-center bg-gray-800 text-white py-2">
          Original image
        </h2>
        {props.uploaded ? (
          <img
            src={props.uploaded}
            className="w-full h-full object-cover"
            alt=""
          />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-200 capitalize ">
            no image selected
          </div>
        )}
      </div>
      {/* enhanced image here */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden ">
        <h2 className="font-semibold text-center bg-[#8DBCC7] text-white py-2 capitalize">
          Enhanced image
        </h2>
        {props.enhanced && !props.loading && (
          <img src={props.enhanced} className="w-full h-full object-cover" alt="" />
        )}
        {props.loading ? (
          <Loading />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-200 capitalize">
            no Enhanced image seleted
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
