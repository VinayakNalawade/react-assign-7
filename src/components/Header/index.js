import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaMoon} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineClose, AiFillHome} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'

import ThemeContext from '../context/ThemeContext'

import {
  Navbar,
  NavbarLogo,
  NavbarIcons,
  LogoutIconButton,
  LogoutButton,
  NavbarTabs,
  NavItem,
  MenuModalContainer,
  MenuList,
  MenuItem,
  MenuItemHeading,
} from './styledComponents'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, changeTheme} = value

      const logout = () => {}
      return (
        <Navbar theme={isDark}>
          <NavbarLogo
            alt="website logo"
            src={
              isDark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
          />
          <NavbarIcons>
            <NavItem>
              {isDark === true ? (
                <BsBrightnessHigh
                  size="20"
                  color={isDark === true ? '#ffffff' : '#000000'}
                />
              ) : (
                <FaMoon
                  size="20"
                  color={isDark === true ? '#ffffff' : '#000000'}
                />
              )}
            </NavItem>
            <NavItem>
              <Popup
                modal
                trigger={
                  <GiHamburgerMenu
                    size="20"
                    color={isDark === true ? '#ffffff' : '#000000'}
                  />
                }
              >
                {close => (
                  <MenuModalContainer theme={isDark}>
                    <AiOutlineClose
                      onClick={close}
                      size="25"
                      color={isDark === true ? '#ffffff' : '#000000'}
                    />
                    <MenuList>
                      <MenuItem>
                        <AiFillHome color="#ff0000" size="20" />
                        <MenuItemHeading>Home</MenuItemHeading>
                      </MenuItem>
                      <MenuItem>
                        <HiFire color="#606060" size="20" />
                        <MenuItemHeading theme={isDark}>
                          Trending
                        </MenuItemHeading>
                      </MenuItem>
                      <MenuItem>
                        <SiYoutubegaming color="#606060" size="20" />
                        <MenuItemHeading theme={isDark}>Gaming</MenuItemHeading>
                      </MenuItem>
                      <MenuItem>
                        <BiListPlus color="#606060" size="20" />
                        <MenuItemHeading theme={isDark}>
                          Saved Videos
                        </MenuItemHeading>
                      </MenuItem>
                    </MenuList>
                  </MenuModalContainer>
                )}
              </Popup>
            </NavItem>
            <NavItem>
              <LogoutIconButton onClick={logout} type="button">
                <FiLogOut
                  size="20"
                  color={isDark === true ? '#ffffff' : '#000000'}
                />
              </LogoutIconButton>
            </NavItem>
          </NavbarIcons>

          <NavbarTabs>
            <NavItem>
              {isDark === true ? (
                <BsBrightnessHigh
                  color={isDark === true ? '#ffffff' : '#000000'}
                  size="25"
                />
              ) : (
                <FaMoon
                  color={isDark === true ? '#ffffff' : '#000000'}
                  size="25"
                />
              )}
            </NavItem>
            <NavItem>
              <CgProfile
                color={isDark === true ? '#ffffff' : '#000000'}
                size="27"
              />
            </NavItem>
            <NavItem>
              <LogoutButton
                color={isDark === true ? '#ffffff' : '#3b82f6'}
                onClick={logout}
                type="button"
              >
                Logout
              </LogoutButton>
            </NavItem>
          </NavbarTabs>
        </Navbar>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
