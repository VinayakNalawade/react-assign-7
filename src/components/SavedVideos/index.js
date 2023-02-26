import {HiFire} from 'react-icons/hi'

import {
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
import VideoDetailsContext from '../context/VideoDetailsContext'

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
            <FailureMsg>
              You can save your videos while watching them.
            </FailureMsg>
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
          <TrendingContainer theme={isDark}>
            <TrendingBanner theme={isDark}>
              <TrendingButton theme={isDark} type="button">
                <HiFire color="#ff0000" size="25" />
              </TrendingButton>
              <TrendingHeading theme={isDark}>Saved Videos</TrendingHeading>
            </TrendingBanner>
            <TrendingList>
              {videosList.map(each => (
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
                        <ChannelViewsLg>{each.viewCount} views</ChannelViewsLg>
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
              ))}
            </TrendingList>
          </TrendingContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  return (
    <VideoDetailsContext.Consumer>
      {value => {
        const {saved} = value
        console.log(saved)

        if (saved.length !== 0) {
          return renderSuccess(saved)
        }

        return renderFailure()
      }}
    </VideoDetailsContext.Consumer>
  )
}

export default SavedVideos
