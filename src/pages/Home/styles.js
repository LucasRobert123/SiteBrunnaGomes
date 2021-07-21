import styled from "styled-components";
import bgHome from "../../assets/img/bg-home.png";

export const Section = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: url(${bgHome});
  background-attachment: scroll;
  position: relative;
  background-image: linear-gradient(
      180deg,
      #9f7e69 0%,
      rgba(159, 126, 105, 0) 33.33%,
      rgba(159, 126, 105, 0) 67.71%,
      #9f7e69 100%
    ),
    url(${bgHome});
  .brunna {
    bottom: 0;
    margin-top: auto;
    left: 60px;
    height: 75vh;
    aspect-ratio: 1;
    object-position: bottom center;
    object-fit: contain;
  }

  .logo {
    width: 50vw;
    aspect-ratio: 1;
  }
  .wave {
    max-width: 100vw;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
  }

  @media (max-width: 960px) {
    .brunna {
      max-width: 50vw;
    }
    .logo {
      position: absolute;
      margin-top: auto;
      margin-bottom: auto;
      right: 0;
    }
  }

  @media (max-width: 800px) {
    .logo {
      width: 400px;
    }
  }

  @media (max-width: 400px) {
    .logo {
      left: 0;
      right: 0;
      width: 100%;
    }
  }
`;
