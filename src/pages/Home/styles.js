import styled from "styled-components";
import colors from "../../styles/colors";
import bgHome from "../../assets/img/bg-home.png";

export const Section = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url(${bgHome});
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
  }

  .logo {
    width: 50vw;
    aspect-ratio: 1;
  }
  .wave {
    max-width: calc(100vw - 17px);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
