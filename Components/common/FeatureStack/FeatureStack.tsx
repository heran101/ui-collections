import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
interface FSwrapperInterface {
  ref: any;
}
const FSWrapper = styled.div<FSwrapperInterface>`
  background: blue;
  position: relative;
  height: 100rem;
  padding: 140px 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;
const Card = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  height: 300px;
  padding: 20px;
  margin: 10px auto;
  background-color: #f0f0f0;
  border-radius: 48px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  transition: transform 0.3s ease-in-out;

  h2 {
    padding: 0;
  }
  span {
    display: block;
    font-size: 14px;
    color: #0c4eb9;
  }
  &:nth-child(1n) {
    bottom: 100px;
    background: red;
    z-index: 100000;
  }
  &:nth-child(2n) {
    bottom: 80px;
    z-index: 10000;
    background: blue;
  }
  &:nth-child(3n) {
    z-index: 1000;
    background: yellow;
    bottom: 60px;
  }

  &:nth-child(4n) {
    z-index: 100;
    background: green;
    bottom: 40px;
  }
  &:nth-child(5n) {
    bottom: 20px;
    z-index: 10;
    background: purple;
  }
`;

interface windowDimentionsInt {
  innerWidth: number;
  innerHeight: number;
}
const FeatureStack = () => {
  const featureStack = useRef<HTMLElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowDimensions, setWindowDimensions] =
    useState<windowDimentionsInt>();

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      setWindowDimensions({ innerWidth, innerHeight });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    const currentPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, scrollPosition]);

  useEffect(() => {
    if (!windowDimensions) return;
    const mainWrapperRect = featureStack.current?.getBoundingClientRect();
    const cardList = featureStack?.current?.children;

    if (mainWrapperRect!.top < windowDimensions!.innerHeight - 600) {
      if (!cardList) return;
      for (var i = 0; i < cardList!.length; i++) {
        const oneCard = cardList[i] as HTMLElement;
        oneCard.style.position = "sticky";
        oneCard.style.marginTop = "60px";
        oneCard.style.bottom = `${100 + (i - 1) * -30}px`;
        oneCard.style.transition = "all 30ms";
        oneCard.style.top = `${-100 + (i - 1) * 30}px`;
      }
    }
  }, [scrollPosition, windowDimensions]);
  return (
    <>
      <div>
        <FSWrapper ref={featureStack}>
          <Card>
            <h2>
              <span>Project #1</span>Title of the Project
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
              perspiciatis blanditiis accusamus commodi consectetur id tempora
              rem iure eligendi quos eos et autem ratione exercitationem earum
              laborum ad a sequi!
            </p>
          </Card>
          <Card>
            <h2>
              <span>Project #2</span>Title of the Project
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
              perspiciatis blanditiis accusamus commodi consectetur id tempora
              rem iure eligendi quos eos et autem ratione exercitationem earum
              laborum ad a sequi!
            </p>
          </Card>
          <Card>
            <h2>
              <span>Project #3</span>Title of the Project
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
              perspiciatis blanditiis accusamus commodi consectetur id tempora
              rem iure eligendi quos eos et autem ratione exercitationem earum
              laborum ad a sequi!
            </p>
          </Card>
          <Card>
            <h2>
              <span>Project #4</span>Title of the Project
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
              perspiciatis blanditiis accusamus commodi consectetur id tempora
              rem iure eligendi quos eos et autem ratione exercitationem earum
              laborum ad a sequi!
            </p>
          </Card>
        </FSWrapper>
      </div>
    </>
  );
};

export default FeatureStack;
