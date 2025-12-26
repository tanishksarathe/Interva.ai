import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Layout from "./Layout"
import About from "./components/About"
import Contact from "./components/Contact"

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
