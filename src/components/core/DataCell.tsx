import { Anchor } from '@mantine/core';
import { displayDate, displayDateTime } from '@utils/dayjs';
import { formatCurrency } from '@utils/helper';

interface AnchorCellProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function AnchorCell({ children, onClick }: AnchorCellProps) {
  return (
    <Anchor color="blue" onClick={onClick}>
      {children}
    </Anchor>
  );
}

export function longTextCell({ renderedCellValue }: any) {
  return renderedCellValue?.length > 20
    ? `${renderedCellValue?.slice(0, 20)}...`
    : renderedCellValue || '-';
}

export const renderBooleanCell = ({ renderedCellValue }: any) =>
  renderedCellValue ? '✅' : '❌';

export const renderArcherCell = ({ renderedCellValue }: any) => (
  <Anchor>{renderedCellValue}</Anchor>
);

export const renderDateCell = ({ renderedCellValue }: any) =>
  displayDate(renderedCellValue);

export const renderDateTimeCell = ({ renderedCellValue }: any) =>
  displayDateTime(renderedCellValue);

export const renderAmountCell = ({ renderedCellValue }: any) =>
  formatCurrency(renderedCellValue, true);

export const renderAmountMMKCell = ({ renderedCellValue }: any) =>
  formatCurrency(renderedCellValue, true);
