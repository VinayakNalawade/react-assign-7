import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const ReactLink = styled(Link)`
  text-decoration: none;
  background-color: ${props => props.bgColor};
  border: none;
  outline: none;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 85%;
  }
`

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const SubContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

export const BannerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const HomeFailureContainer = styled.div`
  min-height: 100%;
  display: flex;
  background-color: ${props => (props.theme === true ? '#000000' : '#f1f1f1')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5%;
`

export const FailureImg = styled.img`
  width: 60%;
`

export const FailureHeading = styled.h1`
  font-size: 24px;
  color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
`

export const FailureMsg = styled.p`
  font-size: 15px;
  color: #616e7c;
`

export const TrendingContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#181818' : '#f1f1f1')};
  flex-grow: 1;
`
export const TrendingBanner = styled.div`
  display: flex;
  align-items: center;
  padding: 2%;
  padding-left: 4%;
  background-color: ${props => (props.theme === true ? '#212121' : '#d7dfe9')};
`

export const TrendingButton = styled.button`
  border: none;
  outline: none;
  background-color: ${props => (props.theme === true ? '#000000' : '#cbd5e1')};
  border-radius: 45px;
  width: 45px;
  height: 45px;
  margin-right: 12px;
`

export const TrendingHeading = styled.h1`
  font-size: 24px;
  margin: 0;
  color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
`

export const TrendingList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const VideoItem = styled.div`
  list-style-type: none;
  width: 100%;
  margin-top: 2%;
  @media screen and (min-width: 576px) {
    display: flex;
  }
`

export const VideoImg = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 50%;
  }
`

export const VideoItemDetailsContainer = styled.div``

export const VideoTitle = styled.h1`
  font-weight: 600;
  font-size: 18px;
  margin-top: 0;
  padding-top: 0;
  color: ${props => (props.theme === true ? '#ffffff' : '#000000')};

  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
`

export const ChannelNameLg = styled.p`
  font-size: 12px;
  margin-right: 15px;
  font-weight: 600;
  color: #64748b;

  @media screen and (max-width: 575px) {
    display: none;
  }
`

export const ChannelViewsLg = styled.li`
  list-style-type: none;
  margin-right: 25px;
  font-size: 12px;
  color: #64748b;
  font-weight: 600;
`

export const ChannelNameSm = styled.li`
  font-size: 12px;
  font-weight: 600;
  list-style-type: none;
  margin-right: 25px;
  color: #64748b;
`

export const PublishedDuration = styled.li`
  list-style-type: disc;
  margin-right: 25px;
  font-size: 12px;
  font-weight: 600;
  color: #64748b;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`

export const VideoItemDetailsSm = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const ViewsDurationContainerLg = styled.div`
  display: flex;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const VideoItemDetails = styled.div`
  padding: 3%;
  display: flex;
`

export const ChannelImg = styled.img`
  width: 40px;
  align-self: flex-start;
  margin-right: 12px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
