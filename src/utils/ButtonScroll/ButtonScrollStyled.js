import styled from "styled-components";

export const ButtonScrollWrapper = styled.button`
  display: none;
  background: transparent;
  border: none;
  height: 30px;
  width: 38px;
  position: relative;
  color: #FF6B09;
  svg {
    right: -1px;
    top: -1px;
    height: 30px;
    width: 32px;
    position: absolute;
    z-index:-1;
  }

  @media (min-width: 1280px) {
    display: block;
  }

`