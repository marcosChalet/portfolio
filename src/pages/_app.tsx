import '@/styles/globals.css';

import BarProvider from '@/context/BarProvider';
import type { AppProps } from 'next/app';
import { ClerkProvider } from '@clerk/nextjs';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <BarProvider>
        <Component {...pageProps} />
      </BarProvider>
    </ClerkProvider>
  );
}
