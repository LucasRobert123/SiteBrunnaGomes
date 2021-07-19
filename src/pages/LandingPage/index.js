import React from 'react';
import { Container } from './styles';
import { Home } from '../Home'
import { Biography } from '../Biography'
import { Procedures } from '../Procedures'
import { Evaluation } from '../Evaluation'
import { Courses } from '../Courses'


export function LandingPage() {
    return (
        <Container>
            <header>Ola</header>
            <Home/>
            <Biography/>
            <Procedures/>
            <Evaluation/>
            <Courses/>
            <footer></footer>
        </Container>
    )
}
