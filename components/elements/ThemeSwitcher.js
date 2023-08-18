"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const icon = {
  dark: <i className="ri-moon-fill text-my-bg-light"></i>,
  light: <i className="ri-sun-fill text-my-bg-dark"></i>,
};
const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const color = theme === "dark" ? "#232321" : "#F8F4EA";

  useEffect(() => {
    setMounted(true);
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", color);
  }, [color]);

  if (!mounted) {
    return null;
  }

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="font-normal normal-case btn btn-ghost btn-sm hover:scale-110 "
      onClick={handleToggle}
    >
      {theme === "light" ? icon.light : icon.dark}
    </button>
  );
};

export default ThemeSwitcher;
