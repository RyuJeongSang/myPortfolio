import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { MainHeader } from "../components/organisms/main-header";

export const Home = () => {
  const [offsetY, setOffsetY] = useState(0);

  const scrollPosition = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", scrollPosition);
    };
    watchScroll();
    return () => {
      window.removeEventListener("scroll", scrollPosition);
    };
  });
  return (
    <>
      <Helmet>
        <title>home</title>
      </Helmet>
      <MainHeader />
      <HomeContainer>
        <MainTemplate positionYA={offsetY}>
          <MainTitle positionYA={offsetY}>THANKS FOR COMING!</MainTitle>
        </MainTemplate>
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  padding-top: 40px;
  background: linear-gradient(0deg, skyblue, salmon);
  width: 100%;
  height: 500vh;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

const MainTemplate = styled.div`
  position: ${props => (props.positionYA > 800 ? `absolute` : `fixed`)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: purple;
  transform: ${props => (props.positionYA > 800 ? `translateY(800px)` : `translateY(0px)`)};
`;

const MainTitle = styled.div`
  width: 450px;
  font-size: 48pt;
  transition: all 1s ease-in-out;
  transform: ${props => (props.positionYA > 10 ? `translateX(120%)` : `translateX(0%)`)};
  white-space: normal;
  font-weight: 700;
  line-height: 1.1em;
`;
