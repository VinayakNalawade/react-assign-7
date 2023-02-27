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

export const HomeContainer = styled.div`
  background-color: ${props => (props.theme === true ? '#181818' : '#f1f1f1')};
  padding-top: 1px;
  flex-grow: 1;
  @media screen and (min-width: 768px) {
    padding-top: 0;
    padding: 5%;
  }
`
export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #616e7c;
  border-radius: 2px;
  max-width: 350px;

  @media screen and (max-width: 768px) {
    margin: 20px;
  }
`
export const SearchInput = styled.input`
  outline: none;
  border: none;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  flex-grow: 1;
  padding: 7px;
  font-size: 15px;
  background-color: ${props =>
    props.theme === true ? 'transparent' : '#ffffff'};
`
export const SearchButton = styled.button`
  outline: none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  padding: 7px;
  padding-left: 12px;
  padding-right: 12px;
  border: none;
  background-color: ${props => (props.theme === true ? '#94a3b8' : '#f1f1f1')};
`
export const HomeFailureContainer = styled.div`
  min-height: 100%;
  display: flex;
  background-color: ${props => (props.theme === true ? '#212121' : '#f1f1f1')};
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

export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  outline: none;
  border: none;
  padding: 10px;
  font-size: 17px;
  width: 100px;
  border-radius: 8px;
  margin-top: 30px;
`

export const HomeVideosList = styled.ul`
  padding: 0;
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
  flex-wrap: wrap;
`

export const VideoItem = styled.div`
  list-style-type: none;
  width: 100vw;

  @media screen and (min-width: 768px) {
    width: 31%;
    margin: 1%;
  }
`

export const ChannelImg = styled.img`
  width: 30px;
  align-self: flex-start;
  margin-right: 8px;
`

export const VideoItemDetailsContainer = styled.div``

export const VideoItemDetailsLg = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const VideoTitle = styled.h1`
  font-weight: 600;
  font-size: 16px;
  margin-top: 0;
  padding-top: 0;
  color: ${props => (props.theme === true ? '#ffffff' : '#000000')};

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const ChannelNameLg = styled.p`
  font-size: 12px;
  margin-right: 15px;
  font-weight: 600;
  color: #64748b;

  @media screen and (max-width: 767px) {
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
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ViewsDurationContainerLg = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const VideoImg = styled.img`
  width: 100%;
`

export const VideoItemDetails = styled.div`
  padding: 5%;
  display: flex;
`
