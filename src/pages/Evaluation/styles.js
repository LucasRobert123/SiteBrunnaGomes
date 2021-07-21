import styled, { keyframes } from 'styled-components';

import colors from '../../styles/colors';


export const Container = styled.section`
    padding: 76px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    img{
        max-width: 100%;
    }  
    img:nth-child(1){
        margin-bottom: -5px;
    }
    img:nth-child(odd){
        margin-top: -10px;
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
  height: calc(100vh - 161px);
  background-color: ${colors.primary}; 
  display: flex;
  align-items: center;
 
    img{
       height: 100%;
       max-width: 40%;
       transform: scale(1);

        &:hover{
           animation: ${pulse} 1s;
        }
    }

    @media(max-width:1070px){
        img{
            width: 0;
        }
        padding-top: 32px;
        justify-content: center;
        align-items: center;
    }
`

export const ContainerTextAvaluation = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px 16px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
        text-align: center;
        color: ${colors.white} !important;
    }

    p{
        color: ${colors.white};
        font-size: 20px;
        margin-top: 8px;
        line-height: 32px;
        padding: 0 16px;
    }

    @media(max-width: 1400px){
        h1{
            font-size: 32px;
        }
        p{
            padding: 0 24px;
        }
    }

    @media(max-width: 750px){
        h1{
            font-size: 24px;
        }
        p{
            font-size: 16px;
            line-height: 26px;
        }
    }
`


