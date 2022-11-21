import { z } from "zod";
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
    })
  )
  .mutation(({ input }) => {
      // Here some login stuff would happen
      return {
        user: {
          name: input.name,
        },
      };
     })
})