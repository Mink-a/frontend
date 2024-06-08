import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons';

export const DarkMode = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'primary'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
      radius="xl"
    >
      {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
    </ActionIcon>
  );
};
