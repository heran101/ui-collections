import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 1430;
  margin: auto;
  height: 600px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const MasonryContainer = styled.div`
  border: blue 2px solid;
  display: flex;

  gap: 12px;
`;

const FirstColumn = styled.div`
  margin-top: 125px;
`;
const SecondColumn = styled.div`
  border: 4px green solid;
`;
const ThirdColumn = styled.div`
  margin-top: 65px;
`;

const MasonryItem = styled.div`
  width: 460px;
  height: 259px;
  margin-bottom: 10px;
  background: red;
`;

const MasonryLayout: React.FC = () => {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const items = Array.from({ length: 20 }, (_, index) => index + 1);
  useEffect(() => {
    const mainWrapper = mainContainerRef.current;
    if (!mainWrapper) return;
    mainWrapper.scrollTop += 52;
  }, []);

  return (
    <MainContainer ref={mainContainerRef}>
      <MasonryContainer>
        <FirstColumn>
          <MasonryItem>{`Item 1`}</MasonryItem>
          <MasonryItem>{`Item 1`}</MasonryItem>
          {/* <MasonryItem>{`Item 1`}</MasonryItem>
          <MasonryItem>{`Item 1`}</MasonryItem>
          <MasonryItem>{`Item 1`}</MasonryItem> */}
        </FirstColumn>
        <SecondColumn>
          <MasonryItem>{`Item 2`}</MasonryItem>
          <MasonryItem>{`Item 2`}</MasonryItem>
          {/* <MasonryItem>{`Item 2`}</MasonryItem>
          <MasonryItem>{`Item 2`}</MasonryItem>
          <MasonryItem>{`Item 2`}</MasonryItem> */}
        </SecondColumn>
        <ThirdColumn>
          <MasonryItem>{`Item 3`}</MasonryItem>
          <MasonryItem>{`Item 3`}</MasonryItem>
          <MasonryItem>{`Item 3`}</MasonryItem>
          {/* <MasonryItem>{`Item 3`}</MasonryItem>
          <MasonryItem>{`Item 3`}</MasonryItem> */}
        </ThirdColumn>
      </MasonryContainer>
    </MainContainer>
  );
};

export default MasonryLayout;
