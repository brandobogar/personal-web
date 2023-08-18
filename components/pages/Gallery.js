"use client";

import { Splide } from "@splidejs/react-splide";
import React, { useEffect, useRef } from "react";
import "@splidejs/react-splide/css";
import Navbar from "../elements/features/Navbar";
import Thumbnails from "../elements/gallery/Thumbnails";
import Main from "../elements/gallery/MainView";
import thumbsOptions from "../elements/gallery/ThumbnailsOption";
import mainOptions from "../elements/gallery/MainOptions";

function Gallery() {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full h-screen bg-my-bg-light text-my-bg-dark dark:bg-my-bg-dark tablet:p-10 phone:px-2">
        <p className="py-4 font-open text-3xl">Gallery Page</p>
        <div className="flex flex-col items-center justify-center w-1/2 p-4 rounded-lg h-max glass phone:w-full phone:m-0 phone:h-max tablet:w-full  overflow-hidden">
          <Splide
            options={mainOptions}
            ref={mainRef}
            aria-labelledby="main gallery"
            className="mb-4"
          >
            <Main />
          </Splide>
          <Splide
            options={thumbsOptions}
            ref={thumbsRef}
            aria-label="Gallery thumbnail"
            className="w-full"
          >
            <Thumbnails />
          </Splide>
        </div>
      </div>
    </>
  );
}

export default Gallery;
