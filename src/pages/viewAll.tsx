import { useEffect, useState } from "react";

import type { NextPage } from "next";
import PageHead from "../components/header";
import Title from "../components/title";
import { trpc } from "../utils/trpc";

const ViewAll: NextPage = (props) => {
  const choreList = trpc.chores.getAll.useQuery();
  const [chores, updateChoreList] = useState(choreList?.data || []);

  useEffect(() => updateChoreList(choreList.data || []), [choreList]);

  const { mutate, error } = trpc.chores.deleteChore.useMutation({
    async onSuccess() {
      await choreList.refetch();
    },
  });

  const deleteChore = async (choreId: number) => {
    await mutate({ id: choreId });
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

      <div className="text-red-600">{error && error.message}</div>
    </>
  );
};

export default ViewAll;
