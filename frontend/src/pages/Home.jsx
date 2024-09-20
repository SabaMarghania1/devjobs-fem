import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux"; // Import to access Redux state
import Filter from "../components/Filter";
import Modal from "../components/Modal";
import JobCard from "../components/JobCard";
import { jobs } from "../data";

function Home() {
  const jobs = useLoaderData(); // Loaded job data
  const [isModal, setIsModal] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Get filter values and isSearching from Redux
  const { searchTerm, location, fullTime, isSearching } = useSelector(
    (state) => state.filter
  );

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const loadAllJobs = () => {
    setShowAll(true);
  };

  // Filter the jobs array based on searchTerm, location, and fullTime
  const filteredJobs = jobs.filter((job) => {
    if (!isSearching) return true; // If not searching, show all jobs

    const matchesSearchTerm = job.position
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLocation = job.location
      .toLowerCase()
      .includes(location.toLowerCase());
    const matchesFullTime = fullTime ? job.contract === "Full Time" : true;

    return matchesSearchTerm && matchesLocation && matchesFullTime;
  });

  const jobsToShow = showAll ? filteredJobs : filteredJobs.slice(0, 12);

  return (
    <div className="w-full -mt-10 mb-20">
      <Filter toggleModal={toggleModal} />
      {isModal && <Modal toggleModal={toggleModal} />}

      <div className="flex flex-col gap-[49px] w-full md:grid md:grid-cols-2 md:gap-x-3 md:gap-y-[65px] lg:grid-cols-3 lg:gap-x-[30px] ">
        {jobsToShow.map((item) => (
          <JobCard key={item.id} job={item} />
        ))}

        {filteredJobs.length > 12 && !showAll && (
          <button
            onClick={loadAllJobs}
            className="bg-[#5964E0] text-white w-[141px] h-[48px] mx-auto md:col-start-1 md:justify-self-end md:translate-x-1/2 lg:col-start-2 lg:translate-x-0 lg:justify-self-center"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export async function fetchJobs() {
  return jobs;
}

export default Home;
