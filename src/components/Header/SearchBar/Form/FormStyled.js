import styled from "styled-components";

export const FormWrapper = styled.div`
    position: relative;
    width: 280px;
    height: 48px;
    @media (min-width: 768px) {
      width: 500px;
    }
    @media (min-width: 1280px) {
      width: 520px;
    }
  .inputForm {
    width: inherit;
    height: 48px;
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

  input {
    padding-left: 57px;
    background-color: #FFFFFF;
    border-radius: 30px;
    width: 280px;
    height: 48px;
    border: none;
    font-size: 14px;
    @media (min-width: 768px) {
      width: 500px;
      font-size: 18px;
    }
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

  .target, .favorite {
    position: absolute;
    border-radius: 50%;
    border: none;
    fill: #7E8691;
    background-color: transparent;
    :hover {
      fill: #000000;
    }
  }
  
  .target {
    top: 12px;
    left: 20px;
  }

  .favorite {
    top: 12px;
    right: 20px;
  }

`