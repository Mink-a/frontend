import * as z from 'zod';

export const loginSchema = z.object({
  name: z.string().min(1, { message: 'Please enter username.' }),
  password: z.string().min(1, { message: 'Please enter password.' }),
});

export const createOrdersSchema = z.object({
  description: z.string().min(1, { message: 'Please enter description.' }),
  price: z.number().min(1, { message: 'Please enter price.' }),
  quantity: z.number().min(1, { message: 'Please enter quantity.' }),
  date: z.date().default(new Date()),
  customerName: z.string().min(1, { message: 'Please enter customer name.' }),
  customerPhone: z.string().min(1, { message: 'Please enter customer phone.' }),
  customerNotes: z.string().optional(),
  isSelfPickup: z.boolean().default(false),
  delivaryAddress: z.string().optional(),
});
