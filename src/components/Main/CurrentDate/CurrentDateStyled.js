import styled from "styled-components";

export const CurrentDateWrapper = styled.div`
  .favoriteBox {
    margin: 35px auto;
    width: 280px;
    height: 190px;
    background: rgba(16, 33, 54, 0.8);
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
  
  .dateAndDay {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .date {
    font-weight: 300;
    font-size: 45px;
    line-height: 54px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    margin-right: 20px;
    color: #FFFFFF;
  }
  
  .degree {
    font-size: 25px;
    margin-bottom: 15px;
  }
  
  .day {
    font-style: normal;
    font-weight: 300;
    font-size: 45px;
    line-height: 54px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
  }
  
  .monthAndTime {
    display: flex;
  }
  
  .month {
   font-size: 14px;
   line-height: 17px;
   display: flex;
   align-items: center;
   text-align: right;
   letter-spacing: 0.04em;
   color: #FFFFFF;
   padding-right: 15px;
   border-right: 1px solid #FFFFFF;
   margin-right: 20px;
  }
  
  .time {
   font-size: 14px;
   line-height: 17px;
   display: flex;
   align-items: center;
   letter-spacing: 0.04em;
   color: #FFFFFF;
  }
  
  .sunShine {
   display: flex;
   margin-top: 15px;
  }
  
  .sunrise {
   font-size: 14px;
   line-height: 17px;
   display: flex;
   align-items: center;
   letter-spacing: 0.04em;
   color: #FFFFFF;
   padding-right: 15px;
   border-right: 1px solid #FFFFFF;
   margin-right: 20px;
  }
  
  .icon {
  fill: #FF6B09;
  margin-right: 7px;
  }
  
  .sunset {
   font-size: 14px;
   line-height: 17px;
   display: flex;
   align-items: center;
   letter-spacing: 0.04em;
   color: #FFFFFF;
  }
`