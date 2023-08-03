import React from "react";
import { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ username, email, password });
    setError("");

    try {
      await axios
        .post("https://testapi.softyeducation.com/auth/register", {
          username,
          email,
          password,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 201) {
            navigate("/verification", { state: { email } });
          }
        });
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  };

  return (
    <div className="auth">
      <div className="container right-panel-active">
        <div className="container__form container--signup">
          <form action="#" className="form" id="form1">
            <h2 className="form__title">Sign Up</h2>
            <input
              type="text"
              placeholder="User"
              className="input"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <button onClick={handleSubmit} className="btn">
              Sign Up
            </button>
            <p style={{ color: "red" }}>{error}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
