import { useLoaderData } from "react-router-dom";
import { jobs } from "../data";
import { useSelector } from "react-redux";
import { getTheme } from "../store/themeSlice";

const JobDetails = () => {
  const job = useLoaderData();
  console.log("job", job);

  const isDarkMode = useSelector(getTheme);

  return (
    <div className="w-full -mt-4 ">
      <section className="bg-secondary-bg relative pt-[49px]  pb-[32px] rounded-[6px] flex flex-col justify-center items-center mb-6">
        <div
          className="w-[50px] h-[50px] absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-lg"
          style={{ backgroundColor: job.logoBackground }}
        >
          <img src={job.logo} alt="" />
        </div>

        <h3
          className={`text-xl font-bold ${
            isDarkMode ? "text-[#fff]" : "text-[#19202D]"
          }`}
        >
          {job.company}
        </h3>
        <p className="text-[#6E8098] mb-[27px]">{job.company}.com</p>

        <a
          href={job.website}
          className="px-5 py-4 is text-[#5964E0] bg-[#5964E0] bg-opacity-[0.1] rounded-[5px]"
        >
          Company Site
        </a>
      </section>

      <section className="px-6 py-10 bg-secondary-bg rounded-[6px] mb-16">
        <div className="flex flex-col gap-12 mb-12">
          <div>
            <div className="text-[#6E8098] flex items-center gap-3 mb-">
              <span>{job.postedAt}</span>
              <div className="w-1 h-1 bg-[#6E8098] rounded-full"></div>
              <span>{job.contract}</span>
            </div>
            <h2
              className={`text-xl font-bold mb-1 ${
                isDarkMode ? "text-[#fff]" : "text-[#19202D]"
              }`}
            >
              {job.position}
            </h2>
            <p className="text-[#5964E0] text-[14px] font-bold">
              {job.location}
            </p>
          </div>
          <button className="bg-[#5964E0] text-white font-bold rounded-[5px] w-full py-[14px]">
            Apply Now
          </button>
        </div>

        <div>
          <p
            className={`leading-[26px] mb-12 ${
              isDarkMode ? "text-[#9DAEC2]" : "text-[#6E8098]"
            }`}
          >
            {job.description}
          </p>

          <div className="mb-12">
            <h3
              className={`text-xl font-bold mb-7 ${
                isDarkMode ? "text-[#fff]" : "text-[#19202D]"
              }`}
            >
              Requirements
            </h3>
            <p
              className={`mb-8 ${
                isDarkMode ? "text-[#9DAEC2]" : "text-[#6E8098]"
              }`}
            >
              {job.requirements.content}
            </p>
            <ul className="list-disc  marker:text-[#5964E0] px-4 flex  flex-col gap-2">
              {job.requirements.items.map((item) => {
                return (
                  <li
                    className={isDarkMode ? "text-[#9DAEC2]" : "text-[#6E8098]"}
                    key={item}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3
              className={`text-xl font-bold mb-7 ${
                isDarkMode ? "text-[#fff]" : "text-[#19202D]"
              }`}
            >
              What You Will Do
            </h3>
            <p
              className={`mb-8 ${
                isDarkMode ? "text-[#9DAEC2]" : "text-[#6E8098]"
              }`}
            >
              {job.role.content}
            </p>
            <ul className="flex flex-col gap-2">
              {job.role.items.map((item, index) => {
                return (
                  <li
                    className={`flex justify-between gap-4 ${
                      isDarkMode ? "text-[#9DAEC2]" : "text-[#6E8098]"
                    }`}
                    key={item}
                  >
                    <p className="text-[#5964E0] font-bold">{index + 1}</p>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <footer className="bg-secondary-bg w-full absolute left-0  px-6 py-6 md:px-8  md:flex md:items-center md:justify-between">
        <button className="bg-[#5964E0] text-white font-bold rounded-[5px] w-full py-[14px] md:hidden">
          Apply Now
        </button>

        <div className="flex flex-col gap-3">
          <p
            className={`font-bold text-xl ${
              isDarkMode ? "text-[#fff]" : "text-[#19202d]"
            }`}
          >
            {job.position}
          </p>
          <span className="text-[#6E8098]">{job.company}</span>
        </div>

        <button className="bg-[#5964E0] text-white font-bold rounded-[5px]  py-[14px] px-7 hidden md:block">
          Apply Now
        </button>
      </footer>
    </div>
  );
};

export const jobDetailsLoader = async ({ params }) => {
  const jobId = parseInt(params.jobId, 10);
  const job = jobs.find((job) => job.id === jobId);

  if (!job) {
    throw new Response("Job not found", { status: 404 });
  }

  return job;
};

export default JobDetails;
