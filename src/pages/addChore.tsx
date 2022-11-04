import Error from "../components/error";
import type { NextPage } from "next";
import PageHead from "../components/header";
import Title from "../components/title";
import { chores } from "@prisma/client";
import { trpc } from "../utils/trpc";
import { useState } from "react";

const AddChore: NextPage = (props) => {
  const [saving, setSaving] = useState(false);
  const [choreData, setChoreData] = useState({
    name: "",
    description: "",
    length: 1,
  } as chores);
  const { mutate, error } = trpc.chores.addChore.useMutation();

  const addChore = (values: chores) => {
    mutate(values);
  };

  const newChore = async (e: React.FormEvent<HTMLFormElement>) => {
    setSaving(true);
    e.preventDefault();
    try {
      await addChore(choreData);
      clearForm();
    } catch (err) {
      console.log(err);
    }
    setSaving(false);
  };

  const clearForm = (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e?.preventDefault();
    setChoreData({ name: "", description: "", length: 1 } as chores);
  };

  return (
    <>
      <PageHead title="Add Chore" />

      <Title title="Add Chore:" />

      {saving && <div>Saving...</div>}

      {!saving && (
        <div className="items-center justify-center pt-6 text-2xl text-blue-500">
          <form name="addChore" onSubmit={newChore}>
            <div>
              Name:
              <input
                type="text"
                name="name"
                className="m-2 border"
                placeholder="Clean Bathroom..."
                value={choreData.name}
                onChange={(e) =>
                  setChoreData({ ...choreData, name: e.target.value })
                }
              />
            </div>
            <div>
              Description:
              <input
                type="text"
                name="description"
                placeholder="Clean sinks and tub..."
                className="m-2 border"
                value={choreData.description}
                onChange={(e) =>
                  setChoreData({ ...choreData, description: e.target.value })
                }
              />
            </div>
            <div>
              Length:
              <input
                type="number"
                name="length"
                className="m-2 border"
                value={choreData.length}
                onChange={(e) =>
                  setChoreData({
                    ...choreData,
                    length: parseInt(e.target.value),
                  })
                }
              />
            </div>

            <Error error={error} />

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
      )}
    </>
  );
};

export default AddChore;
