import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("/api/auth/login", {
        email,
        password,
      });
      if (res.data.success) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
 localStorage.setItem('Auth', JSON.stringify(res));
        if (res.data.role !== null || res.token !== undefined) {
          navigate("/home");
        } else {
          navigate("/");
        }
        window.location.reload();
      } else {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "something went Wrong while login User",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="auth-background">
      <form className="user-input-section">
        <h1 className="text-light text-center mb-3">Login</h1>
        <a href="/" className="btn auth-login ">
          Login
        </a>
        <a href="/signup" className="btn auth-signup ">
          Sign up
        </a>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <a href="/forget" className="btn btn-primary w-100">
            Forget Password
          </a>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label">Check me out</label>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="submit"
            className="btn btn-primary w-50 "
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
