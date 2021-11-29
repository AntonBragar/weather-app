import styled from "styled-components";

export const FavoriteWrapper = styled.div`

  .favoriteBox {
    display: flex;
    margin: 15px auto 0;
    width: 280px;
    align-items: center;
    justify-content: center;
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
    padding-bottom: 5px;
    
    ::-webkit-scrollbar {
      width: 0px;
      height: 5px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.15);
    }

    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      height: 15px;
    }

  }

  .cityItem {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    background: rgba(16, 33, 54, 0.5);
    font-size: 12px;
    color: #FFFFFF;
    border-radius: 20px;
    margin: 5px;
    
  }

  .cityItem:hover {
    height: 38px;

    .cityTitle {
      font-size: 18px;
    }

    .deleteItem > svg {
      height: 15px;
      width: 15px;
    }
  }

  .cityTitle {
    padding: 0px 10px;
    font-size: 15px;
    color: #FFFFFF;
  }

  .deleteItem {
    padding-right: 10px;
    background-color: transparent;
    border: none;
    fill: #FFFFFF;
  }

  .rightArrow {
    margin-left: 20px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    border: none;
    height: 38px;
    width: 38px;
  }
`