import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {BsSearch} from 'react-icons/bs'

import {formatDistanceToNow} from 'date-fns'

import {
  HomeContainer,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  HomeFailureContainer,
  FailureImg,
  FailureHeading,
  FailureMsg,
  RetryButton,
  HomeVideosList,
  VideoItem,
  ChannelImg,
  VideoItemDetailsContainer,
  VideoTitle,
  ChannelNameLg,
  PublishedDuration,
  VideoItemDetailsSm,
  ViewsDurationContainerLg,
  VideoItemDetails,
  ChannelNameSm,
  ChannelViewsLg,
  VideoImg,
  VideoItemDetailsLg,
} from './styledComponents'

import ThemeContext from '../context/ThemeContext'

class Home extends Component {
  state = {videosList: [], isLoading: '', search: ''}

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

    const {search} = this.state

    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${search}`,
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

  changeSearch = event => this.setState({search: event.target.value})

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
          if (videosList.length === 0) {
            return (
              <HomeFailureContainer theme={isDark}>
                <FailureImg
                  alt="no videos"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                />
                <FailureHeading theme={isDark}>
                  No search results found.
                </FailureHeading>
                <FailureMsg>
                  Try different key words or remove search filter
                </FailureMsg>
                <RetryButton type="button" onClick={this.getData}>
                  Retry
                </RetryButton>
              </HomeFailureContainer>
            )
          }

          return (
            <HomeVideosList>
              {videosList.videos.map(each => (
                <VideoItem key={each.id}>
                  <VideoImg src={each.thumbnailUrl} alt="video thumbnail" />
                  <VideoItemDetails>
                    <ChannelImg
                      src={each.channel.profileImageUrl}
                      alt="channel logo"
                    />
                    <VideoItemDetailsContainer>
                      <VideoTitle theme={isDark}>{each.title}</VideoTitle>
                      <VideoItemDetailsLg>
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
                      </VideoItemDetailsLg>
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
            </HomeVideosList>
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
    const {search} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <HomeContainer theme={isDark}>
              <SearchInputContainer>
                <SearchInput
                  theme={isDark}
                  onChange={this.changeSearch}
                  value={search}
                  type="search"
                  placeholder="Search"
                />
                <SearchButton
                  theme={isDark}
                  type="button"
                  onClick={this.getData}
                >
                  <BsSearch size="14" color="#606060" />
                </SearchButton>
              </SearchInputContainer>
              {this.renderPage()}
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
