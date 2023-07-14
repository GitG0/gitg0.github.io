import { BackgroundImage, useMantineColorScheme } from '@mantine/core';
import { Bullets } from "../components/Bullets";
import ShapesLight from "../assets/ShapesLight.svg"
import ShapesDark from "../assets/ShapesDark.svg"

export default function Home(){
    const { colorScheme } = useMantineColorScheme();
    const theme = colorScheme === 'dark';
    
    return(
        <BackgroundImage src={theme ? ShapesDark : ShapesLight}>
            <Bullets></Bullets>
        </BackgroundImage>
    );
}