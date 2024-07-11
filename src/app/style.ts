import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: Sans;
}

a, a:link, a:visited, a:hover  {
  text-decoration: none;
}

input, button {
  border: none;
  border-radius: 0;

  &:focus {
      outline: none;
  }
}
`;
