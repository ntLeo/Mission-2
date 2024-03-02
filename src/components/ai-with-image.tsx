import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getBase64 } from "../utils/image-helper";

const AiImage = () => {
  
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

  const [image, setImage] = useState<string>("");
  // const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageInlineData, setImageInlineData] = useState<any>(null);
  const [aiResponse, setAiResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function aiRun() {
    setLoading(true);
    setAiResponse("");
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const result = await model.generateContent([
      "What is in this image?",
      imageInlineData,
    ]);
    const response = await result.response;
    const text = response.text();
    setAiResponse(text);
    setLoading(false);
  }

  const handleClick = () => {
    aiRun();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

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
    <section>
      <div>
        <div>
          <div style={{ display: "flex" }}>
            <input type="file" onChange={(e) => handleImageChange(e)} />
            <button
              style={{ marginLeft: "20px" }}
              onClick={() => handleClick()}
            >
              Ask Me
            </button>
          </div>
          <img src={image} style={{ width: "30%", marginTop: 30 }} />
        </div>

        {loading == true && aiResponse == "" ? (
          <p style={{ margin: "30px 0" }}>Loading ...</p>
        ) : (
          <div style={{ margin: "30px 0" }}>
            <p>{aiResponse}</p>
          </div>
        )}
      </div>
    </section>
  );
};
export default AiImage;
