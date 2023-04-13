import logo from "./logo.svg";
import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    // console.log("hel");
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          hello
          <Outlet />
        </div>
      ),

      children: [
        {
          path: "/test",
          element: <div> test field</div>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
