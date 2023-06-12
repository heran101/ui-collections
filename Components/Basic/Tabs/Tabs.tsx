import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  background: black;
`;
const TabContainer = styled.div`
  background: black;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: calc(250px * 4);
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 120px;
  &::before,
  &::after {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    content: "";
    height: 120px;
    position: absolute;
    width: 150px;
    z-index: 2;
  }
  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }
`;
const TabContent = styled.ul`
  display: flex;
  list-style-type: none;
  margin-left: 150px;
  &:first-child {
    left: 0;
    top: 0;
  }
`;
const TabLink = styled.a`
  display: flex;
  align-items: center;
  height: 100px;
  width: 250px;

  padding-right: 5px;
  padding-left: 5px;
  border: 1px solid #ccc;
  background-color: white;
  border-bottom: 0;
  font-size: 12px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;
const TabView = styled.ul`
  display: flex;
  &:not(:target) {
    display: none;
  }
  &:target {
    display: block;
  }
`;
const Tabs = () => {
  return (
    <>
      <MainContainer>
        <TabContainer>
          <TabContent>
            <li>
              <TabLink href="#tab1">First TAB</TabLink>
            </li>
            <li>
              <TabLink href="#tab2">Second TAB</TabLink>
            </li>
            <li>
              <TabLink href="#tab3">Third TAB</TabLink>
            </li>
            <li>
              <TabLink href="#tab4">Third TAB</TabLink>
            </li>
            <li>
              <TabLink href="#tab5">Third TAB</TabLink>
            </li>
            <li>
              <TabLink href="#tab6">Third TAB</TabLink>
            </li>
          </TabContent>
        </TabContainer>
        <TabView id="tab1">
          <p>This is first contents.</p>
        </TabView>
        <TabView id="tab2">
          <p>This is second contents.</p>
        </TabView>
        <TabView id="tab3">
          <p>This is third contents.</p>
        </TabView>
        <TabView id="tab4">
          <p>This is first contents.</p>
        </TabView>
        <TabView id="tab5">
          <p>This is second contents.</p>
        </TabView>
        <TabView id="tab5">
          <p>This is third contents.</p>
        </TabView>
      </MainContainer>
    </>
  );
};

export default Tabs;
