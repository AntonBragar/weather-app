import styled from "styled-components";

export const CurrentDateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 35px 0 0;
  width: 280px;
  height: 190px;
  background: rgba(16, 33, 54, 0.8);
  border-radius: 34px;
  @media (min-width: 768px) {
    width: 500px;
    height: 300px;
  }
  @media (min-width: 1280px) {
    margin: auto 0 0;
    width: 630px;
    height: 278px;
    border-radius: 0 34px 0 0; 
  }

  .itemsBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: inherit;
    width: inherit;
    @media (min-width: 768px) {
      height: 220px;
      justify-content: space-around;
    }
    @media (min-width: 1280px) {
      align-items: start;
      width: 433px;
      height: 140px;
      margin-left: 100px;
    }
  }

  .dateAndDay {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .date {
    font-weight: 300;
    font-size: 45px;
    line-height: 1.2;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    margin-right: 20px;
    color: #FFFFFF;
    @media (min-width: 768px) {
      font-weight: 300;
      font-size: 90px;
      line-height: 1.2;
      letter-spacing: 0.04em;
    }
  }

  .degree {
    font-style: normal;
    font-size: 25px;
    margin-bottom: 15px;
    @media (min-width: 768px) {
      font-size: 45px;
    }
  }

  .day {
    font-style: normal;
    font-weight: 300;
    font-size: 45px;
    line-height: 1.2;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    @media (min-width: 768px) {
      font-weight: 300;
      font-size: 90px;
      line-height: 1.2;
      letter-spacing: 0.04em;
    }
  }

  .contentBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1280px) {
      flex-direction: row;
    }
  }

  .monthAndTime {
    display: flex;
    margin-top: 15px;
    @media (min-width: 768px) {
      margin: 25px 0;
    }
    @media (min-width: 1280px) {
      margin: 0;
    }
  }

  .month {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.2;
    display: flex;
    align-items: center;
    text-align: right;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    padding-right: 15px;
    border-right: 1px solid #FFFFFF;
    margin-right: 20px;
    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 1.2;
      align-items: center;
      letter-spacing: 0.04em;
    }
  }

  .time {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.2;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 1.2;
      align-items: center;
      letter-spacing: 0.04em;
    }
  }

  .sunShine {
    display: flex;
    margin-top: 15px;
    @media (min-width: 768px) {
      margin-top: 0;
    }
    @media (min-width: 1280px) {
      margin-left: 40px;
    }
  }

  .sunrise {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.2;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    padding-right: 15px;
    border-right: 1px solid #FFFFFF;
    margin-right: 20px;
    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 1.2;
      letter-spacing: 0.04em;
    }
  }

  .icon {
    fill: #FF6B09;
    margin-right: 7px;
  }

  .sunset {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.2;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 1.2;
      letter-spacing: 0.04em;
    }
  }
`