// src/server/router/_app.ts
import { router } from "../trpc";

import { exampleRouter } from "./example";
import { choresRouter } from "./chores";

export const appRouter = router({
  example: exampleRouter,
  chores: choresRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
