import { authRouter } from './auth';
import { choreRouter } from './chore';
import { exampleRouter } from './example';
import { router } from '../trpc';

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  chore: choreRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
