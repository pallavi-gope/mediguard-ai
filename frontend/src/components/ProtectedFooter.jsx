import React from "react";

const ProtectedFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-auto border-t border-slate-200/80 bg-white/80 backdrop-blur-xs py-4 px-4 sm:px-6 text-center text-xs text-slate-500">
            <p className="tracking-wide">
                &copy; {currentYear} <span className="font-semibold text-slate-700">MediGuard AI</span>. All rights reserved.
            </p>
        </footer>
    );
};

export default ProtectedFooter;