import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainHeader = ({ offsetY }) => {
  return (
    <HeaderContainer>
      <TextA to="/" scrollPosition={offsetY}>
        RyuJeongSang
      </TextA>
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
  backdrop-filter: blur(10px);
  padding: 0 40px;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: 16px;
  z-index: 2;
  border-bottom: 0.5px solid gray;
`;

const TextA = styled(Link)`
  color: ${props => (props.scrollPosition > window.innerHeight + 820 ? `white` : `black`)};
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  :hover {
    color: ${props => (props.scrollPosition > window.innerHeight + 820 ? `white` : `black`)};
    transform: scale(110%);
  }
`;
