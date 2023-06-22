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
  /* left: ${({ index }) => `${110 * index}%`}; */
  width: 100%;
  height: 100%;
  padding: 0 10px;
  transition: 0.9s ease-in;

  transform: ${({ index, active, direction, currentSlide }) =>
    currentSlide == 0
      ? `translateX(${100 * index}%)`
      : direction === "previous"
      ? `translateX(${100 * (index - currentSlide)}%) !important`
      : `translateX(${100 * (index - currentSlide)}%) !important`};
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
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };
  const elementIsVisibleInViewport = (
    el: HTMLElement,
    partiallyVisible = false
  ) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };
  const nextSlide = () => {
    const track = trackRef.current;
    if (!track) return;
    const trackChildren = Array.from(trackRef.current?.children);
    const lastChild = track.lastElementChild as HTMLLIElement;
    let lastAppended: string;
    const lastchildTransform = lastChild.style.transform;
    console.log("lastchildTransform", lastchildTransform);
    let notVisibleElements = trackChildren
      .map((slide, index) => {
        const one = slide as HTMLLIElement;
        if (index < currentSlide && elementIsVisibleInViewport(one, true))
          return one;
      })
      .filter((item) => {
        return item;
      });

    if (notVisibleElements.length > 0) {
      console.log("need more", notVisibleElements);
      const notVisibleelement = notVisibleElements[0] as HTMLLIElement;
      lastAppended = notVisibleelement.id;
      notVisibleelement.style.transform = `translateX(${100 * 2}%)`;
      notVisibleelement.setAttribute("aria-label", "");
      track.appendChild(notVisibleelement);

      // for (let i = 0; i < notVisibleElements.length; i++) {

      // }
    }
    console.log("trackChildren", trackChildren);

    // trackChildren.forEach((slide, index) => {
    //   let currentItem = slide as HTMLLIElement;
    //   // if (index == trackChildren.length - 1) debugger;
    //   console.log(
    //     "before",
    //     currentSlide,
    //     index,
    //     loopCount,
    //     index - (currentSlide + 1)
    //     // currentItem.getAttribute("index"),
    //     // currentItem.id,
    //     // `${110 * (index - (currentSlide + 1))}`
    //   );
    //   if (currentSlide > 2) {
    //     currentItem.style.left = `${
    //       110 * (index - (currentSlide + 1) + loopCount)
    //     }%`;
    //   } else {
    //     currentItem.style.left = `${110 * (index - (currentSlide + 1))}%`;
    //   }
    // });

    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <>
      <h1>WTF</h1>
      <CarouselContainer
        role="region"
        aria-roledescription="carousel"
        aria-label="Tips & Techn"
        ref={trackRef}
      >
        {slides.map((slide, index) => (
          <CarouselSlide
            className="slidedd"
            id={`slide#${index}`}
            key={index}
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
                : index === currentSlide
                ? "Current Slide"
                : ""
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
    </>
  );
};

export default Carousel;
