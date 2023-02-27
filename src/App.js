import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import './App.css'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ThemeContext from './components/context/ThemeContext'

class App extends Component {
  state = {isDark: '', showBanner: ''}

  componentDidMount() {
    this.setState({isDark: false, showBanner: true})
  }

  changeTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  changeShowBanner = () => this.setState({showBanner: false})

  render() {
    const {showBanner, isDark} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          showBanner,
          changeTheme: this.changeTheme,
          changeShowBanner: this.changeShowBanner,
          liked: [],
          disliked: [],
          saved: [
            {
              channel: {
                name: 'iB Cricket',
                subscriberCount: '4.13K',
                profileImageUrl:
                  'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png',
              },
              description:
                'Destructive opening batsman, Virender Sehwag was impressed by iB Cricket, as he prepared himself up for the world’s first VR Cricket League, iB Cricket Super Over League.',
              id: '30b642bd-7591-49f4-ac30-5c538f975b15',
              publishedAt: 'almost 4 years',
              thumbnailUrl:
                'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png',
              title:
                'Sehwag shares his batting experience in iB Cricket | iB Cricket Super Over League',
              videoUrl: 'https://www.youtube.com/watch?v=wB6IFCeTssk',
              viewCount: '1.4K',
            },
          ],
          changeLiked: () => {},
          changeDisliked: () => {},
          changeSaved: () => {},
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/savedvideos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
