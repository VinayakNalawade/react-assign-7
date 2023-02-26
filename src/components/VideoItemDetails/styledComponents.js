import styled from 'styled-components'

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

export const VideoItem = styled.div`
  background-color: ${props => (props.theme === true ? '#181818' : '#f1f1f1')};
  flex-grow: 1;
  padding-top: 2%;
  @media screen and (min-width: 768px) {
    padding-top: 0;
    padding: 2%;
  }
`
export const TrendingHeading = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  color: ${props => (props.theme === true ? '#ffffff' : '#000000')};
`

export const ViewsDurationContainerLg = styled.div`
  display: flex;
`

export const ChannelViewsLg = styled.li`
  list-style-type: none;
  margin-right: 25px;
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
`

export const PublishedDuration = styled.li`
  list-style-type: disc;
  margin-right: 25px;
  font-size: 14px;
  font-weight: 500;
  color: #64748b;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`
export const ChannelImg = styled.img`
  width: 40px;
  align-self: flex-start;
  margin-right: 12px;
`
export const VideoDetailsItem = styled.div`
  padding: 3%;
  padding-left: 0;
  display: flex;
`

export const VideoItemDetailsContainer = styled.div``

export const VideoTitle = styled.h1`
  font-weight: 600;
  font-size: 18px;
  margin-top: 0;
  padding-top: 0;
  color: ${props => (props.theme === true ? '#ffffff' : '#000000')};

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const VideoDetails = styled.div`
  padding-top: 2%;
  @media screen and (max-width: 767px) {
    padding-top: 0;
    padding: 2%;
  }
`

export const ViewsAndLike = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2%;
  padding-bottom: 2%;
  border-bottom: 1px solid #d7dfe9;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const VideoItemDescription = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 400;
  color: #64748b;
  @media screen and (min-width: 768px) {
    padding-left: 52px;
  }
`

export const LikeDislikeSave = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    margin-top: 2%;
  }
`

export const LikeLabel = styled.label`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.color};
`

export const Like = styled.div`
  margin-right: 17px;
  display: flex;
  align-items: center;
`

export const ChannelNameLg = styled.p`
  font-size: 12px;
  margin-right: 15px;
  font-weight: 600;
  color: #64748b;
`
