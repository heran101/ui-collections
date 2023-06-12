import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 180px;
  height: 250px;
`;

const MaskContainer = styled.div`
  display: block;
  background: #000;
  position: absolute;
  z-index: 2500;
  width: 180px;
  height: 250px;
  opacity: 0.75;
`;
const AnchorTag = styled.a`
  display: none;
  position: absolute;
  top: 100px;
  left: 40px;
  margin: 10px 0 0 10px;
  z-index: 3000;
  background: #852121;
  text-decoration: none;
`;
const ImageContainer = styled.div`
  position: relative;
  margin: auto;
  width: 180px;
  height: 250px;
  &:hover ${MaskContainer} {
    display: none;
  }
  &:hover ${AnchorTag} {
    display: block;
  }
`;

const ImageWithQuote = () => {
  return (
    <ImageContainer id="box1">
      <MaskContainer id="mask"></MaskContainer>
      <Image
        src="http://smilesoftware.com/assets/images/uploads/products/icon_pdfpenipad_140x140.png"
        alt="orange"
        title="orange"
      />
      <AnchorTag href="#">View Detail</AnchorTag>
    </ImageContainer>
  );
};

export default ImageWithQuote;
