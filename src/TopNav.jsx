import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GuviLogo from '../src/assets/Guvi-blog-logo.png';
import navimg1 from '../src/assets/blog-header.png';
import './TopNav.css';  // Ensure this CSS file is included

function TopNav() {
  return (
    <>
      <nav className="navbar bg-body-tertiary topnav">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">
            <img src={GuviLogo} alt="Guvi Logo" width="120" height="50" />
          </a>
          <div className="username-container">
            <div className="username">Ruthrapathi- React-Router-task</div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="navimg d-flex justify-content-center">
          <img src={navimg1} alt="Blog Header" className="img-fluid" />
        </div>
      </div>
    </>
  );
}

export default TopNav;
