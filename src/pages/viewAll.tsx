import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import { trpc } from "../utils/trpc";

const AddChore: NextPage = (props) => {
  const chores = trpc.chores.getAll.useQuery();

  const deleteChore = (choreId: number) => {
    console.log(choreId);
  };

  return (
    <>
      <Head>
        <title>Chores</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <div>
          <h1>Chores:</h1>
        </div>
        <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
          {chores.data?.map((chore) => {
            return (
              <div key={chore.id}>
                {chore.description}{" "}
                <span
                  onClick={() => deleteChore(chore.id)}
                  className="cursor-pointer text-red-500"
                >
                  X
                </span>
              </div>
            );
          })}
        </div>

        <Footer />
      </main>
    </>
  );
};

export default AddChore;
