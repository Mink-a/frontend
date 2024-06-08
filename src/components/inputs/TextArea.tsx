import { useId } from 'react';
import {
  Flex,
  Textarea as MantineTextarea,
  Text,
  TextareaProps,
  createStyles,
} from '@mantine/core';

type TextareaPropsType = {
  label: string;
  alignEnd?: boolean;
  textareaProps?: TextareaProps;
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

export function Textarea({
  label,
  alignEnd,
  textareaProps,
}: TextareaPropsType) {
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

      <MantineTextarea id={id} sx={{ flexGrow: 1 }} {...textareaProps} />
    </Flex>
  );
}
