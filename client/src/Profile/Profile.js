import React, { useEffect } from "react";
import "./Profile.css";
import { userLogin } from "./../util/userLogin.js";
import { User } from "../util/user";
import login from "./../images/login.png";
import back from "./../images/back.jpg";

function Profile() {
  useEffect(() => {
    userLogin();
  }, []);

  function logOut() {
    localStorage.removeItem("User");
    window.location.href = "/signin";
  }

  return (
    <div className="profile-wrapper">
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
        className="profile-background"
        style={{
          backgroundImage: `url(${back})`,
        }}
      >
        <div className="profile-main-container">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar">
                <img src={login} className="login-img" alt='profile icon'/>
              </div>
              <h2 className="profile-title">Profile</h2>
            </div>
            
            <div className="profile-welcome">
              <span className="welcome-text">Welcome {User?.name}</span>
            </div>
            
            <div className="profile-info">
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">{User?.email}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone No:</span>
                <span className="info-value">{User?.phone}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Role:</span>
                <span className="info-value role-badge">{User?.role}</span>
              </div>
            </div>
            
            <button className="logout-btn" onClick={logOut}>
              <span className="logout-text">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;