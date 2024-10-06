import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { MobileMenu } from '@/shared/ui/mobileMenu';

import { changeYear } from '../model/yearSlice';

import { HeaderContainer, Logo, Navigation, StyledHeader } from './style';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const onClickMobileMenu = () => {
    setIsOpen(prev => {
      document.body.style.overflow = prev ? 'scroll' : 'hidden';
      return !prev;
    });
  };

  const onClickYear = (chosenYear: string) => {
    dispatch(changeYear({ year: chosenYear }));
  };

  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo>23BEATS</Logo>
        {/* <ShoppingBag /> */}
        <MobileMenu onClickMobileMenu={onClickMobileMenu} isOpen={isOpen} />
      </HeaderContainer>

      <Navigation $isOpen={isOpen}>
        <ul>
          <li onClick={() => onClickYear('2024')}>2024</li>
          <li onClick={() => onClickYear('2023')}>2023</li>
          <li onClick={() => onClickYear('2022')}>2022</li>
          <li onClick={() => onClickYear('23archive')}>23archive</li>
        </ul>
        <ul>
          <li>TG / SOUNDCLOUD</li>
        </ul>
        <ul>
          <li>favorites</li>
        </ul>
      </Navigation>
    </StyledHeader>
  );
};
