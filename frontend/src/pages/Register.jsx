import FeatherIcon from 'feather-icons-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const features = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                </svg>
            ),
            label: 'Analyze medical reports and images',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                </svg>
            ),
            label: 'Detect AI generated or manipulated content',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                </svg>
            ),
            label: 'Get instant results with high accuracy',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            ),
            label: 'Download and share reports securely',
        },
    ];
    return (
        <>
            <section className="login-bg">
                <div className="w-full max-w-7xl px-4 md:px-0 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 md:gap-10 items-center" style={{ minHeight: '90vh' }}>
                        <div className="md:col-span-4 py-4 md:py-16">
                            <h1 className="hero-title mt-2 mb-3">
                                Create your account.<br />
                                and <span className="color-primary">get started.</span>
                            </h1>
                            <p className="mt-4 mb-10" style={{ color: '#4B5563', maxWidth: '420px', lineHeight: '1.7' }}>
                                Join MediGuard AI and explore the power of AI for medical insights and deepfake detection.
                            </p>

                            {/* Feature List */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {features.map((feature, index) => (
                                    <div key={index} className="login-feature-item">
                                        <span className="login-feature-icon">
                                            {feature.icon}
                                        </span>
                                        <span className="login-feature-label ms-3">{feature.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="md:col-span-3"></div>
                        {/* Right Panel — Hero Image */}
                        <div className="md:col-span-5 login-hero-img-wrap">
                            <div className='login-form bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)] transition-all cursor-pointer hover:border-teal-100'>
                                <form className='md:mx-5'>
                                    <h2 className="section-title text-2xl md:text-3xl font-bold text-slate-800">
                                        Create Account
                                    </h2>
                                    <p>Fill the details to create your account</p>
                                    <div className="mt-5 pt-5">
                                        <div className="relative">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <FeatherIcon icon="user" height={18} className="text-gray-500" />
                                            </div>
                                            <input type="text" id="input-group-1" className="custom-input" placeholder="Enter Your Name" />
                                        </div>
                                        <div className="relative mt-5">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <FeatherIcon icon="mail" height={18} className="text-gray-500" />
                                            </div>
                                            <input type="text" id="input-group-1" className="custom-input" placeholder="Enter Your Email" />
                                        </div>
                                        <div className="relative mt-5">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <FeatherIcon icon="lock" height={18} className="text-gray-500" />
                                            </div>
                                            <input type={showPassword ? "text" : "password"} id="input-group-1" className="custom-input" placeholder="Enter Your Password" />
                                            <button type="button" onClick={() => setShowPassword(!showPassword)}
                                                className="absolute inset-y-0 end-0 flex items-center pe-3 text-gray-400 hover:text-gray-700 focus:outline-none">
                                                <FeatherIcon icon={showPassword ? "eye" : "eye-off"} height={18} />
                                            </button>
                                        </div>
                                        <div className="relative mt-5">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <FeatherIcon icon="lock" height={18} className="text-gray-500" />
                                            </div>
                                            <input type={showConfirmPassword ? "text" : "password"} id="input-group-1" className="custom-input" placeholder="Confirm Your Password" />
                                            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute inset-y-0 end-0 flex items-center pe-3 text-gray-400 hover:text-gray-700 focus:outline-none">
                                                <FeatherIcon icon={showConfirmPassword ? "eye" : "eye-off"} height={18} />
                                            </button>
                                        </div>
                                        <div className="relative mt-8 flex justify-between">
                                            <div>
                                                <input id="remember_me" type="checkbox" value="" className="me-3 w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" />
                                                <label htmlFor='remember_me'>I Agree to the <NavLink to="/terms-and-conditions">Terms of Service</NavLink> and <NavLink to="/privacy-policy">Privacy Policy</NavLink>.</label>
                                            </div>

                                        </div>
                                        <div className="relative mt-5">
                                            <button type='submit' className='btn-primary w-100'><b>Create Account</b></button>
                                        </div>
                                        <div className="relative mt-5 text-center">
                                            <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;