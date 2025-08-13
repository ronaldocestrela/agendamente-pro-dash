import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { type LoginSchema } from "../schemas/loginSchema"
import agent from "../api/agents"
import { User } from "../types"
import { useLocation, useNavigate } from "react-router"
import { type RegisterSchema } from "../schemas/registerSchema"
import { toast } from "sonner"

export const useAccount = () => {
    const queryClinet = useQueryClient();
    const navigate = useNavigate();
    const location = useLocation();

    const loginUser = useMutation({
        mutationFn: async (creds: LoginSchema) => {
            await agent.post('/login?useCookies=true', creds);
        },  
        onSuccess: async () => {
            await queryClinet.invalidateQueries({
                queryKey: ["user"]
            });
            navigate("/");
        }
    });

    const registerUser = useMutation({
        mutationFn: async(creds: RegisterSchema) => {
            await agent.post("/account/register", creds);
        },
        onSuccess: () => {
            toast.success("Register successful - you can now login");
            navigate("/login");
        }
    })

    const logoutUser = useMutation({
        mutationFn: async () => { await agent.post('/account/logout'); },
        onSuccess: () => {
            queryClinet.removeQueries({ queryKey: ["user"] });
            queryClinet.removeQueries({ queryKey: ["activities"] });
            navigate("/");
        }
    });

    const { data: currentUser, isLoading: loadinUserInfo } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const response = await agent.get<User>('/account/user-info');
            return response.data;
        },
        enabled: !queryClinet.getQueryData(["user"]) && location.pathname !== "/login" && location.pathname !== "/register" && location.pathname !== "/signin",
    })

    return {
        loginUser,
        currentUser,
        logoutUser,
        loadinUserInfo,
        registerUser
    }
}