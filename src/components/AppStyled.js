import styled from "styled-components";
export const AppWrapper = styled.div`
  .container {
    max-width: 480px;
    margin: 0 auto;
    padding: 0 30px;
  }
  @media screen and (min-width: 768px) {
    .container {
      max-width: 768px;
      padding: 0 74px;
    }
  }
  
`