import { z } from "zod";
import { requiredString } from "../util/utils";

export const createClientSchema = z.object({
    name: requiredString("Nome"),
    email: z.string().email("Email inválido"),
    phoneNumber: requiredString("Telefone"),
    birthDate: z.string().min(1, "Data de nascimento é obrigatória"),
    address: requiredString("Endereço"),
    cpf: requiredString("CPF"),
    isActive: z.boolean().default(true),
});

export type CreateClientSchema = z.infer<typeof createClientSchema>;
