import { useParams } from 'react-router-dom';
import { Card } from '@components/common';
import { DetailPageTitle } from '@components/headers/DetailPageTitle';
import { useGetOrder } from '@pages/orders/queries';
import { OrdersForm } from './components/OrdersForm';
import { PageLoading } from '@components/loading';

export function OrdersDetailPage() {
  const { id = '' } = useParams();
  const { data, isPending } = useGetOrder(id);

  if (!data?.data) return <PageLoading />;

  return (
    <Card>
      <DetailPageTitle title="Orders Detail" pageUrl="orders" />

      <OrdersForm
        loading={isPending}
        onSubmit={() => {}}
        action="details"
        values={{
          orderNumber: data?.data.orderNumber,
          description: data?.data.description,
          price: data?.data.price,
          quantity: data?.data.quantity,
        }}
      />
    </Card>
  );
}
