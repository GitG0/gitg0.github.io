import { NavLink } from "react-router-dom";
import HomeScroll from "../components/HomeScroll";
import { Text, Container, Button, createStyles, rem, BackgroundImage, useMantineColorScheme } from '@mantine/core';
import circuitDark from "../assets/CircuitBoardDark.svg";
import circuitLight from "../assets/CircuitBoardLight.svg";

const useStyles = createStyles((theme) => ({
  bgimg: {
    backgroundImage: `url(${theme ? circuitLight : circuitDark})`
  },

  wrapper: {
    position: 'relative',
    paddingBottom: rem(130),

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
      },
    },
  }
}));

export default function Home() {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const theme = colorScheme === 'dark';

  return (
    <>
    <BackgroundImage src={theme ? circuitDark : circuitLight}>
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        
        <HomeScroll></HomeScroll>

        <Container size={400}>
          <Text size="xl" className={classes.description}>
            🚧 Under construction 🚧
          </Text>
        </Container>

        <div className={classes.controls}>
        <NavLink to="/about" className={classes.buttonLink}>
          <Button size="lg" className={classes.control}>
            About
          </Button>
        </NavLink>
          
        <NavLink to="/portfolio" className={classes.buttonLink}>
          <Button size="lg" className={classes.control}>
            Portfolio
          </Button>
        </NavLink>
        </div>
      </div>
    </div>
    </BackgroundImage>
    </>
  );
}