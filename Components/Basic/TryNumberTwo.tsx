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
`;

const CarouselSlide = styled.li<{
  index: number;
  active: boolean;
  direction: string;
  currentSlide: number;
  maxSlide: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  transition: transform 0.5s ease-in-out;

  transform: ${({ index, active, direction, currentSlide, maxSlide }) => {
    if (currentSlide === 0 && index === maxSlide) {
      return `translateX(-${100 * (maxSlide + 1)}%)`;
    } else if (currentSlide === maxSlide && index === 0) {
      return `translateX(${100 * (maxSlide + 1)}%)`;
    } else if (direction === "previous") {
      return `translateX(${100 * (index - currentSlide - 1)}%)`;
    } else if (direction === "next") {
      return `translateX(${100 * (index - currentSlide + 1)}%)`;
    } else {
      return `translateX(${100 * (index - currentSlide)}%)`;
    }
  }};
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

const CarouselIndicators = styled.ul`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  list-style-type: none;
`;

const CarouselIndicator = styled.li<{ active: boolean }>`
  width: 12px;
  height: 12px;
  margin: 0 6px;
  background-color: ${({ active }) => (active ? "white" : "gray")};
  border-radius: 50%;
  cursor: pointer;
`;
const MainContainer = styled.div`
  width: 900px;
  background: red;
`;
interface CarouselProps {
  slides: {
    id?: number;
    image?: string;
    caption?: string;
  }[];
}

const TryNumberTwo: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [allSlide, setAllSlide] = useState(slides);
  const trackRef = useRef<HTMLUListElement>(null);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       nextSlide();
  //     }, 3000);

  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, []);

  const handleNext = () => {
    setTimeout(() => {
      setAllSlide((prevState) => {
        let updatedSlides = [...prevState];

        const lastSlide = updatedSlides.pop();
        const newLastSlide = { ...lastSlide };

        updatedSlides.unshift(newLastSlide);

        return updatedSlides;
      });
    }, 500);
  };

  const handlePrev = () => {
    setTimeout(() => {
      setAllSlide((prevState) => {
        let updatedSlides = [...prevState];
        const lastSlide = updatedSlides.pop();
        const newLastSlide = { ...lastSlide };
        updatedSlides.unshift(newLastSlide);
        return updatedSlides;
      });
    }, 500);
  };
  //   const prevSlide = () => {
  //     setCurrentSlide((prevSlide) =>
  //       prevSlide === 0 ? slides.length - 1 : prevSlide - 1
  //     );
  //   };

  //   const nextSlide = () => {
  //     setCurrentSlide((prevSlide) =>
  //       prevSlide === slides.length - 1 ? 0 : prevSlide + 1
  //     );
  //   };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <MainContainer>
      <CarouselContainer ref={trackRef}>
        {slides.map((slide, index) => (
          <CarouselSlide
            key={slide.id}
            index={index}
            active={index === currentSlide}
            currentSlide={currentSlide}
            maxSlide={slides.length - 1}
            direction={
              index === currentSlide - 1
                ? "previous"
                : index === currentSlide + 1
                ? "next"
                : ""
            }
          >
            <CarouselImage src={slide.image} alt={slide.caption} />
            <CarouselCaption>{slide.caption}</CarouselCaption>
          </CarouselSlide>
        ))}
        <CarouselButton onClick={handlePrev}>Previous</CarouselButton>
        <CarouselButton onClick={handleNext} style={{ right: 0 }}>
          Next
        </CarouselButton>
        <CarouselIndicators>
          {slides.map((slide, index) => (
            <CarouselIndicator
              key={slide.id}
              active={index === currentSlide}
              onClick={() => goToSlide(index)}
            />
          ))}
        </CarouselIndicators>
      </CarouselContainer>
    </MainContainer>
  );
};

export default TryNumberTwo;
