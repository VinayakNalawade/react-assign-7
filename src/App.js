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
  state = {isDark: '', showBanner: '', liked: [], disliked: [], saved: []}

  componentDidMount() {
    this.setState({isDark: false, showBanner: true})
  }

  changeTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  changeShowBanner = () => this.setState({showBanner: false})

  changeLiked = id =>
    this.setState(prev => {
      const {liked, disliked} = prev

      if (liked.includes(id)) {
        const likedList = liked.filter(each => each !== id)
        const disLikedList = disliked.filter(each => each !== id)

        this.setState({liked: likedList, disliked: disLikedList})
      } else {
        const likedList = [...liked]

        likedList.push(id)

        const disLikedList = disliked.filter(each => each !== id)

        this.setState({liked: likedList, disliked: disLikedList})
      }
    })

  changeDisliked = id =>
    this.setState(prev => {
      const {liked, disliked} = prev

      if (disliked.includes(id)) {
        const disLikedList = disliked.filter(each => each !== id)

        const likedList = liked.filter(each => each !== id)

        this.setState({liked: likedList, disliked: disLikedList})
      } else {
        const disLikedList = [...disliked]

        disLikedList.push(id)

        const likedList = liked.filter(each => each !== id)

        this.setState({liked: likedList, disliked: disLikedList})
      }
    })

  changeSaved = obj => {
    const {saved} = this.state

    if (saved.some(each => each.id === obj.id)) {
      const savedList = saved.filter(each => each.id !== obj.id)

      this.setState({saved: savedList})
    } else {
      this.setState({saved: [...saved, obj]})
    }
  }

  render() {
    const {showBanner, isDark, liked, disliked, saved} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          showBanner,
          changeTheme: this.changeTheme,
          changeShowBanner: this.changeShowBanner,
          liked,
          disliked,
          saved,
          changeLiked: this.changeLiked,
          changeDisliked: this.changeDisliked,
          changeSaved: this.changeSaved,
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
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
