import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#313131;' : '#f1f4f9;')}
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const LoginForm = styled.form`
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#ffffff')};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  max-width: 600px;
  padding: 5%;
  padding-top: 7%;
  padding-bottom: 7%;
  border-radius: 10px;
`

export const LoginLogo = styled.img`
  width: 140px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 185px;
  }
`

export const LoginLabel = styled.label`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
  color: ${props => (props.theme === true ? '#ffffff' : '#64748b')};
`

export const LoginInput = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
  padding: 10px;
  margin-top: 8px;
  font-size: 17px;
  background-color: transparent;
  color: ${props => (props.theme === true ? '#ffffff' : '#64748b')};
`

export const LoginCheckbox = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 10px;
  margin-top: 20px;
`

export const LoginButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  outline: none;
  border: none;
  padding: 10px;
  font-size: 17px;
  width: 100%;
  border-radius: 8px;
  margin-top: 30px;
`

export const LoginError = styled.p`
  color: #ff0000;
  font-size: 15px;
`
