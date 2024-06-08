import { useId } from 'react';
import {
  FileInput as MantineFileInput,
  FileInputProps,
  Flex,
  Text,
  createStyles,
} from '@mantine/core';

type FileInputPropsType = {
  label: string;
  alignEnd?: boolean;
  fileInputProps?: FileInputProps;
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

export function FileInput({
  label,
  alignEnd,
  fileInputProps,
}: FileInputPropsType) {
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

      <MantineFileInput id={id} sx={{ flexGrow: 1 }} {...fileInputProps} />
    </Flex>
  );
}
