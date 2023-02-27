import React from 'react'

const ThemeContext = React.createContext({
  isDark: '',
  changeTheme: () => {},
  showBanner: '',
  changeShowBanner: () => {},
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
})

export default ThemeContext
