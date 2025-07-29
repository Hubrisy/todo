import type { AppProps } from 'next/app';

import '@/styles/globals.css';

import { ModalContextProvider } from '@/context/modal';
import { TodosContextProvider } from '@/context/todo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalContextProvider>
      <TodosContextProvider>
        <Component {...pageProps} />
      </TodosContextProvider>
    </ModalContextProvider>
  );
}
