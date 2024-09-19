import { useSelector } from "react-redux";
import { getTheme } from "../store/themeSlice";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const isDarkMode = useSelector(getTheme);

  const navigate = useNavigate();

  return (
    <div className="relative w-full pt-[49px] pb-[32px] pl-[32px] pr-2 bg-secondary-bg rounded-[6px]">
      <div
        className="absolute -top-5 left-4 px-[5px] py-[19px] rounded-xl w-[50px] h-[50px] flex justify-center items-center"
        style={{ backgroundColor: job.logoBackground }}
      >
        <img src={job.logo} alt="" />
      </div>
      <div className="flex text-[#6E8098] items-center gap-3 mb-4">
        <span>{job.postedAt}</span>
        <div className="w-1 h-1 rounded-full bg-[#6E8098]"></div>
        <span>{job.contract}</span>
      </div>
      <div className="flex flex-col gap-[17px] mb-11">
        <h2
          className={`text-xl font-bold ${
            isDarkMode ? "text-white" : "text-[#19202D]"
          }`}
        >
          {job.position}
        </h2>
        <span className="text-[#6E8098]">{job.company}</span>
      </div>

      <p className="text-[#5964E0] text-[14px] font-bold">{job.location}</p>
    </div>
  );
};

export default JobCard;
