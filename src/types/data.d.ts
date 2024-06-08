export {};

declare global {
  export interface Order {
    description: string;
    price: number;
    quantity: number;
    orderNumber?: string;
    date?: Date;
    customerName?: string;
    customerPhone?: string;
    customerNotes?: string;
    isSelfPickup?: boolean;
    deliveryAddress?: string;
  }
}
