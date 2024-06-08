import {
  Box,
  Checkbox,
  Grid,
  NumberInput,
  SimpleGrid,
  Stack,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { FormAction } from '@components/common/FormAction';
import { createOrdersSchema } from '@utils/schema';
import { DatePickerInput } from '@mantine/dates';

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

  return (
    <Box component="form" w="100%" onSubmit={form.onSubmit(onSubmit)}>
      <Stack spacing={28} sx={{ flex: 1 }}>
        <SimpleGrid
          cols={2}
          breakpoints={[
            { maxWidth: 'sm', cols: 1 },
            { maxWidth: 'md', cols: 2 },
          ]}
        >
          <TextInput
            readOnly
            label="Order Number:"
            placeholder="NA"
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
          <DatePickerInput
            label="Order Date:"
            {...form.getInputProps('date')}
          />
          <TextInput
            readOnly={isReadOnly}
            label="Customer:"
            {...form.getInputProps('customerName')}
          />
          <TextInput
            readOnly={isReadOnly}
            label="Phone:"
            {...form.getInputProps('customerPhone')}
          />
        </SimpleGrid>
        <Box mt="auto">
          <Checkbox
            label="Self Pickup"
            readOnly={isReadOnly}
            {...form.getInputProps('isSelfPickup', { type: 'checkbox' })}
          />
        </Box>
        <SimpleGrid
          cols={2}
          breakpoints={[
            { maxWidth: 'sm', cols: 1 },
            { maxWidth: 'md', cols: 2 },
          ]}
        >
          <Textarea
            readOnly={isReadOnly}
            label="Notes:"
            {...form.getInputProps('customerNotes')}
          />
          <Textarea
            readOnly={isReadOnly}
            label="Delivery Address:"
            {...form.getInputProps('deliveryAddress')}
          />
        </SimpleGrid>

        <FormAction action={action} loading={loading} />
      </Stack>
    </Box>
  );
}
