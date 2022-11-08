import { useEffect, useMemo, useState } from 'react';

import { chores as Chores } from '@prisma/client';
import type { NextPage } from 'next';
import PageHead from '../components/header';
import Title from '../components/title';
import { trpc } from '../utils/trpc';

const Home: NextPage = (props) => {
  const chores = trpc.chores.getAll.useQuery();
  const [chore, setChore] = useState({} as Chores);
  const hasChores = useMemo(
    () => chores.data && chores.data.length > 0,
    [chores]
  );

  const getRandomChore = () => {
    if (chores.data && chores.data.length > 0) {
      let randomId = 0;
      let randomChore = {} as Chores;

      do {
        randomId = Math.floor(Math.random() * chores.data.length);
        randomChore = chores.data[randomId] as Chores;
      } while (randomChore.id === chore.id);

      setChore(randomChore);
    }
  };

  useEffect(getRandomChore, [chores.data]);

  return (
    <>
      <PageHead title="Chore Helper" />
      <Title title="Your Random Chore is:" />

      {!hasChores && <div>To add some chores! This shit is empty!</div>}

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
    </>
  );
};

export default Home;
