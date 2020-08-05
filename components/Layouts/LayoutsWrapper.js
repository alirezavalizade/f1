import Header from './Header';
import DefaultLayout from './DefaultLayout';

const LayoutsWrapper = ({ Component, pageProps }) => {
  const Layout = Component.Layout || DefaultLayout;
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
};

export default LayoutsWrapper;
