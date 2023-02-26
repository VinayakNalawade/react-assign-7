import styled from 'styled-components'

export const MenuList = styled.ul`
  @media screen and (max-width: 767px) {
    display: none;
  }
  background-color: ${props => (props.theme === true ? '#212121' : '#ffffff')};
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 15px;
  min-width: 180px;
`
export const MenuItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 4%;
`

export const MenuItemHeading = styled.h1`
  font-size: 17px;
  margin-left: 15px;
  color: ${props => (props.theme !== true ? '#424242' : '#ffffff')};
`