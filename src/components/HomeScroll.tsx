import "../assets/homeScroll.css"
import { useMantineColorScheme, createStyles  } from '@mantine/core'
import lightbg from "../assets/homeCodeLight.png"
import darkbg from "../assets/homeCode2.png"

const useStyles = createStyles((theme) => ({
    textContainer: {
        "height": "50vh",
        "width": "100vw",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
    },

    scrollText: {
        "font-size": "250px",
        "-webkit-transform":"scale(1,1.5)",
        "WebkitTransform": "scale(1,1.5)",
        "MozTransform": "scale(1,1.5)",
        "MsTransform": "scale(1,1.5)",
        "OTransform": "scale(1,1.5)",
        "transform": "scale(1,1.5)",

        [theme.fn.smallerThan('lg')]: {
            "font-size": "200px",
        },

        [theme.fn.smallerThan('md')]: {
            "font-size": "150px",
        },

        [theme.fn.smallerThan('sm')]: {
            "font-size": "100px",
          },

        [theme.fn.smallerThan('xs')]: {
            "font-size": "75px",
            "-webkit-transform":"scale(1,3)",
            "WebkitTransform": "scale(1,3)",
            "MozTransform": "scale(1,3)",
            "MsTransform": "scale(1,3)",
            "OTransform": "scale(1,3)",
            "transform": "scale(1,3)"
        },
    }
}));

export default function HomeScroll(){
    const { colorScheme } = useMantineColorScheme();
    const { classes } = useStyles();
    const theme = colorScheme === 'dark';

    return (        
        <div className="text-container" >
            <h1 className={classes.scrollText} style={{backgroundImage: `url(${theme ? lightbg : darkbg})`}}>GitG0.io</h1>
        </div>
    )
}