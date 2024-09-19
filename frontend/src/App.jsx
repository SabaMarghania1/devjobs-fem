import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home, { fetchJobs } from "./pages/Home";
import JobDetails, { jobDetailsLoader } from "./pages/JobDetails";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: fetchJobs,
      },
      {
        path: "/job/:jobId",
        element: <JobDetails />,
        loader: jobDetailsLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
