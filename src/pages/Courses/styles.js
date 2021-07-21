import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.section`
  padding: 80px 24px 0;

    @media(max-width: 1070px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

    @media(max-width: 1400px){
        img{
            height: 20px;
        }
        h1{
            font-size: 32px;
        }
    }

    @media(max-width: 750px){
        h1{
            font-size: 24px;
        }
    }
`

const pulse = keyframes`
    0% {
        transform: scale(0.99);
    }
    10%{
        transform: scale(0.98);
    }
    20%{
        transform: scale(0.97);
    }
    30%{
        transform: scale(0.96);
    }
    40%{
        transform: scale(0.95);
    }
    50%{
        transform: scale(0.96);
    }
    60%{
        transform: scale(0.97);
    }
    70% {
        transform: scale(0.98);
    }
    80%{
        transform: scale(0.99);
    }
    100% {
        transform: scale(1);
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    flex:1;

    img:hover{
        animation: ${pulse} 1s;
    }

    @media(max-width: 1400px){
        img{
           width: 40%;
           margin-top: -36px;
        }
    }
    @media(max-width: 1070px){
        img{
           width: 0;
        }
    }
`

export const CoursesTaught = styled.div`
    margin-top: 16px;
    ul{
        display: flex;
        align-items: center;
        gap: 16px;
        font-size: 20px;
        font-weight: 600;
        div{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: ${colors.primary};
        }
    }

    @media(max-width: 750px){
        ul{ 
            font-size: 16px;

            div{
                width: 6px;
                height: 6px;
            }
        }
    }
`