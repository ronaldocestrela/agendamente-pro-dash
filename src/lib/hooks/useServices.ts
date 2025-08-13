import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router";
import agente from "../api/agents";
import { Service } from "../types";

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

    return { services, isLoadingServices };
};