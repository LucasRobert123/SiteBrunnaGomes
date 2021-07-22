import React from "react";
import lettering from "../../assets/svg/lettering.svg";
import aboutBrunna from "../../assets/img/about-brunna.png";
import { Section } from "./styles";

export function Biography() {
  return (
    <Section id="biography">
      <div>
        <img src={lettering} alt="mais sobre mim" />
        <p>
          Olá !! Meu nome é Brunna Gomes sou formada em Farmácia Generalista, e
          a seis anos me dedico totalmente na área da estética avançada, para
          poder trabalhar com as melhores técnicas já conclui 30 cursos livres
          voltados para estética avançada, sou pós graduada em Farmácia
          Estética, Cosmetologia e Mestre em Medicina Estética.
        </p>
        <p>
          Durante a minha jornada de trabalho, eu recebo muitas pessoas com
          incomodadas com o melasma, e muitas a auto estima está lá em baixo. Me
          dediquei por 3 anos em desenvolver um tratamento que fosse eficaz e
          ajudasse as pessoas a recuperar a sua auto estima, dessa forma
          desenvolvi o Peeling Diamond Despigmentante, desenvolvido para tratar
          melasma, manchas e também fazer a renovação celular.
        </p>
      </div>
      <img className="brunna" src={aboutBrunna} alt="Brunna Gomes" />
    </Section>
  );
}
