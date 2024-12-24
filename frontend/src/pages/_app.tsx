import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ContextProvider from '../context/Context';  // Your existing ContextProvider
import AuthProvider from '../components/AuthProvider';  // New AuthProvider for authentication
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>  {/* Your existing ContextProvider */}
      <AuthProvider>  {/* New AuthProvider for authentication */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ContextProvider>
  );
}

export default MyApp;
