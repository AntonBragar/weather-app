import styled from "styled-components";

export const FiveDaysWeatherWrapper = styled.div`
  .weatherBox {
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 280px;
    background: rgba(16, 33, 54, 0.8);
    box-shadow: 0px 5px 33px rgba(16, 33, 54, 0.6);
    border-radius: 34px;
  }

  .titleLocation {
    margin-top: 30px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
  }

  .forecastsList {
    width: 220px;
    overflow: scroll;
    margin-top: 20px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;

    ::-webkit-scrollbar {
      width: 0px;
      height: 3px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.15);
    }

    ::-webkit-scrollbar-thumb {
      background-color: #FF6B09;
      border-radius: 4px;
      height: 5px;
    }
  }

  .forecastItem {
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .week {
    margin-bottom: 17px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    opacity: 0.55;

  }

  .date {
    margin-bottom: 15px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
  }

  .icon {
    margin-bottom: 15px;
    width: 35px;
    height: auto;
  }

  .tempList {
    display: flex;
    margin-bottom: 5px;
  }

  .tempItem {
    display: flex;
    flex-direction: column;

    :first-child {
      padding-right: 5px;
      border-right: 1px solid #27384A;
    }

    :last-child {
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
    color: #FF6B09;
  }

  .moreInfo {
    background-color: transparent;
    border: none;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    text-decoration-line: underline;
    color: #FFFFFF;
    opacity: 0.3;
    :hover{
      opacity: 1;
    }
  }

  .hourlyForecastsList {
    width: 260px;
    overflow: scroll;
    margin-top: 20px;
    margin-bottom: 30px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    ::-webkit-scrollbar {
      width: 0px;
      height: 3px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.15);
    }

    ::-webkit-scrollbar-thumb {
      background-color: #FF6B09;
      border-radius: 4px;
      height: 5px;
    }
  }

  .hourlyForecastItem {
    min-width: 120px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;

    
  }

  .time {
    padding-top: 15px;
    margin-bottom: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    color: #FFFFFF;

    opacity: 0.54;
  }

  .icon {
    
  }

  .temp {
    margin-bottom: 10px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FF6B09;
  }

  .atmosphericList {
    padding-bottom: 15px;
  }
  }

  .atmosphericItem {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    
  }


  .text{
    margin-left: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    opacity: 0.54;
  }
  .pressureIcon,.humidityIcon,.windSpeedIcon {
    fill: #FFFFFF;
    opacity: 0.54;
    width: 18px;
    height: auto;
  }
  {
  
  
`