import styled from "styled-components";
import { COLORS, SIZES } from "../Vars";

export const Map = styled.div`
  width: 100%;
  padding-bottom: 30px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  
  .map-embeed {
    height: 400px;
    width: 60%;
    border: 4px solid ${COLORS.light_pink};
  }

  @media (max-width: ${SIZES.large}) {
    padding: 0;
    .map-embeed {
      width: 100vw;
      border-right: none;
      border-left: none;
    }
  }
`;
