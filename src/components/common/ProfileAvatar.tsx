import { Avatar, Group, Menu, Text, UnstyledButton } from '@mantine/core';
import { useAuthStore } from '@store/useAuth';
import { IconChevronDown, IconLogout } from '@tabler/icons';
import { useNavigate } from 'react-router-dom';

export function ProfileAvatar() {
  const { logout, user } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    navigate('/');
  };

  if (!user) return <Avatar radius="xl" onClick={handleLogout} />;

  return (
    <Menu width={200} position="bottom-end">
      <Menu.Target>
        <UnstyledButton>
          <Group>
            <Avatar radius="xl" />
            <Text truncate maw={200}>
              {user.username}
            </Text>
            <IconChevronDown size={18} />
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item icon={<IconLogout size={14} />}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
