import styled from "styled-components";

export const CitatesWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
  height: fit-content;
  @media (min-width: 768px) {
    width: 400px;
  }

  .quote {
    display: flex;
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