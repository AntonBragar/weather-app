import styled from "styled-components";

export const CurrentWeatherWrapper = styled.div`
  .favoriteBox {
    margin-top: 35px;
    width: 280px;
    height: 190px;
    background: #102136;
    box-shadow: 0px 5px 33px rgba(16, 33, 54, 0.6);
    border-radius: 34px;
  }

  .itemsBox {
    width: 170px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .weatherAndLocation {
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .weatherImage {
    width: 35px;
    height: auto;
    margin-bottom: 5px;
  }

  .location {
    font-size: 16px;
    line-height: 19px;
    color: #767D85;
  }

  .temperature {
    margin-top: 25px;
    display: flex;
    align-items: center;
  }

  .tempBigNum {
    margin-right: 33px;
    font-style: normal;
    font-weight: 300;
    font-size: 45px;
    line-height: 54px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
  }
  .tempList{
    display: flex;
    
  }
  .tempItem {
    display: flex;
    flex-direction: column;
    
    :first-child{
      padding-right: 5px;
      border-right: 1px solid #27384A;
    }
    :last-child{
      padding-left: 5px;
    }
  }

  .tempTitle {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #767D85;
  }

  .tempNum {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
  }
`