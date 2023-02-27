import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaMoon} from 'react-icons/fa'
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
  CancelButton,
  LogoutButtonsContainer,
  LogoutModal,
  LogoutModalHeading,
  ProfileImg,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, changeTheme} = value

      const logout = () => {
        Cookies.remove('jwt_token')
        const {history} = props

        history.replace('/')
      }

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
            <NavItem onClick={changeTheme}>
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
                        onClick={close}
                        bgColor={
                          pathname === '/'
                            ? `${isDark === true ? '#313131' : '#f1f1f1'}`
                            : 'transparent'
                        }
                      >
                        <MenuItem>
                          <AiFillHome
                            color={pathname === '/' ? '#ff0000' : '#606060'}
                            size="20"
                          />
                          <MenuItemHeading theme={isDark}>Home</MenuItemHeading>
                        </MenuItem>
                      </ReactLink>

                      <ReactLink
                        to="/trending"
                        onClick={close}
                        bgColor={
                          pathname === '/trending'
                            ? `${isDark === true ? '#313131' : '#f1f1f1'}`
                            : 'transparent'
                        }
                      >
                        <MenuItem>
                          <HiFire
                            color={
                              pathname === '/trending' ? '#ff0000' : '#606060'
                            }
                            size="20"
                          />
                          <MenuItemHeading theme={isDark}>
                            Trending
                          </MenuItemHeading>
                        </MenuItem>
                      </ReactLink>

                      <ReactLink
                        onClick={close}
                        to="/gaming"
                        bgColor={
                          pathname === '/gaming'
                            ? `${isDark === true ? '#313131' : '#f1f1f1'}`
                            : 'transparent'
                        }
                      >
                        <MenuItem>
                          <SiYoutubegaming
                            color={
                              pathname === '/gaming' ? '#ff0000' : '#606060'
                            }
                            size="20"
                          />
                          <MenuItemHeading theme={isDark}>
                            Gaming
                          </MenuItemHeading>
                        </MenuItem>
                      </ReactLink>

                      <ReactLink
                        onClick={close}
                        to="/savedvideos"
                        bgColor={
                          pathname === '/savedvideos'
                            ? `${isDark === true ? '#313131' : '#f1f1f1'}`
                            : 'transparent'
                        }
                      >
                        <MenuItem>
                          <BiListPlus
                            color={
                              pathname === '/savedvideos'
                                ? '#ff0000'
                                : '#606060'
                            }
                            size="20"
                          />
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
              <Popup
                modal
                trigger={
                  <LogoutIconButton type="button">
                    <FiLogOut
                      size="20"
                      color={isDark === true ? '#ffffff' : '#000000'}
                    />
                  </LogoutIconButton>
                }
              >
                {close => (
                  <LogoutModal theme={isDark}>
                    <LogoutModalHeading theme={isDark}>
                      Are you sure you want to logout?
                    </LogoutModalHeading>
                    <LogoutButtonsContainer>
                      <CancelButton
                        color="#64748b"
                        bgColor="transparent"
                        type="button"
                        onClick={close}
                      >
                        Cancel
                      </CancelButton>
                      <CancelButton
                        color="#f1f1f1"
                        bgColor="#3b82f6"
                        type="button"
                        onClick={() => {
                          close()
                          logout()
                        }}
                      >
                        Confirm
                      </CancelButton>
                    </LogoutButtonsContainer>
                  </LogoutModal>
                )}
              </Popup>
            </NavItem>
          </NavbarIcons>

          <NavbarTabs>
            <NavItem onClick={changeTheme}>
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
              <ProfileImg
                alt="profile"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              />
            </NavItem>

            <NavItem>
              <Popup
                modal
                trigger={
                  <LogoutButton
                    color={isDark === true ? '#ffffff' : '#3b82f6'}
                    onClick={logout}
                    type="button"
                  >
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <LogoutModal theme={isDark}>
                    <LogoutModalHeading theme={isDark}>
                      Are you sure you want to logout?
                    </LogoutModalHeading>
                    <LogoutButtonsContainer>
                      <CancelButton
                        color="#64748b"
                        bgColor="transparent"
                        type="button"
                        onClick={close}
                      >
                        Cancel
                      </CancelButton>
                      <CancelButton
                        color="#f1f1f1"
                        bgColor="#3b82f6"
                        type="button"
                        onClick={() => {
                          close()
                          logout()
                        }}
                      >
                        Confirm
                      </CancelButton>
                    </LogoutButtonsContainer>
                  </LogoutModal>
                )}
              </Popup>
            </NavItem>
          </NavbarTabs>
        </Navbar>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
