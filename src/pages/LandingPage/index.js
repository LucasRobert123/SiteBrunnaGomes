import React from "react";
import { Container, Content, Footer, Socials } from "./styles";
import { Header } from "../../components";
import { Home } from "../Home";
import { Biography } from "../Biography";
import { Procedures } from "../Procedures";
import { Evaluation } from "../Evaluation";
import { Courses } from "../Courses";
import ondasRodape from "../../assets/svgs/ondas-rodape.svg";
import locationDoctor from "../../assets/svgs/location-doutora.svg";
import iconInstagram from "../../assets/svgs/icon-instagram.svg";
import iconFacebook from "../../assets/svgs/icon-facebook.svg";
import iconWhatsapp from "../../assets/svgs/icon-whatsapp.svg";
import iconMail from '../../assets/svgs/icon-mail.svg'

import logoWhite from '../../assets/img/logo-white.png'

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
        <img src={ondasRodape} alt="footer-bg" />
        <Content>
          <img src={logoWhite} alt="logo" className="logo-rodape" />
          <Socials>
            <a href="https://www.instagram.com/brunnagomes.esteta" target="_blank" rel="noreferrer">
              <img src={iconInstagram} alt="instagram" />
              <p>brunnagomes.esteta</p>
            </a>
            <a href="https://www.facebook.com/brunna.coffinan" target="_blank" rel="noreferrer">
              <img src={iconFacebook} alt="facebook" />
              <p>Brunna Gomes</p>
            </a>
            <a href="https://wa.me/553587122891" target="_blank" rel="noreferrer">
              <img src={iconWhatsapp} alt="whatsapp" />
              <p>35 8712-2891</p>
            </a>
            <a href="mailto:brufarma30@outlook.com" target="_blank" rel="noreferrer">
              <img src={iconMail} alt="email" />
              <p>brufarma30@outlook.com</p>
            </a>
          </Socials>
          <img src={locationDoctor} alt="logo" className="location" />
        </Content>
      </Footer>
    </Container>
  );
}
