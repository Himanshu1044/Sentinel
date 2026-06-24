import { z } from 'zod';

export const updateIncidentStatusSchema =
    z.object({
        status: z.enum([
            "pending",
            "approved",
            "rejected",
        ]),
    });