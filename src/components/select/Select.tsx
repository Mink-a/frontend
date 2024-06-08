import { useId } from 'react';
import {
  Flex,
  Loader,
  Select as MantineSelect,
  SelectProps,
  Text,
  createStyles,
} from '@mantine/core';

type SelectPropsType = {
  label: string;
  isLoading: boolean;
} & SelectProps;

const useStyles = createStyles((theme) => ({
  label: {
    flexBasis: 200,
    [theme.fn.smallerThan('xs')]: {
      flexBasis: 0,
    },
  },
}));

export function Select({ label, isLoading, ...props }: SelectPropsType) {
  const id = useId();
  const { classes } = useStyles();
  return (
    <Flex
      gap="md"
      direction={{
        base: 'column',
        xs: 'row',
      }}
    >
      <Text htmlFor={id} className={classes.label} component="label">
        {label}
      </Text>
      <MantineSelect
        id={id}
        rightSection={isLoading ? <Loader size={16} /> : null}
        {...props}
      />
    </Flex>
  );
}
