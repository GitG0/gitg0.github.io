import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Notification } from '@mantine/core';
// import { useForm } from '@mantine/form';
import { useForm, ValidationError } from '@formspree/react';
import { notifications } from '@mantine/notifications';

export function ContactForm() {
    const [state, handleSubmit] = useForm("mvojpjqb");
    if (state.succeeded) {
        notifications.show({
            title: 'Form successfully submitted',
            message: 'Thank you!',
        });
    }

  return (
    <form onSubmit={handleSubmit}>
      <Title
        order={2}
        size="h1"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={900}
        align="center"
      >
        Get in touch
      </Title>

      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          id="email"
          type="email"
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
      />

      <Group position="center" mt="xl">
        <Button type="submit" size="md">
          Send message
        </Button>
      </Group>
    </form>
  );
}