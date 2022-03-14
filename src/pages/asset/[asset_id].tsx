import { GetStaticProps, NextPage } from 'next';
import { getData } from '../../utils/testUtils';
import Chart from '../../components/Chart';

export const getStaticProps: GetStaticProps = async (context) => {
  const metadata = await getData();

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
      <Chart data={metadata} width={400} ratio={2} />{' '}
    </div>
  );
};

export default Home;
