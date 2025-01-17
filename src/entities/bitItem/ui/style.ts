import styled from 'styled-components';

import PlaySVG from '@/shared/assets/icons/play.svg';
import { MAX_WIDTH_SM } from '@/shared/consts/resolutionBreakpoints';

export const ImgWrapper = styled.div`
  position: relative;
  height: 367px;

  &:hover {
    img {
      opacity: 0.3;
    }

    svg {
      display: block;
    }
  }

  @media ${MAX_WIDTH_SM} {
    height: 200px;
  }
`;

export const BitImg = styled.img`
  object-fit: fill;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const BtnPlayOnImg = styled(PlaySVG)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  width: 30px;
  height: 30px;
  z-index: 1;
`;

export const BitInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const BeatWrapper = styled.div`
  padding: 15px;
`;
