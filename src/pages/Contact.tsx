import { ContactForm } from "../components/ContactForm"
import { Container, createStyles, BackgroundImage, useMantineColorScheme } from '@mantine/core';
import LuminaryLight from "../assets/LuminaryLight.svg";
import LuminaryDark from "../assets/LuminaryDark.svg";

const useStyles = createStyles((theme) => ({
    inner: {
      justifyContent: 'space-between',
      paddingTop: `calc(${theme.spacing.xl} * 1)`,
      paddingBottom: `calc(${theme.spacing.xl} * 10)`,
    },
  }));

export default function Contact(){
    const {classes} = useStyles();
    const { colorScheme } = useMantineColorScheme();
    const theme = colorScheme === 'dark';
    return (
        <BackgroundImage src={theme ? LuminaryDark : LuminaryLight}>
        <Container size="sm" px="xs" className={classes.inner}>
            <ContactForm />
        </Container>
        </BackgroundImage>
    )
}