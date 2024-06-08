import { Button, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

type FormActionProps = {
  loading: boolean;
  action?: string;
};

export function FormAction({ loading, action = 'create' }: FormActionProps) {
  const navigate = useNavigate();

  return (
    <Group position="right" mt="md">
      <Button variant="outline" onClick={() => navigate(-1)}>
        Back
      </Button>
      {!(action === 'details') && (
        <Button type="submit" loading={loading}>
          {action === 'create' ? 'Create' : 'Save'}
        </Button>
      )}
    </Group>
  );
}
