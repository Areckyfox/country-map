import styled from "styled-components";
import { backgroundColors, breakpoints } from "../../helperStyle";

const MapStyle = styled.div`
  background-color: ${backgroundColors.grey};
  text-align: center;
  height: 100%;
  .map-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;

    @media (min-width: 790px) {
      width: 600px;
    }
  }
  svg {
    min-height: 300px;
    height: 100%;
    @media (min-width: 790px) {
      height: 500px;
    }
  }
  .province {
    transition: fill 0.3s linear;
    &:hover {
      fill: ${backgroundColors.white};
      cursor: pointer;
    }
  }
  h2 {
    min-height: 40px;
  }
`;

export default MapStyle;
