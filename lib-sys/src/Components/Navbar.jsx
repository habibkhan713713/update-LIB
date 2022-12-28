import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            Lib-Sys
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to={"/search"}>
                  Search
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/login"}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/signup"}>
                  SignUp
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to={"/fine"}>
                  Fine
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to={"/profile"}>
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Disabled</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
