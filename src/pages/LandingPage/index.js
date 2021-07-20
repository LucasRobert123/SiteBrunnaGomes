import React from "react";
import { Container, Footer } from "./styles";
import { Header } from "../../components";
import { Home } from "../Home";
import { Biography } from "../Biography";
import { Procedures } from "../Procedures";
import { Evaluation } from "../Evaluation";
import { Courses } from "../Courses";
import footerBg from "../../assets/svg/footer.svg";

export function LandingPage() {
  return (
    <Container>
      <Header />
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
