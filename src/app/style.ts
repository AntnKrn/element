import { createGlobalStyle } from 'styled-components';

import OpenSans from '@/shared/assets/fonts/OpenSans.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: OpenSans;
    src: url(${OpenSans});
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: OpenSans;
  }

  a, a:link, a:visited, a:hover  {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  input, button {
    border: none;
    border-radius: 0;

    &:focus {
        outline: none;
    }
  }
`;
