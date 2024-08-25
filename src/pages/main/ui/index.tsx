import { BitList } from '@/widgets/bitList';

import { MainMenuImg, Shop } from './style';

export const MainPage = () => {
  return (
    <>
      <MainMenuImg src="https://znyworldwide.com/image/catalog/2024/01-ss24/_main/SS24_summer_sale_afishi-01.jpg" />
      <Shop>
        <BitList />
      </Shop>
    </>
  );
};
