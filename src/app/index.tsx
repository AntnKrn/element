import { RouterProvider } from 'react-router-dom';

import { router } from '@/pages';

import { GlobalStyle } from './style';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};
