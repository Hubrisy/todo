import type { AppProps } from 'next/app';

import '@/styles/globals.css';

import { ModalContextProvider } from '@/context/modal';
import { TodosContextProvider } from '@/context/todo';
import { ModalController } from '@/layout/modal';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalContextProvider>
      <TodosContextProvider>
        <Component {...pageProps} />
        <ModalController />
      </TodosContextProvider>
    </ModalContextProvider>
  );
}
