import { useState } from 'react';

import { MobileMenu } from '@/shared/ui/mobileMenu';

import { HeaderContainer, Logo, Navigation, StyledHeader } from './style';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickMobileMenu = () => {
    setIsOpen(prev => {
      document.body.style.overflow = prev ? 'scroll' : 'hidden';
      return !prev;
    });
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
          <li>2024</li>
          <li>2023</li>
          <li>2022</li>
          <li>23archive</li>
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
