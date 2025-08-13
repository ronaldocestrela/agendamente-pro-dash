import { z } from "zod";
import { requiredString } from "../util/utils";

export const createServiceSchema = z.object({
    name: requiredString("Nome do serviço"),
    description: requiredString("Descrição"),
    price: z.number().min(0, "O preço deve ser maior ou igual a zero"),
    durationInMinutes: z.number().min(1, "A duração deve ser pelo menos 1 minuto"),
    isActive: z.boolean().default(true),
});

export type CreateServiceSchema = z.infer<typeof createServiceSchema>;
