"use client";
import lyrics from "@/public/assets/data/lyrics.json";

import { useState } from "react";

import { useEffect } from "react";

export default function Lyrics() {
  const [quote, setQuote] = useState("");
  const [name, setName] = useState("");
  const [card, setCard] = useState(false);
  const [index, setIndex] = useState(0);

  const getRandom = () => {
    card ? setCard(true) : setCard(true);
    const res = Math.random() * lyrics.length;
    const choice = Math.floor(res);
    // setShowCard(!showCard)
    setIndex(choice);
  };

  useEffect(() => {
    if (index !== 0) {
      setName(lyrics[index].name);
      setQuote(lyrics[index].quote);
    }
  }, [index]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-my-bg-light dark:text-myWhite dark:bg-myBlack">
      <div className="flex flex-col items-center justify-center gap-20">
        <div>
          <button
            className="btn btn-md glass hover:shadow-xl "
            onClick={getRandom}
          >
            Click Me
          </button>
        </div>
        <div className="h-3/4 tablet:px-10 ">
          {card ? (
            <div className="h-3/4 flex items-center justify-center">
              <div className="w-full text-black bg-blue-100 card phone:w-3/4">
                <div className="pt-8 pb-10 pl-10 pr-10 card-body">
                  <div className="justify-end card-actions">
                    <button
                      className="btn btn-square btn-ghost btn-sm opacity-90"
                      onClick={() => {
                        setCard(false);
                      }}
                    >
                      X
                    </button>
                  </div>
                  <p>&quot;{quote}&quot;</p>
                  <div className="justify-end card-actions">
                    <div>
                      <p className=" italic font-semibold"> - {name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
