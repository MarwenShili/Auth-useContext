import "./App.css";
import Header from "./components/header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import React, { useState, useEffect } from "react";

function App() {
  return (
    <>
      <Header />
      <Register />
      {/* <Login /> */}
    </>
  );
}

export default App;
