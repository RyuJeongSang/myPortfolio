import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { MainHeader } from "../components/organisms/main-header";
import { SideBar } from "../components/organisms/side-bar";

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
      <SideBar />
      <HomeContainer>
        <MainContainer positionYA={offsetY}>
          <MainGreeting>
            <MainGreetingText positionYA={offsetY}>안녕하세요, 저는 류정상입니다.</MainGreetingText>
          </MainGreeting>
          <MainGreeting>
            <MainGreetingText positionYA={offsetY}>저는 프론트엔드 개발자입니다.</MainGreetingText>
          </MainGreeting>
          <MainTitle positionYA={offsetY}>
            {/* 이동할 컨테이너 */}
            <MainTitleText>THANKS FOR COMING!</MainTitleText>
          </MainTitle>
        </MainContainer>
        <AboutContainer>abouts</AboutContainer>
        <div>projects</div>
        <div>contact</div>
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  background: linear-gradient(0deg, skyblue, salmon);
  width: 100%;
  height: 500vh;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  overflow: hidden;
`;

const MainContainer = styled.div`
  position: ${props => (props.positionYA > 800 ? `absolute` : `fixed`)};
  display: flex;
  //justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #b7cadb;
  transform: ${props => (props.positionYA > 800 ? `translateY(800px)` : `translateY(0px)`)};
  overflow: hidden;
`;

const MainTitle = styled.div`
  width: 100%;
  transition: all 1s ease-in-out;
  transform: ${props => (props.positionYA > 10 ? `translateX(52%)` : `translateX(0%)`)};
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainTitleText = styled.div`
  width: 450px;
  font-size: 48pt;
  white-space: normal;
  font-weight: 700;
  line-height: 1.1em;
`;

const MainGreeting = styled.div`
  width: 300px;
  height: 500px;
  overflow: hidden;
`;

const MainGreetingText = styled.div`
  transition: all 1s ease-in-out;
  transition-delay: 0.1s;
  transform: ${props => (props.positionYA > 10 ? `translateY(0%)` : `translateY(-10px)`)};
`;

const AboutContainer = styled.div`
  margin-top: 100vh;
  position: absolute;
  top: 100vh;
`;
