import React, { useRef, useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";

const ProtectedHeader = ({ toggleSidebar }) => {
    const searchInputRef = useRef(null);
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    // Global shortcut: Ctrl + K (or Cmd + K) focuses search
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                searchInputRef.current?.focus();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-xs px-4 sm:px-6 py-3 transition-all">
            <div className="flex items-center justify-between gap-4">
                {/* Left Side: Hamburger & Search Input */}
                <div className="flex items-center gap-3 sm:gap-4 flex-1 max-w-xl">
                    {/* Hamburger Menu button */}
                    <button type="button" onClick={toggleSidebar} className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden" aria-label="Toggle Sidebar">
                        <FeatherIcon icon="menu" size={20} />
                    </button>

                    {/* Search Box with Ctrl + K badge */}
                    <div className="relative w-full max-w-sm sm:max-w-md">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <FeatherIcon icon="search" size={16} />
                        </div>
                        <input ref={searchInputRef} type="text" placeholder="Search anything..." className="w-full pl-10 pr-16 py-2 bg-slate-50/80 hover:bg-slate-100/80 focus:bg-white text-sm text-slate-800 placeholder-slate-400 rounded-xl border border-slate-200/80 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all outline-hidden" />
                        <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none">
                            <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[11px] font-medium text-slate-400 bg-white border border-slate-200 rounded-md shadow-2xs">
                                Ctrl + K
                            </kbd>
                        </div>
                    </div>
                </div>

                {/* Right Side: Notifications & User Profile */}
                <div className="flex items-center gap-3 sm:gap-5">
                    {/* Notification Bell with Badge */}
                    <button type="button" className="relative p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden" aria-label="Notifications">
                        <FeatherIcon icon="bell" size={20} />
                        <span className="absolute top-1 right-1 flex items-center justify-center min-w-4.5 h-4.5 px-1 text-[10px] font-bold text-white bg-rose-500 rounded-full ring-2 ring-white">
                            3
                        </span>
                    </button>

                    {/* User Profile Dropdown */}
                    <div className="relative">
                        <button type="button" onClick={() => setShowProfileMenu(!showProfileMenu)} className="flex items-center gap-3 p-1 rounded-xl hover:bg-slate-50 transition-colors focus:outline-hidden">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop" alt="User" className="w-9 h-9 rounded-full object-cover ring-2 ring-slate-100" />
                            <div className="hidden sm:block text-left">
                                <div className="text-sm font-semibold text-slate-800 leading-tight">
                                    User
                                </div>
                                <div className="text-xs font-medium text-slate-400">Role</div>
                            </div>
                            <FeatherIcon icon="chevron-down" size={15} className="text-slate-400 hidden sm:block" />
                        </button>

                        {/* Profile Dropdown Menu */}
                        {showProfileMenu && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-50 animate-fadeIn">
                                <div className="px-4 py-2 border-b border-slate-100 sm:hidden">
                                    <p className="text-sm font-semibold text-slate-800">User</p>
                                    <p className="text-xs text-slate-500">Role</p>
                                </div>
                                <a href="/dashboard/profile" className="block px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-teal-600 transition-colors">
                                    My Profile
                                </a>
                                <a href="/dashboard/settings" className="block px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-teal-600 transition-colors">
                                    Account Settings
                                </a>
                                <div className="border-t border-slate-100 my-1" />
                                <button type="button"
                                    onClick={() => {
                                        sessionStorage.removeItem("token");
                                        window.location.href = "/login";
                                    }}
                                    className="w-full text-left px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 transition-colors"
                                >
                                    Log Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ProtectedHeader;
