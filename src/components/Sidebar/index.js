import {AiFillHome} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'

import {MenuList, MenuItem, MenuItemHeading} from './styledComponents'
import ThemeContext from '../context/ThemeContext'

const Sidebar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <MenuList theme={isDark}>
          <MenuItem>
            <AiFillHome color="#ff0000" size="20" />
            <MenuItemHeading theme={isDark}>Home</MenuItemHeading>
          </MenuItem>
          <MenuItem>
            <HiFire color="#606060" size="20" />
            <MenuItemHeading theme={isDark}>Trending</MenuItemHeading>
          </MenuItem>
          <MenuItem>
            <SiYoutubegaming color="#606060" size="20" />
            <MenuItemHeading theme={isDark}>Gaming</MenuItemHeading>
          </MenuItem>
          <MenuItem>
            <BiListPlus color="#606060" size="20" />
            <MenuItemHeading theme={isDark}>Saved Videos</MenuItemHeading>
          </MenuItem>
        </MenuList>
      )
    }}
  </ThemeContext.Consumer>
)

export default Sidebar
