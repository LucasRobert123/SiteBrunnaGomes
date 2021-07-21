import styled, { css } from 'styled-components';
import colors from '../../styles/colors';
import { animated } from 'react-spring'

export const Container = styled.section`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;

  img{
     margin-right: 15px;
  }

  @media(max-width: 1400px){
   img{
    height: 20px;
   }
   h1{
      font-size: 32px;
   }
  }

  @media(max-width: 750px){
   img{
    height: 16px;
   }
   h1{
      font-size: 24px;
   }
  }
`

export const Content = styled.div`
   height: 486px;
   p{
      margin-top: 12px;
   }
   @media(max-width: 1400px){
      height: 436px;
   }

   @media(max-width: 750px){
     p{
        font-size: 16px;
     }
   }
`

export const ContainerListProcedures = styled.div`
   height: 100%;
   display: flex;
   justify-content: space-between;
   margin-top: 24px;

   @media(max-width: 750px){
      height: 94%;
   }
`

export const ButtonProcedures = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 120px;
   height: 100%;
   background-color: #f3ebe8;
   z-index:10;

   ${(props) =>
      props.disabled &&
      css`
      filter: brightness(1.2) grayscale(0.25);
   `}

   img {
      ${(props) =>
         props.disabled &&
         css`
         filter: brightness(1.5) grayscale(0.5) contrast(0.8);
         `}
   }
   border-radius: 20px;
   transition: opacity ease 200ms;
   
   @media(max-width: 1400px){
      width: 70px;

      img{
         width: 80px;
         height: 80px;
      }
   }
   
   ${props => props.disabled && css`
      opacity: 0.5;
   `}

   @media(max-width: 750px){
      width: 55px;

      img{
         width: 60px;
         height: 60px;
      }
   }

   @media(max-width: 500px){
      width: 40px;
      background-color: ${colors.white};

      img{
         width: 30px;
         height: 30px;
      }
   }
`

export const List = styled.div`
  flex:1;
  padding: 0 20px;
  
  
  @media(max-width: 500px){
      padding:0;
   }
`

export const ItemList = styled(animated.div)`
  width: 100%;
  height: calc(100% / 3);
  border: 1px solid ${colors.secondary}20;
  border-radius: 20px;
  margin-bottom: 8px;
  padding: 20px;
 
   h3{
      font-weight: 700;
   }
   p{
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
   }

   @media(max-width: 1400px){
      height: 140px;
   }

   @media(max-width: 750px){
      height: 130px;
   }
`
