import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const ReactLink = styled(Link)`
  text-decoration: none;
  background-color: ${props => props.bgColor};
  width: 100vw;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
`

export const ReactLogoLink = styled(Link)`
  text-decoration: none;
  background-color: ${props => props.bgColor};
  border: none;
  outline: none;
`

export const Navbar = styled.nav`
  display: flex;
  background-color: ${props => (props.theme === true ? '#212121' : '#ffffff')};
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  padding: 2%;
  padding-right: 5%;
  padding-left: 5%;
`

export const NavbarLogo = styled.img`
  width: 80px;

  @media screen and (min-width: 768px) {
    width: 130px;
  }
`

export const NavbarIcons = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavbarTabs = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutIconButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0px;
`

export const LogoutButton = styled.button`
  outline: none;
  border: 1px solid ${props => props.color};
  color: ${props => props.color};
  font-size: 14px;
  padding: 5px;
  padding-right: 13px;
  padding-left: 13px;
  margin: 0;
  background-color: transparent;
`
export const NavItem = styled.li`
  list-style-type: none;
  margin-left: 18px;
`
export const MenuModalContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: flex-end;
  padding: 5%;
  background-color: ${props => (props.theme === true ? '#212121' : '#ffffff')};
`

export const MenuList = styled.ul`
  padding: 0;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding-bottom: 15px;
`
export const MenuItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  width: 175px;
  margin-left: 3%;
`

export const MenuItemHeading = styled.h1`
  font-size: 22px;
  margin-left: 15px;
  color: ${props => (props.theme !== true ? '#424242' : '#ffffff')};
`
export const LogoutModal = styled.div`
  background-color: ${props => (props.theme === true ? '#212121' : '#ffffff')};
  padding: 5%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LogoutButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const CancelButton = styled.button`
  background-color: ${props => props.bgColor};
  font-size: 17px;
  color: ${props => props.color};
  border: 1px solid #64748b;
  border-radius: 5px;
  margin: 15px;
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
`
export const LogoutModalHeading = styled(MenuItemHeading)`
  font-sie: 180x;
  text-alin: center;
`
