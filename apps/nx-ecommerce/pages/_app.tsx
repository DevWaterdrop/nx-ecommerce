import { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ErrorBoundary } from '../components/ErrorBoundary';
import 'windi.css';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ErrorBoundary>
      {/* Don`t want to use Hydrate because of more boilerplate */}
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default CustomApp;
