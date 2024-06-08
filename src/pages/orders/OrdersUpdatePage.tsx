import { useParams } from 'react-router-dom';
import { PageLoading } from '@components/loading';
import { OrdersForm } from './components/OrdersForm';
import { useGetOrder, useUpdateOrder } from './queries';
import { Card } from '@components/common';
import { Title } from '@mantine/core';

export function OrdersUpdatePage() {
  const { id = '' } = useParams();
  const { data, isPending: isLoading } = useGetOrder(id);
  const { mutate, isPending } = useUpdateOrder();

  if (isLoading) return <PageLoading />;

  const handleSubmit = (updateData: Order) => {
    console.log(updateData);
    mutate(updateData);
  };

  return (
    <Card>
      <Title order={5} pb="md" c="primary">
        Update Orders
      </Title>
      <OrdersForm
        loading={isPending}
        action="update"
        values={{
          orderNumber: data?.data.orderNumber,
          description: data?.data.description,
          price: data?.data.price,
          quantity: data?.data.quantity,
          date: new Date(data?.data.date),
          customerName: data?.data.customerName,
          customerPhone: data?.data.customerPhone,
          customerNotes: data?.data.customerNotes,
          isSelfPickup: data?.data.isSelfPickup,
          deliveryAddress: data?.data.deliveryAddress,
        }}
        onSubmit={handleSubmit}
      />
    </Card>
  );
}
