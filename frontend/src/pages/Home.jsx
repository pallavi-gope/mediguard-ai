import FeatherIcon from "feather-icons-react";

const Home = () => {
    return (
        <>
            <section className="content-section">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
                        <div className="md:col-span-6">
                            <h2 className="hero-sub-title">AI Powered . Trusted . Secure</h2>
                            <h1 className="hero-title mt-2 mb-3">
                                AI-Powered Analysis
                                for a Healthier &
                                Safer <span className="color-primary">Tomorrow</span>
                            </h1>
                            <p className="hero-description">
                                Analyze medical reports, X-rays, ECGs and detect deepfakes in image, video & audio with advanced AI models. Get instant results, simplified explanations and downloadable reports.
                            </p>
                            <div className="mt-10 flex flex-wrap items-center gap-4">
                                <button className="flex h-14 items-center gap-2 rounded-xl bg-primary px-8 text-base font-semibold text-white shadow-lg transition-all hover:bg-teal-600 hover:shadow-xl">
                                    Get Started
                                    <FeatherIcon icon="arrow-right" size={20} />
                                </button>
                                <button className="flex h-14 items-center gap-2 rounded-xl border border-slate-200 bg-white px-8 text-base font-semibold text-slate-600 shadow-sm transition-all hover:border-teal-200 hover:text-teal-600">
                                    Explore Features
                                    <FeatherIcon icon="grid" size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="md:col-span-6">
                            <img src="./src/assets/images/hero.jpg" alt="hero" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="content-section">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Our Core Modules</h2>
                        <p className="hero-description max-w-3xl mx-auto text-slate-600">Explore the key features of our AI-powered analysis platform.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
                        <div className="md:col-span-6">
                            <div className="module-card">
                                <div className="text-center mb-3">
                                    <h3 className="section-subtitle">Medical Analysis</h3>
                                    <p>Advanced AI for medical insights</p>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                    <div class="space-y-8 md:col-span-5">
                                        <div class="flex items-start gap-4 group">
                                            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100/60 flex items-center justify-center text-teal-600 transition-transform group-hover:scale-105">
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 class="text-base font-bold text-slate-800">Blood Test Reports</h3>
                                                <p class="mt-1 text-sm text-slate-500 leading-relaxed">Analyze CBC, Sugar, Lipid profiles and more.</p>
                                            </div>
                                        </div>

                                        <div class="flex items-start gap-4 group">
                                            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100/60 flex items-center justify-center text-teal-600 transition-transform group-hover:scale-105">
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 class="text-base font-bold text-slate-800">ECG Analysis</h3>
                                                <p class="mt-1 text-sm text-slate-500 leading-relaxed">Analyze ECG reports and heart signals.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex justify-center items-center py-4 md:col-span-2">
                                        <div class="relative w-48 h-48 flex items-center justify-center">
                                            <div class="absolute inset-0 bg-teal-400/20 rounded-full blur-2xl"></div>
                                            <img src="./src/assets/images/brain-icon.png" className="w-30" alt="medical analysis" />
                                        </div>
                                    </div>

                                    <div class="space-y-8 md:col-span-5">
                                        <div class="flex items-start gap-4 group">
                                            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100/60 flex items-center justify-center text-teal-600 transition-transform group-hover:scale-105">
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 class="text-base font-bold text-slate-800">X-ray Analysis</h3>
                                                <p class="mt-1 text-sm text-slate-500 leading-relaxed">Detect abnormalities in X-ray images.</p>
                                            </div>
                                        </div>

                                        <div class="flex items-start gap-4 group">
                                            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100/60 flex items-center justify-center text-teal-600 transition-transform group-hover:scale-105">
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 class="text-base font-bold text-slate-800">Medical PDFs</h3>
                                                <p class="mt-1 text-sm text-slate-500 leading-relaxed">Extract text, summarize and simplify reports.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-6">
                            <div className="module-card">
                                <div className="text-center mb-3">
                                    <h3 className="section-subtitle">DeepFake Detection</h3>
                                    <p>Identify fake and manipulated content</p>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                    <div class="space-y-8 md:col-span-5">
                                        <div class="flex items-start gap-4 group">
                                            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100/60 flex items-center justify-center text-teal-600 transition-transform group-hover:scale-105">
                                                <svg class="w-full h-full text-purple-600" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="18" y="18" width="28" height="28" rx="6" fill="currentColor" />
                                                    <path d="M22 38L28 30L34 37L38 32L42 38H22Z" fill="#F0EEFF" />
                                                    <circle cx="26" cy="25" r="2.5" fill="#F0EEFF" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 class="text-base font-bold text-slate-800">Image Detection</h3>
                                                <p class="mt-1 text-sm text-slate-500 leading-relaxed">Detect deepfake images with high accuracy.</p>
                                            </div>
                                        </div>

                                        <div class="flex items-start gap-4 group">
                                            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100/60 flex items-center justify-center text-teal-600 transition-transform group-hover:scale-105">
                                                <svg class="w-full h-full text-purple-600" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="20" y="28" width="4" height="8" rx="2" fill="currentColor" />
                                                    <rect x="27" y="22" width="4" height="20" rx="2" fill="currentColor" />
                                                    <rect x="34" y="18" width="4" height="28" rx="2" fill="currentColor" />
                                                    <rect x="41" y="25" width="4" height="14" rx="2" fill="currentColor" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 class="text-base font-bold text-slate-800">Audio Detection</h3>
                                                <p class="mt-1 text-sm text-slate-500 leading-relaxed">Detect cloned or AI generated audio.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex justify-center items-center py-4 md:col-span-2">
                                        <div class="relative w-48 h-48 flex items-center justify-center">
                                            <div class="absolute inset-0 bg-teal-400/20 rounded-full blur-2xl"></div>
                                            <img src="./src/assets/images/deepfake-icon.png" className="w-30" alt="medical analysis" />
                                        </div>
                                    </div>

                                    <div class="space-y-8 md:col-span-5">
                                        <div class="flex items-start gap-4 group">
                                            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100/60 flex items-center justify-center text-teal-600 transition-transform group-hover:scale-105">
                                                <svg class="w-full h-full text-purple-600" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="18" y="20" width="28" height="24" rx="6" fill="currentColor" />
                                                    <path d="M30 27L38 32L30 37V27Z" fill="#F0EEFF" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 class="text-base font-bold text-slate-800">Video Detection</h3>
                                                <p class="mt-1 text-sm text-slate-500 leading-relaxed">Analyze videos frame by frame for manipulation.</p>
                                            </div>
                                        </div>

                                        <div class="flex items-start gap-4 group">
                                            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-100/60 flex items-center justify-center text-teal-600 transition-transform group-hover:scale-105">
                                                <svg class="w-full h-full text-purple-600" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="32" cy="32" r="14" stroke="currentColor" stroke-width="3" fill="none" />
                                                    <text x="32" y="36" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="currentColor" text-anchor="middle">95%</text>
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 class="text-base font-bold text-slate-800">Confidence Score</h3>
                                                <p class="mt-1 text-sm text-slate-500 leading-relaxed">Get confidence percentage for every result.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;    