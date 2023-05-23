import React from "react";
import styled from "styled-components";
const FSWrapper = styled.div`
  margin-top: 100px;
  padding-top: 150px;
  padding-bottom: 10px;
  max-width: 700px;
  margin: 0 200px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;

const Card = styled.div`
  top: 20px;
  position: sticky;
  border: 1px solid #ccc;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.1);
  background-color: white;
  color: #333;
  padding: 40px;
  border-radius: 10px;
  margin-bottom: 50px;
  h2 {
    padding: 0;
  }
  span {
    display: block;
    font-size: 14px;
    color: #0c4eb9;
  }
  &:nth-child(1n) {
    top: -100px;
    right: 20px;
    background: red;
    z-index: 100000;
  }
  &:nth-child(2n) {
    top: -80px;
    z-index: 10000;
    background: blue;
  }
  &:nth-child(3n) {
    z-index: 1000;
    background: yellow;
    top: -60px;
  }

  &:nth-child(4n) {
    z-index: 100;
    background: green;
    top: -40px;
  }
  &:nth-child(5n) {
    top: -20px;
    z-index: 10;
    background: purple;
  }
  &:nth-child(6n) {
    z-index: 9;
    top: 0;
  }
  &:nth-child(7n) {
    z-index: 8;
    top: 20px;
  }
  &:nth-child(8n) {
    z-index: 7;
    top: 40px;
  }
`;
const NextSection = styled.div`
  background: green;
  height: 900px;
  width: 100%;
`;
const FSQWrapper = styled.div`
  height: 100vh;
  width: 30rem;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;
const ESCard = styled.div`
  margin: auto;
  width: 50%;
  border: 1px solid #ccc;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.1);
  background-color: white;
  color: #333;
  padding: 40px;
  border-radius: 10px;
  margin-bottom: 50px;
  h2 {
    padding: 0;
  }
  span {
    display: block;
    font-size: 14px;
    color: #0c4eb9;
  }
  &:nth-child(1n) {
    grid-column-start: 1;
    background: red;
    z-index: 100000;
  }
  &:nth-child(2n) {
    grid-column-start: 1;
    background: blue;
  }
  &:nth-child(3n) {
    grid-column-start: 1;
    z-index: 1000;
    background: yellow;
  }
`;
const FeatureStack = () => {
  return (
    <>
      <div>
        <FSWrapper>
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
          <Card>
            <h2>
              <span>Project #5</span>Title of the Project
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
              <span>Project #6</span>Title of the Project
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
              <span>Project #7</span>Title of the Project
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
              perspiciatis blanditiis accusamus commodi consectetur id tempora
              rem iure eligendi quos eos et autem ratione exercitationem earum
              laborum ad a sequi!
            </p>
          </Card>
        </FSWrapper>
        <FSQWrapper>
          <ESCard>
            <h2>
              <span>Project #1</span>Title of the Project
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
              perspiciatis blanditiis accusamus commodi consectetur id tempora
              rem iure eligendi quos eos et autem ratione exercitationem earum
              laborum ad a sequi!
            </p>
          </ESCard>
          <ESCard>
            <h2>
              <span>Project #2</span>Title of the Project
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
              perspiciatis blanditiis accusamus commodi consectetur id tempora
              rem iure eligendi quos eos et autem ratione exercitationem earum
              laborum ad a sequi!
            </p>
          </ESCard>
          <ESCard>
            <h2>
              <span>Project #3</span>Title of the Project
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
              perspiciatis blanditiis accusamus commodi consectetur id tempora
              rem iure eligendi quos eos et autem ratione exercitationem earum
              laborum ad a sequi!
            </p>
          </ESCard>
        </FSQWrapper>
      </div>
      <NextSection></NextSection>
    </>
  );
};

export default FeatureStack;
