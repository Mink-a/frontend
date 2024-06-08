import { Box } from '@mantine/core';
import { MRT_ColumnDef } from 'mantine-react-table';
import { Card } from '@components/common';
import { DataTable, longTextCell, renderDateCell } from '@components/core';
import { useIsMobile } from '@hooks/useIsMobile';
import { ActionItem } from './components/ActionItems';
import { Toolbar } from './components/Toolbar';
import { useGetOrders } from './queries';

const columns: MRT_ColumnDef<Order>[] = [
  { header: 'Order Number', accessorKey: 'orderNumber' },
  { header: 'Quantity', accessorKey: 'quantity' },
  { header: 'Price', accessorKey: 'price' },
  {
    header: 'Description',
    accessorKey: 'description',
    Cell: ({ renderedCellValue }) => longTextCell({ renderedCellValue }),
  },
];

export function OrdersListPage() {
  const { data, isPending } = useGetOrders();
  const isMobile = useIsMobile();
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
      }}
    >
      <Box sx={{ width: '100%', overflowX: 'auto', scrollbarWidth: 'none' }}>
        <Toolbar />
        <DataTable
          columns={columns}
          // enableRowNumbers
          enableRowActions
          data={data?.data ?? []}
          total={data?.total ?? 0}
          state={{
            isLoading: isPending,
          }}
          renderRowActions={({ row }) => <ActionItem row={row} />}
          positionActionsColumn="last"
          mantineTableContainerProps={{
            w: '100%',
            h: 'calc(100vh - 300px)',
          }}
        />
      </Box>
    </Card>
  );
}
