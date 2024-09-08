import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/pages';

import store from './store/store';
import { GlobalStyle } from './style';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </Provider>
    </>
  );
};
