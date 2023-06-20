import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.ul`
  position: relative;
  margin: auto;
  width: 800px;
  height: 400px;
  border: 5px red solid;
  list-style-type: none;
  display: flex;
  background: red;
  /* overflow: hidden; */
`;

const CarouselSlide = styled.li<{
  index: number;
  active: boolean;
  direction: string;
  currentSlide: number;
  maxSlid: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  transition: transform 0.5s ease-in-out;

  transform: ${({ index, active, direction, currentSlide }) =>
    currentSlide == 0
      ? `translateX(${100 * index}%)`
      : direction === "previous"
      ? `translateX(${100 * (index - currentSlide)}%)`
      : `translateX(${100 * (index - currentSlide)}%)`};
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CarouselCaption = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  font-size: 20px;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

interface CarouselProps {
  slides: {
    id: number;
    image: string;
    caption: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const trackRef = useRef<HTMLUListElement>(null);
  const prevSlide = () => {
    console.log("preb");

    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <CarouselContainer
      role="region"
      aria-roledescription="carousel"
      aria-label="Tips & Techn"
      ref={trackRef}
    >
      {slides.map((slide, index) => (
        <CarouselSlide
          className="slidedd"
          key={slide.id}
          index={index}
          active={index === currentSlide}
          currentSlide={currentSlide}
          maxSlid={slides.length - 1}
          direction={
            index === currentSlide - 1
              ? "previous"
              : index === currentSlide + 1
              ? "next"
              : ""
          }
          aria-label={
            index === currentSlide - 1
              ? "Previous slide"
              : index === currentSlide + 1
              ? "Next slide"
              : "Current Slide"
          }
          onClick={() => {
            index === currentSlide - 1
              ? prevSlide()
              : index === currentSlide + 1
              ? nextSlide()
              : console.log("me");
          }}
        >
          <CarouselImage src={slide.image} alt={slide.caption} />
          <CarouselCaption>{slide.caption}</CarouselCaption>
        </CarouselSlide>
      ))}
      {/* <CarouselButton onClick={prevSlide}>Previous</CarouselButton>
      <CarouselButton onClick={nextSlide} style={{ right: 0 }}>
        Next
      </CarouselButton> */}
    </CarouselContainer>
  );
};

export default Carousel;
