const API_KEY = "wxl3ucxp4fahz9l7j";
const BASE_URL = "https://techhk.aoscdn.com/";
import axios from "axios";
export const enhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
    console.log("image uploaded successfully ", taskId);

    const enhancedImageData = await PollForEnhancedImage(taskId);
    console.log("enhanced iamge data", enhancedImageData);
    return enhancedImageData;
  } catch (error) {
    console.log(error);
  }
};
const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );
  if (!data?.data?.task_id) {
    throw new Error("failed to load the image");
  }
  // code to upload image
  //** post   --- api/tasks/visual/scale
  console.log(data);
  return data.data.task_id;
};
const fetchenhancedImage = async (taskId) => {
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,

    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );
  if (!data?.data) {
    throw new Error("failed to load the image");
  }
  return data.data;
  //get --- code to get the enhanced image
};
const PollForEnhancedImage = async (taskId, retries = 0) => {
  const result = await fetchenhancedImage(taskId);
  if (result.state === 4) {
    console.log("proccessing...");
    if (retries >= 20) {
      throw new Error("max retries reached try again ");
    }
    await new Promise((resolve, reject) => setTimeout(resolve, 2000));
    return PollForEnhancedImage(taskId, retries + 1);
  }
  return result;
};
