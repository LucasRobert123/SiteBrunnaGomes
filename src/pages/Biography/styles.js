import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100%;
  grid-template-areas: "text image";
  padding: 50px 30px 20px 30px;
  align-items: center;

  div {
    grid-area: text;
  }
  p {
    margin-top: 15px;
    font-size: 32px;
  }

  .brunna {
    width: 100%;
    grid-area: image;
    padding: 5%;
    aspect-ratio: 1;
  }

  @media (max-width: 1100px) {
    p {
      font-size: 25px;
    }
  }

  @media (max-width: 720px) {
    p {
      font-size: 18px;
    }
  }

  @media (max-width: 550px) {
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "text" "image";
  }
`;
