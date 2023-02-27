import {Component} from 'react'

import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'

import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import Cookies from 'js-cookie'

import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../context/ThemeContext'
import VideoDetailsContext from '../context/VideoDetailsContext'

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
  RetryButton,
  VideoItem,
  TrendingHeading,
  ViewsDurationContainerLg,
  ChannelViewsLg,
  PublishedDuration,
  ChannelImg,
  ChannelNameLg,
  VideoDetailsItem,
  VideoItemDetailsContainer,
  VideoTitle,
  VideoDetails,
  ViewsAndLike,
  VideoItemDescription,
  LikeDislikeSave,
  LikeLabel,
  Like,
} from './styledComponents'

class VideoItemDetails extends Component {
  state = {isLoading: '', videoDetails: {}}

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

    // const {match} = this.props
    // const {params} = match
    // const {id} = params

    const response = await fetch(
      `https://apis.ccbp.in/videos/30b642bd-7591-49f4-ac30-5c538f975b15`,
      options,
    )
    const data = await response.json()

    if (response.ok) {
      const videoDetails = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          subscriberCount: data.video_details.channel.subscriber_count,
          profileImageUrl: data.video_details.channel.profile_image_url,
        },
        viewCount: data.video_details.view_count,
        description: data.video_details.description,
        publishedAt: formatDistanceToNow(
          new Date(data.video_details.published_at),
        ),
      }

      this.setState({
        isLoading: 'success',
        videoDetails,
      })
    } else {
      this.setState({isLoading: 'failure'})
    }
  }

  renderLikeDislikeSave = () => (
    <VideoDetailsContext.Consumer>
      {value => {
        const {
          liked,
          disliked,
          saved,
          changeLiked,
          changeDisliked,
          changeSaved,
        } = value

        const {videoDetails} = this.state
        const {id} = videoDetails
        const isLiked = liked.some(each => each.id === id)
        const isDisliked = disliked.some(each => each.id === id)
        const isSaved = saved.some(each => each.id === id)

        return (
          <LikeDislikeSave>
            <Like>
              <BiLike color={isLiked ? '#3b82f6' : '#64748b'} />
              <LikeLabel color={isLiked ? '#3b82f6' : '#64748b'}>
                Like
              </LikeLabel>
            </Like>
            <Like>
              <BiDislike color={isDisliked ? '#3b82f6' : '#64748b'} />
              <LikeLabel color={isDisliked ? '#3b82f6' : '#64748b'}>
                Dislike
              </LikeLabel>
            </Like>
            <Like>
              <BiListPlus color={isSaved ? '#3b82f6' : '#64748b'} />
              <LikeLabel color={isSaved ? '#3b82f6' : '#64748b'}>
                {isSaved ? 'Saved' : 'Save'}
              </LikeLabel>
            </Like>
          </LikeDislikeSave>
        )
      }}
    </VideoDetailsContext.Consumer>
  )

  renderSuccess = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const {videoDetails} = this.state

        return (
          <VideoItem theme={isDark}>
            <ReactPlayer width="100" url={videoDetails.videoUrl} />
            <VideoDetails>
              <TrendingHeading theme={isDark}>
                {videoDetails.title}
              </TrendingHeading>
              <ViewsAndLike>
                <ViewsDurationContainerLg>
                  <ChannelViewsLg>
                    {videoDetails.viewCount} views
                  </ChannelViewsLg>
                  <PublishedDuration>
                    {videoDetails.publishedAt.slice(0, 1).toUpperCase()}
                    {videoDetails.publishedAt.slice(1)}
                  </PublishedDuration>
                </ViewsDurationContainerLg>
                {this.renderLikeDislikeSave()}
              </ViewsAndLike>
              <VideoDetailsItem>
                <ChannelImg
                  src={videoDetails.channel.profileImageUrl}
                  alt="channel logo"
                />
                <VideoItemDetailsContainer>
                  <VideoTitle theme={isDark}>
                    {videoDetails.channel.name}
                  </VideoTitle>
                  <ChannelNameLg>
                    {videoDetails.channel.subscriberCount} subscribers
                  </ChannelNameLg>
                </VideoItemDetailsContainer>
              </VideoDetailsItem>
              <VideoItemDescription>
                {videoDetails.description}
              </VideoItemDescription>
            </VideoDetails>
          </VideoItem>
        )
      }}
    </ThemeContext.Consumer>
  )

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

export default VideoItemDetails
