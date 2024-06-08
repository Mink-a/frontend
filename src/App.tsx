import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import { RouterProvider } from 'react-router-dom';
import { MantineConfig } from '@components/core';
import i18n from '@config/i18n';
import { router } from '@config/routes';

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
      })
  );

  return (
    <I18nextProvider i18n={i18n}>
      <MantineConfig>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </MantineConfig>
    </I18nextProvider>
  );
}

export default App;
