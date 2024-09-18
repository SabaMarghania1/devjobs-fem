import { useSelector } from "react-redux";
import { getTheme } from "../store/themeSlice";

const Modal = ({ toggleModal }) => {
  const isDarkMode = useSelector(getTheme);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 md:hidden">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black z-40"
        style={{ opacity: 0.4965 }}
        onClick={toggleModal}
      ></div>

      {/* Modal content */}
      <div
        className={`p-6 z-50 rounded-lg w-[90%] shadow-lg relative`}
        style={{ background: isDarkMode ? "#19202D" : "#FFF" }}
      >
        {/* Input with location icon */}
        <div className="flex gap-2 items-center border-b-[1px] border-gray-400 pb-6">
          <img src="/desktop/icon-location.svg" alt="location icon" />
          <input
            type="text"
            className="px-6 py-2 w-full bg-transparent outline-none"
            placeholder="Filter by location..."
          />
        </div>

        {/* Checkbox for Full Time */}
        <div className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            id="fullTime"
            className="h-4 w-4 text-blue-600"
          />
          {/* Correct label color handling */}
          <label
            htmlFor="fullTime"
            className={isDarkMode ? "text-white" : "text-gray-900"}
          >
            Full Time Only
          </label>
        </div>

        <button
          className="bg-[#5964E0] text-white px-6 py-2 rounded mt-6 w-full"
          onClick={toggleModal}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Modal;
