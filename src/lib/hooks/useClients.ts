import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useLocation } from "react-router";
import agent from "../api/agents";
import { CreateClientSchema } from "../schemas/createClientSchema";
import { toast } from "sonner";
import { useAccount } from "./useAccount";
import { CreateClient } from "../types";

export const useClients = () => {
    const queryClient = useQueryClient();
    const location = useLocation();
    const { currentUser } = useAccount();

    const { data: clients, isLoading: isLoadingClients } = useQuery({
        queryKey: ["clients"],
        queryFn: async () => {
            const response = await agent.get<CreateClient[]>("/clients");
            return response.data;
        },
        enabled: !!location.pathname.includes("/clientes") && !!currentUser
    });

    const createClient = useMutation({
        mutationFn: async (clientData: CreateClientSchema) => {
            const response = await agent.post("/clients", clientData);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["clients"] });
            toast.success("Cliente criado com sucesso!");
        },
        onError: (error) => {
            toast.error("Erro ao criar cliente");
            console.error("Erro ao criar cliente:", error);
        }
    });

    return { clients, isLoadingClients, createClient };
};
