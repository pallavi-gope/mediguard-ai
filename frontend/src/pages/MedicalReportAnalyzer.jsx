import React, { useState, useRef } from "react";
import FeatherIcon from "feather-icons-react";
import chestXrayImg from "../assets/images/chest-xray.jpg";

const MedicalReportAnalyzer = () => {
    // Document category state
    const [selectedDocType, setSelectedDocType] = useState("blood");
    const [selectedLang, setSelectedLang] = useState("en");
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("overview");
    const [explanationLang, setExplanationLang] = useState("en");
    const [isDragging, setIsDragging] = useState(false);
    const [uploadedFile, setUploadedFile] = useState({
        name: "blood_report.pdf",
        size: "2.4 MB",
        date: "02 May 2025, 10:30 AM",
        id: "#MR12568",
        type: "Blood Report"
    });
    const [showFullExplanation, setShowFullExplanation] = useState(false);
    const [showAllAbnormalities, setShowAllAbnormalities] = useState(false);

    const fileInputRef = useRef(null);

    // Languages list
    const languages = [
        { id: "en", label: "English", native: "English", flag: "🌐" },
        { id: "hi", label: "Hindi", native: "हिंदी (Hindi)", flag: "🇮🇳" },
        { id: "bn", label: "Bengali", native: "বাংলা (Bengali)", flag: "🇧🇩" },
    ];

    // AI Explanations in multiple languages
    const explanations = {
        en: "Your hemoglobin level is lower than normal which may indicate anemia. LDL cholesterol is higher than normal which can increase the risk of heart disease. Vitamin D is also low which may cause fatigue and weak bones. Liver enzyme (SGPT) is elevated, which can happen due to fatty liver, infection, alcohol, or certain medications.",
        hi: "आपका हीमोग्लोबिन स्तर सामान्य से कम है जो एनीमिया का संकेत हो सकता है। एलडीएल कोलेस्ट्रॉल सामान्य से अधिक है जिससे हृदय रोग का खतरा बढ़ सकता है। विटामिन डी भी कम है जो थकान और कमजोर हड्डियों का कारण बन सकता है। लिवर एंजाइम (एसजीपीटी) बढ़ा हुआ है, जो फैटी लिवर या संक्रमण के कारण हो सकता है।",
        bn: "আপনার হিমোগ্লোবিনের মাত্রা স্বাভাবিকের চেয়ে কম যা রক্তাল্পতার লক্ষণ হতে পারে। এলডিএল কোলেস্টেরল স্বাভাবিকের চেয়ে বেশি যা হৃদরোগের ঝুঁকি বাড়াতে পারে। ভিটামিন ডি-ও কম যা ক্লান্তি এবং হাড়ের দুর্বলতা সৃষ্টি করতে পারে। লিভারের এনজাইম (SGPT) কিছুটা বৃদ্ধি পেয়েছে, যা ফ্যাটি লিভার বা ওষুধের কারণে হতে পারে।"
    };

    // Sample reports
    const sampleReports = [
        {
            id: "blood",
            title: "Blood Report",
            type: "Sample PDF",
            badge: "PDF",
            fileName: "blood_report.pdf",
            size: "2.4 MB",
            date: "02 May 2025, 10:30 AM",
            reportId: "#MR12568",
            isImage: false,
        },
        {
            id: "xray",
            title: "X-Ray Chest",
            type: "Sample JPG",
            badge: "JPG",
            fileName: "chest_xray.png",
            size: "4.1 MB",
            date: "02 May 2025, 11:15 AM",
            reportId: "#XR94021",
            isImage: true,
            imgSrc: chestXrayImg,
        },
        {
            id: "ecg",
            title: "ECG Report",
            type: "Sample PDF",
            badge: "PDF",
            fileName: "ecg_trace.pdf",
            size: "1.8 MB",
            date: "01 May 2025, 04:45 PM",
            reportId: "#EC51203",
            isImage: false,
        },
    ];

    // Key abnormalities data
    const abnormalities = [
        { name: "Hemoglobin (Hb)", value: "10.2 g/dL", status: "Low", range: "12.0 - 15.0 g/dL" },
        { name: "LDL Cholesterol", value: "156 mg/dL", status: "High", range: "< 100 mg/dL" },
        { name: "Vitamin D (25-OH)", value: "18 ng/mL", status: "Low", range: "30 - 100 ng/mL" },
        { name: "SGPT (ALT)", value: "52 U/L", status: "High", range: "7 - 45 U/L" },
        { name: "RBC Count", value: "3.8 mil/cmn", status: "Low", range: "4.0 - 5.5 mil/cmn" },
    ];

    // Recommendations list
    const recommendations = [
        { text: "Eat iron rich foods (spinach, dates, red meat, lentils)", action: "Diet plan" },
        { text: "Avoid oily and fried foods", action: "Heart health" },
        { text: "Take Vitamin D rich foods or supplements", action: "Bone health" },
        { text: "Consult a physician for detailed diagnosis", action: "Doctor consult" },
    ];

    // Handle file upload
    const handleFileSelect = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setUploadedFile({
                name: file.name,
                size: (file.size / (1024 * 1024)).toFixed(1) + " MB",
                date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) + ", " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                id: "#MR" + Math.floor(10000 + Math.random() * 90000),
                type: selectedDocType === "blood" ? "Blood Report" : selectedDocType === "xray" ? "X-Ray" : selectedDocType === "ecg" ? "ECG Report" : "Medical PDF"
            });
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file) {
            setUploadedFile({
                name: file.name,
                size: (file.size / (1024 * 1024)).toFixed(1) + " MB",
                date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) + ", " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                id: "#MR" + Math.floor(10000 + Math.random() * 90000),
                type: selectedDocType === "blood" ? "Blood Report" : selectedDocType === "xray" ? "X-Ray" : selectedDocType === "ecg" ? "ECG Report" : "Medical PDF"
            });
        }
    };

    const handleSelectSample = (sample) => {
        setSelectedDocType(sample.id);
        setUploadedFile({
            name: sample.fileName,
            size: sample.size,
            date: sample.date,
            id: sample.reportId,
            type: sample.title
        });
    };

    return (
        <div className="space-y-5 pb-0">
            {/* 1. Header Section: Title & Subtitle + Action Controls (Language, PDF, Share) */}
            <section>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="dashboard-title text-xl sm:text-2xl font-bold text-slate-800">
                            Medical Report Analyzer
                        </h1>
                        <p className="text-slate-500 text-sm mt-0.5">
                            Upload any medical report, X-ray, ECG or blood test and get AI powered insights.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        {/* Language Selector Dropdown */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                                className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-slate-200 hover:border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-700 shadow-2xs hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-teal-600">
                                    <FeatherIcon icon="globe" size={15} />
                                </span>
                                <span>{languages.find(l => l.id === selectedLang)?.label}</span>
                                <FeatherIcon icon="chevron-down" size={14} className="text-slate-400" />
                            </button>

                            {isLangDropdownOpen && (
                                <div className="absolute right-0 mt-1.5 w-44 bg-white border border-slate-200 rounded-xl shadow-lg py-1.5 z-40 animate-fadeIn">
                                    <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
                                        Language / भाषा
                                    </div>
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.id}
                                            type="button"
                                            onClick={() => {
                                                setSelectedLang(lang.id);
                                                setExplanationLang(lang.id);
                                                setIsLangDropdownOpen(false);
                                            }}
                                            className={`w-full flex items-center justify-between px-3.5 py-2 text-xs text-left transition-colors ${selectedLang === lang.id
                                                ? "bg-teal-50/80 text-teal-700 font-semibold"
                                                : "text-slate-700 hover:bg-slate-50"
                                                }`}
                                        >
                                            <span className="flex items-center gap-2">
                                                <span>{lang.flag}</span>
                                                <span>{lang.native}</span>
                                            </span>
                                            {selectedLang === lang.id && (
                                                <FeatherIcon icon="check" size={13} className="text-teal-600" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Download PDF Button */}
                        <button
                            type="button"
                            onClick={() => alert("Downloading medical report analysis PDF...")}
                            className="inline-flex items-center gap-2 px-3.5 py-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl text-xs sm:text-sm font-medium shadow-2xs transition-colors"
                        >
                            <FeatherIcon icon="download" size={15} className="text-slate-500" />
                            <span>Download PDF</span>
                        </button>

                        {/* Share Report Button */}
                        <button
                            type="button"
                            onClick={() => alert("Report link copied to clipboard!")}
                            className="inline-flex items-center gap-2 px-2 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs sm:text-sm font-medium shadow-sm shadow-teal-600/20 transition-all hover:shadow-md"
                        >
                            <FeatherIcon icon="share-2" size={15} />
                            <span>Share Report</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. Main Content Grid: Left Column (Upload & Previews) | Right Column (Analysis Dashboard) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
                {/* ================= LEFT COLUMN ================= */}
                <div className="lg:col-span-3 xl:col-span-4 space-y-4">
                    {/* Document Type Selector Tabs */}
                    <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100/90 rounded-2xl border border-slate-200/80 text-xs">
                        {[
                            { id: "blood", label: "Blood Report", icon: "file-text" },
                            { id: "xray", label: "X-Ray", icon: "image" },
                            { id: "ecg", label: "ECG", icon: "activity" },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setSelectedDocType(tab.id)}
                                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2 px-1 rounded-xl font-medium transition-all ${selectedDocType === tab.id
                                    ? "bg-white text-teal-700 shadow-2xs font-semibold"
                                    : "text-slate-600 hover:text-slate-900"
                                    }`}
                            >
                                <FeatherIcon
                                    icon={tab.icon}
                                    size={14}
                                    className={selectedDocType === tab.id ? "text-teal-600" : "text-slate-400"}
                                />
                                <span className="truncate text-[11px] sm:text-xs">{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Drag & Drop Upload Zone */}
                    <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`border-2 border-dashed rounded-2xl p-6 sm:p-7 text-center transition-all bg-white ${isDragging
                            ? "border-teal-500 bg-teal-50/40 shadow-md ring-4 ring-teal-500/10"
                            : "border-slate-200 hover:border-teal-400 shadow-2xs"
                            }`}
                    >
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileSelect}
                            className="hidden"
                        />

                        {/* Upload Cloud Icon */}
                        <div className="w-14 h-14 mx-auto rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 mb-3 shadow-2xs">
                            <FeatherIcon icon="upload-cloud" size={28} className="text-slate-500" />
                        </div>

                        <h3 className="text-sm sm:text-base font-semibold text-slate-800">
                            Drag & drop your file here
                        </h3>
                        <p className="text-xs text-slate-400 my-1">or</p>

                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="inline-flex items-center justify-center px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-medium text-xs sm:text-sm rounded-xl shadow-xs shadow-teal-600/20 transition-colors"
                        >
                            Upload File
                        </button>

                        <p className="text-[11px] text-slate-400 mt-3 font-normal">
                            Supports: PDF, JPG, PNG (Max. 20MB)
                        </p>
                    </div>

                    {/* Active Uploaded File Card */}
                    {uploadedFile && (
                        <div className="p-3 bg-white border border-slate-200/90 rounded-2xl shadow-2xs flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 shrink-0">
                                    <FeatherIcon icon="file-text" size={20} />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
                                        {uploadedFile.name}
                                    </h4>
                                    <p className="text-[11px] text-slate-400 truncate">
                                        {uploadedFile.size} • Uploaded on {uploadedFile.date}
                                    </p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setUploadedFile(null)}
                                className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors shrink-0"
                                title="Remove file"
                            >
                                <FeatherIcon icon="trash-2" size={16} />
                            </button>
                        </div>
                    )}

                    {/* What We Analyze Banner Card */}
                    <div className="bg-emerald-50/70 border border-emerald-100/90 rounded-2xl p-4 sm:p-5">
                        <h4 className="text-xs sm:text-sm font-bold text-emerald-900 mb-3 flex items-center gap-1.5">
                            <FeatherIcon icon="check-circle" size={16} className="text-emerald-600" />
                            <span>What we analyze?</span>
                        </h4>
                        <div className="grid grid-cols-2 gap-y-2.5 gap-x-2 text-xs text-slate-700">
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[11px] font-bold">✓</span>
                                <span className="truncate">Hemoglobin, RBC, WBC</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[11px] font-bold">✓</span>
                                <span className="truncate">Electrolytes & Minerals</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[11px] font-bold">✓</span>
                                <span className="truncate">Sugar, Lipid Profile</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[11px] font-bold">✓</span>
                                <span className="truncate">Thyroid, Vitamins</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[11px] font-bold">✓</span>
                                <span className="truncate">Liver & Kidney Function</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[11px] font-bold">✓</span>
                                <span className="truncate">And many more...</span>
                            </div>
                        </div>
                    </div>

                    {/* Sample Reports Section */}
                    <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                                Sample Reports
                            </h4>

                        </div>

                        <div className="grid grid-cols-3 gap-2.5">
                            {sampleReports.map((sample) => (
                                <button
                                    key={sample.id}
                                    type="button"
                                    onClick={() => handleSelectSample(sample)}
                                    className={`group text-left p-2.5 bg-white border rounded-2xl shadow-2xs hover:border-teal-500 hover:shadow-xs transition-all flex flex-col items-center text-center ${selectedDocType === sample.id ? "border-teal-500 ring-2 ring-teal-500/10" : "border-slate-200"
                                        }`}
                                >
                                    <div className="w-full h-16 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden mb-2 relative group-hover:scale-[1.02] transition-transform">
                                        {sample.isImage ? (
                                            <img
                                                src={sample.imgSrc}
                                                alt={sample.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : sample.id === "ecg" ? (
                                            <div className="w-full h-full bg-rose-50/40 p-1 flex items-center justify-center">
                                                <svg viewBox="0 0 100 40" className="w-full h-8 stroke-rose-500 fill-none stroke-[2]">
                                                    <path d="M0,20 L20,20 L25,5 L30,35 L35,15 L40,22 L45,20 L60,20 L65,8 L70,32 L75,18 L80,20 L100,20" />
                                                </svg>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center gap-1">
                                                <FeatherIcon icon="file-text" size={20} className="text-slate-400" />
                                                <div className="w-7 h-1 bg-slate-200 rounded-full" />
                                                <div className="w-5 h-1 bg-slate-200 rounded-full" />
                                            </div>
                                        )}
                                        <span className="absolute bottom-1 right-1 px-1.5 py-0.5 text-[11px] font-bold bg-white/90 text-slate-600 rounded-sm shadow-2xs">
                                            {sample.badge}
                                        </span>
                                    </div>
                                    <div className="w-full">
                                        <div className="text-[11px] font-semibold text-slate-800 truncate">
                                            {sample.title}
                                        </div>
                                        <div className="text-[11px] text-slate-400">
                                            {sample.type}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Security & Data Safety Card */}
                    <div className="p-3.5 sm:p-4 bg-indigo-50/60 border border-indigo-100/80 rounded-2xl flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-indigo-100/80 text-indigo-600 flex items-center justify-center shrink-0">
                            <FeatherIcon icon="shield" size={20} />
                        </div>
                        <div>
                            <h5 className="text-xs sm:text-sm font-semibold text-slate-800">
                                Your Data is Safe
                            </h5>
                            <p className="text-[11px] text-slate-500 leading-normal mt-0.5">
                                We use industry standard encryption to keep your data 100% secure and private.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ================= RIGHT COLUMN (ANALYSIS RESULTS) ================= */}
                <div className="lg:col-span-7 xl:col-span-8 space-y-4">
                    {/* Status & File Header Strip */}
                    <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-4.5 shadow-2xs">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 shrink-0">
                                    <FeatherIcon icon="file-text" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                                        {uploadedFile?.name || "blood_report.pdf"}
                                    </h3>
                                    <p className="text-xs text-slate-400 mt-0.5">
                                        {uploadedFile?.type || "Blood Report"} • {uploadedFile?.date || "02 May 2025, 10:30 AM"} • ID: {uploadedFile?.id || "#MR12568"}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-xs font-semibold rounded-full">
                                    <FeatherIcon icon="check-circle" size={13} className="text-emerald-600" />
                                    <span>Analysis Completed</span>
                                </span>
                            </div>
                        </div>

                        {/* Navigation / Filter Tabs */}
                        <div className="flex items-center gap-6 overflow-x-auto pt-3 text-xs sm:text-sm font-medium">
                            {[
                                { id: "overview", label: "Overview" },
                                { id: "results", label: "Test Results" },
                                { id: "explanation", label: "AI Explanation" },
                                { id: "recommendations", label: "Recommendations" },
                                { id: "trends", label: "Trends" },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`pb-1 relative whitespace-nowrap transition-colors ${activeTab === tab.id
                                        ? "text-teal-700 font-bold"
                                        : "text-slate-500 hover:text-slate-800"
                                        }`}
                                >
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 rounded-full" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 4 Metric Summary Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
                        {/* Abnormal Tests */}
                        <div className="p-3.5 sm:p-4 bg-white border border-slate-200/80 rounded-2xl shadow-2xs relative">
                            <div className="flex items-start justify-between">
                                <span className="text-xs font-semibold text-slate-500">Abnormal Tests</span>
                                <span className="w-7 h-7 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center">
                                    <FeatherIcon icon="alert-triangle" size={14} />
                                </span>
                            </div>
                            <div className="text-2xl sm:text-3xl font-extrabold text-rose-600 mt-2">
                                4
                            </div>
                            <div className="text-[11px] font-medium text-rose-500 mt-0.5">
                                Require Attention
                            </div>
                        </div>

                        {/* Normal Tests */}
                        <div className="p-3.5 sm:p-4 bg-white border border-slate-200/80 rounded-2xl shadow-2xs relative">
                            <div className="flex items-start justify-between">
                                <span className="text-xs font-semibold text-slate-500">Normal Tests</span>
                                <span className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                    <FeatherIcon icon="check" size={14} />
                                </span>
                            </div>
                            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 mt-2">
                                18
                            </div>
                            <div className="text-[11px] font-medium text-emerald-600 mt-0.5">
                                Within Range
                            </div>
                        </div>

                        {/* Total Tests */}
                        <div className="p-3.5 sm:p-4 bg-white border border-slate-200/80 rounded-2xl shadow-2xs relative">
                            <div className="flex items-start justify-between">
                                <span className="text-xs font-semibold text-slate-500">Total Tests</span>
                                <span className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                    <FeatherIcon icon="clipboard" size={14} />
                                </span>
                            </div>
                            <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 mt-2">
                                22
                            </div>
                            <div className="text-[11px] font-medium text-blue-600 mt-0.5">
                                Analyzed
                            </div>
                        </div>

                        {/* Overall Health Score Meter */}
                        <div className="p-3 sm:p-3.5 bg-white border border-slate-200/80 rounded-2xl shadow-2xs flex flex-col justify-between relative">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold text-slate-500">Overall Health Score</span>
                                <span className="text-emerald-500">
                                    <FeatherIcon icon="heart" size={14} />
                                </span>
                            </div>

                            {/* Radial Semi-circle Gauge */}
                            <div className="flex flex-col items-center justify-center my-1 relative">
                                <div className="relative w-24 h-14 flex items-end justify-center overflow-hidden">
                                    <svg viewBox="0 0 100 55" className="w-24 h-14">
                                        {/* Background track */}
                                        <path
                                            d="M 10 50 A 40 40 0 0 1 90 50"
                                            fill="none"
                                            stroke="#e2e8f0"
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                        />
                                        {/* Progress arc (78%) */}
                                        <path
                                            d="M 10 50 A 40 40 0 0 1 90 50"
                                            fill="none"
                                            stroke="#0d9488"
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                            strokeDasharray="125.6"
                                            strokeDashoffset="27.6"
                                        />
                                    </svg>
                                    <div className="absolute bottom-0 flex flex-col items-center">
                                        <span className="text-xl font-extrabold text-slate-900 leading-tight">78</span>
                                    </div>
                                </div>
                                <span className="text-[11px] font-bold text-emerald-600 mt-0.5">Good</span>
                            </div>
                        </div>
                    </div>

                    {/* Middle Section: Key Abnormalities & AI Explanation */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        {/* Key Abnormalities List */}
                        <div className="md:col-span-5 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-2xs flex flex-col justify-between">
                            <div>
                                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-3">
                                    Key Abnormalities
                                </h4>

                                <div className="space-y-2.5">
                                    {abnormalities.slice(0, 4).map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center justify-between p-2 rounded-xl bg-slate-50/70 hover:bg-slate-100/70 border border-slate-100 transition-colors"
                                        >
                                            <div className="flex items-center gap-2.5 min-w-0">
                                                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0 ring-4 ring-rose-100" />
                                                <span className="text-xs font-semibold text-slate-800 truncate">
                                                    {item.name}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                                <span className="text-xs font-bold text-slate-700">
                                                    {item.value}
                                                </span>
                                                <span className={`px-2 py-0.5 text-[11px] font-bold rounded-md uppercase ${item.status === "High"
                                                    ? "bg-rose-100 text-rose-700"
                                                    : "bg-amber-100 text-amber-700"
                                                    }`}>
                                                    {item.status}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => setShowAllAbnormalities(!showAllAbnormalities)}
                                className="mt-3 text-xs font-semibold text-teal-600 hover:text-teal-700 flex items-center justify-center gap-1.5 transition-colors pt-2 border-t border-slate-100"
                            >
                                <span>{showAllAbnormalities ? "Show less" : "View all abnormal results"}</span>
                                <FeatherIcon icon="arrow-right" size={13} />
                            </button>
                        </div>

                        {/* AI Explanation (Simplified) */}
                        <div className="md:col-span-7 bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs flex flex-col justify-between relative overflow-hidden">
                            <div>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                                        AI Explanation (Simplified)
                                    </h4>

                                    {/* Language Switcher Pills */}
                                    <div className="inline-flex p-0.5 bg-slate-100 rounded-lg border border-slate-200/80 text-[11px]">
                                        {[
                                            { id: "en", label: "English" },
                                            { id: "hi", label: "हिंदी" },
                                            { id: "bn", label: "বাংলা" }
                                        ].map((lang) => (
                                            <button
                                                key={lang.id}
                                                type="button"
                                                onClick={() => setExplanationLang(lang.id)}
                                                className={`px-2.5 py-1 rounded-md font-medium transition-all ${explanationLang === lang.id
                                                    ? "bg-white text-teal-700 font-bold shadow-2xs"
                                                    : "text-slate-600 hover:text-slate-900"
                                                    }`}
                                            >
                                                {lang.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        {explanations[explanationLang]}
                                    </p>


                                </div>
                            </div>

                            <div className="mt-4 pt-2 flex items-center justify-between border-t border-slate-100">
                                <button
                                    type="button"
                                    onClick={() => setShowFullExplanation(!showFullExplanation)}
                                    className="text-xs font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1.5 transition-colors"
                                >
                                    <span>{showFullExplanation ? "Hide Details" : "Read Full Explanation"}</span>
                                    <FeatherIcon icon="arrow-right" size={13} />
                                </button>
                                <span className="text-[11px] text-slate-400">Powered by MediGuard AI</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Recommendations | Report Preview | Need Help? */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        {/* Recommendations */}
                        <div className="md:col-span-4 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-2xs">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-3">
                                Recommendations
                            </h4>
                            <div className="space-y-2">
                                {recommendations.map((rec, i) => (
                                    <div
                                        key={i}
                                        className="group p-2.5 rounded-xl bg-slate-50/70 hover:bg-teal-50/50 border border-slate-100 hover:border-teal-200/60 transition-all flex items-center justify-between gap-2 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-2.5 min-w-0">
                                            <div className="w-6 h-6 rounded-lg bg-teal-100/70 text-teal-700 flex items-center justify-center shrink-0">
                                                <FeatherIcon icon="file-text" size={13} />
                                            </div>
                                            <span className="text-[11px] font-medium text-slate-700 group-hover:text-slate-900 leading-snug">
                                                {rec.text}
                                            </span>
                                        </div>
                                        <FeatherIcon icon="chevron-right" size={14} className="text-slate-300 group-hover:text-teal-600 shrink-0" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Report Preview Document Paper */}
                        <div className="md:col-span-8 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-2xs">
                            <h4 className="text-sm sm:text-sm font-bold text-slate-900 mb-2">
                                Report Preview
                            </h4>

                            {/* Simulated Paper View */}
                            <div className="bg-slate-50/60 border border-slate-200/90 rounded-xl p-3 text-[11px] font-mono shadow-2xs">
                                <div className="text-center pb-2 border-b border-slate-200">
                                    <div className="font-bold text-slate-800 tracking-tight text-[11px]">
                                        City Diagnostic Lab
                                    </div>
                                    <div className="text-xs text-slate-400 font-semibold tracking-wider uppercase">
                                        Blood Test Report
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-1 py-2 text-[11px] text-slate-600 border-b border-slate-100">
                                    <div><span className="text-slate-400">Name:</span> Patient Name</div>
                                    <div><span className="text-slate-400">Patient ID:</span> P1012568</div>
                                    <div><span className="text-slate-400">Age / Gen:</span> 26 / Female</div>
                                    <div><span className="text-slate-400">Date:</span> 02 May 2025</div>
                                </div>

                                {/* Table */}
                                <div className="pt-2 overflow-x-auto">
                                    <table className="w-full text-xs text-left text-slate-700">
                                        <thead>
                                            <tr className="text-slate-400 border-b border-slate-200">
                                                <th className="pb-1">Test Name</th>
                                                <th className="pb-1 text-center">Result</th>
                                                <th className="pb-1 text-center">Unit</th>
                                                <th className="pb-1 text-center">Range</th>
                                                <th className="pb-1 text-right">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            <tr>
                                                <td className="py-1 font-semibold text-slate-800">Hemoglobin (Hb)</td>
                                                <td className="py-1 text-center font-bold text-rose-600">10.2</td>
                                                <td className="py-1 text-center text-slate-400">g/dL</td>
                                                <td className="py-1 text-center text-slate-400">12.0 - 15.0</td>
                                                <td className="py-1 text-right"><span className="text-rose-600 font-bold">Low</span></td>
                                            </tr>
                                            <tr>
                                                <td className="py-1 font-semibold text-slate-800">RBC Count</td>
                                                <td className="py-1 text-center font-bold text-rose-600">3.8</td>
                                                <td className="py-1 text-center text-slate-400">mil/cmn</td>
                                                <td className="py-1 text-center text-slate-400">4.0 - 5.5</td>
                                                <td className="py-1 text-right"><span className="text-rose-600 font-bold">Low</span></td>
                                            </tr>
                                            <tr>
                                                <td className="py-1 font-semibold text-slate-800">WBC Count</td>
                                                <td className="py-1 text-center">6,800</td>
                                                <td className="py-1 text-center text-slate-400">/cmm</td>
                                                <td className="py-1 text-center text-slate-400">4,000-11,000</td>
                                                <td className="py-1 text-right"><span className="text-emerald-600 font-medium">Normal</span></td>
                                            </tr>
                                            <tr>
                                                <td className="py-1 font-semibold text-slate-800">Platelet Count</td>
                                                <td className="py-1 text-center">2.45</td>
                                                <td className="py-1 text-center text-slate-400">lakh/cmm</td>
                                                <td className="py-1 text-center text-slate-400">1.5 - 4.5</td>
                                                <td className="py-1 text-right"><span className="text-emerald-600 font-medium">Normal</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Need Help? Box */}
                        {/* <div className="md:col-span-3 bg-white border border-slate-200/80 rounded-2xl p-4 shadow-2xs flex flex-col justify-between text-center">
                            <div>
                                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                                    Need Help?
                                </h4>
                                <p className="text-[11px] text-slate-500 mt-0.5">
                                    Talk to our AI assistant or book an appointment.
                                </p>

                                <div className="my-3 flex justify-center">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                                        <FeatherIcon icon="message-circle" size={24} />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <button
                                    type="button"
                                    onClick={() => alert("Opening AI Assistant...")}
                                    className="w-full py-2 px-3 rounded-xl border border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50/50 text-indigo-700 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                                >
                                    <FeatherIcon icon="message-square" size={14} />
                                    <span>Chat with AI</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => alert("Redirecting to Doctor Appointment Booking...")}
                                    className="w-full py-2 px-3 rounded-xl border border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50/50 text-indigo-700 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                                >
                                    <FeatherIcon icon="calendar" size={14} />
                                    <span>Book Appointment</span>
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* Bottom Medical Disclaimer Bar */}
            <div className="p-3 bg-slate-100/70 border border-slate-200/80 rounded-2xl flex items-center gap-2.5 text-xs text-slate-500">
                <FeatherIcon icon="info" size={15} className="text-slate-400 shrink-0" />
                <p className="text-[11px] leading-relaxed">
                    <span className="font-semibold text-slate-700">Disclaimer:</span> This AI analysis is for informational purposes only and not a substitute for professional medical advice.
                </p>
            </div>
        </div>
    );
};

export default MedicalReportAnalyzer;