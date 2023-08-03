import "./App.css";
import Header from "./components/header/Header";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailVerification from "./pages/EmailVerification/EmailVerification";
import Home from "./pages/Home/Home";

export const authContext = React.createContext();

function App() {
  const token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <authContext.Provider
      value={{ isLoggedIn: isLoggedIn, setIsLoggedIn: setIsLoggedIn }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/verification" element={<EmailVerification />}></Route>
        </Routes>
      </BrowserRouter>
    </authContext.Provider>
  );
}

export default App;
