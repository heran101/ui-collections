import React, { useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  position: relative;
  margin: auto;
  width: 400px;
  border: 1px solid #4d4d4d;
  padding: 10px;
  overflow: hidden;
`;

const SlideList = styled.ul`
  display: flex;
  width: 600px;
  padding: 0;
  margin: 0;
  list-style: none;
  transition: all 3s;
`;

const SlideItem = styled.li`
  width: 400px;
  height: 400px;
  margin-right: 10px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const NavButton = styled.a`
  display: inline-block;
  padding: 10px;
  background-color: #eee;
  cursor: pointer;
  margin-right: 10px;
`;
const IndicatorContainer = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding: 0;
  list-style: none;
`;

const Indicator = styled.li<{ active: boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${({ active }) => (active ? "#333" : "#ccc")};
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
`;
interface CarouselProps {
  slides: {
    id: number;
    image: string;
    caption: string;
  }[];
}
const CarouselContinue2 = ({ slides }: CarouselProps) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrev = () => {
    setSlideIndex((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
    const slideList = document.querySelector(".slide");
    const lastSlide = document.querySelector(
      ".slide li:last-child"
    ) as HTMLLIElement;

    lastSlide.style.width = "0";
    slideList?.prepend(lastSlide);
    const rr = slideList?.firstChild as HTMLLIElement;
    rr.style.width = "98px";
  };

  const handleNext = () => {
    setSlideIndex((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
    const slideList = document.querySelector(".slide") as HTMLLIElement;

    slideList.style.left = "-=400px";

    setTimeout(() => {
      const firstSlide = document.querySelector(
        ".slide li:first-child"
      ) as HTMLLIElement;
      slideList.appendChild(firstSlide);
      slideList.style.left = "+=100px";
    }, 500);
  };

  return (
    <CarouselContainer>
      <SlideList className="slide">
        {slides.map(({ caption }, index) => (
          <SlideItem>{index}</SlideItem>
        ))}
      </SlideList>
      <div className="btns">
        <NavButton className="nav prev" onClick={handlePrev}>
          Prev
        </NavButton>
        <NavButton className="nav next" onClick={handleNext}>
          Next
        </NavButton>
      </div>
      <IndicatorContainer>
        {slides.map((_, index) => (
          <Indicator
            key={index}
            active={index === slideIndex}
            onClick={() => setSlideIndex(index)}
          />
        ))}
      </IndicatorContainer>
    </CarouselContainer>
  );
};

export default CarouselContinue2;
