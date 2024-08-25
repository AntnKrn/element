import styled from 'styled-components';

import PlaySVG from '@/shared/assets/icons/play.svg';

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;

  &:hover {
    img {
      opacity: 0.3;
    }

    svg {
      display: block;
    }
  }
`;

export const BitImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const BtnPlayOnImg = styled(PlaySVG)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  width: 30px;
  height: 30px;
`;

export const BitInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
