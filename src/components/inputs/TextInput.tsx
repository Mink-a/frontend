import { useId } from 'react';
import { Flex, Input, InputProps, Text, createStyles } from '@mantine/core';

type TextInputPropsType = {
  label: string;
  alignEnd?: boolean;
  inputProps?: InputProps;
};

const useStyles = createStyles(
  (theme, { alignEnd }: { alignEnd?: boolean }) => ({
    label: {
      flexBasis: 200,
      textAlign: alignEnd ? 'end' : 'start',

      [theme.fn.smallerThan('xs')]: {
        flexBasis: 0,
        textAlign: 'start',
      },
    },
  })
);

export function TextInput({ label, alignEnd, inputProps }: TextInputPropsType) {
  const id = useId();
  const { classes } = useStyles({ alignEnd });

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

      <Input id={id} sx={{ flexGrow: 1 }} {...inputProps} />
    </Flex>
  );
}
