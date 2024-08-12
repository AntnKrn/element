import styled from 'styled-components';

import { MAX_WIDTH_XL } from '@/shared/consts/resolutionBreakpoints';

export const MobileMenuWrapper = styled.div`
  display: none;
  position: relative;
  width: 24px;
  height: 24px;
  margin-right: 25px;

  @media ${MAX_WIDTH_XL} {
    display: block;
  }
`;

export const MobileMenuLine = styled.div<{
  $marginTop: number;
  $rotate: number;
  $translate: number[];
  $isOpen: boolean;
}>`
  position: absolute;
  top: ${props => props.$marginTop}px;
  z-index: 3;
  width: 100%;
  height: 2px;
  background: black;
  transition: 0.4s;
  -webkit-transform: ${props =>
    props.$isOpen
      ? `rotate(${props.$rotate}deg) translate(
      ${props.$translate[0]}px,
      ${props.$translate[1]}px
    )`
      : null};
  transform: ${props =>
    props.$isOpen
      ? `rotate(${props.$rotate}deg) translate(
      ${props.$translate[0]}px,
      ${props.$translate[1]}px
    )`
      : null};
`;
