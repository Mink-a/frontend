import { showNotification } from '@mantine/notifications';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { ordersKeys } from '@config/queryKeys';
import {
  createOrder,
  deleteOrder,
  getOrder,
  getOrders,
  updateOrder,
} from '@services/orders';
import { tomorrow } from '@utils/dayjs';

export function useGetOrders() {
  const { search } = useLocation();
  return useQuery({
    queryKey: ordersKeys.list(search),
    queryFn: () => getOrders(search),
    select: (data) => data?.data,
  });
}

export function useGetPreOrders() {
  const { search } = useLocation();
  const commingSearch = search
    ? `${search}&fromDate=${tomorrow()}`
    : `?fromDate=${tomorrow()}`;
  return useQuery({
    queryKey: ordersKeys.list(commingSearch),
    queryFn: () => getOrders(commingSearch),
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

export function useUpdateOrder(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Order) => updateOrder({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ordersKeys.lists(),
      });
      queryClient.invalidateQueries({
        queryKey: ordersKeys.detail(id),
      });
      showNotification({
        color: 'green',
        message: 'Order updated.',
      });
    },
  });
}

export function useDeleteOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteOrder(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ordersKeys.lists(),
      });
      showNotification({
        color: 'green',
        message: 'Order deleted.',
      });
    },
  });
}
