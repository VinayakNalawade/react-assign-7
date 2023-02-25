import styled from 'styled-components'

export const HomeFailureContainer = styled.div`
  min-height: 100%;
  display: flex;
  background-color: ${props => (props.theme === true ? '#212121' : '#f1f1f1')};
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

export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  outline: none;
  border: none;
  padding: 10px;
  font-size: 17px;
  width: 100px;
  border-radius: 8px;
  margin-top: 30px;
`
