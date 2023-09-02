"use client";
import { Result } from "@/components/elements/nutmeg/Result";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Nutmeg() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [row, setRow] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const clearImage = () => {
    setImage(null);
    setImageUrl("");
    setRow(false);
    router.refresh();
  };

  async function uploadImage() {
    setRow(true);

    setLoading(true);
    if (!image) {
      alert("Upload a picture");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      await fetch("http://127.0.0.1:5000/classification", {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.error("Error while sending image:", error);
    }
    setLoading(false);
    // clearImage();
  }

  useEffect(() => {
    if (image) {
      setImageUrl(URL.createObjectURL(image));
    }
  }, [image]);

  return (
    <>
      <div
        className={`w-full h-screen bg-my-bg-light dark:bg-my-bg-dark flex items-center justify-center ${
          row ? " flex-row" : " flex-col"
        } `}
      >
        <div
          className={` h-full  items-center flex p-2 ${
            row ? "w-1/2" : "w-full"
          } `}
        >
          <div
            className={`h-full w-full flex items-center justify-center flex-col gap-y-4 `}
          >
            <h1 className="text-4xl font-semibold text-my-text-light dark:text-my-text-dark">
              Nutmeg Classification
            </h1>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              className={`file-input file-input-bordered file-input-success w-full max-w-xs ${
                row ? "hidden" : ""
              }`}
            />

            {image ? (
              <>
                <Image
                  src={imageUrl}
                  alt="images"
                  height={200}
                  width={350}
                  className="h-auto"
                />
                <div className="w-3/4 h-auto flex justify-center gap-x-8 mt-2">
                  <button className="btn btn-info" onClick={uploadImage}>
                    {loading ? (
                      <span className="loading loading-spinner loading-md"></span>
                    ) : (
                      "Upload"
                    )}
                  </button>
                  <button className="btn btn-error" onClick={clearImage}>
                    Clear Image
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
        <div
          className={` h-full  items-center flex p-2 ${
            row ? "w-1/2" : "w-full hidden"
          } `}
        >
          {row ? <Result /> : null}
        </div>
      </div>
    </>
  );
}
