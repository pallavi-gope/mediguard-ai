import FeatherIcon from "feather-icons-react";
import { useState } from "react";

const Home = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            id: 1,
            question: "1. Is my data safe and secure?",
            answer: "Yes, all uploaded files and medical data are fully encrypted in transit (SSL/TLS) and at rest. Your confidential information is never shared with third parties."
        },
        {
            id: 2,
            question: "2. Can AI replace doctors?",
            answer: "No, MediGuard AI is designed as a supportive second-opinion tool for preliminary insights. It should always be used alongside qualified medical professionals."
        },
        {
            id: 3,
            question: "3. What file formats are supported?",
            answer: "We support PDF, PNG, JPG, JPEG for medical reports, X-rays & ECGs, as well as MP4, AVI, MP3, and WAV for deepfake media verification."
        },
        {
            id: 4,
            question: "4. How accurate is DeepFake detection?",
            answer: "Our ensemble deep learning models achieve up to 98.6% accuracy in identifying synthetic audio, facial manipulation, and generative video artifacts."
        },
        {
            id: 5,
            question: "5. Can I download the reports?",
            answer: "Yes, you can instantly download clear, comprehensive, and patient-friendly PDF summary reports with full diagnostic breakdowns."
        },
        {
            id: 6,
            question: "6. Is there a free trial available?",
            answer: "Yes! You can analyze reports and test deepfake detection for free with standard daily limits without needing a credit card."
        }
    ];

    return (
        <>
            <section className="content-section">
                <div className="w-full max-w-7xl px-4 md:px-0 mx-auto mt-3">
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
                            <div className="mt-10 flex flex-row items-center gap-3 sm:gap-4">
                                <button className="flex-1 sm:flex-initial flex h-12 sm:h-14 items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-primary px-3 sm:px-8 text-sm sm:text-base font-semibold text-white shadow-lg transition-all hover:bg-teal-600 hover:shadow-xl whitespace-nowrap">
                                    Get Started
                                    <FeatherIcon icon="arrow-right" size={18} />
                                </button>
                                <button className="flex-1 sm:flex-initial flex h-12 sm:h-14 items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-slate-200 bg-white px-3 sm:px-8 text-sm sm:text-base font-semibold text-slate-600 shadow-sm transition-all hover:border-teal-200 hover:text-teal-600 whitespace-nowrap">
                                    Explore Features
                                    <FeatherIcon icon="grid" size={18} />
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
                <div className="w-full max-w-7xl px-4 md:px-0 mx-auto">
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
            <section className="content-section pt-0">
                <div className="w-full max-w-7xl px-4 md:px-0 mx-auto">
                    <div className="bg-white/90 backdrop-blur-sm border border-slate-100/80 rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 items-center">

                            {/* 1. High Accuracy AI */}
                            <div className="flex items-center gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-teal-50/70 border border-teal-100/50 flex items-center justify-center flex-shrink-0 text-teal-600 shadow-sm">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <circle cx="12" cy="12" r="6" />
                                        <circle cx="12" cy="12" r="2" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800 leading-tight">High Accuracy AI</h4>
                                    <p className="text-xs text-slate-500 mt-1 leading-snug">AI-powered precise predictions.</p>
                                </div>
                            </div>
                            {/* 2. Instant Results */}
                            <div className="flex items-center gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-cyan-50/70 border border-cyan-100/50 flex items-center justify-center flex-shrink-0 text-cyan-600 shadow-sm">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800 leading-tight">Instant Results</h4>
                                    <p className="text-xs text-slate-500 mt-1 leading-snug">Get results in seconds, not hours.</p>
                                </div>
                            </div>
                            {/* 3. Easy to Use */}
                            <div className="flex items-center gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-indigo-50/70 border border-indigo-100/50 flex items-center justify-center flex-shrink-0 text-indigo-600 shadow-sm">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800 leading-tight">Easy to Use</h4>
                                    <p className="text-xs text-slate-500 mt-1 leading-snug">Simple interface for everyone.</p>
                                </div>
                            </div>
                            {/* 4. Secure & Private */}
                            <div className="flex items-center gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-blue-50/70 border border-blue-100/50 flex items-center justify-center flex-shrink-0 text-blue-600 shadow-sm">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800 leading-tight">Secure & Private</h4>
                                    <p className="text-xs text-slate-500 mt-1 leading-snug">Your data is encrypted and confidential.</p>
                                </div>
                            </div>
                            {/* 5. Download Reports */}
                            <div className="flex items-center gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-emerald-50/70 border border-emerald-100/50 flex items-center justify-center flex-shrink-0 text-emerald-600 shadow-sm">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800 leading-tight">Download Reports</h4>
                                    <p className="text-xs text-slate-500 mt-1 leading-snug">Download and share reports in PDF.</p>
                                </div>
                            </div>
                            {/* 6. Multi-language */}
                            <div className="flex items-center gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-teal-50/70 border border-teal-100/50 flex items-center justify-center flex-shrink-0 text-teal-600 shadow-sm">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="2" y1="12" x2="22" y2="12" />
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-800 leading-tight">Multi-language</h4>
                                    <p className="text-xs text-slate-500 mt-1 leading-snug">Supports multiple languages.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content-section">
                <div className="w-full max-w-7xl px-4 md:px-0 mx-auto px-4">
                    {/* Section Heading */}
                    <div className="text-center mb-12">
                        <h2 className="section-title text-2xl md:text-3xl font-bold text-slate-800">
                            How It Works
                        </h2>
                    </div>

                    {/* Steps Container */}
                    <div className="relative">
                        {/* Connecting line for large screens */}
                        <div className="hidden xl:block absolute top-1/2 left-10 right-10 h-0.5 bg-slate-200/70 -translate-y-1/2 z-0" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative z-10">
                            {/* Step 1 */}
                            <div className="relative bg-white border border-slate-100 rounded-2xl p-3 pt-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                <span className="absolute -top-3.5 left-0 w-7 h-7 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center shadow-md">
                                    1
                                </span>
                                <div className="flex items-start gap-3.5">
                                    <div className="w-12 h-12 rounded-xl bg-teal-50/80 border border-teal-100/60 flex items-center justify-center flex-shrink-0 text-teal-600">
                                        <FeatherIcon icon="upload-cloud" size={22} />
                                    </div>
                                    <div>
                                        <h4 className="text-[15px] font-bold text-slate-800 leading-tight">Upload File</h4>
                                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">Upload your medical report or media file securely.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative bg-white border border-slate-100 rounded-2xl p-3 pt-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                <span className="absolute -top-3.5 left-0 w-7 h-7 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center shadow-md">
                                    2
                                </span>
                                <div className="flex items-start gap-3.5">
                                    <div className="w-12 h-12 rounded-xl bg-teal-50/80 border border-teal-100/60 flex items-center justify-center flex-shrink-0 text-teal-600">
                                        <FeatherIcon icon="cpu" size={22} />
                                    </div>
                                    <div>
                                        <h4 className="text-[15px] font-bold text-slate-800 leading-tight">AI Processing</h4>
                                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">Our AI models analyze the content deeply.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative bg-white border border-slate-100 rounded-2xl p-3 pt-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                <span className="absolute -top-3.5 left-0 w-7 h-7 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center shadow-md">
                                    3
                                </span>
                                <div className="flex items-start gap-3.5">
                                    <div className="w-12 h-12 rounded-xl bg-teal-50/80 border border-teal-100/60 flex items-center justify-center flex-shrink-0 text-teal-600">
                                        <FeatherIcon icon="search" size={22} />
                                    </div>
                                    <div>
                                        <h4 className="text-[15px] font-bold text-slate-800 leading-tight">Get Results</h4>
                                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">Receive instant results with confidence scores.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="relative bg-white border border-slate-100 rounded-2xl p-3 pt-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                <span className="absolute -top-3.5 left-0 w-7 h-7 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center shadow-md">
                                    4
                                </span>
                                <div className="flex items-start gap-3.5">
                                    <div className="w-12 h-12 rounded-xl bg-teal-50/80 border border-teal-100/60 flex items-center justify-center flex-shrink-0 text-teal-600">
                                        <FeatherIcon icon="file-text" size={22} />
                                    </div>
                                    <div>
                                        <h4 className="text-[15px] font-bold text-slate-800 leading-tight">Simplified Explanation</h4>
                                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">Get easy to understand explanations.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 5 */}
                            <div className="relative bg-white border border-slate-100 rounded-2xl p-3 pt-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                <span className="absolute -top-3.5 left-0 w-7 h-7 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center shadow-md">
                                    5
                                </span>
                                <div className="flex items-start gap-3.5">
                                    <div className="w-12 h-12 rounded-xl bg-teal-50/80 border border-teal-100/60 flex items-center justify-center flex-shrink-0 text-teal-600">
                                        <FeatherIcon icon="download" size={22} />
                                    </div>
                                    <div>
                                        <h4 className="text-[15px] font-bold text-slate-800 leading-tight">Download Report</h4>
                                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">Download the full analysis report in PDF.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="content-section pt-0">
                <div className="w-full max-w-7xl px-4 md:px-0 mx-auto px-4">
                    <div className="bg-[#081225] border border-slate-800/80 rounded-2xl py-6 px-6 sm:px-8 shadow-xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-800">

                            {/* 1. Happy Users */}
                            <div className="flex items-center gap-4.5 px-4 lg:px-8 justify-start">
                                <div className="text-sky-400 flex-shrink-0">
                                    <FeatherIcon icon="users" size={32} strokeWidth={1.75} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight leading-none">1000+</h3>
                                    <p className="text-xs text-slate-400 font-medium mt-1">Happy Users</p>
                                </div>
                            </div>

                            {/* 2. Reports Analyzed */}
                            <div className="flex items-center gap-4.5 px-4 lg:px-8 justify-start">
                                <div className="text-purple-400 flex-shrink-0">
                                    <FeatherIcon icon="file-text" size={32} strokeWidth={1.75} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight leading-none">2500+</h3>
                                    <p className="text-xs text-slate-400 font-medium mt-1">Reports Analyzed</p>
                                </div>
                            </div>

                            {/* 3. Deepfakes Detected */}
                            <div className="flex items-center gap-4.5 px-4 lg:px-8 justify-start">
                                <div className="text-emerald-400 flex-shrink-0">
                                    <FeatherIcon icon="shield" size={32} strokeWidth={1.75} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight leading-none">1500+</h3>
                                    <p className="text-xs text-slate-400 font-medium mt-1">Deepfakes Detected</p>
                                </div>
                            </div>

                            {/* 4. Overall Accuracy */}
                            <div className="flex items-center gap-4.5 px-4 lg:px-8 justify-start">
                                <div className="text-amber-400 flex-shrink-0">
                                    <FeatherIcon icon="award" size={32} strokeWidth={1.75} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight leading-none">98.6%</h3>
                                    <p className="text-xs text-slate-400 font-medium mt-1">Overall Accuracy</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* ================= Built With Modern Technologies ================= */}
            <section className="content-section">
                <div className="w-full max-w-7xl px-4 md:px-0 mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="section-title text-xl md:text-2xl font-bold text-slate-800">
                            Built With Modern Technologies
                        </h2>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 py-4">

                        {/* React */}
                        <div className="flex items-center gap-2.5 transition-transform hover:scale-105">
                            <svg className="w-8 h-8 text-[#00D8FF]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
                                <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
                                <g stroke="#00D8FF" strokeWidth="1" fill="none">
                                    <ellipse rx="11" ry="4.2" />
                                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                                </g>
                            </svg>
                            <span className="text-base font-bold text-slate-800">React</span>
                        </div>

                        {/* FastAPI */}
                        <div className="flex items-center gap-2.5 transition-transform hover:scale-105">
                            <div className="w-7 h-7 rounded-full bg-[#05998B] flex items-center justify-center text-white">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm1.09 18.96l-1.63-4.52h-2.9l4.35-8.4h.65l-1.63 4.52h2.9l-4.35 8.4h-.65z" />
                                </svg>
                            </div>
                            <span className="text-base font-bold text-slate-800">FastAPI</span>
                        </div>

                        {/* MongoDB */}
                        <div className="flex items-center gap-2.5 transition-transform hover:scale-105">
                            <svg className="w-5 h-8 text-[#47A248]" viewBox="0 0 24 48" fill="currentColor">
                                <path d="M12 0C11.5 5.5 8 13.5 8 20.5C8 28.5 12 36 12 36C12 36 16 28.5 16 20.5C16 13.5 12.5 5.5 12 0Z" />
                            </svg>
                            <span className="text-base font-bold text-slate-800">MongoDB</span>
                        </div>

                        {/* PyTorch */}
                        <div className="flex items-center gap-2.5 transition-transform hover:scale-105">
                            <svg className="w-6 h-7 text-[#EE4C2C]" viewBox="0 0 24 28" fill="currentColor">
                                <path d="M13.5 0L11 2.5C14.5 4.5 16.5 8.5 16 12.5C15.5 16.5 12.5 19.5 8.5 20C4.5 20.5 1 18 0 14L2 13C2.8 15.8 5.2 17.8 8.1 17.5C11 17.2 13.2 15 13.6 12.1C14 9.2 12.5 6.4 10 5L13.5 0ZM15 3.5C15.8 3.5 16.5 4.2 16.5 5C16.5 5.8 15.8 6.5 15 6.5C14.2 6.5 13.5 5.8 13.5 5C13.5 4.2 14.2 3.5 15 3.5Z" />
                            </svg>
                            <span className="text-base font-bold text-slate-800">PyTorch</span>
                        </div>

                        {/* OpenCV */}
                        <div className="flex items-center gap-2.5 transition-transform hover:scale-105">
                            <div className="flex items-center">
                                <span className="w-3.5 h-3.5 rounded-full border-2 border-red-500 inline-block -mr-1"></span>
                                <span className="w-3.5 h-3.5 rounded-full border-2 border-green-500 inline-block -mr-1 -mt-2"></span>
                                <span className="w-3.5 h-3.5 rounded-full border-2 border-blue-500 inline-block"></span>
                            </div>
                            <span className="text-base font-bold text-slate-800">OpenCV</span>
                        </div>

                        {/* EasyOCR */}
                        <div className="flex items-center gap-2.5 transition-transform hover:scale-105">
                            <div className="px-2 py-0.5 rounded border-2 border-dashed border-sky-500 text-sky-600 font-extrabold text-[11px] tracking-wider">
                                [OCR]
                            </div>
                            <span className="text-base font-bold text-slate-800">EasyOCR</span>
                        </div>

                        {/* Tailwind CSS */}
                        <div className="flex items-center gap-2.5 transition-transform hover:scale-105">
                            <svg className="w-7 h-5 text-[#38BDF8]" viewBox="0 0 24 15" fill="currentColor">
                                <path d="M12 0C7.2 0 4.2 2.4 3 7.2C4.8 4.8 6.9 3.9 9.3 4.5C10.7 4.8 11.7 5.9 12.8 7C14.6 8.9 16.7 11 21 11C25.8 11 28.8 8.6 30 3.8C28.2 6.2 26.1 7.1 23.7 6.5C22.3 6.2 21.3 5.1 20.2 4C18.4 2.1 16.3 0 12 0ZM3 11C-1.8 11 -4.8 13.4 -6 18.2C-4.2 15.8 -2.1 14.9 0.3 15.5C1.7 15.8 2.7 16.9 3.8 18C5.6 19.9 7.7 22 12 22C16.8 22 19.8 19.6 21 14.8C19.2 17.2 17.1 18.1 14.7 17.5C13.3 17.2 12.3 16.1 11.2 15C9.4 13.1 7.3 11 3 11Z" />
                            </svg>
                            <span className="text-base font-bold text-slate-800">Tailwind CSS</span>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= Frequently Asked Questions ================= */}
            <section className="content-section pt-0">
                <div className="w-full max-w-7xl px-4 md:px-0 mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="section-title text-2xl md:text-3xl font-bold text-slate-800">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    {/* 2-Column Responsive FAQ Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Left Column (Q1, Q2, Q3) */}
                        <div className="space-y-4">
                            {faqs.slice(0, 3).map((faq) => (
                                <div
                                    key={faq.id}
                                    className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)] transition-all cursor-pointer hover:border-teal-100"
                                    onClick={() => toggleFaq(faq.id)}
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <h4 className="text-[15px] font-bold text-slate-800 leading-snug">
                                            {faq.question}
                                        </h4>
                                        <div className={`text-slate-400 flex-shrink-0 transition-transform duration-200 ${openFaq === faq.id ? "rotate-180 text-teal-600" : ""}`}>
                                            <FeatherIcon icon="chevron-down" size={18} />
                                        </div>
                                    </div>

                                    {openFaq === faq.id && (
                                        <p className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 leading-relaxed animate-fadeIn">
                                            {faq.answer}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Column (Q4, Q5, Q6) */}
                        <div className="space-y-4">
                            {faqs.slice(3, 6).map((faq) => (
                                <div
                                    key={faq.id}
                                    className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)] transition-all cursor-pointer hover:border-teal-100"
                                    onClick={() => toggleFaq(faq.id)}
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <h4 className="text-[15px] font-bold text-slate-800 leading-snug">
                                            {faq.question}
                                        </h4>
                                        <div className={`text-slate-400 flex-shrink-0 transition-transform duration-200 ${openFaq === faq.id ? "rotate-180 text-teal-600" : ""}`}>
                                            <FeatherIcon icon="chevron-down" size={18} />
                                        </div>
                                    </div>

                                    {openFaq === faq.id && (
                                        <p className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 leading-relaxed animate-fadeIn">
                                            {faq.answer}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>


        </>
    );
};

export default Home;    