import { Box, NumberInput, Stack, TextInput, Textarea } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { FormAction } from '@components/common/FormAction';
import { createOrdersSchema } from '@utils/schema';

interface OrdersFormProps {
  values: Order;
  loading: boolean;
  action?: string;
  onSubmit: (channel: any) => void;
}

export function OrdersForm({
  values,
  loading,
  action = 'create',
  onSubmit,
}: OrdersFormProps) {
  const isReadOnly = action === 'details';
  const form = useForm({
    initialValues: values,
    validate: zodResolver(createOrdersSchema),
  });

  console.log(form.errors);

  return (
    <Box component="form" w="100%" onSubmit={form.onSubmit(onSubmit)}>
      <Stack spacing={28} sx={{ flex: 1 }}>
        <TextInput
          readOnly
          label="Order Number:"
          {...form.getInputProps('orderNumber')}
        />
        <TextInput
          readOnly={isReadOnly}
          label="Description:"
          {...form.getInputProps('description')}
        />
        <NumberInput
          readOnly={isReadOnly}
          label="Price:"
          {...form.getInputProps('price')}
        />
        <NumberInput
          readOnly={isReadOnly}
          label="Quantity:"
          {...form.getInputProps('quantity')}
        />

        <FormAction action={action} loading={loading} />
      </Stack>
    </Box>
  );
}
