import { useState } from "react";
import { Outlet } from "react-router-dom";
import ProtectedHeader from "../components/ProtectedHeader";
import ProtectedFooter from "../components/ProtectedFooter";
import ProtectedSidebar from "../components/ProtectedSidebar";

const ProtectedLayout = () => {
    // Desktop collapsed (icons-only) state
    const [isCollapsed, setIsCollapsed] = useState(false);
    // Mobile drawer open state
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleSidebar = () => {
        if (window.innerWidth < 1024) {
            setIsMobileOpen((prev) => !prev);
        } else {
            setIsCollapsed((prev) => !prev);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <ProtectedSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />

            {/* Main Area (Header + Content + Footer) */}
            <div className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out ${isCollapsed ? "lg:pl-20" : "lg:pl-64"}`} >
                {/* Header */}
                <ProtectedHeader toggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />
                {/* Page Content */}
                <main className="flex-1 p-4 sm:p-6 lg:p-8">
                    <Outlet />
                </main>
                {/* Footer */}
                <ProtectedFooter />
            </div>
        </div>
    );
};

export default ProtectedLayout;