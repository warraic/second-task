import React from "react";
import "./navbar.css";

function Nav() {
  const Auth = localStorage.getItem("Auth");
  let parseData = JSON.parse(Auth);

  const HandleUserAccess = () => {
    localStorage.removeItem("Auth");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a href="/home" className="navbar-brand">
            Brand
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <a href="/home" className="nav-item nav-link active">
                Home
              </a>
            </div>

            {parseData ? (
              <>
                {/* Dropdown */}
                <div className="dropdown px-5">
                  <button
                    className=" dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {parseData.data.user.name}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href={
                          parseData?.data.user.role !== 0
                            ? "/private/user-one"
                            : parseData?.data.user.role !== 1
                            ? "/private/user-two"
                            : "/"
                        }
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/"
                        onClick={HandleUserAccess}
                      >
                        Log out
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <a href="/" className="nav-item nav-link">
                  Login
                </a>
                <a href="/signup" className="nav-item nav-link">
                  Sign up
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
