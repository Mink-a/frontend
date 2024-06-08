import { createBrowserRouter } from 'react-router-dom';
import { Page404 } from '@components/page';
import { DashboardLayout } from '@layouts';
import { LoginPage } from '@pages/auth';
import { DashboardPage } from '@pages/dashboard';
import {
  OrdersCreatePage,
  OrdersDetailPage,
  OrdersListPage,
  OrdersUpdatePage,
} from '@pages/orders';
import { DASHBOARD_ROUTE } from './const';
import { RootLayout } from '../layouts/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <LoginPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: DASHBOARD_ROUTE,
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: 'orders',
            children: [
              {
                index: true,
                element: <OrdersListPage />,
              },
              {
                path: 'create',
                element: <OrdersCreatePage />,
              },
              {
                path: 'detail/:id',
                element: <OrdersDetailPage />,
              },
              {
                path: 'edit/:id',
                element: <OrdersUpdatePage />,
              },
            ],
          },
          {
            path: '*',
            element: <Page404 />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <Page404 />,
  },
]);
