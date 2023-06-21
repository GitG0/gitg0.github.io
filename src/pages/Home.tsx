import { NavLink, Link } from "react-router-dom";
import HomeScroll from "../components/HomeScroll";
import { Text, Container, Button, Overlay, createStyles, rem, BackgroundImage } from '@mantine/core';
import meteor from "../assets/Meteor.svg"

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingBottom: rem(130),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: meteor,

    [theme.fn.smallerThan('xs')]: {
      paddingTop: rem(0),
      paddingBottom: rem(30),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.lg,
      textAlign: 'center',
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    // [theme.fn.smallerThan('xs')]: {
    //   flexDirection: 'column',
    // },
  },

  control: {
    height: rem(42),
    fontSize: theme.fontSizes.md,
  },

  buttonLink: {
    color: theme.colors[theme.primaryColor][0],
    textDecoration: 'none',

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      '&:not(:first-of-type)': {
        // marginTop: theme.spacing.md,
        // marginLeft: 0,
      },
    },
  }
}));

export default function Home() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>

      <div className={classes.inner}>
        
        <HomeScroll></HomeScroll>

        <Container size={400}>
          <Text size="xl" className={classes.description}>
            🚧 Under construction 🚧
          </Text>
        </Container>

        <div className={classes.controls}>
        
        <Link to="/about" className={classes.buttonLink}>
				<Button size="lg" className={classes.control}>
					About
				</Button>
			</Link>
          
            <Link to="/portfolio" className={classes.buttonLink}>
				<Button size="lg" className={classes.control}>
					Portfolio
				</Button>
            </Link>
        {/* </NavLink> */}
        </div>
      </div>
    </div>
  );
}