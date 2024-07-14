import { Outlet } from 'react-router-dom';

import { ScrollingBanner } from '@/features/scrollingBanner';

export const Layout = () => {
  return (
    <>
      <ScrollingBanner />
      <Outlet />
    </>
  );
};
