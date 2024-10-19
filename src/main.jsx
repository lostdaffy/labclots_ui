import React from "react";
import App from "./App.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import VerifyUser from "./pages/VerifyUser/VerifyUser.jsx";

// Created a function for Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/User-Login" element={<Login />}></Route>
      <Route path="/User-Register" element={<Register />}></Route>
      <Route path="/Verify-User" element={<VerifyUser />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
