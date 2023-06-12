import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { MantineProvider, ColorSchemeProvider, ColorScheme  } from '@mantine/core'
import { HeaderMiddle } from "../components/HeaderMiddle";
import { FooterLinks } from "../components/FooterLinks";
import data from "../assets/attributes.json"

const Layout = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <>
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      <HeaderMiddle links={
                        [{
                            "link": "/about",
                            "label": "Home"
                            },
                            {
                            "link": "/learn",
                            "label": "Features"
                            },
                            {
                            "link": "/pricing",
                            "label": "Pricing"
                            }]
                        }></HeaderMiddle>
      <Outlet />
      <FooterLinks data={[{
      "title": "About",
      "links": [
        {
          "label": "Features",
          "link": "#"
        },
        {
          "label": "Pricing",
          "link": "#"
        },
        {
          "label": "Support",
          "link": "#"
        },
        {
          "label": "Forums",
          "link": "#"
        }
      ]
    },
    {
      "title": "Project",
      "links": [
        {
          "label": "Contribute",
          "link": "#"
        },
        {
          "label": "Media assets",
          "link": "#"
        },
        {
          "label": "Changelog",
          "link": "#"
        },
        {
          "label": "Releases",
          "link": "#"
        }
      ]
    },
    {
      "title": "Community",
      "links": [
        {
          "label": "Join Discord",
          "link": "#"
        },
        {
          "label": "Follow on Twitter",
          "link": "#"
        },
        {
          "label": "Email newsletter",
          "link": "#"
        },
        {
          "label": "GitHub discussions",
          "link": "#"
        }]}]}></FooterLinks>
    </MantineProvider>
    </ColorSchemeProvider>
    </>
  )
};

export default Layout;
