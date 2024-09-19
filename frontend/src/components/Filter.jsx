import { FaFilter } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { getTheme } from "../store/themeSlice";

const Filter = ({ toggleModal }) => {
  const isDarkMode = useSelector(getTheme);

  return (
    <div className="relative  mb-[57px] w-full">
      {/* Mobile input field - visible on mobile only */}
      <div className="block md:hidden w-full">
        <input
          type="text"
          className="w-full pl-4 pr-4 py-7 bg-secondary-bg  rounded-[6px]"
          placeholder="Filter by ..."
        />
        <FaFilter
          color={isDarkMode ? "#fff" : "#6E8098"}
          size={20}
          className="top-[50%] -translate-y-1/2 absolute right-[88px]"
          onClick={toggleModal}
        />
        <img
          src="/desktop/icon-search.svg"
          className="absolute top-1/2 -translate-y-1/2 right-4"
        />
      </div>

      {/* Desktop layout - visible on md and larger */}
      <div className="hidden md:flex items-center md:w-full">
        {/* First input for title on larger screens */}
        <div className="relative w-full">
          <input
            type="text"
            className="w-full pl-16 pr-4 py-7 bg-secondary-bg  md:border-r-[1px]  md:border-[#6E8098] rounded-[6px] md:rounded-l-[6px] md:rounded-r-none"
            placeholder="Filter by title..."
          />
          <img
            src="/tablet/search.svg"
            className="absolute top-1/2 left-6 transform -translate-y-1/2"
          />
        </div>

        {/* Second input for location on larger screens */}
        <div className="relative lg:w-full ">
          <input
            type="text"
            className="w-full pl-16 pr-4 py-7 bg-secondary-bg  md:border-r-[1px] md:border-[#6E8098] border-r-opacity-[20%]"
            placeholder="Filter by location..."
          />
          <img
            src="/desktop/icon-location.svg"
            className="absolute top-1/2 left-6 transform -translate-y-1/2"
            alt="location"
          />
        </div>

        {/* Checkbox and Search Button for larger screens */}
        <div
          className={`flex items-center lg:justify-center w-1/3 lg:w-2/3  ${
            isDarkMode ? "bg-secondary-bg" : "bg-white"
          } gap-2 lg:gap-6 px-4 md:justify-center rounded-r-[6px]`}
          style={{ height: "80px" }}
        >
          {/* Checkbox for "Full Time" */}
          <div className="flex items-center justify-center gap-2 lg:gap-4">
            <input type="checkbox" id="fullTime" className="h-6 w-6" />
            <label
              htmlFor="fullTime"
              className={isDarkMode ? "text-white" : "text-gray-900"}
            >
              Full Time
            </label>
          </div>

          {/* Search Button */}
          <button
            className="bg-[#5964E0]  text-white px-[14px] py-4 lg:px-9 lg:py-4 rounded-[6px] md:rounded-r-[6px]"
            onClick={toggleModal}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
