import FeatherIcon from "feather-icons-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
            <div className="mx-auto flex h-[78px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
                <NavLink to="/" className="flex items-center gap-2.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-500">
                        <img src="./src/assets/images/logos/logo.png" alt="logo" />
                    </div>
                    <div className="leading-none">
                        <div className="text-[19px] font-bold tracking-tight text-slate-800">
                            MediGuard <span className="color-primary">AI</span>
                        </div>
                        <p className="mt-1 text-[9px] font-medium tracking-wide text-slate-500">
                            AI Multimodal Analysis Platform
                        </p>
                    </div>
                </NavLink>
                <nav className="hidden items-center gap-10 lg:flex">
                    <NavLink to="/" className="relative py-7 text-[13px] font-semibold text-teal-600">Home
                        <span className="absolute bottom-0 left-1/2 h-[2px] w-11 -translate-x-1/2 rounded-full bg-teal-500" />
                    </NavLink>
                    <NavLink to="/features" className="py-7 text-[13px] font-semibold text-slate-700 transition-colors" >Features</NavLink>
                    <NavLink to="/how-it-works" className="py-7 text-[13px] font-semibold text-slate-700 transition-colors">How It Works</NavLink>
                    <NavLink to="/about" className="py-7 text-[13px] font-semibold text-slate-700 transition-colors">About Us</NavLink>
                    <NavLink to="/contact" className="py-7 text-[13px] font-semibold text-slate-700 transition-colors">Contact</NavLink>
                </nav>
                <div className="hidden items-center gap-3 lg:flex">
                    <NavLink to="/login" className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 text-[13px] font-semibold text-slate-600 shadow-sm transition-all hover:border-teal-200">
                        <FeatherIcon icon="user" size={16} /> Login
                    </NavLink>
                    <NavLink to="/signup" className="flex h-10 items-center rounded-lg bg-primary px-6 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-teal-600 hover:shadow-md">Get Started</NavLink>

                </div>
                <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 lg:hidden" aria-label="Toggle menu">
                    {mobileMenuOpen ? (
                        <FeatherIcon icon="x" size={21} />
                    ) : (
                        <FeatherIcon icon="menu" size={21} />
                    )}
                </button>

            </div>

            {mobileMenuOpen && (
                <div className="border-t border-slate-100 bg-white px-6 py-5 lg:hidden">
                    <nav className="flex flex-col">
                        <NavLink to="/" className="border-b border-slate-100 py-3 text-sm font-semibold text-teal-600" onClick={() => setMobileMenuOpen(false)}>
                            Home
                        </NavLink>
                        <NavLink to="/features" className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700" onClick={() => setMobileMenuOpen(false)}>
                            Features
                        </NavLink>

                        <NavLink to="/how-it-works" className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700" onClick={() => setMobileMenuOpen(false)}>
                            How It Works
                        </NavLink>
                        <NavLink to="/about" className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700" onClick={() => setMobileMenuOpen(false)}>
                            About Us
                        </NavLink>

                        <NavLink to="/pricing" className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700" onClick={() => setMobileMenuOpen(false)}>
                            Pricing
                        </NavLink>

                        <NavLink to="/contact" className="py-3 text-sm font-semibold text-slate-700" onClick={() => setMobileMenuOpen(false)}>
                            Contact
                        </NavLink>
                    </nav>
                    <div className="mt-4 flex gap-3">
                        <NavLink to="/login" className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-600">
                            <FeatherIcon icon="user" size={16} /> Login
                        </NavLink>
                        <NavLink to="/signup" className="flex flex-1 items-center justify-center rounded-lg bg-teal-500 py-2.5 text-sm font-semibold text-white">
                            Get Started
                        </NavLink>
                    </div>

                </div>
            )}
        </header>
    );
};

export default Header;