import axios from 'axios';

export async function getOrders(params?: string) {
  const orders = await axios.get(`orders/${params}`);
  return orders;
}

export async function getOrder(id: string) {
  const transaction = await axios.get(`orders/${id}`);
  return transaction;
}

export function createOrder(data: Order) {
  return axios.post('orders', data);
}

export function updateOrder({ id, data }: { data: Order; id: string }) {
  return axios.patch(`orders/${id}`, data);
}

export function deleteOrder(id: string) {
  return axios.delete(`orders/${id}`);
}
