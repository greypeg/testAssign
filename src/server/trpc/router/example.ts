import { z, ZodLazy } from "zod";
import { initTRPC } from '@trpc/server'
import { router, publicProcedure } from "../trpc";
export const t = initTRPC?.create()
export const exampleRouter = router({
  submitData: t
  .procedure
    // using zod schema to validate and infer input values
  .input(
    z.object({
      name: z.string(),
      surname: z.string(),
      email: z.string(),
    })
  )
  .mutation(({ input }) => {
      resolve:async (input: any, ctx:any) => {
        const user = await ctx.prisma.user.create({
          data: {
            email: 'elsa@prisma.io',
            name: 'Elsa Prisma',
          },
        })
        const users = ctx.prisma.user.findAll();
        console.log(users)
        return user;
      }
     })
})