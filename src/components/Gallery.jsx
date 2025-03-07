import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { RightArrowIcon } from "../assets/svg";

const projects = [
  { name: "MAGNOLIA", location: "PANVEL", image: "https://www.thewadhwagroup.com/wp-content/uploads/2021/07/magnolia-list.jpg" },
  { name: "VENUE 52", location: "KHAR WEST", image: "https://www.thewadhwagroup.com/wp-content/uploads/2024/05/venue-52.jpg" },
  { name: "THE HAVEN", location: "PANVEL", image: "https://www.thewadhwagroup.com/wp-content/uploads/2024/05/The-Haven.jpg" },
  { name: "THE RESERVE", location: "PANVEL", image: "https://www.thewadhwagroup.com/wp-content/uploads/2024/09/New-Project-21.jpg" },
  { name: "TULIP APARTMENTS", location: "PANVEL", image: "https://www.thewadhwagroup.com/wp-content/uploads/2024/10/tulip-appartments.jpg" },
  { name: "EVARA", location: "PANVEL", image: "https://www.thewadhwagroup.com/wp-content/uploads/2024/05/the-h.jpg" },
];

const ArrowButton = ({ onClick, direction }) => (
  <button
    className={`btn border-0 bg-transparent`}
    onClick={onClick}
    style={{ fontSize: "2rem", color: "#C49A85" }}
  >
    {direction === "left" ? "←" : "→"}
  </button>
);

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () =>
    setIndex((prevIndex) => (prevIndex === 0 ? projects.length - 3 : prevIndex - 1));
  const handleNext = () =>
    setIndex((prevIndex) => (prevIndex >= projects.length - 3 ? 0 : prevIndex + 1));

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center flex-column">
      <h2 className="mb-4" style={{ fontSize: "4rem", fontFamily: "Cormorant Garamond", fontWeight: "300" }}>
        CURRENT PROJECTS
      </h2>
      <Row className="align-items-center w-100">
        <Col xs={1} className="text-end">
          <RightArrowIcon style={{transform: 'rotate(180deg)'}} onClick={handlePrev} direction="left" />
        </Col>
        <Col md={10} className="d-flex justify-content-center">
          <div className="d-flex overflow-hidden w-100" style={{ transition: "transform 0.5s ease-in-out" }}>
            {projects.slice(index, index + 3).map((project, i) => (
              <div key={i} className="mx-3 text-center" style={{ flex: "0 0 30%" }}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="img-fluid rounded mb-3"
                  style={{ width: "100%", height: "400px", objectFit: "cover", transition: "opacity 0.5s ease-in-out" }}
                />
                <h4 className="mb-1" style={{ fontWeight: "bold", fontFamily: "Cormorant Garamond" }}>
                  {project.name}
                </h4>
                <p style={{ letterSpacing: "1px", color: "#d7926b" }}>{project.location}</p>
              </div>
            ))}
          </div>
        </Col>
        <Col xs={1} className="text-start">
          <RightArrowIcon onClick={handleNext} direction="right" />
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
