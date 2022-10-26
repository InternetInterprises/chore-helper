import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const choresRouter = router({
  chores: publicProcedure
    .input(z.object({ id: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        chores: input,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.chores.findMany();
  }),
  addChore: publicProcedure.query(({ ctx }) => {
    // Haven't fugured out update yet
    return ctx.prisma.chores.upsert();
  }),
});
