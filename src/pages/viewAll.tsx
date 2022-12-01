import { useEffect, useState } from 'react';
import { Chore } from '@prisma/client';
import Error from '../components/error';
import type { NextPage } from 'next';
import PageHead from '../components/header';
import Title from '../components/title';
import { trpc } from '../utils/trpc';

const ViewAll: NextPage = (props) => {
  const choreList = trpc.chore.getAll.useQuery();
  const [chores, updateChoreList] = useState(choreList.data || Array<Chore>);

  useEffect(() => updateChoreList(choreList.data || []), [choreList]);

  const { mutate, error } = trpc.chore.deleteChore.useMutation({
    async onSuccess() {
      await choreList.refetch();
    },
  });

  const deleteChore = async (id: number) => {
    await mutate({ id });
  };

  return (
    <>
      <PageHead title="View All Chores" />
      <Title title="Chores:" />

      {choreList.isFetching && <div> Loading... </div>}

      {!choreList.isFetching && (
        <div className="items-center justify-center pt-6 text-2xl text-blue-500">
          {chores.map((chore) => {
            return (
              <div key={chore.id}>
                <span className="font-semibold text-indigo-600">
                  {chore.name}:
                </span>
                <span className="pl-4 font-normal text-green-600">
                  {chore.description}
                </span>
                <span className="pl-4 font-normal text-sky-600">
                  Length: {chore.length}
                </span>
                <span
                  onClick={() => deleteChore(chore.id)}
                  className="cursor-pointer pl-4 text-red-500"
                >
                  [X]
                </span>
              </div>
            );
          })}
        </div>
      )}

      <Error error={error} />
    </>
  );
};

export default ViewAll;
