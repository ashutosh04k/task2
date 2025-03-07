import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { SearchIcon, HambergerIcon } from '../assets/svg';
import { FaWhatsapp } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", height: "100px" }}>
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <FiMenu className="text-white" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 d-flex justify-content-between align-items-center" style={{ fontSize: "16px" }}>
            <li><SearchIcon /></li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#" style={{ position: "relative", letterSpacing: '.2em' }}>
                HOME<span className="underline"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#" style={{ letterSpacing: '.2em' }}>ABOUTUS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#" style={{ letterSpacing: '.2em' }}>DESIGN</a>
            </li>
            <li className="nav-item">
              <img src="https://www.thewadhwagroup.com/wp-content/uploads/2025/02/TWG-LOGO-white.png" alt="Logo" style={{ height: "60px" }} />
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">R E S I D E N T I A L</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">C O M M E R C I A L</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">T O W N S H I P</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">R E D E V E L O P M E N T</a>
            </li>
            <li>
              <img src="https://www.thewadhwagroup.com/wp-content/uploads/2021/08/menu-cta-white.png" alt="sms" style={{ height: "40px" }} />
            </li>
            <li><HambergerIcon /></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
