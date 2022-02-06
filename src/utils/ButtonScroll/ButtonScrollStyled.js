import styled from "styled-components";

export const ButtonScrollWrapper = styled.button`
  display: none;
  background: transparent;
  border: none;
  height: 30px;
  width: 38px;
  position: relative;

  .buttonArrowSvg {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    border: none;
    right: -1px;
    top: -1px;
    height: 30px;
    width: 32px;
    position: absolute;
    z-index: -2;
    fill: #ff6700;
  }

  @media (min-width: 1280px) {
    display: block;

  }

`