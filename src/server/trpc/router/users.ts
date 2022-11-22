import { z, ZodLazy } from "zod";
import { initTRPC } from "@trpc/server";
import { router, publicProcedure } from "../trpc";
import { resolve } from "path";

export const t = initTRPC?.create();

export const usersRouter = router({
  submitData: t.procedure
    // using zod schema to validate and infer input values
    .input(
      z.object({
        name: z.string(),
        surname: z.string(),
        email: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      console.log("hiisdifsdif");
      const user = ctx.prisma.User.create({
        data: {
          ...input,
        },
      });
      return user;
    }),
});
