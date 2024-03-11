import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home/HomePage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import IsPrivate from "./components/IsPrivate";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
       
            <HomePage />
       
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
