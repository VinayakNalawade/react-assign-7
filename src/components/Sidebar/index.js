import {withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'

import {
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
        <MenuList theme={isDark}>
          <ReactLink to="/">
            <MenuItem bgColor={pathname === '/' ? '#f1f1f1' : 'transparent'}>
              <AiFillHome color="#ff0000" size="20" />
              <MenuItemHeading theme={isDark}>Home</MenuItemHeading>
            </MenuItem>
          </ReactLink>
          <ReactLink to="/trending">
            <MenuItem
              bgColor={pathname === '/trending' ? '#f1f1f1' : 'transparent'}
            >
              <HiFire color="#606060" size="20" />
              <MenuItemHeading theme={isDark}>Trending</MenuItemHeading>
            </MenuItem>
          </ReactLink>

          <ReactLink to="/gaming">
            <MenuItem
              bgColor={pathname === '/gaming' ? '#f1f1f1' : 'transparent'}
            >
              <SiYoutubegaming color="#606060" size="20" />
              <MenuItemHeading theme={isDark}>Gaming</MenuItemHeading>
            </MenuItem>
          </ReactLink>

          <ReactLink to="/savedvideos">
            <MenuItem
              bgColor={pathname === '/savedvideos' ? '#f1f1f1' : 'transparent'}
            >
              <BiListPlus color="#606060" size="20" />
              <MenuItemHeading theme={isDark}>Saved Videos</MenuItemHeading>
            </MenuItem>
          </ReactLink>
        </MenuList>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Sidebar)
