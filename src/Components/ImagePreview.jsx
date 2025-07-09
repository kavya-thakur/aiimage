import React from "react";
import Loading from "./Loading";

const ImagePreview = (props) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto px-2">
      {/* original image here */}
      <div className="glass-card shadow-xl rounded-2xl bg-neutral-800 overflow-hidden flex flex-col transition-all">
        <h2 className="font-bold text-center text-neutral-50 py-3 text-lg md:text-xl tracking-wide uppercase">
          Original image
        </h2>
        {props.uploaded ? (
          <img
            src={props.uploaded}
            className="w-full h-80 object-cover transition-all duration-300"
            alt="Uploaded preview"
          />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-100 text-gray-400 text-base font-medium capitalize">
            no image selected
          </div>
        )}
      </div>
      {/* enhanced image here */}
      <div className="glass-card shadow-xl rounded-2xl bg-neutral-800 overflow-hidden flex flex-col transition-all">
        <h2 className="font-bold text-center text-neutral-50 py-3 text-lg md:text-xl tracking-wide uppercase">
          Enhanced image
        </h2>
        {props.enhanced && !props.loading && (
          <img
            src={props.enhanced}
            className="w-full h-80 object-cover transition-all duration-300"
            alt="Enhanced preview"
          />
        )}
        {props.loading ? (
          <Loading />
        ) : (
          <div className="flex items-center justify-center h-80 bg-gray-100 text-gray-400 text-base font-medium capitalize">
            no enhanced image selected
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
