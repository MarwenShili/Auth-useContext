import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../App";
import "../Register/Register.css";

function EmailVerification() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const cts = useContext(authContext);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios
        .post("https://testapi.softyeducation.com/auth/register/confirm", {
          confirmationCode: code,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 201) {
            const token = res.data.access_token;
            localStorage.setItem("token", token);
            cts.setIsLoggedIn(true);
            navigate("/");
          }
        });
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    }
  }
  return (
    <div className="auth">
      <div className="container right-panel-active">
        <div className="container__form container--signin ">
          <form action="#" className="form" id="form2">
            <h2 className="form__title">Verification</h2>
            <input
              type="number"
              placeholder="Enter your code"
              className="input"
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />

            <button onClick={handleSubmit} className="btn">
              Submit
            </button>
            <p style={{ color: "red" }}>{error}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
