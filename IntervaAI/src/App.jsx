import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Layout from "./Layout"
import About from "./components/About"
import Contact from "./components/Contact"
import Dashboard from "./components/Dashboard"

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
      path: "/dashboard",
      element: <Dashboard />
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
