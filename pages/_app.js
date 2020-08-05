import 'react-virtualized/styles.css';

import Head from 'next/head';
import Providers from '@contexts/Providers';

import { LayoutsWrapper } from '@components/Layouts';

const App = props => {
  return (
    <Providers>
      <Head>
        <title>F1</title>
      </Head>
      <LayoutsWrapper {...props} />
    </Providers>
  );
};

export default App;
