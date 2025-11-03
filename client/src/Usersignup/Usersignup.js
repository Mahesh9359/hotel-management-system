import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./Usersignup.css";
import { Link } from "react-router-dom";
import login from "./../images/login.png";
import back from "./../images/back.jpg";

function Usersignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  async function signupUser() {
    const response = await axios.post("/signupuser", {
      name: name,
      email: email,
      phone: phone,
      password: password,
      role: role,
    });
    
    if (response.data.success) {
      await swal({
        title: "Success",
        text: response.data.message,
        icon: "success",
        button: "Continue!",
      });
      window.location.href = "/signin";
    } else {
      swal({
        title: "Error",
        text: response.data.message,
        icon: "error",
        button: "Try Again!",
      });
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
    }
  }

  return (
    <div className="signup-wrapper">
      <nav className="navbar-default navbar-side bgcolor" role="navigation">
        <div className="sidebar-collapse bgcolor">
          <ul className="nav bgcolor" id="main-menu">
            <li>
              <a href="/" className="nav-link">
                <i className="fa fa-home"></i> Homepage
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div
        className="signup-background"
        style={{
          backgroundImage: `url(${back})`,
        }}
      >

        <div className="signup-main-container">
          <div className="signup-card">
            <div className="signup-header">
              <h2 className="signup-title">Create Account</h2>
              <p className="signup-subtitle">Join us today</p>
            </div>
            
            <form className="signup-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="form-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="form-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Create a password"
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="button"
                className="signup-button"
                onClick={signupUser}
              >
                Create Account
              </button>
              
              <div className="login-link-container">
                <span className="login-text">
                  Already have an account?{" "}
                  <Link to="/signin" className="login-link">
                    Sign in here
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usersignup;