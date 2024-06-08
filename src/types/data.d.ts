export {};

declare global {
  export interface Order {
    description: string;
    price: number;
    quantity: number;
    orderNumber?: string;
  }
}
