import { useState } from "react";
import Filter from "../components/Filter";
import Modal from "../components/Modal";
import { jobs } from "../data";
import { useLoaderData } from "react-router-dom";
import JobCard from "../components/JobCard";

function Home() {
  const jobs = useLoaderData();
  const [isModal, setIsModal] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const loadAllJobs = () => {
    setShowAll(true);
  };

  const jobsToShow = showAll ? jobs : jobs.slice(0, 12);

  return (
    <div className="w-full -mt-10  mb-20">
      <Filter toggleModal={toggleModal} />
      {isModal && <Modal toggleModal={toggleModal} />}

      <div className="flex flex-col gap-[49px]  w-full ">
        {jobsToShow.map((item) => (
          <JobCard key={jobs.id} job={item} />
        ))}
        <button
          onClick={loadAllJobs}
          className="bg-[#5964E0] text-white w-[141px] h-[48px] mx-auto"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export const fetchJobs = async () => {
  return jobs;
};

export default Home;
