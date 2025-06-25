import { z } from 'zod';

export const getFruitsSchema = {
  response: {
    200: z.object({
      fruits: z.array(z.string()),
      count: z.number(),
    }),
  },
};