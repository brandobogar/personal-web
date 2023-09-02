import Navbar from "@/components/elements/features/Navbar";
import React from "react";

export default function Template({ children }) {
  return (
    <>
      <Navbar />
      <div className="w-full h-auto bg-my-bg-light dark:bg-my-bg-dark ">
        {children}
      </div>
    </>
  );
}
