import "../styles/homeScroll.css"
import { useMantineColorScheme, createStyles  } from '@mantine/core'
import lightbg from "../assets/LightCode.png"
import darkbg from "../assets/DarkCode.png"

const useStyles = createStyles((theme) => ({

    scrollText: {
        fontSize: "275px",

        [theme.fn.smallerThan('xl')]: {
            fontSize: "240px",
        },
        [theme.fn.smallerThan('lg')]: {
            fontSize: "195px",
        },
        [theme.fn.smallerThan('md')]: {
            fontSize: "145px",
        },
        [theme.fn.smallerThan('sm')]: {
            fontSize: "95px",
          },
        [theme.fn.smallerThan('xs')]: {
            fontSize: "70px",
        },
    }
}));

export default function HomeScroll(){
    const { colorScheme } = useMantineColorScheme();
    const { classes } = useStyles();
    const theme = colorScheme === 'dark';

    return (        
        <div className="text-container" >
            <h1 className={classes.scrollText} style={{backgroundImage: `url(${theme ? lightbg : darkbg})`}}>GITG0.IO</h1>
        </div>
    )
}