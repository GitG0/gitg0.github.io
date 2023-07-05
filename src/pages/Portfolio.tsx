import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    Anchor,
    BackgroundImage,
    useMantineColorScheme
  } from '@mantine/core';
  import { IconBrandGit, } from '@tabler/icons-react';
  import RectLight from "../assets/RectLight.svg";
  import RectDark from "../assets/RectDark.svg";

  const mockdata = [
    {
      title: 'gitg0.github.io',
      link: 'https://github.com/GitG0/gitg0.github.io',
      description:
        'My personal webpage and portfolio. Here you can find links to past projects and a little more about me. Currently being built 🏗',
      icon: IconBrandGit,
      badge: 'Typescript',
      stars: '1'
    },
    {
      title: 'ProjectWixs',
      link: 'https://github.com/DrayWilliams1/ProjectWixs',
      description:
        'A content management system capstone project. ',
      icon: IconBrandGit,
      badge: 'JavaScript',
      stars: '3'
    },
  ];
  
  const useStyles = createStyles((theme) => ({
    inner: {
      justifyContent: 'space-between',
      paddingTop: `calc(${theme.spacing.xl} * 1)`,
      paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    },

    title: {
      fontSize: rem(34),
      fontWeight: 900,
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: rem(24),
      },
    },
  
    description: {
      maxWidth: 600,
      margin: 'auto',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  
    card: {
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    cardTitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
      },
    },
  }));
  
  export default function Portfolio() {
    const { classes, theme } = useStyles();
    const { colorScheme } = useMantineColorScheme();
    const theme2 = colorScheme === 'dark';
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
        <Group position="apart" mt="md" mb="xs">
          <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
            <Anchor href={feature.link}> {feature.title} </Anchor>
          </Text>
          <Badge variant="light">
            Public
          </Badge>
        </Group>

        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
        <Badge size="xs">
          {feature.badge}
        </Badge>
        <Badge size="xs">
          ⭐{feature.stars}
        </Badge>
      </Card>
    ));
  
    return (
      <BackgroundImage src={theme2 ? RectDark : RectLight}>
        <div className={classes.inner}>
      <Container size="lg" py="xl">
        <Group position="center">
        </Group>
  
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Past work
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Some of my past projects that have a public Github repository.
        </Text>
  
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>
      </Container>
      </div>
      </BackgroundImage>
    );
  }