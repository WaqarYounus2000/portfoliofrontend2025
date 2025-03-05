import { Outlet, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { GetDataByAxios } from "./axios/axiosConfig";
import { Loader } from "./Loader"
const ProtectedRoutes = () => {
    const fetchData = async () => {
        try {
            const response = await GetDataByAxios(`${import.meta.env.VITE_APP_BACKEND_API}/user/auth/jwt`);
            return response?.data?.isAuthenticated || false;
        } catch (error) {
            console.error("Error fetching auth status:", error);
            return false;
        }
    };

    const { data, isLoading, isError } = useQuery({
        queryKey: ["isUserAuthenticated"],
        queryFn: fetchData,
        staleTime: 300000, // Optional: Prevents frequent re-fetching
    });

    if (isLoading) return <Loader className="LoaderSignIn" />; // Show a loading indicator
    if (isError || !data) return <Navigate to="/login" />; // Redirect on error or if not authenticated

    return <Outlet />;
};

export { ProtectedRoutes };
