import {Component} from 'react'

import Cookies from 'js-cookie'

import ThemeContext from '../context/ThemeContext'

import {
  LoginContainer,
  LoginForm,
  LoginLogo,
  LoginLabel,
  LoginInput,
  LoginCheckbox,
  LoginButton,
  LoginError,
} from './styledComponents'

class Login extends Component {
  state = {username: '', password: '', error: '', showPassword: ''}

  componentDidMount() {
    const jwtToken = Cookies.get('jwt_token')

    const {history} = this.props
    if (jwtToken) {
      history.replace('/')
    }
  }

  changeUsername = event => this.setState({username: event.target.value})

  changePassword = event => this.setState({password: event.target.value})

  changeShowPassword = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  onSubmit = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()

    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 2})

      const {history} = this.props

      history.replace('/')
    } else {
      this.setState({error: data.error_msg})
    }
  }

  render() {
    const {username, password, error, showPassword} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <LoginContainer theme={isDark}>
              <LoginForm theme={isDark} onSubmit={this.onSubmit}>
                <LoginLogo
                  alt="website logo"
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                />
                <LoginLabel htmlFor="username" theme={isDark}>
                  USERNAME
                </LoginLabel>
                <LoginInput
                  id="username"
                  theme={isDark}
                  type="input"
                  onChange={this.changeUsername}
                  placeholder="Username"
                  value={username}
                />
                <LoginLabel htmlFor="password" theme={isDark}>
                  PASSWORD
                </LoginLabel>
                <LoginInput
                  id="password"
                  theme={isDark}
                  type={showPassword === true ? 'input' : 'password'}
                  onChange={this.changePassword}
                  placeholder="Password"
                  value={password}
                />
                <div>
                  <LoginCheckbox
                    id="showpassword"
                    type="checkbox"
                    onChange={this.changeShowPassword}
                    value={showPassword}
                  />
                  <LoginLabel htmlFor="showpassword" theme={isDark}>
                    Show Password
                  </LoginLabel>
                </div>
                <LoginButton type="submit">Login</LoginButton>
                {error !== '' && <LoginError>*{error}</LoginError>}
              </LoginForm>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
