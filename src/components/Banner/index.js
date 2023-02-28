import {AiOutlineClose} from 'react-icons/ai'

import {
  HomeFailureContainer,
  FailureImg,
  BannerButtonGIN,
  CloseButton,
  FailureMsg,
} from './styledComponents'

const Banner = props => {
  const {changeShowBanner} = props

  const onClickChange = () => changeShowBanner()
  return (
    <HomeFailureContainer data-testid="banner">
      <CloseButton data-testid="close" type="button" onClick={onClickChange}>
        <AiOutlineClose color="#000000" size="20" />
      </CloseButton>
      <FailureImg
        alt="nxt watch logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      />
      <FailureMsg>Buy Nxt Watch Premium prepaid plans with UPI</FailureMsg>
      <BannerButtonGIN type="button">GET IT NOW</BannerButtonGIN>
    </HomeFailureContainer>
  )
}

export default Banner
