import { useState, useEffect } from "react";
import { logo_without_bg } from "./assets";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <main className="min-h-screen transition-colors duration-300 bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center h-screen space-y-6">
        <div className="w-72 h-72 flex items-center justify-center">
          <img
            src={logo_without_bg}
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Hello World
        </h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 font-medium text-white transition-colors rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </main>
  );
}

export default App;
