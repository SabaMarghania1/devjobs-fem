import { useLoaderData } from "react-router-dom";
import { jobs } from "../data";

const JobDetails = () => {
  const job = useLoaderData();

  return (
    <div className="w-full h-40 -mt-10">
      <h1>header</h1>
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
