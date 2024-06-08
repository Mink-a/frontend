import { IconAlignBoxBottomCenter, IconHome } from '@tabler/icons';
import { DASHBOARD_ROUTE } from './const';

export const menus = [
  {
    icon: IconHome,
    label: 'Dashboard',
    to: DASHBOARD_ROUTE,
  },
  {
    icon: IconAlignBoxBottomCenter,
    label: 'Orders',
    to: `${DASHBOARD_ROUTE}/orders`,
  },
  {
    icon: IconAlignBoxBottomCenter,
    label: 'Pre Orders',
    to: `${DASHBOARD_ROUTE}/pre-orders`,
  },
];
