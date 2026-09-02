import FeatherIcon from "feather-icons-react";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-[#061536] text-white">
            <div className="pointer-events-none absolute inset-0 opacity-30">
                <svg className="absolute bottom-0 left-0 h-28 w-full" viewBox="0 0 1440 180" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M0 130C120 90 180 150 300 125C420 100 480 45 600 75C720 105 760 145 880 120C1000 95 1080 35 1200 65C1320 95 1360 120 1440 80" stroke="#164B72" strokeWidth="2" />
                    <path d="M0 150C120 110 190 165 310 140C430 115 490 65 610 90C730 115 780 160 900 135C1020 110 1090 55 1210 85C1330 115 1370 140 1440 100" stroke="#164B72" strokeWidth="1"
                    />
                </svg>
            </div>
            {/* Footer Main */}
            <div className="relative mx-auto max-w-[1400px] px-6 py-8 lg:px-10">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1.2fr_1fr]">
                    {/* Brand */}
                    <div>
                        <a href="/" className="flex items-center gap-2.5">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                                <FeatherIcon icon="activity" size={25} />
                            </div>

                            <div className="leading-none">
                                <div className="text-[18px] font-bold tracking-tight text-white">
                                    MediGuard <span className="text-teal-400">AI</span>
                                </div>
                                <p className="mt-1 text-[8px] font-medium tracking-wide text-slate-400">
                                    AI Multimodal Analysis Platform
                                </p>
                            </div>
                        </a>
                        <p className="mt-5 max-w-[260px] text-[12px] leading-5 text-slate-300">
                            Empowering healthcare & digital security
                            <br />
                            with advanced AI technology.
                        </p>
                        {/* Social Icons */}
                        <div className="mt-4 flex items-center gap-3">
                            <a href="#" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-teal-500 hover:text-white">
                                <FeatherIcon icon="facebook" size={14} />
                            </a>
                            <a href="#" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-teal-500 hover:text-white">
                                <FeatherIcon icon="twitter" size={14} />
                            </a>
                            <a href="#" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-teal-500 hover:text-white">
                                <FeatherIcon icon="linkedin" size={14} />
                            </a>
                            <a href="#" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-teal-500 hover:text-white">
                                <FeatherIcon icon="github" size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="border-l border-white/10 pl-0 lg:pl-8">
                        <h3 className="mb-4 text-[12px] font-bold text-white">
                            Quick Links
                        </h3>

                        <nav className="flex flex-col gap-2">
                            <a href="/" className="text-[11px] text-slate-300 transition hover:text-teal-400">Home</a>
                            <a href="#features" className="text-[11px] text-slate-300 transition hover:text-teal-400">Features</a>
                            <a href="#how-it-works" className="text-[11px] text-slate-300 transition hover:text-teal-400">How It Works</a>
                            <a href="#pricing" className="text-[11px] text-slate-300 transition hover:text-teal-400">Pricing</a>
                            <a href="#contact" className="text-[11px] text-slate-300 transition hover:text-teal-400">Contact</a>
                        </nav>
                    </div>


                    {/* Our Modules */}
                    <div className="border-l border-white/10 pl-0 lg:pl-8">
                        <h3 className="mb-4 text-[12px] font-bold text-white">
                            Our Modules
                        </h3>

                        <nav className="flex flex-col gap-2">
                            <a href="#medical-analysis" className="text-[11px] text-slate-300 transition hover:text-teal-400">Medical Analysis</a>
                            <a href="#deepfake-detection" className="text-[11px] text-slate-300 transition hover:text-teal-400">DeepFake Detection</a>
                            <a href="#reports" className="text-[11px] text-slate-300 transition hover:text-teal-400">Reports</a>
                            <a href="#history" className="text-[11px] text-slate-300 transition hover:text-teal-400">History</a>
                            <a href="#pricing" className="text-[11px] text-slate-300 transition hover:text-teal-400">Pricing</a>
                        </nav>
                    </div>


                    {/* Legal */}
                    <div className="border-l border-white/10 pl-0 lg:pl-8">
                        <h3 className="mb-4 text-[12px] font-bold text-white">
                            Legal
                        </h3>

                        <nav className="flex flex-col gap-2">
                            <a href="/privacy-policy" className="text-[11px] text-slate-300 transition hover:text-teal-400">Privacy Policy</a>
                            <a href="/terms" className="text-[11px] text-slate-300 transition hover:text-teal-400">Terms of Service</a>
                            <a href="/refund-policy" className="text-[11px] text-slate-300 transition hover:text-teal-400">Refund Policy</a>
                            <a href="/disclaimer" className="text-[11px] text-slate-300 transition hover:text-teal-400">Disclaimer</a>
                        </nav>
                    </div>


                    {/* Contact */}
                    <div className="border-l border-white/10 pl-0 lg:pl-8">
                        <h3 className="mb-4 text-[12px] font-bold text-white">
                            Contact Us
                        </h3>
                        <div className="flex flex-col gap-3">
                            <a href="mailto:support@mediguard.com" className="flex items-center gap-3 text-[11px] text-slate-300 transition hover:text-teal-400" >
                                <FeatherIcon icon="mail" size={14} />
                                <span>support@mediguard.com</span>
                            </a>
                            <a href="tel:+919876543210" className="flex items-center gap-3 text-[11px] text-slate-300 transition hover:text-teal-400" >
                                <FeatherIcon icon="phone" size={14} />
                                <span>+91 98765 43210</span>
                            </a>
                            <a href="tel:+919876543210" className="flex items-center gap-3 text-[11px] text-slate-300 transition hover:text-teal-400" >
                                <FeatherIcon icon="phone" size={14} />
                                <span>+91 98765 43210</span>
                            </a>
                            <div className="flex items-center gap-3 text-[11px] text-slate-300">
                                <FeatherIcon icon="map-pin" size={14} />
                                <span>India</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="relative border-t border-white/10">
                <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-center px-6 lg:px-10">
                    <p className="text-[10px] text-slate-400">
                        © 2026 MediGuard AI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;