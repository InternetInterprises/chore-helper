import { publicProcedure, router } from '../trpc';

import { z } from 'zod';

export const choreRouter = router({
  chore: publicProcedure
    .input(z.object({ id: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        chore: input,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.chore.findMany();
  }),
  addChore: publicProcedure
    .input(
      z.object({
        name: z.string().min(1).max(25),
        description: z.string().min(1).max(100),
        length: z.number().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const post = await ctx.prisma.chore.create({
        data: { ...input, userId: ctx.session?.user?.id },
      });
      return post;
    }),
  deleteChore: publicProcedure
    .input(
      z.object({
        id: z.number().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const post = await ctx.prisma.chore.delete({
        where: input,
      });
      return post;
    }),
});
