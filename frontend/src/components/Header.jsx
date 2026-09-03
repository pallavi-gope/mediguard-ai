import FeatherIcon from "feather-icons-react";
import { useState } from "react";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
            <div className="mx-auto flex h-[78px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
                <a href="/" className="flex items-center gap-2.5">
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
                </a>
                <nav className="hidden items-center gap-10 lg:flex">
                    <a href="/" className="relative py-7 text-[13px] font-semibold text-teal-600">Home
                        <span className="absolute bottom-0 left-1/2 h-[2px] w-11 -translate-x-1/2 rounded-full bg-teal-500" />
                    </a>
                    <a href="#features" className="py-7 text-[13px] font-semibold text-slate-700 transition-colors hover:text-teal-600" >Features</a>
                    <a href="#how-it-works" className="py-7 text-[13px] font-semibold text-slate-700 transition-colors hover:text-teal-600">How It Works</a>
                    <a href="#about" className="py-7 text-[13px] font-semibold text-slate-700 transition-colors hover:text-teal-600">About Us</a>
                    <a href="#contact" className="py-7 text-[13px] font-semibold text-slate-700 transition-colors hover:text-teal-600">Contact</a>
                </nav>
                <div className="hidden items-center gap-3 lg:flex">
                    <a href="/login" className="flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 text-[13px] font-semibold text-slate-600 shadow-sm transition-all hover:border-teal-200 hover:text-teal-600">
                        <FeatherIcon icon="user" size={16} /> Login
                    </a>
                    <a href="/signup" className="flex h-10 items-center rounded-lg bg-primary px-6 text-[13px] font-semibold text-white shadow-sm transition-all hover:bg-teal-600 hover:shadow-md">Get Started</a>

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
                        <a href="/" className="border-b border-slate-100 py-3 text-sm font-semibold text-teal-600" onClick={() => setMobileMenuOpen(false)}>
                            Home
                        </a>
                        <a href="#features" className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700" onClick={() => setMobileMenuOpen(false)}>
                            Features
                        </a>

                        <a href="#how-it-works" className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700" onClick={() => setMobileMenuOpen(false)}>
                            How It Works
                        </a>
                        <a href="#about" className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700" onClick={() => setMobileMenuOpen(false)}>
                            About Us
                        </a>

                        <a href="#pricing" className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700" onClick={() => setMobileMenuOpen(false)}>
                            Pricing
                        </a>

                        <a href="#contact" className="py-3 text-sm font-semibold text-slate-700" onClick={() => setMobileMenuOpen(false)}>
                            Contact
                        </a>
                    </nav>
                    <div className="mt-4 flex gap-3">
                        <a href="/login" className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-600">
                            <FeatherIcon icon="user" size={16} /> Login
                        </a>
                        <a href="/signup" className="flex flex-1 items-center justify-center rounded-lg bg-teal-500 py-2.5 text-sm font-semibold text-white">
                            Get Started
                        </a>
                    </div>

                </div>
            )}
        </header>
    );
};

export default Header;