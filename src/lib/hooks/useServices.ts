import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router";
import agente from "../api/agents";
import { Service } from "../types";
import { CreateServiceSchema } from "../schemas/createServiceSchema";
import { toast } from "sonner";

export const useServices = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const location = useLocation();

    const { data: services, isLoading: isLoadingServices } = useQuery({
        queryKey: ["services"],
        queryFn: async () => {
            const response = await agente.get<Service[]>("/services/all-services");
            return response.data;
        },
        enabled: !!location.pathname.includes("/servicos")
    });

    const createService = useMutation({
        mutationFn: async (serviceData: CreateServiceSchema) => {
            const response = await agente.post("/services/create-service", serviceData);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["services"] });
            toast.success("Serviço criado com sucesso!");
        },
        onError: (error) => {
            toast.error("Erro ao criar serviço");
            console.error("Erro ao criar serviço:", error);
        }
    });

    return { services, isLoadingServices, createService };
};