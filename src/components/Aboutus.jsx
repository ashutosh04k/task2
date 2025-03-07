import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css"; // Custom styling
import { RightArrowIcon } from "../assets/svg";
const AboutUs = () => {
  return (
    <div className="container my-5" style={{fontFamily:'Cormorant Garamond'}}>
      <div className="row align-items-center">
        {/* Left Section - Text Content */}
        <div className="col-md-6">
          <h2 className="display-5 text-uppercase" style={{fontSize:'4rem'}}>A Brief <br /> About Us</h2>
          <p>
            <b>
              The Wadhwa Group </b>carries a rich legacy of 5+ decades built on the trust and belief of our customers and stakeholders. The group is one of Mumbai’s leading real estate companies with 250+ landmarks and is currently developing residential, commercial, and township projects spread across approximately 4.1 Million Sq.M.
          </p>
          <p>
            Timely completion of projects coupled with strong planning and design innovation gives the group an edge over its competitors. As an organization, the group is also known for its employee-friendly and professional working environment. Today, the group’s clientele comprises over 35,000+ satisfied customers and over 150+ MNCs.
          </p>
          
            <RightArrowIcon/>
          
        </div>

        {/* Right Section - Images */}
        <div className="col-md-6 position-relative">
          <img
            src="https://www.thewadhwagroup.com/wp-content/uploads/2021/07/home-about1.jpg" 
            alt="Office Interior"
            className="img-fluid rounded shadow-lg"
          />
          <img
            src="https://www.thewadhwagroup.com/wp-content/uploads/2024/09/platina.jpg"
            alt="Corporate Building"
            className="img-fluid rounded shadow-lg position-absolute top-50 start-80 translate-middle"
            style={{ border: "5px solid #d08c60", width: "60%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
