import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const features = [
  { icon: <img src="https://www.thewadhwagroup.com/wp-content/uploads/2020/06/icon-img-1.png"/>, title: "INNOVATIVE CONSTRUCTION", text: "Use of latest & innovative construction technology" },
  { icon: <img src="https://www.thewadhwagroup.com/wp-content/uploads/2020/06/icon-img-1.png"/>, title: "METICULOUS PLANNING", text: "Well planned homes keeping the smallest details in mind" },
  { icon: <img src="https://www.thewadhwagroup.com/wp-content/uploads/2020/06/icon-img-1.png"/>, title: "CUSTOMER FIRST", text: "Adopting a customer first approach in everything we do" },
  { icon: <img src="https://www.thewadhwagroup.com/wp-content/uploads/2020/06/icon-img-1.png"/>, title: "CONVENIENT LOCATIONS", text: "Thoughtfully selected project locations for utmost convenience" },
  { icon: <img src="https://www.thewadhwagroup.com/wp-content/uploads/2020/06/icon-img-1.png"/>, title: "MODERN TECHNOLOGY", text: "Adapting latest technology in our projects" },
  { icon: <img src="https://www.thewadhwagroup.com/wp-content/uploads/2020/06/icon-img-1.png"/>, title: "AWARDED DESIGNS", text: "Best designs which are recognized across the industry" }
];

const Info = () => {
  return (
    <Container fluid className="text-center my-0 mx-0 d-flex  bg-dark align-items-center justify-content-center vh-100">
      <Row className="w-100">
        {features.map((feature, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="p-4 bg-dark text-light border-0 text-center d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
              <div className="mb-3 d-flex align-items-center justify-content-center text-warning rounded-circle" style={{ width: "100px", height: "100px", display: "flex", alignItems: "center", justifyContent: "center",border:'1px solid #d7926b',background:"rgba(87, 85, 83, 0.97)" }}>
                {feature.icon}
              </div>
              <Card.Title className="fw-bold">{feature.title}</Card.Title>
              <Card.Text className="text-secondary text-center">{feature.text}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Info;
