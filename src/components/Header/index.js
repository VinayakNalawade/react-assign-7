import ThemeContext from '../context/ThemeContext'

import {MdOutlineLightMode} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaMoon} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'

import {} from './styledComponents'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, changeTheme} = value

      return (
        <Navbar>
          <NavbarLogo
            alt="website logo"
            src={
              isDark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
          />
          <NavbarIcons>
            {isDark === true ? <FaMoon /> : <MdOutlineLightMode />}
            <GiHamburgerMenu />
            <LogoutIconButton onClick={this.logout} type="button">
              <FiLogOut />
            </LogoutIconButton>
          </NavbarIcons>
          <NavbarTabs>
            {isDark === true ? <FaMoon /> : <MdOutlineLightMode />}
            <CgProfile />
            <LogoutButton onClick={this.logout} type="button">
              Logout
            </LogoutButton>
          </NavbarTabs>
        </Navbar>
      )
    }}
  </ThemeContext.Consumer>
)
