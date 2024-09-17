import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { jobId } = useParams();
  return <div>{jobId}</div>;
};

export default JobDetails;
