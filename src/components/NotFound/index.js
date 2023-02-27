import Header from '../Header'
import Banner from '../Banner'
import Sidebar from '../Sidebar'

import {
  MainContainer,
  SubContainer,
  BannerContentContainer,
  HomeFailureContainer,
  FailureImg,
  FailureHeading,
  FailureMsg,
} from './styledComponents'

import ThemeContext from '../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, showBanner, changeShowBanner} = value

      return (
        <MainContainer>
          <Header />
          <SubContainer>
            <Sidebar />
            <BannerContentContainer>
              {showBanner && <Banner changeShowBanner={changeShowBanner} />}
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
            </BannerContentContainer>
          </SubContainer>
        </MainContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
