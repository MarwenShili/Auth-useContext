import React from "react";
import "../Register/Register.css";

function Login() {
  return (
    <div className="auth">
      <div class="container right-panel-active">
        {/* <div class="container__form container--signup">
          <form action="#" class="form" id="form1">
            <h2 class="form__title">Sign Up</h2>
            <input type="text" placeholder="User" class="input" />
            <input type="email" placeholder="Email" class="input" />
            <input type="password" placeholder="Password" class="input" />
            <button class="btn">Sign Up</button>
          </form>
        </div> */}

        <div class="container__form container--signin ">
          <form action="#" class="form" id="form2">
            <h2 class="form__title">Sign In</h2>
            <input type="email" placeholder="Email" class="input" />
            <input type="password" placeholder="Password" class="input" />
            <a href="#" class="link">
              Forgot your password?
            </a>
            <button class="btn">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
