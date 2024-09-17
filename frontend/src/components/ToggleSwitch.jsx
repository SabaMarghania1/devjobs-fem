import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { toggleDarkMode } from "../store/themeSlice";

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.setAttribute("data-theme", "dark");
    } else {
      htmlElement.setAttribute("data-theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="flex items-center space-x-4">
      {/* Sun Icon */}
      <SunIcon className="w-6 h-6 text-white" />

      {/* Toggle Switch */}
      <div
        className="relative inline-flex h-6 w-12 cursor-pointer rounded-full transition-colors duration-300 ease-in-out bg-white"
        onClick={() => dispatch(toggleDarkMode())}
      >
        <span
          className={`absolute left-0 top-1/2 translate-y-[-50%] h-4 w-4 transform rounded-full transition-transform duration-300 bg-[#5964E0] ease-in-out ${
            isDarkMode ? "translate-x-7" : "translate-x-1"
          }`}
        ></span>
      </div>

      {/* Moon Icon */}
      <MoonIcon className="w-6 h-6 text-white" />
    </div>
  );
};

export default DarkModeToggle;
