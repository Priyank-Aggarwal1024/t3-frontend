import React from "react";
import useTheme from "../contexts/theme";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeBtn() {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const onChangeTheme = () => {
    if (themeMode === "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };
  return (
    <button
      className="flex items-center rounded-md text-xs focus:outline-none"
      onClick={onChangeTheme}
    >
      {themeMode === "light" ? (
        <div className="text-xs bg-lightSecondary dark:bg-black flex items-center gap-2 dark:text-white sm:p-4 p-2 rounded-md">
          <FaSun className="" />
          <span className="sr-only">Switch to Dark Mode</span>
        </div>
      ) : (
        <div className="text-xs bg-lightSecondary dark:bg-black flex items-center gap-2 dark:text-white p-4 rounded-md">
          <FaMoon className="" />
          <span className="sr-only">Switch to Light Mode</span>
        </div>
      )}
    </button>
  );
}

export default ThemeBtn;
