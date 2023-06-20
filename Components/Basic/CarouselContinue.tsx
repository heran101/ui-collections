import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarouselButton = styled.button`
  cursor: pointer;
  font-size: 3rem;
`;

const SlideWrapper = styled.div<{
  sliding: boolean;
  direction: number;
}>`
  display: flex;
  transition: transform 500ms ease-in;
  transform: ${(props) =>
    props.sliding && props.direction > 0
      ? "translateX(-300px)"
      : "translateX(0px)"};
`;

const SlideItem = styled.div`
  flex: 0 0 auto;
  padding: 1rem;
  margin: 0 15px;
  width: 300px;
  height: 200px;
  background: red;
`;
type unddd = { order: number; text?: string }[];
const CarouselContinue = () => {
  const [slides, setSlides] = useState<unddd>([
    { order: -1, text: "4" },
    { order: 0, text: "1" },
    { order: 1, text: "2" },
    { order: 2, text: "3" },
  ]);
  const [slideCount] = useState(3);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleSlide = () => {
      if (sliding) {
        setTimeout(() => {
          setSlides((prevSlides) => {
            const lastItem = prevSlides[prevSlides.length - 1];
            const newId = lastItem.id + 2;
            const newItem = { id: newId, text: `Slide ${newId}` };
            return [...prevItems.slice(2), newItem];
          });
        }, 500);
      }
    };

    handleSlide();
  }, [sliding]);

  const handleNext = () => {
    setSliding(true);
    setDirection(1);
  };

  const handlePrev = () => {
    setSliding(true);
    setDirection(-1);
  };

  return (
    <div>
      <CarouselWrapper>
        <CarouselButton onClick={() => !sliding && handlePrev()}>
          <i className="fa fa-arrow-left fa-3x"></i>
        </CarouselButton>
        <SlideWrapper sliding={sliding} direction={direction}>
          {slides.map(({ order, text }) => (
            <SlideItem key={order}>{text}</SlideItem>
          ))}
        </SlideWrapper>
        <CarouselButton onClick={() => !sliding && handleNext()}>
          <i className="fa fa-arrow-right fa-3x"></i>
        </CarouselButton>
      </CarouselWrapper>
    </div>
  );
};

export default CarouselContinue;
