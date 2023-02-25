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
  padding: 3%;
  display: flex;
  flex-wrap: wrap;
`

export const VideoItem = styled.div`
  width: 46%;
  margin: 2%;
  @media screen and (min-width: 576px) {
    width: 29%;
    margin: 2%;
  }
`

export const VideoImg = styled.img`
  width: 100%;
`
export const VideoTitle = styled.h1`
  font-weight: 600;
  font-size: 18px;
  margin: 0px;

  margin-top: 10px;
  padding-top: 0;
  color: ${props => (props.theme === true ? '#ffffff' : '#000000')};

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const GamingViews = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  margin-top: 5px;
`
