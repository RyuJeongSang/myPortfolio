import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainHeader = () => {
  return (
    <HeaderContainer>
      <TextA to="/">RyuJeongSang</TextA>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #fff;
  padding: 0 40px;
  font-family: "Kirang Haerang", cursive;
  font-size: 24px;
  z-index: 1;
`;

const TextA = styled(Link)`
  text-decoration: none;
  color: black;
  transition: all 0.5s ease-in-out;
  :hover {
    color: black;
    transform: scale(110%);
  }
`;
