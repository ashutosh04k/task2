import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TestimonialIcon,RightArrowIcon } from "../assets/svg";
const testimonials = [
  {
    text: `${
      "I am really thankful to Wadhwa Group and its team for giving me an opportunity to invest in such a beautiful location. A beautiful mountain with such a greenery around the project  provides a feel of a vacation home within the City. We always had a dream to have one house near nature's beauty which came true after taking flat at Wadhwa WiseCity"	}`,
    name: "ANUJ PURI",
    position: "FORMER CHAIRMAN & COUNTRY HEAD, JONES LANG LASALLE, INDIA",
    image: "https://www.thewadhwagroup.com/wp-content/uploads/2021/08/Harish-Amin.png"
  },
  {
    text: `${"“Our family has lived in Ghatkopar for over 3 generations. As the family grew, we needed a bigger home. When we heard about The Address, we realized it was just perfect for our requirement. It is an integrated township where being home itself feels like being on a holiday.”	"}`,
    name: "JOHN DOE",
    position: "CEO, EXAMPLE CORP",
    image: "https://www.thewadhwagroup.com/wp-content/uploads/2021/08/Jagdish-Arekar.png"
  },
  {
    text: "Their professionalism and commitment to excellence are unparalleled.",
    name: "JANE SMITH",
    position: "DIRECTOR, BUSINESS GROUP",
    image: "https://www.thewadhwagroup.com/wp-content/uploads/2021/08/Jagdish-Arekar.png"
  },
  {
    text: "Their professionalism and commitment to excellence are unparalleled.",
    name: "JANE SMITH",
    position: "DIRECTOR, BUSINESS GROUP",
    image: "https://www.thewadhwagroup.com/wp-content/uploads/2021/08/Jagdish-Arekar.png"
  }
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="text-center py-5 vh-100" >
      <div><TestimonialIcon/></div>
      <h2 className="text-uppercase mb-3" style={{fontFamily:"Cormorant Garamond" ,fontSize:'3rem'}}>Testimonials</h2>
      <p className="mb-40" style={{ fontStyle: "italic" }}>
        “{testimonials[index].text}”
      </p>
      <div className="d-flex justify-content-center align-items-center mb-3">
        <img
          src={testimonials[index].image}
          alt={testimonials[index].name}
          className="rounded-circle me-2"
        />
      </div>
      <h5 className="mb-1">{testimonials[index].name}</h5>
      <p className="text-muted small">{testimonials[index].position}</p>
      <Row className="justify-content-between mt-4">
        <Col xs="auto">
          <Button variant="" className="" onClick={prevTestimonial}>
            <RightArrowIcon style={{transform:'rotate(180deg)'}} />
          </Button>
        </Col>
        <Col xs="auto">
          <Button variant="" className="" onClick={nextTestimonial}>
            <RightArrowIcon />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonial;
