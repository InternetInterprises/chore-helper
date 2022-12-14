import { useEffect, useMemo, useState } from 'react';

import Auth from '../components/auth';
import { Chore } from '@prisma/client';
import type { NextPage } from 'next';
import PageHead from '../components/header';
import Title from '../components/title';
import { trpc } from '../utils/trpc';

const Home: NextPage = (props) => {
  const { data: chores } = trpc.chore.getAll.useQuery();
  const [chore, setChore] = useState({} as Chore);
  const hasChores = useMemo(() => chore && chore?.length > 0, [chore]);

  const getRandomChore = () => {
    if (chores && chores?.length > 0) {
      let randomId = 0;
      let randomChore = {} as Chore;

      do {
        randomId = Math.floor(Math.random() * chores?.length);
        randomChore = chores?.[randomId] as Chore;
      } while (randomChore.id === chore.id);

      setChore(randomChore);
    }
  };

  useEffect(getRandomChore, [chores]);

  return (
    <>
      <PageHead title="Chore Helper" />
      <Title title="Your Random Chore is:" />

      {!hasChores && (
        <div className="text-4xl">To add some chores! This shit is empty!</div>
      )}

      {hasChores && (
        <div className="items-center justify-center pt-6 text-2xl text-blue-500">
          <span className="font-semibold text-indigo-600">{chore.name}:</span>
          <div className="pl-4 font-normal text-green-600">
            {chore.description}
          </div>
          <div className="pl-4 font-normal text-fuchsia-600">
            Length: {chore.length}
          </div>
          <div>
            <button
              onClick={getRandomChore}
              className="rounded border border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            >
              Try Again!
            </button>
          </div>
        </div>
      )}

      <div className="m-6">
        <Auth />
      </div>
    </>
  );
};

export default Home;
