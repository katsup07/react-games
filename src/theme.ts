import { extendTheme, ThemeConfig} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark', 
};

const theme = extendTheme({
  config,
  colors: {
    gray: { // Light Mode colors
      50: '#ece9ffde',
      100: '#c6bef7de',
      200: '#9f95ecde',
      300: '#796ae2de',
    }
  }
});

export default theme;