import { useState } from "react";
import Filter from "../components/Filter";
import Modal from "../components/Modal";
import { jobs } from "../data";
import { useLoaderData } from "react-router-dom";
import JobCard from "../components/JobCard";

function Home() {
  const jobs = useLoaderData();
  const [isModal, setIsModal] = useState(false);
  console.log(jobs);
  const toggleModal = () => {
    setIsModal(!isModal);
  };
  const selectedJob = jobs[0];

  return (
    <div className="w-full -mt-10 ">
      <Filter toggleModal={toggleModal} />
      {isModal && <Modal toggleModal={toggleModal} />}

      <div className="flex flex-col gap-[49px]">
        {jobs.map((item) => (
          <JobCard key={jobs.id} job={item} />
        ))}
      </div>
    </div>
  );
}

export const fetchJobs = async () => {
  return jobs;
};

export default Home;
