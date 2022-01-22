import styled from "styled-components";
import {createWeatherIconSrc} from "../../../utils/createWeatherIconSrc";


export const WeatherImageContainer = styled.div`
  background-image: url(${({icon}) => createWeatherIconSrc(icon)});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 70px;
  height: 50px;
`

export const CurrentWeatherWrapper = styled.div`
  width: 280px;
  height: 190px;
  background: #102136;
  box-shadow: 0px 5px 33px rgba(16, 33, 54, 0.6);
  border-radius: 34px;
  @media (min-width: 768px) {
    width: 500px;
    height: 278px;
  }
  @media (min-width: 1280px) {
    border-radius: 34px 0 0 34px;
  }

  .itemsBox {
    width: 170px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
      height: inherit;
    }
  }

  .weatherAndLocation {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
      margin-top: 0;
    }
  }


  .location {
    font-size: 16px;
    line-height: 1.18;
    color: #767D85;
    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 1.2;
    }
  }

  .temperature {
    margin-top: 25px;
    display: flex;
    align-items: center;
    @media (min-width: 768px) {
      margin-top: 0px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .tempBigNum {
    margin-right: 33px;
    font-style: normal;
    font-weight: 300;
    font-size: 45px;
    line-height: 1.2;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    @media (min-width: 768px) {
      margin-right: 0;
      font-weight: 300;
      font-size: 90px;
      line-height: 1.2;
    }
  }

  .tempList {
    display: flex;

  }

  .tempItem {
    display: flex;
    flex-direction: column;

    :first-child {
      padding-right: 5px;
      border-right: 1px solid #27384A;
      @media (min-width: 768px) {
        padding-right: 10px;
      }
    }

    :last-child {
      padding-left: 5px;
      @media (min-width: 768px) {
        padding-left: 10px;
      }
    }
  }

  .tempTitle {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #767D85;
    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 1.2;
    }
  }

  .tempNum {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 1.18;
    }
  }
`