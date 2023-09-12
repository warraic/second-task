import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [answer, setAnswer] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("/api/auth/register", {
        name,
        answer,
        email,
        password,
        role,
      });
      if (res.data.success) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
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
        title: "something went Wrong while register User",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="auth-background">
      <form className="user-input-section">
        <h1 className="text-light text-center mb-3">Sign up</h1>
        <a href="/" className="btn auth-login ">
          Login
        </a>
        <a href="/signup" className="btn auth-signup ">
          Sign up
        </a>
        <div className="mb-3">
          <label className="form-label"> Name</label>
          <input
            autoComplete="off"
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label"> Mother Name</label>
          <input
            autoComplete="off"
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            type="text"
            className="form-control"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            autoComplete="off"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail3"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            autoComplete="off"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <label>Select your Role</label>
        <select
          className="form-select  mb-3 "
          aria-label="Default select example"
          value={role}
          onChange={(event) => setRole(event.target.value)}
        >
          <option value="">Select Role</option>
          <option value="0">User</option>
          <option value="1">Admin</option>
        </select>
        <div className="mb-3 form-check">
          <input
            autoComplete="off"
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
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
