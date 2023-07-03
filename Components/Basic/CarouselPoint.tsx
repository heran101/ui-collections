import React, { Fragment, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const CarouselCardWrapper = styled.div`
  scroll-snap-align: center;
  margin: 5px 10px;
  border: 1px solid #bbb;
  width: 250px;
  box-shadow: 3px 2px 5px 0px lightgrey;
  background-color: white;
  font-family: "Helvetica";
  position: relative;
  display: inline-block;
  transition: "all 4s";
`;
const CarouselCardImageContainer = styled.div`
  height: 150px;
  text-align: center;
  line-height: 150px;
  border-bottom: 1px solid #bbb;
`;
const CarouselCardImageCaption = styled.div`
  color: #bbb;
  text-transform: uppercase;
`;
const CarouselButton = styled.button<{ buttonType: string }>`
  padding: 5px;
  height: 235px;
  line-height: 235px;
  position: absolute;
  flex-basis: 0;
  z-index: 5;
  background-color: rgba(225, 225, 225, 0.8);
  color: darkgrey;
  display: none;
  transition: 2s;
  ${({ buttonType }) =>
    buttonType === "Prev" ? "left: 10px;" : "right: 10px;"}
`;
const CarouselContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover ${CarouselButton} {
    display: block;
    transition: 2s;
  }
`;

const ScrollingWrapper = styled.div`
  overflow-x: scroll;
  /* scroll-snap-type: x mandatory; */
  overflow-y: hidden;
  white-space: nowrap;
  background-color: #eee;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ContentWrapper = styled.div`
  max-width: 700px;
  width: 60%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  top: 0;
  padding: 0 10px;
  padding-top: 20px;
  background-color: white;
`;
type CarouselCardProps = {
  title: string;
  className?: string;
  style?: Object;
};
const CarouselCard = ({
  title,
  className,
  style,
  ...props
}: CarouselCardProps) => {
  return (
    <CarouselCardWrapper style={style} className={className} {...props}>
      <CarouselCardImageContainer>
        <CarouselCardImageCaption>{title}</CarouselCardImageCaption>
      </CarouselCardImageContainer>
    </CarouselCardWrapper>
  );
};
const CarouselPoint = () => {
  const [initialRun, setInitialRun] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [disableScroll, setDisableScroll] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [scrollPos, setScrollPos] = useState(1);
  const [clonesWidth, setClonesWidth] = useState(0);
  const [AllClones, setAllClones] = useState<Element[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const reCalc = () => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    let scrollPosTemp = scrollPos;
    let scrollWidthTemp = scrollContainer.clientWidth;
    let clonesWidthTemp = getClonesWidth();

    if (scrollPosTemp <= 0) {
      scrollPosTemp = 1;
    }
    setScrollPos(scrollPosTemp);
    setScrollWidth(scrollWidthTemp);
    setClonesWidth(clonesWidthTemp);
  };

  useEffect(() => {
    const allWithClass = Array.from(
      document.getElementsByClassName("is-clone")
    );

    setAllClones(allWithClass);
    if (disableScroll) {
      setTimeout(() => {
        setDisableScroll(false);
      }, 10);
    }
    window.addEventListener("resize", reCalc);
    return () => window.removeEventListener("resize", reCalc);
  }, [scrollPos]);
  const handleSetScroll = (element: any, pos: any) => {
    element.scrollLeft = pos;
    setScrollPos(element.scrollLeft);
  };
  const handleScroll = (e: any) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    const scrollWidthTemp = scrollContainer.scrollWidth;
    const clonesWidthTemp = getClonesWidth();
    let scrollPosTemp = scrollContainer.scrollLeft;
    let scrollPosAdd;
    scrollContainer.clientWidth > clonesWidthTemp
      ? (scrollPosAdd = scrollContainer.clientWidth)
      : (scrollPosAdd = clonesWidthTemp);
    if (!disableScroll) {
      console.log(" if", scrollPosTemp + scrollPosAdd, scrollWidthTemp);
      if (scrollPosTemp + scrollPosAdd >= scrollWidthTemp) {
        handleSetScroll(scrollContainer, 1 + Math.floor(scrollPosAdd / 12.09));
        setDisableScroll(true);
      } else if (scrollPosTemp <= 0) {
        console.log("  else if", scrollPos);
        handleSetScroll(
          scrollContainer,
          scrollWidthTemp - clonesWidthTemp - Math.floor(scrollPosAdd / 12.09)
        );
        setDisableScroll(true);
      }
    }

    setScrollWidth(scrollContainer.scrollWidth);
    setScrollPos(scrollContainer.scrollLeft);
  };
  const getClonesWidth = () => {
    const clones = AllClones;
    let clonesWidthtemp = 0;
    for (let i = 0; i < clones.length; i++) {
      clonesWidthtemp = clonesWidthtemp + clones[i].clientWidth;
    }
    return clonesWidthtemp;
  };
  const sideScroll = (
    element: any,
    direction: any,
    speed: any,
    distance: any,
    step: any
  ) => {
    let scrollAmount = 0;
    var slideTimer = setInterval(() => {
      if (direction == "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  };
  const scrollNext = (e: any) => {
    // setCurrentSlide((prevSlide) =>
    //   prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    // );
    const container = e.currentTarget.previousSibling;
    sideScroll(container, "right", 10, 272, 10);
    setInitialRun(false);
  };

  const scrollPrev = (e: any) => {
    // setCurrentSlide((prevSlide) =>
    //   prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    // );
    const container = e.currentTarget.nextSibling;
    sideScroll(container, "left", 10, 272, 10);
    setInitialRun(false);
  };
  return (
    <>
      CarouselPoint
      <ContentWrapper>
        <CarouselContainerWrapper>
          <CarouselButton buttonType={"Prev"} onClick={scrollPrev}>
            Previous
          </CarouselButton>

          <ScrollingWrapper
            // style={{
            //   paddingLeft: initialRun ? "150px" : 0,
            //   transition: "all 4s",
            // }}
            ref={scrollContainerRef}
            onScroll={(e) => handleScroll(e)}
          >
            {/* {initialRun && (
              <CarouselCard
                style={{ visibility: "hidden" }}
                title={"Card Number 1"}
                className={""}
              />
            )} */}
            <CarouselCard title={"Card Number 6"} className={"is-clone"} />
            <CarouselCard title={"Card Number 1"} className={""} />
            <CarouselCard title={"Card Number 2"} />
            <CarouselCard title={"Card Number 3"} />
            <CarouselCard title={"Card Number 4"} />
            <CarouselCard title={"Card Number 5"} />
            <CarouselCard title={"Card Number 6"} />
            <CarouselCard
              title={"Card Number 1"}
              className={"is-clone is-start"}
            />
            <CarouselCard title={"Card Number 2"} className={"is-clone"} />
            <CarouselCard title={"Card Number 3"} className={"is-clone"} />
            <CarouselCard title={"Card Number 4"} className={"is-clone"} />
            <CarouselCard title={"Card Number 5"} className={"is-clone"} />
            <CarouselCard title={"Card Number 6"} className={"is-clone"} />
          </ScrollingWrapper>

          <CarouselButton buttonType={"next"} onClick={scrollNext}>
            Next
          </CarouselButton>
        </CarouselContainerWrapper>
        <div>
          {" "}
          debugging values
          <div>ScrollPos:&nbsp;{scrollPos}</div>
          <div>ClonesWidth:&nbsp;{getClonesWidth()}</div>
          <div>ScrollWidth:&nbsp;{scrollWidth}</div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default CarouselPoint;
