import "../assets/homeScroll.css"
import { useMantineColorScheme  } from '@mantine/core'
import lightbg from "../assets/homeCodeLight.png"
import darkbg from "../assets/homeCode2.png"

export default function HomeScroll(){
    const { colorScheme } = useMantineColorScheme();
    const theme = colorScheme === 'dark';

    return (        
        <div className="text-container" >
            <h1 style={{backgroundImage: `url(${theme ? lightbg : darkbg})`}}>GitG0.io</h1>
        </div>
    )
}