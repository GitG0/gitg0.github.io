import { Global } from '@mantine/core';
import roboto from '../styles/RobotoMono-VariableFont_wght.ttf'

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
            '@font-face': {
                fontFamily: 'Roboto Mono',
                src:  `url(${roboto}) format('truetype')`,
            },
        }
      ]}
    />
  );
}