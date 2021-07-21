import React, { useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import {
    Container,
    Content,
    HeaderSection,
    ContainerListProcedures,
    List,
    ItemList,
    ButtonProcedures
} from './styles';

import iconProcedures from '../../assets/svgs/icon-procedures.svg';
import iconChevronLeft from '../../assets/svgs/icon-chevron-left.svg';
import iconChevronRight from '../../assets/svgs/icon-chevron-right.svg';

import { procedures } from '../../repository'

export function Procedures() {
    const [proceduresVisible, setProceduresVisible] = useState([{
        title: "",
        description: ""
    }]);

    const [breakPointsProcedures, setBreakPointsProcedures] = useState({
        start: 0,
        end: 3
    })

    useEffect(() => {
        setProceduresVisible(() => procedures.slice(breakPointsProcedures.start, breakPointsProcedures.end));
    }, [breakPointsProcedures])

    // useEffect(() => {
    //     console.log(proceduresVisible)
    // }, [proceduresVisible])

    const proceduresWithTransitions = useTransition(
        proceduresVisible,
        {
            from: { right: '-120%', opacity: 0 },
            enter: { right: '0%', opacity: 1 },
            leave: { right: '-120%', opacity: 0 },
        },
    );

    const handleShowProcedures = (operation) => {
        const { start, end } = breakPointsProcedures;

        if (operation === 'increment') {
            setBreakPointsProcedures({ start: start + 3, end: end + 3 })
        }
        else {
            setBreakPointsProcedures({ start: start - 3, end: end - 3 })
        }
    }

    return <Container id="procedures">
        <HeaderSection>
            <img src={iconProcedures} alt="procedimentos" />
            <h1>PROCEDIMENTOS</h1>
        </HeaderSection>
        <Content>
            <p>Na Clínica de Estética Avançada Brunna Gomes, trabalhamos com várias técnicas para ajudar vocês ,
                pois a sua auto estima é o que importa. Nossas parceiras de trabalho são
                totalmente qualificadas e treinadas para melhor atendê- los
            </p>

            <ContainerListProcedures>
                <ButtonProcedures disabled={breakPointsProcedures.start === 0}
                    onClick={() => handleShowProcedures('decrement')}
                >
                    <img src={iconChevronLeft} alt="scrool para a esquerda" />
                </ButtonProcedures>
                <List>
                    {proceduresWithTransitions((style, item) => (
                        <animated.div
                            style={style}>

                            <ItemList key={item.title}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </ItemList>
                        </animated.div>
                    ))}
                </List>
                <ButtonProcedures disabled={breakPointsProcedures.end >= procedures.length}
                    onClick={() => handleShowProcedures('increment')}>
                    <img src={iconChevronRight} alt="scrool para a direita" />
                </ButtonProcedures>
            </ContainerListProcedures>
        </Content>
    </Container>
}
