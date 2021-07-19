import styled from 'styled-components';

import colors from '../../styles/colors';


export const Container = styled.section`
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
export const Content = styled.div`
  height: calc(100vh - 161px);
  background-color: ${colors.primary}; 
  display: flex;
  align-items: center;

  img{
      width: 40%;
  }
`

export const ContainerTextAvaluation = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px 20px;

    h1{
        text-align: center;
        color: ${colors.white};
    }

    p{
        color: ${colors.white};
        font-size: 24px;
        margin-top: 8px;
        line-height: 32px;
    }

    @media(max-width: 1400px){
        h1{
            font-size: 32px;
        }
        p{
            padding: 0 24px;
        }
    }
`


