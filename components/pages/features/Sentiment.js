"use client";
import Image from "next/image";
import { useState } from "react";

const expression = [
  { name: "negatif", src: "/assets/icon/negatif.svg" },
  { name: "netral", src: "/assets/icon/netral.svg" },
  { name: "positif", src: "/assets/icon/positif.svg" },
];

export default function Sentiment() {
  const [text, setText] = useState("");
  const [score, setScore] = useState(0);

  const handleClick = async () => {
    // var Sentiment = await import("sentiment");
    var Sentiment = require("sentiment");
    const sentiment = new Sentiment();
    const res = sentiment.analyze(text);
    console.log({ res });
    setScore(res.score);
    console.log({ score });
  };

  const Score = () => {
    if (score == 0) {
      return (
        <>
          <Image
            src={expression[1].src}
            alt={expression[1].name}
            className="h-full"
            width={100}
            height={100}
          />
        </>
      );
    } else if (score > 0) {
      return (
        <Image
          src={expression[2].src}
          alt={expression[2].name}
          className="h-full"
          width={100}
          height={100}
        />
      );
    } else if (score < 0) {
      return (
        <Image
          src={expression[0].src}
          alt={expression[0].name}
          className="h-full"
          width={100}
          height={100}
        />
      );
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-my-bg-light text-my-text-light dark:bg-my-bg-dark dark:text-my-text-dark">
        <div className="flex flex-col items-center justify-center w-full h-full gap-4">
          <label className="text-4xl font-semibold  text-my-text-light dark:text-my-text-dark mb-8">
            Sentiment Analysis
          </label>
          <textarea
            placeholder="Enter a sentences"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="w-1/4 textarea textarea-bordered dark:text-my-text-dark phone:w-3/4 h-28 tablet:w-2/4"
            // className="w-2/4 h-32 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none resize-none placeholder-slate-300 text-slate-600 focus:outline-none focus:ring"
          ></textarea>
          <button
            className="btn btn-info btn-md"
            type="button"
            onClick={handleClick}
          >
            Analyze
          </button>
          <div className="flex items-center justify-center w-1/2 h-24">
            <Score />
          </div>
        </div>
      </div>
    </>
  );
}
