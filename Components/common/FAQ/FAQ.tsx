import Accordion from "@/Components/Basic/Accordion/Accordion";
import React from "react";
import styled from "styled-components";
import { FaqData } from "../../../Mock/FaqData";
const MainContainer = styled.div`
  margin: 0 auto;
  padding: 4rem;
  width: 48rem;
`;
const FAQ = () => {
  return (
    <MainContainer>
      {FaqData.map(({ title, content }, index) => (
        <Accordion key={index} title={title} content={content} />
      ))}
    </MainContainer>
  );
};

export default FAQ;
