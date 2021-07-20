import React, { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import logo from "../assets/svg/icon-white.svg";

export default function Header(props) {
  const [headerBgOpacity, setHeaderBgOpacity] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    const handler = () => {
      navLinks.classList.toggle("open");
      links.forEach((link) => {
        link.classList.toggle("fade");
      });
    };

    hamburger.addEventListener("click", handler);

    return () => hamburger.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScrolled);
    return () => window.removeEventListener("scroll", onScrolled);
  }, []);

  const onScrolled = (e) => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / 250;

    setHeaderBgOpacity(scrolled > 1 ? 1 : scrolled);
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (toggle) document.querySelector(".hamburger").click();
  };

  return (
    <Nav bgOpacity={headerBgOpacity}>
      <img src={logo} alt="Brunna Gomes" onClick={scrollToTop} title="Home" />
      <div
        className={`hamburger${toggle ? " toggle" : ""}`}
        onClick={() => setToggle(!toggle)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#procedures">Procedimentos</a>
        </li>
        <li>
          <a href="#evaluation">Consulta/Avaliação</a>
        </li>
        <li>
          <a href="#courses">Cursos ministrados</a>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.header`
  z-index: 999;
  -webkit-box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.62);
  box-shadow: 0px 4px 15px -3px rgba(0, 0, 0, 0.62);
  //align-items: center;
  height: 60px;
  width: 100vw;
  position: fixed;
  transition: all 0.3s ease-in-out;
  display: flex;
  background-color: ${(props) => `rgba(101, 197, 37, ${props.bgOpacity})`};

  /*Styling logo*/
  img {
    height: 100%;
    aspect-ratio: 1;
    margin-left: 30px;
    margin-right: 10%;
    cursor: pointer;
  }

  /*Styling Links*/
  .nav-links {
    display: flex;
    list-style: none;
    width: 88vw;
    padding: 0 0.7vw;
    justify-content: space-evenly;
    align-items: center;
    text-transform: uppercase;
  }
  .nav-links li a {
    color: ${colors.white};
    text-decoration: none;
    margin: 0 0.7vw;
  }

  .nav-links li {
    position: relative;
  }
  .nav-links li a::before {
    content: "";
    display: block;
    height: 3px;
    width: 0%;
    bottom: -5px;
    background-color: ${colors.white};
    position: absolute;
    transition: all ease-in-out 250ms;
    margin: 0 0 0 10%;
  }
  .nav-links li a:hover::before {
    width: 80%;
  }

  /*Styling Hamburger Icon*/
  .hamburger div {
    width: 30px;
    height: 3px;
    background: #f2f5f7;
    margin: 5px;
    transition: all 0.3s ease;
  }
  .hamburger {
    display: none;
  }

  /*Stying for small screens*/
  @media screen and (max-width: 800px) {
    .hamburger {
      display: block;
      position: absolute;
      cursor: pointer;
      right: 5%;
      top: 50%;
      transform: translate(-5%, -50%);
      z-index: 2;
      transition: all 0.7s ease;
    }
    .nav-links {
      position: fixed;
      background: ${colors.primary};
      height: 100vh;
      width: 100%;
      z-index: -1;
      flex-direction: column;
      clip-path: circle(50px at 90% -20%);
      -webkit-clip-path: circle(50px at 90% -10%);
      transition: all 1s ease-out;
      pointer-events: none;
    }
    .nav-links.open {
      clip-path: circle(1000px at 90% -10%);
      -webkit-clip-path: circle(1000px at 90% -10%);
      pointer-events: all;
    }
    .nav-links li {
      opacity: 0;
    }
    .nav-links li:nth-child(1) {
      transition: all 0.5s ease 0.2s;
    }
    .nav-links li:nth-child(2) {
      transition: all 0.5s ease 0.4s;
    }
    .nav-links li:nth-child(3) {
      transition: all 0.5s ease 0.6s;
    }
    .nav-links li:nth-child(4) {
      transition: all 0.5s ease 0.7s;
    }
    .nav-links li:nth-child(5) {
      transition: all 0.5s ease 0.8s;
    }
    .nav-links li:nth-child(6) {
      transition: all 0.5s ease 0.9s;
      margin: 0;
    }
    .nav-links li:nth-child(7) {
      transition: all 0.5s ease 1s;
      margin: 0;
    }
    li.fade {
      opacity: 1;
    }
  }
  /*Animating Hamburger Icon on Click*/
  .toggle .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  .toggle .line2 {
    transition: all 0.7s ease;
    width: 0;
  }
  .toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }
`;
