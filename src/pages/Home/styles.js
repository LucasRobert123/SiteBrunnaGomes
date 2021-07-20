import styled from "styled-components";
import colors from "../../styles/colors";

export const Section = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    #9f7e69 0%,
    rgba(159, 126, 105, 0) 33.33%,
    rgba(159, 126, 105, 0) 67.71%,
    #9f7e69 100%
  );

  background-image: url("../../assets/img/bg-home.png") no-repeat center center;
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
`;
