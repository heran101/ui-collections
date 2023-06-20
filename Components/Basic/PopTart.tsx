import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const GalleryContainer = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
  border: 1px green dotted;
  margin: 30px 0 0 150px;
  overflow: hidden;

  ul {
    display: flex;
    flex-wrap: nowrap;
    position: absolute;
    list-style: none;
    top: 0;
    left: -200px;
    margin: 0;
    padding: 0;
  }

  li {
    width: 96px;
    height: 96px;
    padding: 2px;
  }
`;

const Button = styled.button`
  font: 40px "Courier New";
  border: 1px #d8d8d8 dotted;
  color: #626262;
  background: none;
  cursor: pointer;
  width: 50px;
  text-align: center;
  margin: 20px -150px 0 150px;
`;

const Link = styled.a`
  font: 14px Georgia;
  font-style: italic;
  color: #626262;
`;

const PopTart: React.FC = () => {
  const galleryRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    const items = Array.from(gallery?.querySelectorAll("li") ?? []);
    const len = items.length;
    let current = 1;

    const first = items[0];
    const second = items[1];
    const last = items[len - 1];
    const secondlast = items[len - 2];

    // Cloning first and last items
    gallery?.insertBefore(secondlast.cloneNode(true), first);
    gallery?.insertBefore(last.cloneNode(true), first);
    gallery?.appendChild(second.cloneNode(true));
    gallery?.appendChild(first.cloneNode(true));

    // Set button handlers
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    const handleButtonClick = (delta: number) => {
      if (gallery) {
        gallery.animate({ left: `${-100 * delta}%` }, () => {
          current += delta;

          let cycle = current === 0 || current > len;

          if (cycle) {
            current = current === 0 ? len : 1;
            gallery.style.left = `${-100 * (current + 1)}%`;
          }
        });
      }
    };

    prevButton?.addEventListener("click", () => handleButtonClick(-1));
    nextButton?.addEventListener("click", () => handleButtonClick(1));

    return () => {
      prevButton?.removeEventListener("click", () => handleButtonClick(-1));
      nextButton?.removeEventListener("click", () => handleButtonClick(1));
    };
  }, []);

  return (
    <>
      <label htmlFor="overflow">
        This checkbox toggles <b>overflow: hidden</b> property on the gallery
        <br /> to see the effect when a mask is applied:
      </label>
      <input type="checkbox" id="overflow" />

      <GalleryContainer id="gallery">
        <ul ref={galleryRef}>
          <li>
            <img
              src="http://dummyimage.com/96x96/f0f0f0/626262.png&text=1"
              alt="Image 1"
            />
          </li>
          <li>
            <img
              src="http://dummyimage.com/96x96/f0f0f0/626262.png&text=2"
              alt="Image 2"
            />
          </li>
          <li>
            <img
              src="http://dummyimage.com/96x96/f0f0f0/626262.png&text=3"
              alt="Image 3"
            />
          </li>
          <li>
            <img
              src="http://dummyimage.com/96x96/f0f0f0/626262.png&text=4"
              alt="Image 4"
            />
          </li>
        </ul>
      </GalleryContainer>

      <Button type="button" id="prev">
        &laquo;
      </Button>
      <Button type="button" id="next">
        &raquo;
      </Button>

      <p>
        <Link href="http://stackoverflow.com/a/15877302/1098851">
          Further information about this demo on this Stackoverflow discussion
        </Link>
      </p>
    </>
  );
};

export default PopTart;
