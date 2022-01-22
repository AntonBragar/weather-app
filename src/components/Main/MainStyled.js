import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;

  .firstBlock {
    margin: 0 auto;
  }

  .secondBlock {
    margin: 0 auto;
  }

  .thirdBlock {
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    .thirdBlock {
      height: 100vh;
    }
  }
  @media (min-width: 1280px) {
    .firstBlock {
      margin: 0;
      align-self: end;
    }

    .secondBlock {
      margin: auto 0 0;
      display: flex;
      justify-content: space-between;
    }

  }
`