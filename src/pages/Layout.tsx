import { useState } from 'react';
import { Outlet } from "react-router-dom";
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core'
import { HeaderMiddle } from "../components/HeaderMiddle";
import { linkData } from "../mockData/linkData";
import { FooterLinks } from "../components/FooterLinks";
import { CustomFonts } from '../components/CustomFonts';
import { Notifications } from '@mantine/notifications';

const Layout = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{ 
      colorScheme,
      fontFamily: 'Roboto Mono',
      white: '#DFDBE5',
      cursorType: 'default',
      colors: {
        brand: ['#f6e4ff','#dbb4ff','#c583fc','#b252f9','#a322f6','#9009dd','#6505ad','#40027d','#21004d','#0b001f'],
      },
      primaryColor: 'brand',
      }} withGlobalStyles withNormalizeCSS>
      <Notifications />
      <HeaderMiddle links = { linkData }/>
      <Outlet />
      <FooterLinks></FooterLinks>
    </MantineProvider>
    <CustomFonts/>
    </ColorSchemeProvider>
  )
};

export default Layout;
