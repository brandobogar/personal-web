"use client";
import { useState, useEffect } from "react";
import ThemeSwitcher from "../ThemeSwitcher";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed h-16 w-full top-0 navbar bg-my-bg-light bg-opacity-30 backdrop-filter backdrop-blur-lg z-[100] dark:text-my-text-dark dark:bg-my-bg-dark dark:bg-opacity-30 dark:hover:text-my-text-dark font-open  phone:w-full tablet:w-full flex phone:flex-col tablet:flex-col  ${
          isScrolled ? "animate-opennav " : "shadow-none"
        } `}
      >
        <div className="flex items-center justify-start w-1/2 phone:w-full phone:justify-between tablet:w-full tablet:justify-between">
          <a
            className="text-lg font-normal normal-case dark:text-my-text-dark text-my-text-light btn-sm btn btn-ghost hover:scale-110 dark:hover:text-my-text-dark"
            href="/"
          >
            @brandobogar
          </a>
          <button
            className="btn btn-md btn-ghost desktop:hidden laptop:hidden"
            onClick={() => {
              setOpenNav(!openNav);
              console.log({ openNav });
            }}
          >
            <i className="ri-menu-line"></i>
          </button>
        </div>
        <div
          className={
            `flex-row items-center justify-end w-1/2 laptop:flex desktop:flex phone:w-screen tablet:w-screen tablet:justify-start ` +
            (openNav ? "flex shadow-xl" : "hidden")
          }
        >
          <ul
            className={`flex flex-col items-center gap-6 pr-4 text-xl menu menu-horizontal laptop:flex-row desktop:flex-row phone:items-start phone:w-full tablet:items-start phone:bg-my-bg-light phone:bg-opacity-30 phone:backdrop-filter phone:backdrop-blur-lg tablet:w-full phone:dark:bg-my-bg-dark phone:dark:bg-opacity-30 phone:dark:backdrop-filter phone:dark:backdrop-blur-lg AAWPFOJAPWFOJ tablet:bg-my-bg-light tablet:bg-opacity-30 tablet:backdrop-filter tablet:backdrop-blur-lg tablet:dark:bg-my-bg-dark tablet:dark:bg-opacity-30 tablet:dark:backdrop-filter tablet:dark:backdrop-blur-lg `}
          >
            <li>
              <a
                href="/features/lyrics"
                className="w-full pt-0 text-lg font-normal normal-case btn btn-sm btn-ghost hover:scale-110 dark:hover:text-my-text-dark"
              >
                Lyrics
              </a>
            </li>
            <li>
              <a
                href="/features/sentiment"
                className="pt-0 text-lg font-normal normal-case btn btn-sm hover:scale-110 btn-ghost dark:hover:text-my-text-dark"
              >
                Sentiment
              </a>
            </li>
            <li>
              <a
                href="/features/todo"
                className="pt-0 text-lg font-normal normal-case btn btn-sm hover:scale-110 btn-ghost dark:hover:text-my-text-dark"
              >
                Todo
              </a>
            </li>
            <li>
              <a
                href="/features/gallery"
                className="pt-0 text-lg font-normal normal-case btn btn-sm hover:scale-110 btn-ghost dark:hover:text-my-text-dark"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="/features/nutmeg-classification"
                className="pt-0 text-lg font-normal normal-case btn btn-sm hover:scale-110 btn-ghost dark:hover:text-my-text-dark"
              >
                Classification
              </a>
            </li>

            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

// !? responsive
