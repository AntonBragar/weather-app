import styled from "styled-components";

export const FavoriteWrapper = styled.div`
  display: flex;
  margin: 15px auto 0;
  width: 280px;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 500px;
  }
  @media (min-width: 768px) {
    width: 500px;
  }
  @media (min-width: 1280px) {
    width: 520px;
  }

  .citiesList {
    display: flex;
    overflow: scroll;
    width: inherit;
    padding-bottom: 5px;

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
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin: 2px;
    }
  }
`
