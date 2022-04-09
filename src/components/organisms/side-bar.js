import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export const SideBar = () => {
  const [barWidth, setBarWidth] = useState(false);
  const toggleBar = () => {
    setBarWidth(barWidth => !barWidth);
  };
  return (
    <SideContainer isbarWidth={barWidth}>
      <div>
        <FontAwesomeIcon icon={faBars} onClick={toggleBar} />
      </div>
    </SideContainer>
  );
};

const SideContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: ${props => (!props.isbarWidth ? "40px" : "200px")};
  height: 100%;
  background-color: #fff;
  padding: 40px 0;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: 700;
  font-size: 20px;
  z-index: 1;
  transition: all 1s ease-in-out;
`;
