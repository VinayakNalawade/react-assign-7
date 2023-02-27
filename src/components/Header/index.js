import {Link, withRouter} from 'react-router-dom'
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
  ReactLink,
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
  ReactLogoLink,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, changeTheme} = value

      const logout = () => {}

      const {location} = props
      const {pathname} = location

      return (
        <Navbar theme={isDark}>
          <ReactLogoLink to="/">
            <NavbarLogo
              alt="website logo"
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
            />
          </ReactLogoLink>
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
                      <ReactLink
                        to="/"
                        bgColor={pathname === '/' ? '#f1f1f1' : 'transparent'}
                      >
                        <MenuItem>
                          <AiFillHome color="#ff0000" size="20" />
                          <MenuItemHeading theme={isDark}>Home</MenuItemHeading>
                        </MenuItem>
                      </ReactLink>

                      <ReactLink
                        to="/trending"
                        bgColor={
                          pathname === '/trending' ? '#f1f1f1' : 'transparent'
                        }
                      >
                        <MenuItem>
                          <HiFire color="#606060" size="20" />
                          <MenuItemHeading theme={isDark}>
                            Trending
                          </MenuItemHeading>
                        </MenuItem>
                      </ReactLink>

                      <ReactLink
                        to="/gaming"
                        bgColor={
                          pathname === '/gaming' ? '#f1f1f1' : 'transparent'
                        }
                      >
                        <MenuItem>
                          <SiYoutubegaming color="#606060" size="20" />
                          <MenuItemHeading theme={isDark}>
                            Gaming
                          </MenuItemHeading>
                        </MenuItem>
                      </ReactLink>

                      <ReactLink
                        to="/savedvideos"
                        bgColor={
                          pathname === '/savedvideos'
                            ? '#f1f1f1'
                            : 'transparent'
                        }
                      >
                        <MenuItem
                          bgColor={
                            pathname === '/savedvideos'
                              ? '#f1f1f1'
                              : 'transparent'
                          }
                        >
                          <BiListPlus color="#606060" size="20" />
                          <MenuItemHeading theme={isDark}>
                            Saved Videos
                          </MenuItemHeading>
                        </MenuItem>
                      </ReactLink>
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

export default withRouter(Header)
