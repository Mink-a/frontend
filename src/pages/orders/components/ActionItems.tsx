import { ActionIcon, Group } from '@mantine/core';
import { IconEdit, IconEye, IconTrash } from '@tabler/icons';
import { Link } from 'react-router-dom';

export function ActionItem({ row }: any) {
  return (
    <Group spacing="xs" noWrap>
      <ActionIcon
        component={Link}
        aria-label="View Orders"
        to={`/d/orders/detail/${row.original.id}`}
      >
        <IconEye />
      </ActionIcon>
      <ActionIcon
        component={Link}
        aria-label="Edit Orders"
        to={`/d/orders/edit/${row.original.id}`}
      >
        <IconEdit />
      </ActionIcon>
      <ActionIcon
        component={Link}
        aria-label="Delete Orders"
        to={`/d/orders/delete/${row.original.id}`}
      >
        <IconTrash />
      </ActionIcon>
    </Group>
  );
}
