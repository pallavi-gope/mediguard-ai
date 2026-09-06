import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

const ProtectedSidebar = ({
    isCollapsed = false,
    setIsCollapsed,
    isMobileOpen = false,
    setIsMobileOpen,
}) => {
    const navigate = useNavigate();

    // Dropdown states for expanded view
    const [isMedicalOpen, setIsMedicalOpen] = useState(false);
    const [isDeepFakeOpen, setIsDeepFakeOpen] = useState(false);

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <>
            {/* Mobile Backdrop Overlay */}
            {isMobileOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden transition-opacity" onClick={() => setIsMobileOpen(false)} />
            )}
            {/* Sidebar Container */}
            <aside
                className={`fixed top-0 left-0 z-50 h-screen bg-[#0B1528] text-slate-300 flex flex-col justify-between transition-all duration-300 ease-in-out border-r border-slate-800/80 shadow-2xl lg:shadow-none ${isMobileOpen ? "translate-x-0 w-64" : "-translate-x-full lg:translate-x-0"
                    } ${isCollapsed ? "lg:w-20" : "lg:w-64"}`}
            >
                {/* Top: Logo & App Branding */}
                <div
                    className={`h-[70px] border-b border-slate-800/60 flex items-center transition-all duration-300 ${isCollapsed ? "justify-center px-2" : "px-5 gap-3"
                        }`}
                >
                    <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center p-1.5 shrink-0 shadow-[0_0_15px_rgba(20,184,166,0.25)]">
                        <img src="./src/assets/images/logos/logo.png" alt="MedAI Guard" className="w-full h-full object-contain" onError={(e) => {
                            e.target.style.display = "none";
                        }} />
                    </div>
                    {!isCollapsed && (
                        <div className="overflow-hidden whitespace-nowrap transition-opacity duration-200">
                            <h1 className="text-[17px] font-bold text-white tracking-wide">
                                MedAI <span className="text-teal-400">Guard</span>
                            </h1>
                        </div>
                    )}
                </div>

                {/* Middle: Navigation Links */}
                <div className="flex-1 overflow-y-auto px-3 py-4 space-y-2 custom-sidebar-scroll">
                    {/* 1. Dashboard */}
                    <div className="relative group">
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                `flex items-center rounded-xl font-medium text-sm transition-all duration-200 ${isCollapsed
                                    ? "justify-center h-12 w-full px-0"
                                    : "px-4 py-3 gap-3.5"
                                } ${isActive
                                    ? "bg-gradient-to-r from-teal-700 to-emerald-600 text-white shadow-lg shadow-teal-950/50 font-semibold"
                                    : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                                }`
                            }
                        >
                            <FeatherIcon icon="home" size={20} className="shrink-0" />
                            {!isCollapsed && <span className="whitespace-nowrap">Dashboard</span>}
                        </NavLink>

                        {/* Collapsed Tooltip */}
                        {isCollapsed && (
                            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3.5 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-xl whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-50 border border-slate-700">
                                Dashboard
                            </div>
                        )}
                    </div>

                    {/* 2. Medical Analyzer (Dropdown / Flyout in mini mode) */}
                    <div className="relative group">
                        <button
                            type="button"
                            onClick={() => {
                                if (isCollapsed && setIsCollapsed) {
                                    setIsCollapsed(false);
                                    setIsMedicalOpen(true);
                                } else {
                                    setIsMedicalOpen(!isMedicalOpen);
                                }
                            }}
                            className={`w-full flex items-center rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800/60 hover:text-white transition-colors ${isCollapsed
                                ? "justify-center h-12 w-full px-0"
                                : "justify-between px-4 py-3"
                                }`}
                        >
                            <div className="flex items-center gap-3.5">
                                <FeatherIcon icon="plus-square" size={20} className="text-slate-400 shrink-0" />
                                {!isCollapsed && <span className="whitespace-nowrap">Medical Analyzer</span>}
                            </div>
                            {!isCollapsed && <FeatherIcon icon={isMedicalOpen ? "chevron-up" : "chevron-down"} size={16} className="text-slate-400 shrink-0" />}
                        </button>

                        {/* Expanded Sub-links */}
                        {!isCollapsed && isMedicalOpen && (
                            <div className="pl-11 pr-2 py-1 space-y-1 text-xs">
                                <NavLink to="/dashboard/medical-records" className="block py-2 px-3 rounded-lg text-slate-400 hover:text-teal-300 hover:bg-slate-800/40 transition-colors">
                                    New Analysis
                                </NavLink>
                                <NavLink to="/dashboard/lab-reports" className="block py-2 px-3 rounded-lg text-slate-400 hover:text-teal-300 hover:bg-slate-800/40 transition-colors">
                                    My Analysis
                                </NavLink>
                            </div>
                        )}

                        {/* Collapsed Flyout Popover */}
                        {isCollapsed && (
                            <div className="absolute left-full top-0 ml-3.5 w-48 bg-[#0B1528] rounded-xl shadow-2xl border border-slate-700/80 py-2 px-1.5 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 z-50">
                                <div className="px-3 py-1 text-xs font-bold text-white border-b border-slate-800 mb-1">
                                    Medical Analyzer
                                </div>
                                <NavLink to="/dashboard/medical-records" className="block px-3 py-2 text-xs text-slate-300 hover:text-teal-300 hover:bg-slate-800/60 rounded-lg transition-colors">
                                    New Analysis
                                </NavLink>
                                <NavLink to="/dashboard/lab-reports" className="block px-3 py-2 text-xs text-slate-300 hover:text-teal-300 hover:bg-slate-800/60 rounded-lg transition-colors">
                                    My Analysis
                                </NavLink>
                            </div>
                        )}
                    </div>

                    {/* 3. DeepFake Detector (Dropdown / Flyout in mini mode) */}
                    <div className="relative group">
                        <button
                            type="button"
                            onClick={() => {
                                if (isCollapsed && setIsCollapsed) {
                                    setIsCollapsed(false);
                                    setIsDeepFakeOpen(true);
                                } else {
                                    setIsDeepFakeOpen(!isDeepFakeOpen);
                                }
                            }}
                            className={`w-full flex items-center rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800/60 hover:text-white transition-colors ${isCollapsed
                                ? "justify-center h-12 w-full px-0"
                                : "justify-between px-4 py-3"
                                }`}
                        >
                            <div className="flex items-center gap-3.5">
                                <FeatherIcon icon="shield" size={20} className="text-slate-400 shrink-0" />
                                {!isCollapsed && <span className="whitespace-nowrap">DeepFake Detector</span>}
                            </div>
                            {!isCollapsed && <FeatherIcon icon={isDeepFakeOpen ? "chevron-up" : "chevron-down"} size={16} className="text-slate-400 shrink-0" />}
                        </button>

                        {/* Expanded Sub-links */}
                        {!isCollapsed && isDeepFakeOpen && (
                            <div className="pl-11 pr-2 py-1 space-y-1 text-xs">
                                <NavLink to="/dashboard/detect-image" className="block py-2 px-3 rounded-lg text-slate-400 hover:text-teal-300 hover:bg-slate-800/40 transition-colors">
                                    New Detection
                                </NavLink>
                                <NavLink to="/dashboard/detect-video" className="block py-2 px-3 rounded-lg text-slate-400 hover:text-teal-300 hover:bg-slate-800/40 transition-colors">
                                    My Detections
                                </NavLink>
                            </div>
                        )}

                        {/* Collapsed Flyout Popover */}
                        {isCollapsed && (
                            <div className="absolute left-full top-0 ml-3.5 w-48 bg-[#0B1528] rounded-xl shadow-2xl border border-slate-700/80 py-2 px-1.5 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 z-50">
                                <div className="px-3 py-1 text-xs font-bold text-white border-b border-slate-800 mb-1">
                                    DeepFake Detector
                                </div>
                                <NavLink to="/dashboard/detect-image" className="block px-3 py-2 text-xs text-slate-300 hover:text-teal-300 hover:bg-slate-800/60 rounded-lg transition-colors">
                                    New Detection
                                </NavLink>
                                <NavLink to="/dashboard/detect-video" className="block px-3 py-2 text-xs text-slate-300 hover:text-teal-300 hover:bg-slate-800/60 rounded-lg transition-colors">
                                    My Detection
                                </NavLink>
                            </div>
                        )}
                    </div>

                    {/* 4. History */}
                    <div className="relative group">
                        <NavLink
                            to="/dashboard/history"
                            className={({ isActive }) =>
                                `flex items-center rounded-xl font-medium text-sm transition-colors ${isCollapsed
                                    ? "justify-center h-12 w-full px-0"
                                    : "px-4 py-3 gap-3.5"
                                } ${isActive
                                    ? "bg-teal-700/80 text-white font-semibold"
                                    : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                                }`
                            }
                        >
                            <FeatherIcon icon="clock" size={20} className="text-slate-400 shrink-0" />
                            {!isCollapsed && <span className="whitespace-nowrap">History</span>}
                        </NavLink>
                        {isCollapsed && (
                            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3.5 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-xl whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-50 border border-slate-700">
                                History
                            </div>
                        )}
                    </div>

                    {/* 5. Reports */}
                    <div className="relative group">
                        <NavLink
                            to="/dashboard/reports"
                            className={({ isActive }) =>
                                `flex items-center rounded-xl font-medium text-sm transition-colors ${isCollapsed
                                    ? "justify-center h-12 w-full px-0"
                                    : "px-4 py-3 gap-3.5"
                                } ${isActive
                                    ? "bg-teal-700/80 text-white font-semibold"
                                    : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                                }`
                            }
                        >
                            <FeatherIcon icon="file-text" size={20} className="text-slate-400 shrink-0" />
                            {!isCollapsed && <span className="whitespace-nowrap">Reports</span>}
                        </NavLink>
                        {isCollapsed && (
                            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3.5 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-xl whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-50 border border-slate-700">
                                Reports
                            </div>
                        )}
                    </div>

                    {/* 6. Favorites */}
                    <div className="relative group">
                        <NavLink
                            to="/dashboard/favorites"
                            className={({ isActive }) =>
                                `flex items-center rounded-xl font-medium text-sm transition-colors ${isCollapsed
                                    ? "justify-center h-12 w-full px-0"
                                    : "px-4 py-3 gap-3.5"
                                } ${isActive
                                    ? "bg-teal-700/80 text-white font-semibold"
                                    : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                                }`
                            }
                        >
                            <FeatherIcon icon="star" size={20} className="text-slate-400 shrink-0" />
                            {!isCollapsed && <span className="whitespace-nowrap">Favorites</span>}
                        </NavLink>
                        {isCollapsed && (
                            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3.5 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-xl whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-50 border border-slate-700">
                                Favorites
                            </div>
                        )}
                    </div>

                    {/* 7. Profile */}
                    <div className="relative group">
                        <NavLink
                            to="/dashboard/profile"
                            className={({ isActive }) =>
                                `flex items-center rounded-xl font-medium text-sm transition-colors ${isCollapsed
                                    ? "justify-center h-12 w-full px-0"
                                    : "px-4 py-3 gap-3.5"
                                } ${isActive
                                    ? "bg-teal-700/80 text-white font-semibold"
                                    : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                                }`
                            }
                        >
                            <FeatherIcon icon="user" size={20} className="text-slate-400 shrink-0" />
                            {!isCollapsed && <span className="whitespace-nowrap">Profile</span>}
                        </NavLink>
                        {isCollapsed && (
                            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3.5 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-xl whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-50 border border-slate-700">
                                Profile
                            </div>
                        )}
                    </div>

                    {/* 8. Settings */}
                    <div className="relative group">
                        <NavLink
                            to="/dashboard/settings"
                            className={({ isActive }) =>
                                `flex items-center rounded-xl font-medium text-sm transition-colors ${isCollapsed
                                    ? "justify-center h-12 w-full px-0"
                                    : "px-4 py-3 gap-3.5"
                                } ${isActive
                                    ? "bg-teal-700/80 text-white font-semibold"
                                    : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                                }`
                            }
                        >
                            <FeatherIcon icon="settings" size={20} className="text-slate-400 shrink-0" />
                            {!isCollapsed && <span className="whitespace-nowrap">Settings</span>}
                        </NavLink>
                        {isCollapsed && (
                            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3.5 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-xl whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-50 border border-slate-700">
                                Settings
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom Section: Divider & Logout */}
                <div className={`p-3 border-t border-slate-800/80 flex items-center transition-all duration-300 ${isCollapsed ? "justify-center" : ""}`}>
                    <div className="relative group w-full">
                        <button type="button" onClick={handleLogout} className={`w-full flex items-center rounded-xl text-sm font-medium text-slate-300 hover:bg-red-500/10 hover:text-red-400 transition-colors group ${isCollapsed ? "justify-center h-12 px-0" : "px-4 py-3 gap-3.5"}`}>
                            <FeatherIcon icon="log-out" size={20} className="text-slate-400 group-hover:text-red-400 shrink-0" />
                            {!isCollapsed && <span className="whitespace-nowrap">Logout</span>}
                        </button>
                        {isCollapsed && (
                            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3.5 px-3 py-1.5 bg-rose-950 text-rose-200 text-xs font-semibold rounded-lg shadow-xl whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-50 border border-rose-800">
                                Logout
                            </div>
                        )}
                    </div>
                </div>
            </aside>
        </>
    );
};

export default ProtectedSidebar;
