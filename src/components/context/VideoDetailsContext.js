import React from 'react'

const VideoDetailsContext = React.createContext({
  liked: [],
  disliked: [],
  saved: [],
  changeLiked: () => {},
  changeDisliked: () => {},
  changeSaved: () => {},
})

export default VideoDetailsContext
