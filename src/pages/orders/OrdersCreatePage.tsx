import { Title } from '@mantine/core';
import { Card } from '@components/common';
import { useCreateOrder } from './queries';
import { OrdersForm } from './components/OrdersForm';

export function OrdersCreatePage() {
  const { mutate, isPending } = useCreateOrder();

  const handleSubmit = async (data: Order) => {
    mutate(data);
  };

  return (
    <Card>
      <Title order={5} pb="md" c="primary">
        Create Orders
      </Title>

      <OrdersForm
        action="create"
        loading={isPending}
        onSubmit={handleSubmit}
        values={{
          description: '',
          price: 0,
          quantity: 0,
          orderNumber: '',
          date: new Date(),
          customerName: '',
          customerPhone: '',
          customerNotes: '',
          isSelfPickup: false,
          deliveryAddress: '',
        }}
      />
    </Card>
  );
}
