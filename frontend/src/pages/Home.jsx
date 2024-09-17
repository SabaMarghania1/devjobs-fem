import { FaFilter } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { getTheme } from "../store/themeSlice";

const Home = () => {
  const isDarkMode = useSelector(getTheme);
  console.log(isDarkMode);

  return (
    <div className="w-full h-40 -mt-10">
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
        />

        <img
          src="/desktop/icon-search.svg"
          className="absolute top-1/2 -translate-y-1/2 right-4"
        />
      </div>
    </div>
  );
};

export default Home;
