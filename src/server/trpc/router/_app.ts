import { authRouter } from './auth';
import { choresRouter } from './chores';
import { exampleRouter } from './example';
import { router } from '../trpc';

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  chores: choresRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
