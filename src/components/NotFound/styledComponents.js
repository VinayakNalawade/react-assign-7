import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const SubContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

export const BannerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const HomeFailureContainer = styled.div`
  min-height: 100%;
  display: flex;
  background-color: ${props => (props.theme === true ? '#000000' : '#f1f1f1')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5%;
`

export const FailureImg = styled.img`
  width: 60%;
`

export const FailureHeading = styled.h1`
  font-size: 24px;
  color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
`

export const FailureMsg = styled.p`
  font-size: 15px;
  color: #616e7c;
`
