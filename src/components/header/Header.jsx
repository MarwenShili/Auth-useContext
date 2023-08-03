import React from "react";
import { useContext } from "react";
import { authContext } from "../../App";
import "./Header.css";

function Header() {
  const cts = useContext(authContext);
  const { isLoggedIn } = cts;

  const logout = () => {
    localStorage.removeItem("token");
    cts.setIsLoggedIn(false);
  };

  return (
    <>
      <section className="navigation">
        <div className="nav-container">
          <div className="brand">
            <a href="#!">Logo</a>
          </div>
          <nav>
            <ul className="nav-list">
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">About</a>
              </li>

              <li>
                <a href="#!">Portfolio</a>
              </li>

              {isLoggedIn ? (
                <li>
                  <a href="#" onClick={() => logout()}>
                    Logout
                  </a>
                </li>
              ) : (
                <li>
                  <a href="/login">Login</a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Header;
