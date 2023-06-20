import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: 200px;
  width: 600px;
  margin: 20px auto;
  overflow: hidden;
  position: relative;

  @media (max-width: 850px) {
    width: 200px;
  }
`;

const LeftButton = styled.div`
  position: absolute;
  top: 50%;
  top: 100px;
  left: 50px;
  width: 50px;
  height: 50px;
  color: limeGreen;
  cursor: pointer;
`;

const RightButton = styled.div`
  position: absolute;
  top: 50%;
  right: 50px;
  width: 50px;
  height: 50px;
  color: limeGreen;
  cursor: pointer;
`;

const ItemCarousel = styled.div`
  position: relative;
  right: 0;
  font-size: 0;
  width: 200%;
  transform: translateX(-200px);

  &.slide-enter {
    transform: translateX(0px);
  }
`;

const Item = styled.div`
  box-sizing: border-box;
  display: inline-block;
  height: 200px;
  width: 200px;
  background-color: steelblue;
  border: 3px solid yellow;
  font-size: 36px;
  text-align: center;
  vertical-align: middle;
  line-height: 164px;
  user-select: none;

  &.active {
    border: 3px solid black;
  }
`;

const slideAnimation = keyframes`
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-400px);
  }
`;
type unddd = { order: number; text?: string }[];
const App: React.FC = () => {
  const [slides, setSlides] = useState<unddd>([
    { order: -1, text: "6" },
    { order: 0, text: "1" },
    { order: 1, text: "2" },
    { order: 2, text: "3" },
    { order: 3, text: "4" },
    { order: 4, text: "5" },
  ]);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setSliding(true);
    setDirection(1);

    setTimeout(() => {
      setSlides((prevState) => {
        const oldSlides = [...prevState];
        const hiddenSlide = oldSlides.shift();
        const newHiddenSlide = {
          ...hiddenSlide,
          order: oldSlides[oldSlides.length - 1].order + 1,
        };
        oldSlides.push(newHiddenSlide);
        const updatedSlides = oldSlides.map((s) => ({
          ...s,
          order: s.order - 1,
        }));
        setSliding(false);
        return updatedSlides;
      });
    }, 500);
  };

  const handlePrev = () => {
    setSliding(true);
    setDirection(-1);

    setTimeout(() => {
      setSlides((prevState) => {
        let updatedSlides = [...prevState];

        const lastSlide = updatedSlides.pop();
        const newLastSlide = { ...lastSlide, order: -1 };
        updatedSlides = updatedSlides.map((s) => ({
          ...s,
          order: s.order + 1,
        }));
        updatedSlides.unshift(newLastSlide);

        setSliding(false);
        return updatedSlides;
      });
    }, 500);
  };

  const slideActionStyle = sliding
    ? direction > 0
      ? {
          animation: `${slideAnimation} 500ms ease-in`,
        }
      : {}
    : {};

  return (
    <Container>
      <LeftButton onClick={() => !sliding && handlePrev()}>
        hhhhhh
        <i className="fa fa-arrow-left fa-3x" />
      </LeftButton>
      <ItemCarousel style={slideActionStyle}>
        {slides.map(({ order, text }) => (
          <Item key={order} className={order === 0 ? "active" : ""}>
            {text}
          </Item>
        ))}
      </ItemCarousel>
      <RightButton onClick={() => !sliding && handleNext()}>
        hhhhhh
        <i className="fa fa-arrow-right fa-3x" />
      </RightButton>
    </Container>
  );
};

export default App;
