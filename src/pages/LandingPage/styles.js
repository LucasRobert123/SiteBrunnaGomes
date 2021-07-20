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
  width: calc(100vw - 15px);
  height: 90px;
  position: fixed;
  align-items: center;
  color: ${colors.white};
  transition: all 0.3s ease-in-out;

  background-color: ${(props) => `rgba(159, 126, 105, ${props.bgOpacity})`};

  nav {
    width: 100%;
    padding: 0 60px;
  }

  img {
    height: 150px;
    aspect-ratio: 1;
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
