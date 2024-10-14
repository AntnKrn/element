import styled from 'styled-components';

import { MAX_WIDTH_SM } from '@/shared/consts/resolutionBreakpoints';

export const MainMenuImg = styled.img`
  width: 100vw;
  height: 95vh;
  grid-column-start: 1;
  grid-column-end: 3;

  @media ${MAX_WIDTH_SM} {
    height: 40vh;
  }
`;

export const Shop = styled.main`
  grid-column-start: 2;
  grid-column-end: 3;
  margin-top: 20px;
`;
