import '../styles/globals.css';
import type { AppProps } from 'next/app';
import UserProvider from '../contexts/UserProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppProvider from '../contexts/AppProvider';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
