import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProtectedLayout from "../layouts/ProtectedLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Register />} />
                </Route>
                <Route element={<ProtectedLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </>
    );
}

export default AppRoutes;