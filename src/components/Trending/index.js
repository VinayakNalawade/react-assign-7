import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import {formatDistanceToNow} from 'date-fns'

import Cookies from 'js-cookie'

import Header from '../Header'
import Banner from '../Banner'
import Sidebar from '../Sidebar'

import {
  ReactLink,
  MainContainer,
  SubContainer,
  BannerContentContainer,
  HomeFailureContainer,
  FailureImg,
  FailureHeading,
  FailureMsg,
  RetryButton,
  VideoItem,
  VideoImg,
  VideoItemDetailsContainer,
  VideoTitle,
  ChannelNameLg,
  ChannelViewsLg,
  ChannelNameSm,
  PublishedDuration,
  VideoItemDetailsSm,
  ViewsDurationContainerLg,
  ChannelImg,
  VideoItemDetails,
  TrendingContainer,
  TrendingBanner,
  TrendingHeading,
  TrendingList,
  TrendingButton,
} from './styledComponents'

import ThemeContext from '../context/ThemeContext'

class Trending extends Component {
  state = {videosList: [], isLoading: ''}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({isLoading: 'loading'})

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(
      `https://apis.ccbp.in/videos/trending`,
      options,
    )
    const data = await response.json()

    if (response.ok) {
      const {videos} = data

      const convertedVideos = videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        viewCount: each.view_count,
        publishedAt: formatDistanceToNow(new Date(each.published_at)),
      }))

      this.setState({
        isLoading: 'success',
        videosList: {total: data.total, videos: convertedVideos},
      })
    } else {
      this.setState({isLoading: 'failure'})
    }
  }

  renderFailure = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <HomeFailureContainer theme={isDark}>
            <FailureImg
              alt="failure view"
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
            />
            <FailureHeading theme={isDark}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureMsg>
              We are having some trouble completing your request. Please try
              again.
            </FailureMsg>
            <RetryButton type="button" onClick={this.getData}>
              Retry
            </RetryButton>
          </HomeFailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderSuccess = () => {
    const {videosList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <TrendingContainer theme={isDark}>
              <TrendingBanner theme={isDark}>
                <TrendingButton theme={isDark} type="button">
                  <HiFire color="#ff0000" size="25" />
                </TrendingButton>
                <TrendingHeading theme={isDark}>Trending</TrendingHeading>
              </TrendingBanner>
              <TrendingList>
                {videosList.videos.map(each => (
                  <ReactLink to={`videos/${each.id}`} key={each.id}>
                    <VideoItem key={each.id}>
                      <VideoImg src={each.thumbnailUrl} alt="video thumbnail" />
                      <VideoItemDetails>
                        <ChannelImg
                          src={each.channel.profileImageUrl}
                          alt="channel logo"
                        />
                        <VideoItemDetailsContainer>
                          <VideoTitle theme={isDark}>{each.title}</VideoTitle>
                          <ChannelNameLg>{each.channel.name}</ChannelNameLg>
                          <ViewsDurationContainerLg>
                            <ChannelViewsLg>
                              {each.viewCount} views
                            </ChannelViewsLg>
                            <PublishedDuration>
                              {each.publishedAt.slice(0, 1).toUpperCase()}
                              {each.publishedAt.slice(1)}
                            </PublishedDuration>
                          </ViewsDurationContainerLg>
                          <VideoItemDetailsSm>
                            <ChannelNameSm>{each.channel.name}</ChannelNameSm>
                            <PublishedDuration>
                              {each.viewCount} views
                            </PublishedDuration>
                            <PublishedDuration>
                              {each.publishedAt.slice(0, 1).toUpperCase()}
                              {each.publishedAt.slice(1)}
                            </PublishedDuration>
                          </VideoItemDetailsSm>
                        </VideoItemDetailsContainer>
                      </VideoItemDetails>
                    </VideoItem>
                  </ReactLink>
                ))}
              </TrendingList>
            </TrendingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderPage = () => {
    const {isLoading} = this.state

    switch (isLoading) {
      case 'failure':
        return this.renderFailure()
      case 'success':
        return this.renderSuccess()
      case 'loading':
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {showBanner, changeShowBanner} = value

          return (
            <MainContainer>
              <Header />
              <SubContainer>
                <Sidebar />
                <BannerContentContainer>
                  {showBanner && <Banner changeShowBanner={changeShowBanner} />}
                  {this.renderPage()}
                </BannerContentContainer>
              </SubContainer>
            </MainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
