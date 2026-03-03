import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Practice from "./pages/Practice";
import JobInternship from "./pages/JobInternship";
import ResumeAnalyze from "./pages/ResumeAnalyze";
import PremiumPayment from "./pages/PremiumPayment";
import MockInterview from "./pages/MockInterview";
import Resources from "./pages/Resources";
import DashboardN from "./pages/DashboardN";
import { Toaster } from "react-hot-toast";
import MachineCoding from "./pages/MachineCoding";
import DataStructures from "./pages/DataStructures";
import Communication from "./pages/Communication";
import RapidFire from "./pages/RapidFire";
import Aptitude from "./pages/Aptitude";
import PracticeN from "./pages/PracticeN";
import TopicPage from "./components/TopicPage";
import StudyMaterial from "./pages/StudyMaterial";
import InterviewPage from "./pages/InterviewPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
    {
        path: "/interview-page",
        element: <InterviewPage />,
      },
  {
    path: "/prepay",
    element: <PremiumPayment />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashboardN />,
      },
      {
        path: "practice",
        element: <Practice />,
        children: [
          {
            index: true,
            element: <PracticeN />,
          },
          {
            path: "aptitude",
            element: <Aptitude />,
          },
          {
            path: "machinecod",
            element: <MachineCoding />,
          },
          {
            path: "dsa",
            element: <DataStructures />,
          },
          {
            path: "communication",
            element: <Communication />,
          },
          {
            path: "rapidfire",
            element: <RapidFire />,
          },
        ],
      },
      {
        path: "jobsintern",
        element: <JobInternship />,
      },
      {
        path: "resumea",
        element: <ResumeAnalyze />,
      },
      {
        path: "mockint",
        element: <MockInterview />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "studymaterial",
        element: <StudyMaterial />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
