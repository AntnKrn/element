import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/widgets/layout';

import { MainPage } from './main';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
]);
