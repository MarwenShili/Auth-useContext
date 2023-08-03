import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../App";
import "../Register/Register.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const cts = useContext(authContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios
        .post("https://testapi.softyeducation.com/auth/users/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.status === 201) {
            const token = res.data.access_token;
            localStorage.setItem("token", token);
            cts.setIsLoggedIn(true);
            navigate("/");
          }
        });
    } catch (error) {
      if (typeof error.response.data === "string") {
        setError(error?.response?.data);
      } else {
        setError(error?.response?.data?.message);
      }
    }
  };
  return (
    <div className="auth">
      <div className="container right-panel-active">
        <div className="container__form container--signin ">
          <form action="#" className="form" id="form2">
            <h2 className="form__title">Sign In</h2>
            <input
              type="email"
              placeholder="Email"
              className="input"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#" className="link">
              Forgot your password?
            </a>
            <button onClick={handleSubmit} className="btn">
              Sign In
            </button>
            <p style={{ color: "red" }}>{error}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
