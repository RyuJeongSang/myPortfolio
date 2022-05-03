import React from "react";
import styled from "styled-components";

export const AboutPage = () => {
  return <AboutContainer>about me</AboutContainer>;
};

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 200vh;
  background-color: #000;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: 700;
  font-size: 20px;
  z-index: 1;
  transition: all 1s ease-in-out;
  color: white;
`;
