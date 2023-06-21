import { NavLink } from "react-router-dom";
import HomeScroll from "../components/HomeScroll";
import { Text, Container, Button, Overlay, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingBottom: rem(130),
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    [theme.fn.smallerThan('xs')]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
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
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    height: rem(42),
    fontSize: theme.fontSizes.md,

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export default function Home() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <HomeScroll></HomeScroll>

        <Container size={640}>
          <Text size="xl" className={classes.description}>
            Welcome to GitG0.io👋! <br></br> 🚧 Under construction 🚧
          </Text>
        </Container>

        <div className={classes.controls}>
        <NavLink to="/about" className={classes.control}>
          <Button size="lg">
            About
          </Button>
        </NavLink>
        <NavLink to="/portfolio" className={classes.control}>
          <Button size="lg">
          Portfolio
          </Button>
        </NavLink>
        </div>
      </div>
    </div>
  );
}