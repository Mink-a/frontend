import { SelectProps } from '@mantine/core';
// import { useGetPort } from './queries';
import { Select } from './Select';

type PortSelectProps = { label: string } & Omit<SelectProps, 'data'>;

export function PortSelect(props: PortSelectProps) {
  // const { data = [], isLoading } = useGetPort();
  const { data = [], isLoading } = { data: [], isLoading: false };

  const ports = data?.map((p: { lookupId: string; code: string }) => ({
    value: p.lookupId,
    label: p.code,
  }));

  return <Select isLoading={isLoading} {...props} data={ports} />;
}
