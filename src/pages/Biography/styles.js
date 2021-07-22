import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100%;
  grid-template-areas: "text image";
  padding: 50px 30px 20px 30px;
  align-items: center;
  min-height: unset !important;

  div {
    grid-area: text;
  }
  p {
    font-size: 22px;
    margin-top: 15px;
    text-indent: 3rem;
  }

  .brunna {
    width: 100%;
    grid-area: image;
    padding: 5%;
    aspect-ratio: 1;
  }

  .brunna:hover {
    animation: pulse 1s;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.99);
    }
    10% {
      transform: scale(0.98);
    }
    20% {
      transform: scale(0.97);
    }
    30% {
      transform: scale(0.96);
    }
    40% {
      transform: scale(0.95);
    }
    50% {
      transform: scale(0.96);
    }
    60% {
      transform: scale(0.97);
    }
    70% {
      transform: scale(0.98);
    }
    80% {
      transform: scale(0.99);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (max-width: 1100px) {
    p {
      font-size: 18px;
    }
  }

  @media (max-width: 720px) {
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "text" "image";
    .brunna {
      width: 75%;
      margin: auto;
    }
  }

  @media (max-width: 600px) {
    .brunna {
      width: 90%;
      margin: auto;
    }
  }

  @media (max-width: 350px) {
    p {
      font-size: 16px;
    }
  }
`;
