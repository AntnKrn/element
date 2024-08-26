import styled from 'styled-components';

import ShoppingBagSVG from '@/shared/assets/icons/shoppingBag.svg';
import { MAX_WIDTH_XL } from '@/shared/consts/resolutionBreakpoints';

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 1;
  height: 100vh;
  margin: 50px 0px 0px 50px;

  @media ${MAX_WIDTH_XL} {
    height: 60px;
    width: 100vw;
    margin: 0;
    line-height: 60px;
    background-color: white;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  background-color: none;

  @media ${MAX_WIDTH_XL} {
    background-color: white;
  }
`;

export const Logo = styled.h1`
  margin-bottom: 4rem;
  @media ${MAX_WIDTH_XL} {
    flex: 1;
    padding-left: 25px;
    margin: 0;
  }
`;

export const Navigation = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @keyframes slideNav {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media ${MAX_WIDTH_XL} {
    position: fixed;
    display: ${props => (props.$isOpen ? 'flex' : 'none')};
    padding: 0 0 70px 25px;
    width: 100vw;
    height: calc(100vh - 60px);
    animation: slideNav 0.5s ease-in-out;
    background-color: white;
    overflow: scroll;
  }
`;

export const ShoppingBag = styled(ShoppingBagSVG)`
  display: none;
  width: 24px;
  height: 24px;

  @media ${MAX_WIDTH_XL} {
    display: block;
  }
`;
