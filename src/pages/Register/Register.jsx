import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="auth">
      <div className="container right-panel-active">
        <div className="container__form container--signup">
          <form action="#" className="form" id="form1">
            <h2 className="form__title">Sign Up</h2>
            <input type="text" placeholder="User" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <button className="btn">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
