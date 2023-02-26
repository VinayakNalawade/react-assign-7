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

class App extends Component {
  state = {isDark: ''}

  componentDidMount() {
    this.setState({isDark: false})
  }

  render() {
    return (
      <div className="main-container">
        <Header />
        <div className="sub-container">
          <Sidebar />
          <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/" component={Home} />
            <ProtectedRoute path="/trending" component={Trending} />
            <ProtectedRoute path="/gaming" component={Gaming} />
            <ProtectedRoute path="/videos/:id" component={VideoItemDetails} />
            <Route path="/savedvideos" component={SavedVideos} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}
export default App
