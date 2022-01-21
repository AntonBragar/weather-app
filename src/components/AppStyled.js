import styled from "styled-components";

export const AppWrapper = styled.div`
  .container {
    max-width: 480px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 424px) {
    .container {
      max-width: 424px;
      padding: 0 10px;
    }
  }
  @media screen and (min-width: 768px) {
    .container {
      max-width: 768px;
      padding: 0 74px;
    }
  }

`