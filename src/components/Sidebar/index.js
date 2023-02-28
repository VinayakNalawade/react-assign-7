import {withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'

import {
  SidebarContainer,
  ContactIcons,
  ContactTitle,
  SidebarContactSection,
  ContactLogo,
  ContactPara,
  ReactLink,
  MenuList,
  MenuItem,
  MenuItemHeading,
} from './styledComponents'
import ThemeContext from '../context/ThemeContext'

const Sidebar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const {location} = props
      const {pathname} = location

      return (
        <SidebarContainer theme={isDark}>
          <MenuList>
            <ReactLink to="/">
              <MenuItem
                bgColor={
                  pathname === '/'
                    ? `${isDark === true ? '#313131' : '#f1f1f1'}`
                    : 'transparent'
                }
              >
                <AiFillHome
                  color={pathname === '/' ? '#ff0000' : '#606060'}
                  size="20"
                />
                <MenuItemHeading theme={isDark}>Home</MenuItemHeading>
              </MenuItem>
            </ReactLink>
            <ReactLink to="/trending">
              <MenuItem
                bgColor={
                  pathname === '/trending'
                    ? `${isDark === true ? '#313131' : '#f1f1f1'}`
                    : 'transparent'
                }
              >
                <HiFire
                  color={pathname === '/trending' ? '#ff0000' : '#606060'}
                  size="20"
                />
                <MenuItemHeading theme={isDark}>Trending</MenuItemHeading>
              </MenuItem>
            </ReactLink>

            <ReactLink to="/gaming">
              <MenuItem
                bgColor={
                  pathname === '/gaming'
                    ? `${isDark === true ? '#313131' : '#f1f1f1'}`
                    : 'transparent'
                }
              >
                <SiYoutubegaming
                  color={pathname === '/gaming' ? '#ff0000' : '#606060'}
                  size="20"
                />
                <MenuItemHeading theme={isDark}>Gaming</MenuItemHeading>
              </MenuItem>
            </ReactLink>

            <ReactLink to="/saved-videos">
              <MenuItem
                bgColor={
                  pathname === '/saved-videos'
                    ? `${isDark === true ? '#313131' : '#f1f1f1'}`
                    : 'transparent'
                }
              >
                <BiListPlus
                  color={pathname === '/saved-videos' ? '#ff0000' : '#606060'}
                  size="20"
                />
                <MenuItemHeading theme={isDark}>Saved Videos</MenuItemHeading>
              </MenuItem>
            </ReactLink>
          </MenuList>
          <SidebarContactSection>
            <ContactTitle theme={isDark}>CONTACT US</ContactTitle>
            <ContactIcons>
              <ContactLogo
                alt="facebook logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              />
              <ContactLogo
                alt="twitter logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              />
              <ContactLogo
                alt="linked in logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              />
            </ContactIcons>
            <ContactPara theme={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </ContactPara>
          </SidebarContactSection>
        </SidebarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Sidebar)
