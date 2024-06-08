import * as z from 'zod';

export const loginSchema = z.object({
  username: z.string().min(1, { message: 'Please enter username.' }),
  password: z.string().min(1, { message: 'Please enter password.' }),
});

export const createOrdersSchema = z.object({
  description: z.string().min(1, { message: 'Please enter description.' }),
  price: z.number().min(1, { message: 'Please enter price.' }),
  quantity: z.number().min(1, { message: 'Please enter quantity.' }),
});
