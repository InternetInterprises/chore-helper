import { publicProcedure, router } from "../trpc";

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
  addChore: publicProcedure
    .input(
      z.object({
        name: z.string().min(1).max(25),
        description: z.string().min(1).max(100),
        length: z.number().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const post = await ctx.prisma.chores.create({
        data: input,
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
      const post = await ctx.prisma.chores.delete({
        where: input,
      });
      return post;
    }),
});
