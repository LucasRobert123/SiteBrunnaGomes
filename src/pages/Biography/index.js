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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          posuere tristique lorem sed posuere. Ut nec lacus laoreet, gravida
          ante a, accumsan libero. Donec eget magna tortor. In vehicula lectus
          vitae luctus facilisis. Sed molestie felis ut massa faucibus, ac
          ultrices ipsum dapibus. Morbi maximus aliquam dui et accumsan.
        </p>
      </div>
      <img className="brunna" src={aboutBrunna} alt="Brunna Gomes" />
    </Section>
  );
}
