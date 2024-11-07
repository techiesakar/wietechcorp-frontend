import * as z from "zod";

const schema = z.object({});

export const zodEnv = schema.parse({});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.TypeOf<typeof schema> {}
  }
}
