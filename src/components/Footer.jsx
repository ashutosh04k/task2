import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RightArrowIcon } from "../assets/svg";

const Footer = () => {
  return (
    <footer className=" text-light py-5" style={{background:"#19130b",fontFamily:'Cormorant Garamond'}}>
      <Container>
        <Row>
          {/* Contact Section */}
          <Col md={3}>
            <h5>CONTACT</h5>
            <p className="text-light">The Wadhwa Group</p>
            <p style={{color:'#c28562'}}>Email<a href="mailto:enquiry@thewadhwagroup.com" className="text-light"> : enquiry@thewadhwagroup.com</a></p>
            <p style={{color:'#c28562',fontSize:'20px'}}>Toll Free<span className="text-light">: 1800 209 6669</span></p>
          </Col>

          {/* Our Projects Section */}
          <Col md={3}>
            <h5>OUR PROJECTS</h5>
            <h6>Residential</h6>
            <ul className="list-unstyled">
              <li>TW Gardens</li>
              <li>Atmosphere O2</li>
              <li>Wadhwa Wise City</li>
              <li>Magnolia</li>
              <li>The Haven</li>
            </ul>
            <h6>Commercial</h6>
            <ul className="list-unstyled">
              <li>Venue 52</li>
            </ul>
          </Col>

          {/* Useful Links Section */}
          <Col md={3}>
            <h5>USEFUL LINKS</h5>
            <ul className="list-unstyled">
              <li>Flats for sale in Panvel</li>
              <li>New projects in Panvel</li>
              <li>1 and 2 BHK in Panvel</li>
              <li>2 and 3 BHK in Mulund</li>
              <li>New projects in Mulund</li>
              <li>2 and 3 BHK flat in Kandivali East</li>
            </ul>
          </Col>

          {/* Enquire Section */}
          <Col md={3}>
            <h5>ENQUIRE</h5>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Mobile" />
              </Form.Group>
              <button className="btn btn-outline"><RightArrowIcon/></button>
            </Form>
          </Col>
        </Row>

        {/* Social Media Links */}
        <div className="text-center my-4">
          <FaFacebookF className="mx-2" />
          <FaInstagram className="mx-2" />
          <FaYoutube className="mx-2" />
          <FaLinkedinIn className="mx-2" />
          <FaTwitter className="mx-2" />
        </div>

        {/* Copyright Section */}
        <div className="text-center" style={{ borderTop: "1px solid rgb(97, 94, 94)",fontFamily:'Cormorant Garamond',letterSpacing:'.6em' }}>
  <p className="text-light">Copyright © 2024. The Wadhwa Group. All Rights Reserved</p>
  <span href="#" className="text-light">Disclaimer</span> | <span href="#" className="text-light">Privacy Policy</span>
</div>

      </Container>
    </footer>
  );
};

export default Footer;