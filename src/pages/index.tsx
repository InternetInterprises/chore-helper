import { useEffect, useState } from "react";

import type { NextPage } from "next";
import PageHead from "../components/header";
import Title from "../components/title";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const chores = trpc.chores.getAll.useQuery();

  const [choreId, setChore] = useState(0);

  const getRandomChore = () => {
    if (chores.data) {
      let randomId = 0;
      let randomChore = {} as typeof chores.data[number];
      do {
        randomId = Math.floor(Math.random() * chores.data.length);
        randomChore = chores.data[randomId] as typeof chores.data[number];
      } while (randomChore.id === choreId);

      setChore(randomChore.id);
    }
  };

  const getChore = () => {
    return chores.data?.find((chore) => {
      return chore.id === choreId;
    });
  };

  useEffect(() => {
    getRandomChore();
  }, [chores?.data]);

  return (
    <>
      <PageHead title="Chore Helper" />

      <Title title="Your Random Chore is:" />

      <div className="items-center justify-center pt-6 text-2xl text-blue-500">
        <span className="font-semibold text-indigo-600">
          {getChore()?.name}:
        </span>
        <div className="pl-4 font-normal text-green-600">
          {getChore()?.description}
        </div>
        <div className="pl-4 font-normal text-fuchsia-600">
          Length: {getChore()?.length}
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
    </>
  );
};

export default Home;
