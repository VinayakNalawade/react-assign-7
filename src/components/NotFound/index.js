import {
  HomeFailureContainer,
  FailureImg,
  FailureHeading,
  FailureMsg,
} from './styledComponents'

import ThemeContext from '../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <HomeFailureContainer theme={isDark}>
          <FailureImg
            alt="not found"
            src={
              isDark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            }
          />
          <FailureHeading theme={isDark}>Page Not Found</FailureHeading>
          <FailureMsg>
            We are sorry, the page you requested could not be found.
          </FailureMsg>
        </HomeFailureContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
