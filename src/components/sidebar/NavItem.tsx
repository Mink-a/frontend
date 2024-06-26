import { Box, createStyles, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { TablerIcon } from '@tabler/icons';
import { useNavigate, useMatch } from 'react-router-dom';
import { useIsMobile } from '@hooks/useIsMobile';

const useStyles = createStyles((theme) => ({
  root: {
    height: '48px',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    gap: theme.spacing.xs,
    '&[data-active]': {
      color: 'white',
      backgroundColor: theme.colors.primary[4],
    },
    '&[data-active]:hover': {
      backgroundColor: theme.colors.primary[4],
    },
  },

  label: {
    fontSize: 16,
    fontWeight: 500,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[0]
        : theme.colors.gray[7],
  },
  activeLabel: {
    fontSize: 16,
    fontWeight: 500,
    color: 'white',
  },
}));

interface NavItemProps {
  item: {
    icon?: TablerIcon;
    label: string;
    to: string;
    children?:
      | {
          label: string;
          to: string;
        }[]
      | undefined;
  };
  isChild?: boolean;
  hidden?: boolean;
  children?: React.ReactNode;
  onClick: () => void;
}

export function NavItem({ item, hidden, isChild, onClick }: NavItemProps) {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();
  const isActive = useMatch(item.to);
  const isMobile = useIsMobile();
  const { classes } = useStyles();

  const handleClick = (href: string) => {
    if (isMobile) onClick();
    if (href) navigate(href);
  };

  return (
    <NavLink
      opened={hidden ? false : opened}
      label={hidden ? '' : item.label}
      onClick={() => {
        toggle();
        if (!item.children) handleClick(item.to);
      }}
      icon={item.icon ? <item.icon size={20} /> : <Box w={20} />}
      active={isChild ? !hidden && Boolean(isActive) : Boolean(isActive)}
      classNames={{
        root: classes.root,
        label: isActive ? classes.activeLabel : classes.label,
      }}
    >
      {item.children?.map((child) => (
        <NavItem isChild key={child.to} item={child} onClick={onClick} />
      ))}
    </NavLink>
  );
}
