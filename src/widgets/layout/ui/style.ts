import styled from 'styled-components';

import { MAX_WIDTH_XL } from '@/shared/consts/resolutionBreakpoints';

const Divider = styled.div`
  display: flex;
  flex-direction: column;
`;

const OutletWrapper = styled.div`
  display: grid;
  grid-template-columns: 16vw auto;

  @media ${MAX_WIDTH_XL} {
    display: block;
  }
`;

export default { Divider, OutletWrapper };
