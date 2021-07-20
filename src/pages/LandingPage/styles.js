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
  img {
    max-width: 100%;
    height: auto;
  }
`;
