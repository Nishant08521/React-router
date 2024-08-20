import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Homes/Home.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/contact.jsx";
import Github from "./components/github/Github.jsx";

//  Two type of route mathod
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "github",
        element: <Github />,
      },
    ],
  },
]);
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//     </Route>
//   )
// );
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
