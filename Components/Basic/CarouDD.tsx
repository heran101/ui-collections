import React, { useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.3s ease;
  transform: translateX(${(props) => props.translateValue}px);
`;

const CarouselSlide = styled.div`
  flex: 0 0 100%;
`;

const CarouselButton = styled.button<{ direction: string }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  z-index: 2;

  ${(props) => (props.direction === "prev" ? "left: 1rem;" : "right: 1rem;")}
`;

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideWidth = 100;
  const translateValue = -slideWidth * currentSlide;

  const slides = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/600x300/ff0000/ffffff",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/600x300/00ff00/ffffff",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/600x300/0000ff/ffffff",
    },
    {
      id: 4,
      imageUrl: "https://via.placeholder.com/600x300/ffff00/ffffff",
    },
  ];

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <CarouselContainer>
      <CarouselTrack translateValue={translateValue}>
        {slides.map((slide) => (
          <CarouselSlide key={slide.id}>
            <img src={slide.imageUrl} alt={`Slide ${slide.id}`} />
          </CarouselSlide>
        ))}
      </CarouselTrack>
      <CarouselButton direction="prev" onClick={goToPrevSlide}>
        &#8249;
      </CarouselButton>
      <CarouselButton direction="next" onClick={goToNextSlide}>
        &#8250;
      </CarouselButton>
    </CarouselContainer>
  );
};

export default Carousel;
