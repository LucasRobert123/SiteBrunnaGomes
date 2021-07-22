import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  flex: 1;
  h1 {
    color: ${colors.secondary};
  }
`;

export const Header = styled.header`
  display: flex;
  z-index: 999;
  -webkit-box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.62);
  box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.62);
  width: calc(100vw - 15px);
  height: 60px;
  position: fixed;
  align-items: center;
  color: ${colors.white};
  transition: all 0.3s ease-in-out;

  background-color: ${(props) => `rgba(101, 197, 37, ${props.bgOpacity})`};

  nav {
    width: 100%;
    padding: 0 60px;
  }

  img {
    height: 100%;
    aspect-ratio: 1;
    margin-left: 30px;
    margin-right: 30%;
  }

  ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
    list-style: none;
    li {
      text-transform: uppercase;
      a {
        color: ${colors.white};
        text-decoration: none;
      }
    }
  }
`;

export const Footer = styled.footer`
  position: relative;
  .wave {
    width: 100%;
    height: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.secondary};
  margin-top: -5px;
  padding: 30px;

  .logo-rodape {
    height: 150px;
  }
  .location {
    height: 150px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .location:hover {
    transform: scale(1.01);
    transition: all 0.3s ease-in-out;
  }

  @media (min-width: 1920px) {
    .logo-rodape {
      height: 200px;
    }
  }

  @media (max-width: 990px) {
    .logo-rodape {
      height: 120px;
    }
    .location {
      height: 120px;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    .location {
      height: 90px;
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;

  a {
    color: ${colors.white};
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${colors.white};
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.01);
      transition: all 0.3s ease-in-out;
    }

    p {
      font-weight: 500;
    }

    img {
      width: 32px;
      aspect-ratio: 1;
      margin-right: 8px;
    }
  }

  @media (max-width: 990px) {
    flex-direction: row;
    height: auto;
    a {
      p {
        display: none;
      }
    }
  }

  @media (max-width: 800px) {
    margin-bottom: 16px;

    a {
      img {
        width: 28px;
      }
    }
  }
`;
