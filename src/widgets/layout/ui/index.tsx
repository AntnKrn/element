import { Outlet } from 'react-router-dom';

import { ScrollingBanner } from '@/features/scrollingBanner';
import { Header } from '@/widgets/header';

import Styled from './style';

export const Layout = () => {
  return (
    <>
      <Styled.Divider>
        <ScrollingBanner />
        <Header />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '16vw auto',
          }}
        >
          <Outlet />
        </div>
      </Styled.Divider>
    </>
  );
};
