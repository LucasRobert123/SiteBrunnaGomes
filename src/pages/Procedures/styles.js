import styled, { css } from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.section`
  padding: 16px;
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
`

export const Content = styled.div`
   height: 486px;
   p{
      margin-top: 12px;
   }
   @media(max-width: 1400px){
      height: 436px;
   }
`

export const ContainerListProcedures = styled.div`
   height: 100%;
   display: flex;
   justify-content: space-between;
   margin-top: 24px;
`

export const ButtonProcedures = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 120px;
   height: 100%;
   background-color: ${colors.secondary}20;
   border-radius: 20px;

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
`

export const List = styled.div`
  flex:1;
  padding: 0 20px;
`

export const ItemList = styled.div`
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
`
