import { BitList } from '@/widgets/bitList';
import { Player } from '@/widgets/player';

import { MainMenuImg, Shop } from './style';

export const MainPage = () => {
  return (
    <>
      <MainMenuImg src="https://storage.googleapis.com/23beats/photo_2024-03-18_23-19-23.jpg" />
      <Shop>
        <BitList />
      </Shop>
      <Player />
    </>
  );
};
