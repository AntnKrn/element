import { styled } from 'styled-components';

import { MAX_WIDTH_LG } from '@/shared/consts/resolutionBreakpoints';

export const StatusBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 0 40px;
`;

export const Time = styled.span<{ $marginSide: string }>`
  margin-left: ${props => (props.$marginSide === 'left' ? 15 : 0)}px;
  margin-right: ${props => (props.$marginSide === 'right' ? 15 : 0)}px;

  @media ${MAX_WIDTH_LG} {
    display: none;
  }
`;

export const Input = styled.input`
  width: 550px;
  height: 4px;
  background: #c4c4c4;
  border: none;
  border-radius: 4px;
  overflow: hidden;
  appearance: none;
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    height: 4px;
    -webkit-appearance: none;
  }

  &::-webkit-slider-thumb {
    width: 4px;
    height: 4px;
    background: white;
    box-shadow: -550px 0px 0px 550px white;
    -webkit-appearance: none;
  }

  &::-moz-range-progress {
    height: 4px;
    background: white;
    border: none;
    border-radius: transparent;
  }

  &::-moz-range-thumb {
    width: 1px;
    height: 4px;
    background: white;
    border: none;
  }

  &::-moz-range-track {
    border: none;
  }

  &::-ms-fill-lower {
    background-color: white;
  }

  &::-ms-fill-upper {
    background-color: transparent;
  }

  @media ${MAX_WIDTH_LG} {
    width: 100%;
    border-radius: none;
  }
`;
