import {
    createStyles,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    rem,
  } from '@mantine/core';
  import { IconCheck } from '@tabler/icons-react';
  import { NavLink } from 'react-router-dom';
  
  const useStyles = createStyles((theme) => ({
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },
  
    content: {
      maxWidth: rem(480),
      marginRight: `calc(${theme.spacing.xl} * 3)`,
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(44),
      lineHeight: 1.2,
      fontWeight: 900,
  
      [theme.fn.smallerThan('xs')]: {
        fontSize: rem(28),
      },
    },
  
    control: {
      [theme.fn.smallerThan('xs')]: {
        flex: 1,
      },
    },
  
    image: {
      flex: 1,
  
      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },
  
    highlight: {
      position: 'relative',
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      borderRadius: theme.radius.sm,
      padding: `${rem(4)} ${rem(12)}`,
    },
    
    buttonLink: {
      color: theme.colors[theme.primaryColor][0],
      textDecoration: 'none'
    }
  }));
  
  export function HeroBullets() {
    const { classes } = useStyles();
    return (
        <Container>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                <span className={classes.highlight}>GitG0</span>.io
              </Title>
              <Text color="dimmed" mt="md">
              Hi 👋! I'm a current web developer with an interest in working with front-end frameworks and responsive web design. Below you can find a little more about me or contact me directly.
              </Text>
  
              <List 
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={rem(12)} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>Web development</b> – Experience working with a variety of web languages and frameworks, including HTML, CSS, JavaScript, React and Node.js.
                </List.Item>
                <List.Item>
                  <b>My stack</b> – In terms of personal coding projects I prefer Java as it's the one I have the most experience with. I've also worked with Python, C++ and C#.
                </List.Item>
                <List.Item>
                  <b>Recreational</b> – Bouldering, cycling and swimming take up my spare time nowadays! I also really enjoy snowboarding and skating in the winter.
                </List.Item>
              </List>
  
              <Group mt={30}>
                <Button radius="xl" size="md" className={classes.control}>
                  <NavLink to="/contactMe" className={classes.buttonLink}>
                    Contact me! 
                  </NavLink>
                </Button>
              </Group>
            </div>
          </div>
        </Container>
    );
  }