import React from 'react';
import {
    Container,
    ContainerTextAvaluation,
    Content
} from './styles';

import ondasTop from '../../assets/svgs/ondas-top.svg';
import ondasDown from '../../assets/svgs/ondas-down.svg';
import iconAvaluation from '../../assets/svgs/icon-avaluation.svg'

export function Evaluation() {
    return <Container id="evaluation">
        <img src={ondasTop} alt="onda-top" />
        <Content>
            <img src={iconAvaluation} alt="avaliação" />
            <ContainerTextAvaluation>
                <h1>CONSULTA/AVALIAÇÃO</h1>
                <p>
                    As avaliações são necessárias, para que eu possa te conhecer melhor e ver se eu posso
                    te ajudar com o meu trabalho. A avaliação é de extrema importância e
                    funciona como uma consulta farmacêutica. Ela tem o valor de 50 reais.
                    E podem ser agendada pelo celular e WhatsApp (35)98712-2891 ou faça uma visita no
                    endereço físico: Rua 13 de maio, 323, São Benedito, Campos Gerais-Mg
                </p>
            </ContainerTextAvaluation>
        </Content>
        <img src={ondasDown} alt="onda-down" />
    </Container>
}
