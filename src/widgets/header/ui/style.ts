import styled from 'styled-components';

import ShoppingBagSVG from '@/shared/assets/icons/shoppingBag.svg';
import { MAX_WIDTH_XL } from '@/shared/consts/resolutionBreakpoints';

export const StyledHeader = styled.header`
  position: fixed;
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

  @media ${MAX_WIDTH_XL} {
    position: fixed;
    display: ${props => (props.$isOpen ? 'flex' : 'none')};
    transition: transform 1s ease-in-out;
    transform: ${props =>
      props.$isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    width: 100vw;
    height: 100vh;
    background-color: white;
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
