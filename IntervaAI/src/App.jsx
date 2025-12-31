import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Layout from "./Layout"
import About from "./components/About"
import Contact from "./components/Contact"
import Dashboard from "./components/Dashboard"
import Practice from "./components/Practice"
import JobInternship from "./components/JobInternship"
import ResumeAnalyze from "./components/ResumeAnalyze"
import PremiumPayment from "./components/PremiumPayment"
import MockInterview from "./components/MockInterview"
import Resources from "./components/Resources"
import DashboardN from "./components/DashboardN"

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/prepay",
      element: <PremiumPayment />
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          index:true,
          element:<DashboardN/>
        },
        {
          path: "practice",
          element: <Practice />
        },
        {
          path: "jobsintern",
          element: <JobInternship />
        },
        {
          path: "resumea",
          element: <ResumeAnalyze />
        },
        {
          path: "mockint",
          element: <MockInterview />
        },
        {
          path: "resources",
          element: <Resources />
        },
      ]
    }

  ]

)

function App() {

  return (
    <>
      <RouterProvider router={routes}>
        <Layout />
      </RouterProvider>

    </>
  )
}

export default App
