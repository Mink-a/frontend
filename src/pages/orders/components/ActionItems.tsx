import { ActionIcon, Group, Text } from '@mantine/core';
import { IconEdit, IconEye, IconTrash } from '@tabler/icons';
import { Link } from 'react-router-dom';
import { useDeleteOrder } from '../queries';
import { modals } from '@mantine/modals';

export function ActionItem({ row }: any) {
  const { mutate, isPending } = useDeleteOrder();
  const openModal = () =>
    modals.openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size="sm">
          Are you sure you want to delete this order? This action cannot be
          undone.
        </Text>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel: () => modals.closeAll(),
      onConfirm: () => mutate(row.original.id),
    });
  const handleDelete = () => {
    openModal();
  };

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
        disabled={isPending}
        aria-label="Delete Orders"
        onClick={handleDelete}
      >
        <IconTrash />
      </ActionIcon>
    </Group>
  );
}
