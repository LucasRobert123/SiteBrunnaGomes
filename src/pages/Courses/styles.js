import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.section`
  padding: 48px 24px;

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
    display: flex;
    justify-content: space-between;
    flex:1;

    @media(max-width: 1400px){
        img{
           width: 40%;
           margin-top: -36px;
        }
    }
`

export const CoursesTaught = styled.div`
    margin-top: 24px;
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
`