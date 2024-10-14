import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { MobileMenu } from '@/shared/ui/mobileMenu';

import { changeYear } from '../model/yearSlice';

import {
  HeaderContainer,
  Link,
  ListElement,
  Logo,
  Navigation,
  StyledHeader,
} from './style';

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
    setIsOpen(prev => {
      document.body.style.overflow = 'scroll';
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
          <ListElement onClick={() => onClickYear('2024')}>2024</ListElement>
          <ListElement onClick={() => onClickYear('2023')}>2023</ListElement>
          <ListElement onClick={() => onClickYear('2022')}>2022</ListElement>
          <ListElement onClick={() => onClickYear('23archive')}>
            23archive
          </ListElement>
        </ul>
        <ul>
          <ListElement>
            <Link href="https://t.me/rrelement1" target="_blank">
              TG
            </Link>{' '}
            /{' '}
            <Link href="https://soundcloud.com/rrelement" target="_blank">
              SOUNDCLOUD
            </Link>
          </ListElement>
        </ul>
        <ul>
          <ListElement>favorites</ListElement>
        </ul>
      </Navigation>
    </StyledHeader>
  );
};
