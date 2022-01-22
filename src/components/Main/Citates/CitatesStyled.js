import styled from "styled-components";

export const CitatesWrapper = styled.div`
  margin: 30px 0;
  width: 270px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    width: 490px;
  }
  @media (min-width: 1280px) {
    margin: auto 20px;
  }
  .quote {
    font-style: italic;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.2;
    text-align: right;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    @media (min-width: 768px) {
      font-style: italic;
      font-size: 22px;
      line-height: 26px;
    }
  }

  .author {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 1.2;
    text-align: right;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    padding-top: 10px;
  }
`