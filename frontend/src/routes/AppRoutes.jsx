import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProtectedLayout from "../layouts/ProtectedLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import ForgotPassword from "../pages/ForgotPassword";
import MedicalAnalyzer from "../pages/MedicalAnalyzer";
import DeepfakeDetector from "../pages/DeepfakeDetector";
import MyAnalysis from "../pages/MyAnalysis";
import MyDetections from "../pages/MyDetections";
import Reports from "../pages/Reports";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Favorites from "../pages/Favorites";
import History from "../pages/History";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                </Route>
                <Route element={<ProtectedLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/medical-analyzer" element={<MedicalAnalyzer />} />
                    <Route path="/deepfake-detector" element={<DeepfakeDetector />} />
                    <Route path="/my-analysis" element={<MyAnalysis />} />
                    <Route path="/my-detections" element={<MyDetections />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/history" element={<History />} />
                </Route>
            </Routes>
        </>
    );
}

export default AppRoutes;