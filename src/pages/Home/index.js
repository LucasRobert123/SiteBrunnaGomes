import React from "react";
import brunna from "../../assets/img/bruna.png";
import logo from "../../assets/img/logo.png";
import wave from "../../assets/svg/wave.svg";
import { Section } from "./styles";

export function Home() {
  return (
    <Section id="home">
      <img className="brunna" src={brunna} alt="Brunna Gomes" />
      <img className="logo" src={logo} alt="Logo" />
      <img className="wave" src={wave} alt="Logo" />
    </Section>
  );
}
