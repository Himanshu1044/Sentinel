import { z } from 'zod';

export const createIncidentSchema = z.object({
    title: z.string().min(3),
    description: z.string().min(10),
    category: z.string().min(3),
    latitude: z.number(),
    longitude: z.number(),
});
