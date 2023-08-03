import React from "react";
import "./Header.css";

function Header() {
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

              <li>
                <a href="#!">Login</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Header;
