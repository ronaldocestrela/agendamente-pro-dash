import { useAccount } from "@/lib/hooks/useAccount";
import { Navigate, Outlet, useLocation } from "react-router";

export default function RequireAuth() {
    const { currentUser, loadinUserInfo } = useAccount();
    const location = useLocation();

    if (loadinUserInfo) return <p>Loading...</p>

    if (!currentUser) return <Navigate to="/login" state={{from: location}} />

    return (
        <Outlet />
    )
}
