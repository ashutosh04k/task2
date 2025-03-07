import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Aboutus.css";

const Hearts = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6 p-0">
          <img
            src="https://www.thewadhwagroup.com/wp-content/uploads/2024/09/index-image.jpg"
            alt="The Wadhwa Group"
            className="img-fluid building-image"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="col-md-6 text-section p-5">
          <h2 className="title" style={{fontFamily:"Cormorant Garamond" , fontSize:"3rem", fontWeight:"300",color:"#000000",letterSpacing:'2px'}}>WE DESIGN YOUR WORLD WITH OUR HEARTS</h2>
          <p className="subtitle" style={{fontFamily:'Raleway',letterSpacing:'.4em'}}>SETTING A STRONG FOUNDATION FOR YOU</p>
          <div className="row">
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li><i className="bi bi-dot me-2"></i>Impeccable project execution</li>
                <li><i className="bi bi-chevron-right me-2"></i>Transparency in dealings</li>
                <li><i className="bi bi-chevron-right me-2"></i>Litigation-free projects</li>
                <li><i className="bi bi-chevron-right me-2"></i>Positive exit covenants (Institutions, Investors, Customers)</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li><i className="bi bi-chevron-right me-2"></i>Strong brand presence & delivery excellence</li>
                <li><i className="bi bi-chevron-right me-2"></i>In-depth due diligence to ensure clear land titles</li>
                <li><i className="bi bi-chevron-right me-2"></i>Design innovation with emphasis on practicality</li>
              </ul>
            </div>
          </div>     
          <div className="text-center mt-4">
        <img
          src="https://www.thewadhwagroup.com/wp-content/uploads/2025/02/VENTILIT-Wadhwa-04.jpg"
          alt="signature"
          style={{ width: "200px", height: "auto" }}
        />
      </div>

        </div>
      </div>
    </div>
  );
};

export default Hearts;
