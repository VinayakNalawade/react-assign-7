import styled from 'styled-components'

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
  padding: 4px;
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
`

export const FailureImg = styled.img`
  width: 60%;
`

export const FailureHeading = styled.h1``

export const FailureMsg = styled.p``

export const RetryButton = styled.button``

export const HomeVideosList = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
  flex-wrap: wrap;
`

export const VideoItem = styled.li`
  list-style-type: none;
  width: 100vw;

  @media screen and (min-width: 768px) {
    width: 31%;
    margin: 1%;
  }
`

export const ChannelImg = styled.img`
  width: 60px;
  align-self: flex-start;
  margin-right: 12px;
`

export const VideoItemDetailsContainer = styled.div``

export const VideoTitle = styled.h1`
  font-weight: 600;
  font-size: 18px;
  margin-top: 0;
  padding-top: 0;
`

export const ChannelNameLg = styled.p`
  font-size: 15px;
`

export const PublishedDuration = styled.p``

export const VideoItemDetailsSm = styled.ul``

export const ViewsDurationContainerLg = styled.div``

export const VideoImg = styled.img`
  width: 100%;
`

export const VideoItemDetails = styled.div`
  padding: 5%;
  display: flex;
`
