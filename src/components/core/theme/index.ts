import type { MantineThemeOverride } from '@mantine/core';
import { createEmotionCache } from '@mantine/core';
import colors from './colors';
import components from './components';
import headings from './headings';

export const cache = createEmotionCache({
  key: 'mkmk',
  prepend: false,
});

export const theme: MantineThemeOverride = {
  primaryColor: 'primary',
  fontFamily: 'Poppins',
  colors,
  headings,
  components,
};
