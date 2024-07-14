import styled from 'styled-components';

import { DESKTOP_BODY_SMALL, MOBILE_HEADING1 } from '@/shared/consts/fontSizes';
import { MAX_WIDTH_XL } from '@/shared/consts/resolutionBreakpoints';

const ScrollingBannerContainer = styled.div`
  overflow: hidden;
  height: 27.5px;
  background-color: black;
  color: white;

  @media ${MAX_WIDTH_XL} {
    height: 40px;
  }
`;

const ScrollingBannerWrapper = styled.div`
  display: flex;
  width: 200%;
  animation: scroll 75s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @media ${MAX_WIDTH_XL} {
    animation: scroll 15s linear infinite;
  }
`;

const ScrollingBannerText = styled.span`
  width: 100%;
  white-space: nowrap;
  font-size: ${DESKTOP_BODY_SMALL.Size};
  font-weight: ${DESKTOP_BODY_SMALL.Weight};
  line-height: 27.5px;

  @media ${MAX_WIDTH_XL} {
    font-size: ${MOBILE_HEADING1.Size};
    font-weight: ${MOBILE_HEADING1.Weight};
    line-height: 40px;
  }
`;

export default {
  ScrollingBannerContainer,
  ScrollingBannerWrapper,
  ScrollingBannerText,
};
