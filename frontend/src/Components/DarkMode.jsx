import { useState, useEffect } from "react";

function DarkMode() {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const element = document.documentElement;

  // Apply theme changes
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]); // Add `theme` as a dependency to run this effect when `theme` changes

  return (
    <div className="relative">
      <img
        src="/light-mode-button.png"
        alt="light"
        className={`w-12 cursor-pointer transition-all duration-300 absolute right-0 z-10 
          ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")} // Set theme to 'light' on click
      />
      <img
        src="/dark-mode-button.png"
        alt="dark"
        className="w-12 cursor-pointer transition-all duration-300"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  );
}

export default DarkMode;
