import styled from "styled-components";
import { backgroundColors } from "../../helperStyle";

const MapStyle = styled.div`
  background-color: ${backgroundColors.grey};
  .map-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
  .province {
    transition: fill 0.3s linear;
    &:hover {
      fill: ${backgroundColors.white};
      cursor: pointer;
    }
    &.title {
      fill: red;
    }
  }
  h2 {
    min-height: 40px;
  }
`;

export default MapStyle;
