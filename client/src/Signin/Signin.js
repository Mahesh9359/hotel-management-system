import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./Signin.css";
import { Link } from "react-router-dom";
import back from "./../images/back.jpg";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser() {
    const response = await axios.post("/loginuser", {
      email: email,
      password: password,
    });
    
    if (response.data.success) {
      await swal({
        title: "Success",
        text: response.data.message,
        icon: "success",
        button: "Continue",
      });
      localStorage.setItem("User", JSON.stringify(response.data.data));
      window.location.href = "/profile";
    } else {
      await swal({
        title: "Error",
        text: response.data.message,
        icon: "error",
        button: "Try Again!",
      });
      setEmail("");
      setPassword("");
      localStorage.removeItem("User");
    }
  }

  return (
    <div className="signin-wrapper">
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
        className="signin-background"
        style={{
          backgroundImage: `url(${back})`,
        }}
      >

        <div className="signin-main-container">
          <div className="signin-card">
            <div className="signin-header">
              <h2 className="signin-title">Welcome Back</h2>
              <p className="signin-subtitle">Sign in to your account</p>
            </div>
            
            <form className="signin-form">
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
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="button"
                className="signin-button"
                onClick={loginUser}
              >
                Sign In
              </button>
              
              <div className="signup-link-container">
                <span className="signup-text">
                  Don't have an account?{" "}
                  <Link to="/userSignup" className="signup-link">
                    Sign up here
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

export default Signin;