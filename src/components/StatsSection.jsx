import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const StatsSection = () => {
  return (
    <Container className="text-center py-5" style={{ background: "#f5f5f5" }}>
      <Row className="align-items-center">
        <Col md={6} className="mb-4 d-flex flex-column align-items-center">
          <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/1-1.png" size={50} className="mb-4 text-secondary" />
          <h2 className="mt-2" style={{ color: "#c89b7b", fontSize:"100px" }}>5+</h2>
          <p className="text-uppercase text-muted" style={{color: "#000000",letterSpacing:'.4em',fontSize:'15px'}}>DECADES OF EXPERIENCE IN ICONIC DEVELOPMENTS</p>
        </Col>
        <Col md={6} className="mb-4 d-flex flex-column align-items-center">
        <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/2-1.png" size={50} className="mb-4 text-secondary" />
        <h2 className="mt-2" style={{ color: "#c89b7b" ,fontSize:"100px"}}>4.1</h2>
          <p className="text-uppercase text-muted" style={{color: "#000000",letterSpacing:'.4em',fontSize:'15px'}}>Million sq. m. of residential & commercial spaces</p>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col md={6} className="mb-4 d-flex flex-column align-items-center">
        <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/3-1.png" size={50} className="mb-4 text-secondary" />

          <h2 className="mt-2" style={{ color: "#c89b7b" ,fontSize:"70px"}}>CONSISTENT</h2>
          <p className="text-uppercase text-muted" style={{color: "#000000",letterSpacing:'.4em',fontSize:'15px'}}>ACCOLADES FOR LIFE ENHANCEMENT</p>
        </Col>
        <Col md={6} className="mb-4 d-flex flex-column align-items-center">
        
        <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/4-1.png" size={50} className="mb-4 text-secondary" />
        <h2 className="mt-2" style={{ color: "#c89b7b" ,fontSize:'70px'}}>STRONG</h2>
        <p className="text-uppercase text-muted" style={{color: "#000000",letterSpacing:'.4em',fontSize:'15px'}}>ACCOLADES FOR LIFE ENHANCEMENT</p>


        </Col>
      </Row>      
      <Row className="align-items-center">
        <Col md={4} className="mb-4 d-flex flex-column align-items-center">
        <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/5-1.png" size={50} className="mb-4 text-secondary" />

          <h2 className="mt-2" style={{ color: "#c89b7b" ,fontSize:'70px'}}>35000+</h2>
          <p className="text-uppercase text-muted" style={{color: "#000000",letterSpacing:'.4em',fontSize:'15px'}}>DELIGHTED CUSTOMERS</p>

        </Col>
        <Col md={4} className="mb-4 d-flex flex-column align-items-center">
        
        <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/6-2.png" size={50} className="mb-4 text-secondary" />
        <h2 className="mt-2" style={{ color: "#c89b7b" ,fontSize:'70px'}}>150+</h2>
        <p className="text-uppercase text-muted" style={{color: "#000000",letterSpacing:'.4em',fontSize:'15px'}}>MNC CLIENTS</p>

        </Col>
        <Col md={4} className="mb-4 d-flex flex-column align-items-center">
        
        <img src="https://www.thewadhwagroup.com/wp-content/uploads/2024/08/7.png" size={50} className="mb-4 text-secondary" />
        <h2 className="mt-2" style={{ color: "#c89b7b" ,fontSize:'70px'}}>250+</h2>
        <p className="text-uppercase text-muted" style={{color: "#000000",letterSpacing:'.4em',fontSize:'15px'}}>LANDMARKS CREATED</p>

        </Col>
      </Row>
    </Container>
  );
};

export default StatsSection;
