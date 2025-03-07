import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './AboutUs.css';
import { FaUser, FaEnvelope, FaMobileAlt, FaCalendar, FaComment } from "react-icons/fa";
const Enquiry = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
    

      <div className="form-section">
        <h2 className="form-title" style={{ letterSpacing: '.2em' }}>REQUEST CALL BACK</h2>
        <p className="form-subtitle" style={{ letterSpacing: '.2em', color: '#c28562' }}>PLEASE FILL YOUR DETAILS BELOW</p>
        <form className="custom-form">
          <div className="row">
            <div className="col-md-6">
              <div className="input-group mb-3" style={{borderBottom:'1px solid black',marginBottom:'10px'}}>
                <span className="input-group-text"><FaUser /></span>
                <input type="text" className="form-control" placeholder="First Name"  />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3"style={{borderBottom:'1px solid black',marginBottom:'10px'}}>
                <span className="input-group-text"><FaUser /></span>
                <input type="text" className="form-control" placeholder="Last Name" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="input-group mb-3"style={{borderBottom:'1px solid black',marginBottom:'10px'}}>
                <span className="input-group-text"><FaMobileAlt /></span>
                <input type="text" className="form-control" placeholder="Mobile" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3"style={{borderBottom:'1px solid black',marginBottom:'10px'}}>
                <span className="input-group-text"><FaEnvelope /></span>
                <input type="email" className="form-control" placeholder="Email" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="input-group mb-3"style={{borderBottom:'1px solid black',marginBottom:'10px'}}>
                <span className="input-group-text"><FaCalendar /></span>
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-group mb-3"style={{borderBottom:'1px solid black',marginBottom:'10px'}}>
                <select className="form-control">
                  <option value="">Interested Projects</option>
                  <option>Project A</option>
                  <option>Project B</option>
                </select>
              </div>
            </div>
          </div>

          <div className="input-group mb-3"style={{borderBottom:'1px solid black',marginBottom:'10px'}}>
            <span className="input-group-text"><FaComment /></span>
            <textarea className="form-control" rows="3" placeholder="Message"></textarea>
          </div>
          <div style={{ background: '#c28562',padding:'5px'}}>

          <button type="submit" className="btn btn-submit w-100 bg-[#c28562]" style={{ background: '#c28562',border:'1px solid white',borderRadius:'0px',color:'white' }}>CONTACT</button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Enquiry;
