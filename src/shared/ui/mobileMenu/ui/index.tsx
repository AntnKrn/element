import { MobileMenuLine, MobileMenuWrapper } from './style';

type mobileMenuType = {
  isOpen: boolean;
  onClickMobileMenu(): void;
};

export const MobileMenu = ({ isOpen, onClickMobileMenu }: mobileMenuType) => {
  return (
    <MobileMenuWrapper onClick={onClickMobileMenu}>
      <MobileMenuLine
        $isOpen={isOpen}
        $marginTop={5}
        $rotate={-45}
        $translate={[-4, 4]}
      />
      <MobileMenuLine
        $isOpen={isOpen}
        $marginTop={15}
        $rotate={45}
        $translate={[-3, -3]}
      />
    </MobileMenuWrapper>
  );
};
