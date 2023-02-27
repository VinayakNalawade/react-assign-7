import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import './App.css'

import ProtectedRoute from './components/ProtectedRoute'

import Login from './components/Login'

import Header from './components/Header'

import Home from './components/Home'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import VideoItemDetails from './components/VideoItemDetails'

import SavedVideos from './components/SavedVideos'

import NotFound from './components/NotFound'

import Sidebar from './components/Sidebar'

import Banner from './components/Banner'
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
      <ThemeContext.Provider value={{isDark, changeTheme: this.changeTheme}}>
        <div className="main-container">
          <Header />
          <div className="sub-container">
            <Sidebar />
            <div className="banner-content-container">
              {showBanner && (
                <Banner changeShowBanner={this.changeShowBanner} />
              )}
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
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    )
  }
}
export default App
