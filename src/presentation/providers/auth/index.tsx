import { SessionProvider } from 'next-auth/react';

type AuthProviderProps = {
  pageProps: any;
  children: JSX.Element | JSX.Element[];
};

export function AuthProvider(props: AuthProviderProps): JSX.Element {
  const { children, pageProps } = props;

  return (
    <SessionProvider session={pageProps.session}>{children}</SessionProvider>
  );
}
