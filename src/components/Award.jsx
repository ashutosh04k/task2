import React, { useRef } from "react";
import { Carousel } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { RightArrowIcon } from "../assets/svg";
const awards = [
  {
    image: "https://www.thewadhwagroup.com/wp-content/uploads/2021/05/aw-1.png",
    title: "REALTY+ CONCLAVE EXCELLENCE AWARDS - 2020 WEST",
    subtitle: "DESIGN PROJECT OF THE YEAR",
    project: "ATMOSPHERE O2",
  },
  {
    image: "https://www.thewadhwagroup.com/wp-content/uploads/2021/05/aw-2.png",
    title: "TIMES REALTY ICONS 2020",
    subtitle: "OUTSTANDING SALES & MARKETING",
  },
  {
    image: "https://www.thewadhwagroup.com/wp-content/uploads/2021/05/aw-3.png",
    title: "THE BEST OF BHARAT AWARDS 2022",
    subtitle: "PRIDE OF INDIA BRANDS",
  },
  {
    image: "https://www.thewadhwagroup.com/wp-content/uploads/2021/05/aw-3.png",
    title: "INTERNATIONAL PROPERTY AWARDS 2021",
    subtitle: "BEST COMMERCIAL PROJECT",
  },
  {
    image: "https://www.thewadhwagroup.com/wp-content/uploads/2021/05/aw-1.png",
    title: "NATIONAL REAL ESTATE AWARDS 2023",
    subtitle: "ICONIC PROJECT OF THE YEAR",
  },
  {
    image: "https://www.thewadhwagroup.com/wp-content/uploads/2021/05/aw-2.png",
    title: "INDIA PROPERTY EXCELLENCE AWARDS 2023",
    subtitle: "TOP LUXURY HOUSING PROJECT",
  },
];

// Function to split awards into groups of 3 per slide
const chunkArray = (arr, size) => {
  return arr.reduce((chunks, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
    chunks[chunkIndex].push(item);
    return chunks;
  }, []);
};

const Award = () => {
  const slides = chunkArray(awards, 3); // Create slides with 3 awards each
  const carouselRef = useRef(null);

  // Function to handle Next & Prev Navigation
  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div className="container text-center py-5 position-relative">
      <h2 className="mb-1" style={{ fontFamily: "Cormorant Garamond", fontWeight: "300", fontSize: "4rem", color: "#000000" }}>
        AWARDS
      </h2>
      <p className="subtitle" style={{ fontFamily: "Raleway", letterSpacing: ".4em" }}>Our Accolades over the Years</p>

      {/* Carousel with Forward & Backward Icons */}
      <div className="position-relative" style={{paddingTop:'0px',overflow:"visible"}}>
        <Carousel interval={4000} indicators={false} ref={carouselRef} nextLabel="" prevLabel="">
          {slides.map((group, index) => (
            <Carousel.Item key={index}>
              <div className="row justify-content-center pt-10">
                {group.map((award, idx) => (
                  <div key={idx} className="col-md-4 row g-3" style={{border:'1px solid red' ,justifyContent:"space-between"}}>
                    <div className="award-card p-3 position-relative">
                      <img src={award.image} alt="Award" className="award-image mb-5" style={{ position:"relative" ,marginBottom: '10rem', marginTop: '-4rem',background:'white' }} />
                      <h5 style={{ fontFamily: "Cormorant Garamond", fontWeight: "300", fontSize: "1.5rem", color: "#000000" }}>
                        {award.title}
                      </h5>
                      <p className="subtitle" style={{ fontFamily: "Raleway", letterSpacing: ".2em", fontSize: "1rem" }}>
                        {award.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Custom Next and Prev Buttons */}
        <button
          className="carousel-control-prev"
          onClick={handlePrev}
          style={{
            position: "absolute",
            top: "50%",
            left: "-50px",
            transform: "translateY(-50%)",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            transform: "rotate(180deg)",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          <RightArrowIcon />
        </button>

        <button
          className="carousel-control-next"
          onClick={handleNext}
          style={{
            position: "absolute",
            top: "50%",
            right: "-50px",
            transform: "translateY(-50%)",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
<RightArrowIcon />        </button>
      </div>
    </div>
  );
};

export default Award;
