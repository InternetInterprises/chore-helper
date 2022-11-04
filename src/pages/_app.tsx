// src/pages/_app.tsx
import '../styles/globals.css';
import type { AppType } from 'next/app';
import { trpc } from '../utils/trpc';
import Layout from '../components/layout';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default trpc.withTRPC(MyApp);
