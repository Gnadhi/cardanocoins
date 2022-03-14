import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import { Layout } from 'antd';

import Navbar from '../components/Navbar';

const { Header, Footer, Content } = Layout;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Header>
        <Navbar />
      </Header>
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default MyApp;
