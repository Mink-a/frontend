import {
  Box,
  Button,
  Center,
  Paper,
  PasswordInput,
  TextInput,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { useNavigate } from 'react-router-dom';

import { DASHBOARD_ROUTE } from '@config/const';
import { useAuthRoute } from '@hooks/useAuth';
// import { useLogin } from '@hooks/useLogin';
import { loginSchema } from '@utils/schema';
import { LoginCredentials } from './types';
import { useAuthStore } from '@store/useAuth';

export function LoginPage() {
  useAuthRoute();
  const { setAuth } = useAuthStore.getState();
  const navigate = useNavigate();
  // const { mutate, isPending } = useLogin();

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    validate: zodResolver(loginSchema),
  });

  const handleSubmit = async (values: LoginCredentials) => {
    // mutate(values);
    console.log(values);
    setAuth(
      {
        access_token: 'access_token',
        refresh_token: 'refresh_Token',
      },
      'user_name'
    );
    navigate(DASHBOARD_ROUTE);
  };

  return (
    <Center
      w="100%"
      h="100vh"
      sx={{
        position: 'relative',
      }}
    >
      <Paper
        withBorder
        p={30}
        py={50}
        mb={50}
        miw={400}
        radius="md"
        shadow="md"
        component="form"
        onSubmit={form.onSubmit(handleSubmit)}
      >
        <TextInput
          mt={20}
          withAsterisk
          label="Username"
          autoComplete="off"
          {...form.getInputProps('username')}
        />
        <PasswordInput
          withAsterisk
          mt="md"
          label="Password"
          autoComplete="off"
          {...form.getInputProps('password')}
        />
        <Button loading={false} fullWidth mt="xl" type="submit">
          Login
        </Button>
      </Paper>
    </Center>
  );
}
