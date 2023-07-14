import { createStyles, Container, Title, Text, Button, Group, rem } from '@mantine/core';
import { Illustration } from '../components/404Image';
import { NavLink } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  inner: {
    position: 'relative',
  },

  image: {
    ...theme.fn.cover(),
    opacity: 0.75,
  },

  content: {
    paddingTop: rem(220),
    position: 'relative',
    zIndex: 1,

    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(120),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(38),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(540),
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
}));

export function NoPage() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <Illustration className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>Page Not Found</Title>
          <Text color="dimmed" size="lg" align="center" className={classes.description}>
            The page you are trying to visit does not exist. You may have mistyped the address, or the
            page has been moved to another URL.
          </Text>
          <Group position="center">
            <NavLink to="/contactMe">
                <Button size="md">Return Home</Button>
            </NavLink>
          </Group>
        </div>
      </div>
    </Container>
  );
}