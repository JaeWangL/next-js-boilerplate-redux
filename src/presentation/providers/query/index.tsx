import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

type QueryProviderProps = {
  pageProps: any;
  children: JSX.Element | JSX.Element[];
};

export function QueryProvider(props: QueryProviderProps): JSX.Element {
  const { children, pageProps } = props;
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            suspense: true,
            useErrorBoundary: true,
            cacheTime: 1000 * 60 * 5, // 5 minute
            staleTime: 1000 * 5, // 5 sec
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
