import 'dayjs/locale/ko';
import { wrapper } from '@application/redux';
import { AuthProvider } from '@presentation/providers/auth';
import { DialogProvider } from '@presentation/providers/dialog';
import { QueryProvider } from '@presentation/providers/query';
import { ToastProvider } from '@presentation/providers/toast';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Provider } from 'react-redux';

dayjs.extend(customParseFormat);

function MyApp({ Component, ...rest }: AppProps): JSX.Element {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NextSeo
        title="NextJS Boilerplate Redux"
        description="next.js boilerplate"
        canonical="http://localhost:8080/"
        openGraph={{
          url: 'http://localhost:8080/',
          title: 'NextJS Boilerplate Redux',
          description: 'next.js boilerplate',
        }}
      />
      <AuthProvider pageProps={rest.pageProps}>
        <QueryProvider pageProps={rest.pageProps}>
          <Provider store={store}>
            <DialogProvider>
              <ToastProvider>
                <Component {...props.pageProps} key={rest.router.asPath} />
              </ToastProvider>
            </DialogProvider>
          </Provider>
        </QueryProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
