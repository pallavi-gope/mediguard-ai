

const HowItWorks = () => {
    return (
        <>
            <section className="content-section">
                <div className="w-full max-w-7xl px-4 md:px-0 mx-auto">
                    <div className="text-center">
                        <span className="bg-primary text-white text-center font-semibold text-sm p-2 rounded-4xl">
                            SYSTEM WORKFLOW & PROCESSING PIPELINE</span>
                    </div>
                </div>
            </section>
            <section>
                <div className="content-section">
                    <div className="hero">
                        <div className="text-center">
                            <div className="badge-section">
                                <h1 className="hero-title">How MedAI Guard Works</h1>
                                <p className="hero-description mx-w-3xl mx-auto text-slate-600">
                                    Step behind the scenes of our
                                    advanced diagnostic core.Laern how we securely<br></br>
                                    process medical diagostic data ,parse clinical diagostics,and spot
                                    synthesized<br>
                                    </br>
                                    deppfakes instantly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content-section">
                <div className="pipeline">
                    <div className="text-center">
                        <div className="section-subtitle">
                            <h2>The 5-Steps Verification Pipeline</h2></div>
                        <p className="subtitle">
                            From secure data ingest to verified diagonostic sign-off in seconds.
                        </p>
                        <div className="steps">
                            <div className="pipeline-stepper">
                                <div className="pipeline-line">
                                    <span className="bg-scale-100 dark:bg-state-700 rounded-full">01</span>
                                    <h3 className="text-sm font-bold text-slate-800 leading-tight">Secure Upload</h3>
                                </div>
                                <div className="module-card"><h3>instantly upload medical PDFs,X-ray<br></br>
                                    Scans,high-fidelity ECG logs or<br></br>
                                    media files.Data is segmented<br></br>
                                    immediately and prepared for<br></br>
                                    sandbox staging.
                                </h3></div></div></div>
                        <div className="step">
                            <span>02</span>
                            <div className="pt-0">
                                <h3>AI Ingestion</h3>
                                Our neural architecture segments<br></br>
                                the data.Text runs through<br></br>
                                customized OCR,while images and <br></br>
                                video streams are indexed by frame<br></br>
                                grids</div>
                            <span>03</span>
                            <h3>Deep Analysis</h3>
                            Concurrent diagonostic processing<br></br>
                            Advanced ML engines spot<br></br>
                            microscopic anomalies,structural<br></br>
                            tissue variance,and synthesized<br></br>
                            video/audio patterns
                        </div>
                        <div className="step">
                            <span>04</span>
                            <h3>Confidence Scoring</h3>
                            Results generate numeric<br></br>
                            confidence score. Every flag links<br></br>
                            back to its neural source to provide<br></br>
                            fully explainnable medical decisions.
                        </div>
                        <div className="step">
                            <span>05</span>
                            <h3>Secured Report</h3>
                            Download verified,signed<br></br>
                            summaries in clear,readable PDFs<br></br>
                            Your clinical dashboard updates<br></br>
                            instantly while session buffers are<br></br>
                            securely scrubbed.
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default HowItWorks;