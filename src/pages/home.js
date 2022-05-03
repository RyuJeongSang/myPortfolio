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

  const moveToAbout = () => {
    const scrollSize = window.innerHeight + 800;
    window.scrollTo(0, scrollSize);
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
        <title>RyuJeongSang</title>
      </Helmet>
      <MainHeader />
      <HomeContainer>
        <MainContainer positionYA={offsetY}>
          <GreetingContainer>
            <MainGreeting>
              <MainGreetingText positionYA={offsetY}>
                안녕하세요, 저는 류정상입니다.
              </MainGreetingText>
            </MainGreeting>
            <MainGreeting>
              <MainGreetingText positionYA={offsetY}>
                저는 프론트엔드 개발자입니다.
              </MainGreetingText>
              <GreetingButton onClick={() => moveToAbout()}>show more</GreetingButton>
            </MainGreeting>
          </GreetingContainer>
          <MainTitle positionYA={offsetY}>
            {/* 이동할 컨테이너 */}
            <MainTitleText>THANKS FOR COMING</MainTitleText>
            <MainTitleTextPortfolio>MY PORTFOLIO</MainTitleTextPortfolio>
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
  overflow: hidden;
`;

const MainContainer = styled.div`
  position: ${props => (props.positionYA > 800 ? `absolute` : `fixed`)};
  display: flex;
  //justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
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
  flex-direction: column;
`;

const MainTitleText = styled.div`
  font-family: "Poppins", sans-serif;
  width: 70%;
  font-size: 6vw;
  white-space: normal;
  font-weight: 700;
  line-height: 1.1em;
`;

const MainTitleTextPortfolio = styled(MainTitleText)`
  font-weight: 200;
`;

const GreetingContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 20%;
  display: flex;
  flex-direction: column;
`;

const MainGreeting = styled.div`
  overflow: hidden;
`;

const MainGreetingText = styled.div`
  transition: all 1s ease-in-out;
  transition-delay: 0.1s;
  transform: ${props => (props.positionYA > 10 ? `translateY(0%)` : `translateY(100%)`)};
`;

const GreetingButton = styled.div`
  padding: 0.75em 2em;
  text-align: center;
  text-decoration: none;
  color: #2194e0;
  border: 2px solid #2194e0;
  font-size: 24px;
  display: inline-block;
  border-radius: 0.3em;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    background-color: rgba(255, 255, 255, 0.5);
    height: 100%;
    width: 3em;
    display: block;
    position: absolute;
    top: 0;
    left: -4.5em;
    transform: skewX(-45deg) translateX(0);
    transition: none;
  }
  &:hover {
    background-color: #2194e0;
    color: #fff;
    border-bottom: 4px solid darken(#2194e0, 10%);
    &:before {
      transform: skewX(-45deg) translateX(13.5em);
      transition: all 0.5s ease-in-out;
    }
  }
`;

const AboutContainer = styled.div`
  margin-top: 110vh;
  position: absolute;
  top: 100vh;
`;
