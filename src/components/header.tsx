import Head from 'next/head';

const Header = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="A simple app to help you with chores"
        content="Core helper app!"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
