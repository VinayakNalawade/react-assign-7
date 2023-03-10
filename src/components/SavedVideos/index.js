import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  PublishedDurationPara,
  ReactLink,
  MainContainer,
  SubContainer,
  BannerContentContainer,
  HomeFailureContainer,
  FailureImg,
  FailureHeading,
  FailureMsg,
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

const SavedVideos = () => {
  const renderFailure = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <HomeFailureContainer theme={isDark}>
            <FailureImg
              alt="no saved videos"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            />
            <FailureHeading theme={isDark}>
              No saved videos found
            </FailureHeading>
            <FailureMsg>Save your videos by clicking a button</FailureMsg>
          </HomeFailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  const renderSuccess = videosList => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <TrendingContainer data-testid="savedVideos" theme={isDark}>
            <TrendingBanner theme={isDark}>
              <TrendingButton theme={isDark} type="button">
                <HiFire color="#ff0000" size="25" />
              </TrendingButton>
              <TrendingHeading theme={isDark}>Saved Videos</TrendingHeading>
            </TrendingBanner>
            <TrendingList>
              {videosList.map(each => (
                <ReactLink to={`videos/${each.id}`} key={each.id}>
                  <VideoItem>
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
                            <PublishedDurationPara>
                              {each.viewCount}
                            </PublishedDurationPara>{' '}
                            views
                          </ChannelViewsLg>
                          <PublishedDuration>
                            <PublishedDurationPara>
                              {each.publishedAt.slice(0, 1).toUpperCase()}
                              {each.publishedAt.slice(1)}
                            </PublishedDurationPara>
                          </PublishedDuration>
                        </ViewsDurationContainerLg>
                        <VideoItemDetailsSm>
                          <ChannelNameSm>{each.channel.name}</ChannelNameSm>
                          <PublishedDuration>
                            <PublishedDurationPara>
                              {each.viewCount}
                            </PublishedDurationPara>{' '}
                            views
                          </PublishedDuration>
                          <PublishedDuration>
                            <PublishedDurationPara>
                              {each.publishedAt.slice(0, 1).toUpperCase()}
                              {each.publishedAt.slice(1)}
                            </PublishedDurationPara>
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

  return (
    <ThemeContext.Consumer>
      {value => {
        const {saved} = value

        return (
          <MainContainer>
            <Header />
            <SubContainer>
              <Sidebar />
              <BannerContentContainer>
                {saved.length !== 0 ? renderSuccess(saved) : renderFailure()}
              </BannerContentContainer>
            </SubContainer>
          </MainContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos
