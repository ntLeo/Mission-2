import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getBase64 } from "../utils/image-helper";
import { CgSpinner } from "react-icons/cg";

const AiImage = () => {
  // Access the API key
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

  const [image, setImage] = useState<string>("");
  // const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageInlineData, setImageInlineData] = useState<any>(null);
  const [aiResponse, setAiResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function aiRun() {
    setLoading(true);
    setAiResponse(""); //clears any previous AI response
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const result = await model.generateContent([
      "What is in this image?",
      imageInlineData,
    ]);
    // generates content using AI model - two inputs to model, question "what is in this image?" and image data to analyze
    const response = await result.response;
    const text = response.text();
    setAiResponse(text);
    setLoading(false);
  }

  const handleClick = () => {
    aiRun();
  };

  // -------------------    Rendering image and file name in DOM      --------------//
  // -------------------------------------------------------------------------------//
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    //event when user selects new image file

    // getting base64 from file to render in DOM
    getBase64(file as File)
      .then((result) => {
        setImage(result);
      })
      .catch((event) => console.log(event));

    // generating content model for Gemini Google AI
    if (file) {
      fileToGenerativePart(file).then((image) => {
        setImageInlineData(image);
      });
    } else {
      console.log("No file selected");
    }
  };

  async function fileToGenerativePart(file: File) {
    const base64EncodedDataPromise = new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          resolve((reader.result as string).split(",")[1]);
          // taking base64 data result as string
        } else {
          throw new Error("No result from FileReader");
        }
      };
      reader.readAsDataURL(file);
    });

    return {
      inlineData: {
        data: await base64EncodedDataPromise,
        mimeType: file.type,
      },
    };
  }

  return (
    <section className="w-full mt-2 flex justify-center text-center h-1/2">
      <div className="flex flex-col text-center justify-around w-[40rem]">
        <h1 className="text-xl text-gray-800 drop-shadow-sm ">
          Upload an image of the car, and our AI will do the rest.
        </h1>

        <div className=" flex flex-col w-[15rem] mx-auto">
          <input
            className="p-2 mt-4 border-2 border-gray-400 rounded-md  "
            type="file"
            onChange={(e) => handleImageChange(e)}
          />
          <button
            className="shadow-md py-2 w-[10rem] mt-4 mx-auto bg-blue-700/90 text-white rounded-md hover:bg-blue-800/90 hover:scale-110 active:scale-105 transition-all"
            onClick={() => handleClick()}
          >
            Ask Me
          </button>
        </div>
        <img className="p-4" src={image} />

        {loading == true && aiResponse == "" ? (
          <p className=" flex justify-center text-xl text-gray-800 drop-shadow-sm ">
            <CgSpinner className="animate-spin text-2xl mr-1 mt-[0.2rem]" />{" "}
            Loading ...
          </p>
        ) : (
          <div>
            <p className="text-xl text-gray-800 drop-shadow-sm mb-6 mt-[0.45rem]">
              {aiResponse}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
export default AiImage;
