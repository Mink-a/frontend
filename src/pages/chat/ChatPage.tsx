import { Card } from '@components/common';
import {
  Box,
  Title,
  Text,
  ScrollArea,
  Textarea,
  TextInput,
  Paper,
  Avatar,
  ActionIcon,
} from '@mantine/core';
import { IconSend } from '@tabler/icons';

const UserMessage = ({ text }: { text: string }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'flex-end',
        gap: '10px',
      }}
    >
      <Paper
        shadow="xs"
        p="sm"
        sx={{
          maxWidth: '60%',
          backgroundColor: 'blue',
          color: 'white',
          textAlign: 'right',
          width: 'fit-content',
        }}
      >
        <Text>{text}</Text>
      </Paper>
      <Avatar />
    </Box>
  );
};

const BotMessage = ({ text }: { text: string }) => {
  return (
    <Box
      my="sm"
      sx={{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'flex-start',
        gap: '10px',
      }}
    >
      <Avatar />
      <Paper
        shadow="xs"
        p="sm"
        sx={{
          maxWidth: '60%',
          backgroundColor: 'white',
          color: 'blue',
          width: 'fit-content',
        }}
      >
        <Text>{text}</Text>
      </Paper>
    </Box>
  );
};

export function ChatPage() {
  return (
    <Card h="80vh" sx={{ position: 'relative' }}>
      <Title order={5} mb="md">
        Chat with AI
      </Title>
      <ScrollArea h="80%">
        <UserMessage text="Hello, how are you?" />
        <BotMessage text="I'm doing well, thank you for asking." />
        <UserMessage text="How can I help you?" />
        <BotMessage text="I can help you with a variety of tasks, such as scheduling appointments, sending emails, and more." />
        <UserMessage text="Can you schedule an appointment for me?" />
        <BotMessage text="Sure, I can help you with that. What time and date would you like the appointment to be?" />
        <UserMessage text="I need to schedule an appointment for next week." />
        <BotMessage text="Great, I can help you with that. What time and date would you like the appointment to be?" />
        <UserMessage text="I need to schedule an appointment for next week." />
        <BotMessage text="Great, I can help you with that. What time and date would you like the appointment to be?" />
      </ScrollArea>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
        p="md"
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'end',
          }}
        >
          <TextInput placeholder="Type a message..." sx={{ width: '100%' }} />
          <ActionIcon variant="filled" aria-label="send" p={0}>
            <IconSend style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
        </Box>
      </Box>
    </Card>
  );
}
