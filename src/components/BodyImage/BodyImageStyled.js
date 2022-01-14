import styled from "styled-components";

export const BackgroundImageDiv = styled.div`
  position: absolute;
  z-index: -999;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0.56deg, #000000 -13.48%, rgba(0, 0, 0, 0) 78.75%),
    url(${({url}) => url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`