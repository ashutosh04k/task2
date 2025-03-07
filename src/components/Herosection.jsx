import React, { useState, useEffect } from 'react';
import { leftImages, rightImages } from './constant';
import { FaWhatsapp } from 'react-icons/fa';
import { RightArrowIcon } from '../assets/svg';

const Herosection = () => {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [slideDirection, setSlideDirection] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setZoom(1);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % leftImages.length);
        setZoom(1.1);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection(100);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % rightImages.length);
        setSlideDirection(0);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (dotIndex) => {
    setIndex(dotIndex);
  };

  return (
    <div className="position-relative w-100" style={{ height: '90vh' }}>
      <div className="position-relative w-100 overflow-hidden" style={{ height: '90vh' }}>
        <div
          className="w-100 h-100 position-absolute transition"
          style={{
            backgroundImage: `url(${leftImages[index]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '50%',
            transform: `scale(${zoom})`,
            transition: 'transform 5s ease-in-out',
          }}
        ></div>

        <div
          className="position-absolute h-100 bg-cover bg-center transition"
          style={{
            backgroundImage: `url(${rightImages[index]})`,
            width: '50%',
            right: 0,
            zIndex: 2,
            transform: `translateX(${slideDirection}%)`,
            transition: 'transform 1s ease-in-out',
          }}
        ></div>
      </div>

      <div
        className="position-absolute text-white text-center"
        style={{
          top: '50%',
          left: '40%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          zIndex: 3,
        }}
      >
        <h1 className="display-4" style={{ fontFamily: 'Cormorant Garamond', fontWeight: '300' }}>
          LANDMARKS PLANNED
        </h1>
        <h1 className="display-4" style={{ fontFamily: 'Cormorant Garamond', fontWeight: '300' }}>
          WITH PASSION
        </h1>
        <p className="text-white" style={{ fontSize: '1rem', letterSpacing: '.8em' }}>
          TRANSFORMING MUMBAI'S SKYLINE
        </p>
        <p className="text-white" style={{ fontSize: '1rem', letterSpacing: '.8em' }}>
          SINCE 1969
        </p>
        <p className="mt-3 text-white">ATMOSPHERE, MULUND WEST</p>
      </div>

      <div className="position-absolute bottom-0 start-50 translate-middle-x text-white mb-3 animate-bounce" style={{ zIndex: 3 }}>
        <RightArrowIcon style={{ transform: 'rotate(90deg)' }} />
      </div>

      <div className="position-fixed bottom-0 end-0 m-4 bg-success text-white p-3 rounded-circle shadow-lg">
        <FaWhatsapp className="fs-3" />
      </div>

      <div
        className="position-absolute left-40 top-50 translate-middle-y d-flex flex-column align-items-center"
        style={{ zIndex: 4,paddingLeft:'50px' ,padding:'5px'}}
      >
        {leftImages.map((_, dotIndex) => (
          <div
            key={dotIndex}
            onClick={() => handleDotClick(dotIndex)}
            className={`dot ${dotIndex === index ? 'active' : ''}`}
            style={{
              width: '10px',
              height: '10px',
              border: '1px solid red',
              marginLeft:'50px',
              marginBottom: '10px',
              borderRadius: '50%',
              backgroundColor: dotIndex === index ? 'white' : 'gray',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Herosection;
