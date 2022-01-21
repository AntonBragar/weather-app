import styled from "styled-components";

export const DaysButtonsWrapper = styled.div`
    margin: 35px auto;
    width: 280px;
    display: flex;
    justify-content: space-between;

  .button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 126px;
    height: 27px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
  }
  
  .active {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 126px;
    height: 27px;
    background: #FFFFFF;
    border-radius: 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
  }
`