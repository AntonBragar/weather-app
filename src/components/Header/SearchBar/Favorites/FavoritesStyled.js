import styled from "styled-components";

export const FavoriteWrapper = styled.div`
  
  .favoriteBox{
    display: flex;
    margin: 15px auto 0;
    width: 280px;
    @media (min-width: 768px) {
      width: 500px;
    }
    @media (min-width: 768px) {
      width: 500px;
    }
    @media (min-width: 1280px) {
      width: 520px;
    }
  }
  
  .citiesList {
    display: flex;
    overflow: scroll;
    width: inherit;
    border-radius: 20px;
  }
  .citiesList::-webkit-scrollbar {
      display: none;
    }
    
  .cityItem {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    //width: 74px;
    background: rgba(16, 33, 54, 0.5);
    font-size: 12px;
    color: #FFFFFF;
    border-radius: 20px;
    margin: 5px;
  }
  
  .cityItem:hover {
    font-size: 20px;
    font-weight: bold;
    height: 40px;
    .deleteItem > svg {
      height: 13px;
      width: 13px;
    }
  }
  
  .cityTitle {
    padding-left: 13px;
    font-size: 15px;
    color: #FFFFFF;
  }
  
  .deleteItem {
    background-color: transparent;
    border: none;
    fill: #FFFFFF;
    padding: 10px;
  }
  
  .rightArrow {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    border: none;
    height: 43px;
    width: 43px;
  }
`