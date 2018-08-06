import React from 'react';
export const themes = {
    light: {
      background: 'yellow',
    },
    dark: {
      background: '#eeeeee',
    },
  };

  export const ThemeContext = React.createContext(
    themes.dark
  );