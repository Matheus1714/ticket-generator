import styled from 'styled-components'
import bannerImg from '../../assets/banner.svg'

export const Wrapper = styled.div`
  background-image: url(${bannerImg});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`
