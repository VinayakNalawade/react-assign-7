import React from 'react'

const ThemeContext = React.createContext({
  isDark: '',
  changeTheme: () => {},
  showBanner: '',
  changeShowBanner: () => {},
  liked: [],
  disLiked: [],
  saved: [],
  changeLiked: () => {},
  changeDisliked: () => {},
  changeSaved: () => {},
})

export default ThemeContext
