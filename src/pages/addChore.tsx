import type { NextPage } from "next";
import PageHead from "../components/header";
import Title from "../components/title";
import { trpc } from "../utils/trpc";
import { useState } from "react";

const AddChore: NextPage = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [length, setLength] = useState(1);

  const { mutate, error, data } = trpc.chores.addChore.useMutation();

  type Chore = Extract<typeof data, { type: "chores" }>;

  const addChore = (values: Chore) => {
    mutate(values);
  };

  const newChore = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      addChore({ name, description, length } as Chore);
    } catch (err) {
      console.log(err);
    }
  };

  const clearForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setName("");
    setDescription("");
    setLength(1);
  };

  return (
    <>
      <PageHead title="Add Chore" />

      <Title title="Add Chore:" />

      <div className="items-center justify-center pt-6 text-2xl text-blue-500">
        <form name="addChore" onSubmit={newChore}>
          <div>
            Name:
            <input
              type="text"
              name="name"
              className="m-2 border"
              placeholder="Clean Bathroom..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            Description:
            <input
              type="text"
              name="description"
              placeholder="Clean sinks and tub..."
              className="m-2 border"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            Length:
            <input
              type="number"
              name="length"
              className="m-2 border"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
          </div>

          <div className="text-red-600">{error && error.message}</div>

          <button className="rounded border border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
            Submit
          </button>
          <button
            onClick={clearForm}
            className="ml-4 rounded border border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          >
            Clear
          </button>
        </form>
      </div>
    </>
  );
};

export default AddChore;
