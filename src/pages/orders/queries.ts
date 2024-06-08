import { showNotification } from '@mantine/notifications';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { ordersKeys } from '@config/queryKeys';
import {
  createOrder,
  getOrder,
  getOrders,
  updateOrder,
} from '@services/orders';

export function useGetOrders() {
  const { search } = useLocation();
  console.log(search);
  return useQuery({
    queryKey: ordersKeys.list(search),
    queryFn: () => getOrders(search),
    select: (data) => data?.data,
  });
}

export function useGetOrder(id: string) {
  return useQuery({
    queryKey: ordersKeys.detail(id),
    queryFn: () => getOrder(id),
    select: (data) => data?.data,
    enabled: Boolean(id),
  });
}

export function useCreateOrder() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: Order) => createOrder(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ordersKeys.lists(),
      });
      showNotification({
        color: 'green',
        message: 'Order created.',
      });
      navigate('/d/orders');
    },
  });
}

export function useUpdateOrder() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: Order) => updateOrder(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ordersKeys.lists(),
      });
      showNotification({
        color: 'green',
        message: 'Order updated.',
      });
      navigate('/d/orders');
    },
  });
}
