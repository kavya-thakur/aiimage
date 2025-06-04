import React from "react";
import ImagePreview from "./ImagePreview";
import Imgupload from "./Imgupload";
import { useState } from "react";
import { enhancedImageAPI } from "../utils/EnhancimageAPI";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const UploadImageHandler = async (file) => {
    // console.log(file);
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Imgupload UploadImageHandler={UploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage?.image}
      />
    </>
  );
};

export default Home;
