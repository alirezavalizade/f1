import dynamic from 'next/dynamic';

const Formula1 = dynamic(() => import('@components/Home/Widgets/Formula1'), {
  ssr: false
});

const Home = () => {
  return <Formula1 />;
};

export default Home;
