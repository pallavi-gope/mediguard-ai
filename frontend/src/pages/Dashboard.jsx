import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart } from 'recharts';
import chestXrayImg from "../assets/images/chest-xray.jpg";

const Dashboard = () => {
    const navigate = useNavigate();
    const [selectedPeriod, setSelectedPeriod] = useState("This Month");
    const [isPeriodOpen, setIsPeriodOpen] = useState(false);

    // Stat cards data
    const stats = [
        {
            id: "total",
            title: "Total Analyses",
            value: "2,568",
            trend: "↑ 12.5% this month",
            icon: "bar-chart-2",
            iconBg: "bg-blue-50 text-blue-600",
        },
        {
            id: "reports",
            title: "Medical Reports",
            value: "1,324",
            trend: "↑ 15.3% this month",
            icon: "file-text",
            iconBg: "bg-emerald-50 text-emerald-500",
        },
        {
            id: "deepfakes",
            title: "DeepFakes Detected",
            value: "1,244",
            trend: "↑ 10.8% this month",
            icon: "shield",
            iconBg: "bg-purple-50 text-purple-600",
        },
        {
            id: "accuracy",
            title: "Accuracy Rate",
            value: "98.6%",
            trend: "↑ 2.3% this month",
            icon: "target",
            iconBg: "bg-blue-50 text-blue-500",
        },
    ];

    // Recent analyses data
    const recentAnalyses = [
        {
            id: 1,
            fileName: "blood_report.pdf",
            type: "Medical Report",
            result: "Anemia Detected",
            resultColor: "text-amber-500",
            confidence: "91%",
            date: "02 May 2025",
            fileIcon: "file-text",
            iconColor: "text-rose-500",
        },
        {
            id: 2,
            fileName: "chest_xray.png",
            type: "X-Ray",
            result: "Normal",
            resultColor: "text-emerald-500",
            confidence: "96%",
            date: "02 May 2025",
            fileIcon: "image",
            iconColor: "text-blue-500",
        },
        {
            id: 3,
            fileName: "video_sample.mp4",
            type: "Video DeepFake",
            result: "Fake",
            resultColor: "text-rose-500",
            confidence: "97%",
            date: "01 May 2025",
            fileIcon: "video",
            iconColor: "text-blue-500",
        },
    ];

    // Quick Actions
    const quickActions = [
        {
            id: "med-report",
            title: "Upload Medical Report",
            icon: "file-text",
            iconBg: "bg-blue-50 text-blue-600",
            link: "/dashboard/medical-records",
        },
        {
            id: "image-xray",
            title: "Upload Image / X-ray",
            icon: "image",
            iconBg: "bg-blue-50 text-blue-600",
            link: "/dashboard/medical-records",
        },
        {
            id: "video",
            title: "Upload Video",
            icon: "video",
            iconBg: "bg-purple-50 text-purple-600",
            link: "/dashboard/detect-video",
        },
        {
            id: "audio",
            title: "Upload Audio",
            icon: "activity",
            iconBg: "bg-purple-50 text-purple-600",
            link: "/dashboard/detect-image",
        },
    ];

    // Chart dataset for recharts matching the screenshot curve progression
    const chartData = [
        { date: "1 May", medical: 230, deepfake: 90 },
        { date: "3 May", medical: 265, deepfake: 135 },
        { date: "5 May", medical: 220, deepfake: 90 },
        { date: "7 May", medical: 255, deepfake: 130 },
        { date: "9 May", medical: 225, deepfake: 85 },
        { date: "11 May", medical: 290, deepfake: 145 },
        { date: "14 May", medical: 260, deepfake: 180 },
        { date: "16 May", medical: 240, deepfake: 110 },
        { date: "18 May", medical: 280, deepfake: 150 },
        { date: "21 May", medical: 395, deepfake: 240 },
        { date: "24 May", medical: 360, deepfake: 180 },
        { date: "26 May", medical: 320, deepfake: 160 },
        { date: "28 May", medical: 350, deepfake: 200 },
    ];

    // Custom recharts tooltip
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-slate-900/95 text-white text-xs px-3 py-2 rounded-xl shadow-xl border border-slate-700/80 backdrop-blur-xs">
                    <p className="font-semibold text-slate-300 border-b border-slate-700 pb-1 mb-1.5">{label}</p>
                    {payload.map((entry, index) => (
                        <div key={`item-${index}`} className="flex items-center gap-2 py-0.5">
                            <span
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: entry.color }}
                            />
                            <span className="text-slate-300">{entry.name}:</span>
                            <span className="font-bold text-white">{entry.value}</span>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <>
            {/* 1. TOP STAT CARDS */}
            <section className="mb-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                    {stats.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] p-5 sm:p-6 flex items-start justify-between transition-all duration-200 hover:shadow-md"
                        >
                            <div className="space-y-1">
                                <p className="text-xs sm:text-sm font-medium text-slate-500 tracking-wide">
                                    {item.title}
                                </p>
                                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
                                    {item.value}
                                </h3>
                                <div className="flex items-center gap-1 pt-1">
                                    <span className="text-xs font-semibold text-emerald-500">
                                        {item.trend}
                                    </span>
                                </div>
                            </div>
                            <div
                                className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shrink-0 shadow-xs`}
                            >
                                <FeatherIcon icon={item.icon} size={22} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* 2. CORE FEATURE ACTION CARDS */}
            <section className="mb-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
                    {/* Left Card: Medical Report Analyzer */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col md:flex-row md:justify-between md:items-center gap-6 relative overflow-hidden group hover:shadow-md transition-all duration-300">
                        <div className="flex-1 w-full flex flex-col justify-between h-full space-y-4">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3.5 shadow-xs">
                                    <FeatherIcon icon="file-text" size={24} className="text-emerald-600" />
                                </div>
                                <h2 className="text-lg sm:text-xl font-bold text-slate-800">
                                    Medical Report Analyzer
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed max-w-sm">
                                    Upload medical reports, X-rays, ECGs and get AI-powered insights.
                                </p>
                            </div>
                            <div className="pt-2">
                                <button
                                    onClick={() => navigate("/dashboard/medical-records")}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#009688] hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow active:scale-98 cursor-pointer"
                                >
                                    Analyze Now
                                    <FeatherIcon icon="arrow-right" size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Right Graphic Preview */}
                        <div className="w-full sm:w-auto flex justify-start md:justify-center items-center shrink-0 pt-4 pb-4 pl-1 sm:pl-0">
                            {/* Image & Badges Relative Container */}
                            <div className="relative">
                                {/* X-Ray Screen Preview */}
                                <div className="relative w-44 sm:w-52 h-32 sm:h-40 rounded-2xl overflow-hidden bg-slate-950 border-2 border-slate-800/90 shadow-lg">
                                    <img
                                        src={chestXrayImg}
                                        alt="Chest X-Ray Preview"
                                        className="w-full h-full object-cover opacity-90 contrast-125"
                                    />
                                    {/* Scanning overlay effect */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 via-transparent to-black/40 pointer-events-none" />
                                </div>

                                {/* Top-Right Floating Pill Badge */}
                                <div className="absolute -top-2 -right-3 sm:-right-4 bg-white rounded-xl shadow-md border border-slate-100/90 px-3 py-1.5 z-10 whitespace-nowrap">
                                    <p className="text-[10px] text-slate-400 font-medium">Hemoglobin</p>
                                    <p className="text-xs font-bold text-slate-800 leading-tight">12.5 g/dL</p>
                                    <div className="flex items-center gap-1 mt-0.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        <span className="text-[9px] font-semibold text-emerald-600">Normal</span>
                                    </div>
                                </div>

                                {/* Bottom-Right Floating ECG Line Badge */}
                                <div className="absolute -bottom-2 -right-2 sm:-right-3 bg-white rounded-xl shadow-md border border-slate-100/90 px-3 py-2 z-10 w-28 sm:w-32">
                                    <svg viewBox="0 0 100 24" className="w-full h-6 stroke-emerald-500 fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M 0 12 L 18 12 L 24 12 L 28 4 L 33 20 L 38 6 L 43 15 L 47 12 L 65 12 L 70 5 L 75 19 L 80 12 L 100 12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Card: DeepFake Detector */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col md:flex-row md:justify-between md:items-center gap-6 relative overflow-hidden group hover:shadow-md transition-all duration-300">
                        <div className="flex-1 w-full flex flex-col justify-between h-full space-y-4">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3.5 shadow-xs">
                                    <FeatherIcon icon="shield" size={24} className="text-purple-600" />
                                </div>
                                <h2 className="text-lg sm:text-xl font-bold text-slate-800">
                                    DeepFake Detector
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed max-w-sm">
                                    Detect AI-generated or manipulated content in image, video and audio.
                                </p>
                            </div>
                            <div className="pt-2">
                                <button
                                    onClick={() => navigate("/dashboard/detect-image")}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#6366f1] hover:bg-indigo-600 text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow active:scale-98 cursor-pointer"
                                >
                                    Detect Now
                                    <FeatherIcon icon="arrow-right" size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Right Visual 3 Mini Cards */}
                        <div className="w-full sm:w-auto flex justify-start md:justify-center items-center gap-2.5 sm:gap-3 shrink-0 pt-2 pb-2">
                            {/* Mini Card 1: Image */}
                            <div className="w-20 sm:w-22 bg-white rounded-2xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-3 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-200">
                                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                                    <FeatherIcon icon="image" size={18} className="text-emerald-600" />
                                </div>
                                <span className="text-xs font-semibold text-slate-700">Image</span>
                                <span className="text-[11px] text-slate-400 mt-0.5">Real</span>
                                <span className="text-xs font-bold text-emerald-500 mt-1">92%</span>
                            </div>

                            {/* Mini Card 2: Video */}
                            <div className="w-20 sm:w-22 bg-white rounded-2xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-3 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-200">
                                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-2">
                                    <FeatherIcon icon="video" size={18} className="text-purple-600" />
                                </div>
                                <span className="text-xs font-semibold text-slate-700">Video</span>
                                <span className="text-[11px] text-slate-400 mt-0.5">Fake</span>
                                <span className="text-xs font-bold text-rose-500 mt-1">97%</span>
                            </div>

                            {/* Mini Card 3: Audio */}
                            <div className="w-20 sm:w-22 bg-white rounded-2xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-3 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-200">
                                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                                    <FeatherIcon icon="activity" size={18} className="text-blue-600" />
                                </div>
                                <span className="text-xs font-semibold text-slate-700">Audio</span>
                                <span className="text-[10px] text-slate-500 mt-0.5 whitespace-nowrap">AI Generated</span>
                                <span className="text-xs font-bold text-slate-700 mt-1">94%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. BOTTOM SECTION: Recent Analyses, Quick Actions, Statistics Overview */}
            <section>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
                    {/* Column 1: Recent Analyses (5 Cols) */}
                    <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-5 sm:p-6 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-base font-bold text-slate-800">Recent Analyses</h3>
                                <button
                                    onClick={() => navigate("/dashboard/history")}
                                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-3 py-1 rounded-lg border border-slate-200/80 hover:bg-slate-50 transition-colors cursor-pointer"
                                >
                                    View All
                                </button>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs">
                                    <thead>
                                        <tr className="text-slate-400 font-semibold border-b border-slate-100">
                                            <th className="pb-3 font-medium">File Name</th>
                                            <th className="pb-3 font-medium">Type</th>
                                            <th className="pb-3 font-medium">Result</th>
                                            <th className="pb-3 font-medium text-center">Confidence</th>
                                            <th className="pb-3 font-medium text-right">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {recentAnalyses.map((row) => (
                                            <tr key={row.id} className="hover:bg-slate-50/60 transition-colors">
                                                <td className="py-3.5 pr-2">
                                                    <div className="flex items-center gap-2">
                                                        <FeatherIcon
                                                            icon={row.fileIcon}
                                                            size={16}
                                                            className={`shrink-0 ${row.iconColor}`}
                                                        />
                                                        <span className="font-medium text-slate-700 truncate max-w-[110px] sm:max-w-[130px]">
                                                            {row.fileName}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="py-3.5 pr-2 text-slate-500 font-medium">
                                                    {row.type}
                                                </td>
                                                <td className={`py-3.5 pr-2 font-semibold ${row.resultColor}`}>
                                                    {row.result}
                                                </td>
                                                <td className="py-3.5 pr-2 text-center font-medium text-slate-700">
                                                    {row.confidence}
                                                </td>
                                                <td className="py-3.5 text-right text-slate-400 font-medium whitespace-nowrap">
                                                    {row.date}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Actions (3 Cols) */}
                    <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-5 sm:p-6 flex flex-col">
                        <h3 className="text-base font-bold text-slate-800 mb-4">Quick Actions</h3>
                        <div className="flex flex-col gap-2.5 flex-1 justify-between">
                            {quickActions.map((action) => (
                                <button
                                    key={action.id}
                                    onClick={() => navigate(action.link)}
                                    className="w-full flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all duration-200 group text-left cursor-pointer"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-lg ${action.iconBg} flex items-center justify-center shrink-0`}>
                                            <FeatherIcon icon={action.icon} size={18} />
                                        </div>
                                        <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-teal-700 transition-colors">
                                            {action.title}
                                        </span>
                                    </div>
                                    <FeatherIcon
                                        icon="chevron-right"
                                        size={16}
                                        className="text-slate-400 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Statistics Overview (4 Cols) */}
                    <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-5 sm:p-6 flex flex-col justify-between">
                        <div>
                            {/* Header & Dropdown */}
                            <div className="flex items-center justify-between mb-3 relative">
                                <h3 className="text-base font-bold text-slate-800">Statistics Overview</h3>
                                <div className="relative">
                                    <button
                                        onClick={() => setIsPeriodOpen(!isPeriodOpen)}
                                        className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 border border-slate-200/80 rounded-lg px-2.5 py-1 hover:bg-slate-50 transition-colors cursor-pointer"
                                    >
                                        <span>{selectedPeriod}</span>
                                        <FeatherIcon icon="chevron-down" size={14} className="text-slate-400" />
                                    </button>
                                    {isPeriodOpen && (
                                        <div className="absolute right-0 top-full mt-1.5 w-32 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-20 animate-fadeIn">
                                            {["This Week", "This Month", "This Year"].map((opt) => (
                                                <button
                                                    key={opt}
                                                    onClick={() => {
                                                        setSelectedPeriod(opt);
                                                        setIsPeriodOpen(false);
                                                    }}
                                                    className="w-full text-left px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-50 hover:text-teal-600 transition-colors cursor-pointer"
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Chart Legends */}
                            <div className="flex items-center justify-end gap-4 mb-3 text-xs font-medium text-slate-500">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                                    <span>Medical Reports</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                                    <span>DeepFakes Detected</span>
                                </div>
                            </div>

                            {/* Recharts Dual-Line Chart Area */}
                            <div className="w-full h-[200px] pt-1">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={chartData} margin={{ top: 10, right: 10, left: -22, bottom: 0 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                        <XAxis dataKey="date"
                                            axisLine={false}
                                            tickLine={false}
                                            ticks={["1 May", "7 May", "14 May", "21 May", "28 May"]}
                                            tick={{ fill: "#94a3b8", fontSize: 11 }}
                                        />
                                        <YAxis
                                            domain={[0, 400]}
                                            ticks={[0, 100, 200, 300, 400]}
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: "#94a3b8", fontSize: 11 }}
                                        />
                                        <Tooltip content={<CustomTooltip />} />
                                        {/* Medical Reports Line */}
                                        <Line
                                            type="monotone"
                                            dataKey="medical"
                                            name="Medical Reports"
                                            stroke="#0d9488"
                                            strokeWidth={2.5}
                                            dot={false}
                                            activeDot={{
                                                r: 5,
                                                fill: "#ffffff",
                                                stroke: "#0d9488",
                                                strokeWidth: 2.5,
                                            }}
                                        />
                                        {/* DeepFakes Detected Line */}
                                        <Line
                                            type="monotone"
                                            dataKey="deepfake"
                                            name="DeepFakes Detected"
                                            stroke="#8b5cf6"
                                            strokeWidth={2.5}
                                            dot={false}
                                            activeDot={{
                                                r: 5,
                                                fill: "#ffffff",
                                                stroke: "#8b5cf6",
                                                strokeWidth: 2.5,
                                            }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;