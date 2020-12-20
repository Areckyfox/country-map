import styled from "styled-components";
import { breakpoints } from "../../helperStyle";

const ModalStyle = styled.div`
  position: relative;
  .modal-backdrop {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: black;
    box-shadow: 1px 1px 1px black;
    z-index: 100;
    opacity: 0.8;
  }
  .modal-content {
    box-sizing: border-box;
    position: fixed;
    top: 0%;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 80vh;
    z-index: 200;
    pointer-events: auto;
    @media (min-width: ${breakpoints.tabletLandscape}) {
      width: 80%;
      left: 10%;
    }
    @media (min-width: ${breakpoints.desktopLarge}) {
      width: 60%;
      left: 20%;
    }
  }
`;

export default ModalStyle;
