import React, { useState } from "react";
import styled from "styled-components";
import { PropsWithChildren } from "react";

const AccordionItem = styled.div`
  border-bottom: 1px solid #e5e5e5;
`;
interface Props {
  isActive: boolean;
}
const AccordionButton = styled.button<Props>`
  position: relative;
  display: block;
  text-align: left;
  width: 100%;
  padding: 1em 0;
  color: #7288a2;
  font-size: 1.15rem;
  font-weight: 400;
  border: none;
  background: none;
  outline: none;
  ${(props) =>
    props.isActive &&
    `
    border-bottom: 1px solid #03b5d2;
    color: #03b5d2;
  `}

  :hover & :focus {
    cursor: pointer;
    color: #03b5d2;
  }
  :hover::after & :focus::after {
    cursor: pointer;
    color: #03b5d2;
    border: 1px solid #03b5d2;
  }
`;
const AccordionTitle = styled.span`
  padding: 1em 1.5em 1em 0;
`;
const AccordionIcon = styled.span`
  display: inline-block;
  position: absolute;
  top: 18px;
  right: 0;
  width: 22px;
  height: 22px;
  border: 1px solid;
  border-radius: 22px;
  ::before {
    display: block;
    position: absolute;
    content: "";
    top: 9px;
    left: 5px;
    width: 10px;
    height: 2px;
    background: currentColor;
  }
  ::after {
    display: block;
    position: absolute;
    content: "";
    top: 5px;
    left: 9px;
    width: 2px;
    height: 10px;
    background: currentColor;
  }
  ${AccordionButton}[isActive]&::after {
    width: 0;
  }
`;
const AccordionContent = styled.div`
  opacity: 1;
  max-height: 9em;
  transition: all 200ms linear;
  will-change: opacity, max-height;
`;
const AccordionInnerContent = styled.div`
  font-size: 1rem;
  font-weight: 300;
  margin: 2em 0;
`;
interface AccordionInterface {
  title: string;
  content: string;
}
const Accordion = ({
  title,
  content,
}: PropsWithChildren<AccordionInterface>) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
   
        <AccordionItem>
          <AccordionButton
            isActive={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <AccordionTitle>{title}</AccordionTitle>
            <AccordionIcon></AccordionIcon>
          </AccordionButton>
          {isActive && (
            <AccordionContent>
              <AccordionInnerContent>{content}</AccordionInnerContent>
            </AccordionContent>
          )}
        </AccordionItem>

    </>
  );
};

export default Accordion;
