import styled from 'styled-components';

import { MAX_WIDTH_XL } from '@/shared/consts/resolutionBreakpoints';

export const BitListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  margin-bottom: 90px;

  @media ${MAX_WIDTH_XL} {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 45px;
  }
`;
