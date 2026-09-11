import FeatherIcon from 'feather-icons-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <>
            <section className="login-bg">
                <div className="w-full max-w-7xl px-4 md:px-0 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 md:gap-10 items-center" style={{ minHeight: '90vh' }}>
                        <div className="md:col-span-4 py-4 md:py-16">
                            <h1 className="hero-title mt-2 mb-3">
                                Intelligent Analysis.<br />
                                <span className="color-primary">Trusted Results.</span>
                            </h1>
                            <p className="mt-4 mb-10" style={{ color: '#4B5563', maxWidth: '420px', lineHeight: '1.7' }}>
                                Analyze medical reports, X-Rays, ECGs and detect deepfakes in images, videos and audios with advanced AI models.
                            </p>
                        </div>
                        <div className="md:col-span-3"></div>
                        <div className="md:col-span-5 login-hero-img-wrap">
                            <div className='login-form bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)] transition-all cursor-pointer hover:border-teal-100'>
                                <form className='md:mx-5'>
                                    <h2 className="section-title text-2xl md:text-3xl font-bold text-slate-800">
                                        Forgot Password?
                                    </h2>
                                    <p>Enter your registered Email id here to recover your</p>
                                    <div className="mt-5 pt-5">
                                        <div class="relative">
                                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <FeatherIcon icon="mail" height={18} className="text-gray-500" />
                                            </div>
                                            <input type="text" id="input-group-1" class="custom-input" placeholder="Enter Your Email" />
                                        </div>


                                        <div class="relative mt-5">
                                            <button type='submit' className='btn-primary w-100'><b>Submit</b></button>
                                        </div>
                                        <div class="relative mt-5 text-center">
                                            <p><NavLink to="/login"> Back to Login</NavLink></p>
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

export default ForgotPassword;