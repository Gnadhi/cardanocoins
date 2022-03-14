import type { GetStaticProps, NextPage } from 'next';

import Table from '../components/Table';

import grabMetadata from 'src/utils/grabMetadata';
export const getStaticProps: GetStaticProps = async (context) => {
  const metadata = await grabMetadata();

  return {
    // Revalidate ever 1 hour (3600 seconds)
    props: {
      metadata: metadata,
    },
    revalidate: 3600,
  };
};

const Home: NextPage = ({ metadata }: any) => {
  return (
    <div>
      <Table data={metadata} />
    </div>
  );
};

export default Home;
