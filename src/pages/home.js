import styled from "styled-components";
import { MainHeader } from "../components/main-header";

export const Home = () => {
  return (
    <>
      <MainHeader />
      <HomeContainer>home</HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  padding-top: 40px;
  background-color: tomato;
  width: 100%;
  height: 100vh;
`;
