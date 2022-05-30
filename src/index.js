import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,body {
background-color: ${(props) => props.theme.colors.bg};
font-size: 62.5%;
}

body {
  font-size: 1.6rem;
}
`;

const theme = {
  colors: {
    primary: '#b85600',
    secondary: '#08002b',
    bg: '#220045'
  },
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
   <GlobalStyle />
    <App />
   </ThemeProvider>
  </React.StrictMode>
);
