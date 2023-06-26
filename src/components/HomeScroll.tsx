import "../assets/homeScroll.css"
import { useMantineColorScheme, createStyles  } from '@mantine/core'
// import lightbg from "../assets/homeCodeLight.png"
// import darkbg from "../assets/homeCode2.png"
import lightbg from "../assets/LightCode.png"
import darkbg from "../assets/DarkCode.png"

const useStyles = createStyles((theme) => ({
    textContainer: {
        "height": "50vh",
        "width": "100vw",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
    },

    scrollText: {
        "font-size": "275px",

        [theme.fn.smallerThan('xl')]: {
            "font-size": "240px",
        },
        [theme.fn.smallerThan('lg')]: {
            "font-size": "195px",
        },
        [theme.fn.smallerThan('md')]: {
            "font-size": "145px",
        },
        [theme.fn.smallerThan('sm')]: {
            "font-size": "95px",
          },
        [theme.fn.smallerThan('xs')]: {
            "font-size": "70px",
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