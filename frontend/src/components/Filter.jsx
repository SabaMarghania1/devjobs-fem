import { FaFilter } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { getTheme } from "../store/themeSlice";

const Filter = ({ toggleModal }) => {
  const isDarkMode = useSelector(getTheme);

  return (
    <div className="relative">
      <input
        type="text"
        className="w-full pl-6 pr-4 py-7 bg-secondary-bg rounded-[6px]"
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
  );
};

export default Filter;
