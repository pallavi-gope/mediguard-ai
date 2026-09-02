import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
        return <Navigate to="/login" />;
    }
    return <Outlet />
};

export default ProtectedLayout;