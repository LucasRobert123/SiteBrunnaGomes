import React, { useState, useEffect } from "react";
import { Container, Footer, Header } from "./styles";
import { Home } from "../Home";
import { Biography } from "../Biography";
import { Procedures } from "../Procedures";
import { Evaluation } from "../Evaluation";
import { Courses } from "../Courses";
import footerBg from "../../assets/svg/footer.svg";
import logo from "../../assets/svg/icon-white.svg";

export function LandingPage() {
  const [headerBgOpacity, setHeaderBgOpacity] = useState(0);

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

  return (
    <Container>
      <Header bgOpacity={headerBgOpacity}>
        <img src={logo} alt="Brunna Gomes Logo" onClick />
        <nav>
          <ul>
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
        </nav>
      </Header>
      <Home />
      <Biography />
      <Procedures />
      <Evaluation />
      <Courses />
      <Footer>
        <img src={footerBg} alt="footer-bg" />
      </Footer>
    </Container>
  );
}
