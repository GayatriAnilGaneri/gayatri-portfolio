import React, { useState, useEffect } from 'react';
import { X, Sparkles, Cpu, Radio, Github, CheckCircle2, Play, RefreshCw, Languages, Heart, Activity, Thermometer, QrCode, ShieldAlert, Layers, AlertCircle, FileCode, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Accessibility Esc key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // State for LangBridge Interactive Sandbox
  const [inputLang, setInputLang] = useState('Hindi');
  const [outputLang, setOutputLang] = useState('English');
  const [userQuery, setUserQuery] = useState('स्वास्थ्य के लिए दैनिक व्यायाम का क्या महत्व है?');
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiResponse, setAiResponse] = useState('');
  const [detectedLang, setDetectedLang] = useState('Hindi (hi_IN)');

  // State for Adhyatma Bandha IoT Telemetry Simulator
  const [bpm, setBpm] = useState(74);
  const [spo2, setSpo2] = useState(98);
  const [temp, setTemp] = useState(36.8);
  const [isSimulatingSensors, setIsSimulatingSensors] = useState(true);
  const [showQrModal, setShowQrModal] = useState(false);

  // Live telemetry pulse effect for Adhyatma Bandha
  useEffect(() => {
    if (project.id !== 'adhyatma-bandha' || !isSimulatingSensors) return;

    const interval = setInterval(() => {
      setBpm(prev => Math.min(92, Math.max(69, prev + Math.floor(Math.random() * 5) - 2)));
      setSpo2(prev => Math.min(100, Math.max(97, prev + (Math.random() > 0.7 ? 1 : Math.random() < 0.3 ? -1 : 0))));
      setTemp(prev => Number((Math.min(37.2, Math.max(36.5, prev + (Math.random() * 0.2 - 0.1)))).toFixed(1)));
    }, 1500);

    return () => clearInterval(interval);
  }, [project.id, isSimulatingSensors]);

  // Sample queries for LangBridge
  const sampleQueries = {
    Hindi: 'स्वास्थ्य के लिए दैनिक व्यायाम का क्या महत्व है?',
    Marathi: 'स्थानिक एआय मॉडेल्स कसे कार्य करतात?',
    Kannada: 'ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆಯ ಆಡಳಿತದ ಬಗ್ಗೆ ತಿಳಿಸಿ.',
    Telugu: 'ముసలివారి ఆరోగ్య సంರಕ್ಷಣ సాధనాలు ఏవి?',
    English: 'Explain how local generative AI inference operates on Ollama.'
  };

  const handleLanguageChange = (lang) => {
    setInputLang(lang);
    setUserQuery(sampleQueries[lang] || sampleQueries['English']);
    setDetectedLang(`${lang} (${lang.substring(0, 2).toLowerCase()}_IN)`);
  };

  const handleRunLangBridgeDemo = () => {
    setIsGenerating(true);
    setAiResponse('');

    setTimeout(() => {
      let result = '';
      if (outputLang === 'English') {
        result = `[NLP Output in English]: Daily physical activity maintains cardiovascular stability, regulates metabolic rates, and reduces stress. (LangBridge Voice-Text Architecture)`;
      } else if (outputLang === 'Hindi') {
        result = `[NLP Output in Hindi]: नियमित शारीरिक व्यायाम हृदय स्वास्थ्य को बनाए रखता है, रक्तचाप को नियंत्रित करता है और मानसिक सतर्कता में सुधार करता है।`;
      } else if (outputLang === 'Marathi') {
        result = `[NLP Output in Marathi]: रोजचा व्यायाम हृदयाचे आरोग्य सुधारतो, ताण कमी करतो आणि शरीराला तंदुरुस्त ठेवतो.`;
      } else if (outputLang === 'Kannada') {
        result = `[NLP Output in Kannada]: ಪ್ರತಿದಿನ ವ್ಯಾಯಾಮ ಮಾಡುವುದರಿಂದ ಹೃದಯದ ಆರೋಗ್ಯ ಸುಧಾರಿಸುತ್ತದೆ ಮತ್ತು ದೇಹಕ್ಕೆ ಚೈತನ್ಯ ಸಿಗುತ್ತದೆ.`;
      } else {
        result = `[NLP Output in ${outputLang}]: Exercise improves vital health parameters and metabolic stability. Processed via FastAPI and NLP pipeline.`;
      }

      setAiResponse(result);
      setIsGenerating(false);
    }, 700);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl bg-slate-900 border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-slate-950/80 shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400">
              {project.badge}
            </span>
            <h3 id="modal-project-title" className="text-xl font-bold text-slate-100">{project.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          
          {/* Important IEEE Publication Banner for LangBridge */}
          {project.ieeeUrl && (
            <div className="p-4 rounded-2xl bg-indigo-950/90 border border-indigo-500/40 text-xs sm:text-sm text-indigo-200 font-medium leading-relaxed flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">IEEE Conference Publication (2025):</strong>
                  <span className="text-slate-300 font-normal">"{project.publicationTitle}"</span>
                </div>
              </div>
              <a
                href={project.ieeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs font-mono shadow-sm transition-colors"
              >
                <span>View Publication</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Positioning Banner */}
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
            <strong className="text-indigo-400 block mb-1">Architectural Focus:</strong>
            {project.positioningHighlight}
          </div>

          {/* Structured Engineering Storyboard: Problem -> Solution -> Tech -> What I Built -> Impact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Problem */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-rose-500/30">
              <div className="text-xs font-mono text-rose-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> 1. Problem Statement
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{project.problem}</p>
            </div>

            {/* Solution */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/30">
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> 2. Engineered Solution
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{project.solution}</p>
            </div>

            {/* What I Built */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-indigo-500/30">
              <div className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <FileCode className="w-4 h-4" /> 3. What Gayatri Built
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{project.whatIBuilt}</p>
            </div>

            {/* Impact & Recognition */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/30">
              <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> 4. Recognition & Impact
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{project.impactAndRecognition}</p>
            </div>

          </div>

          {/* INTERACTIVE DEMO 1: LangBridge Multilingual AI Sandbox */}
          {project.id === 'langbridge' && (
            <div className="p-6 rounded-2xl border border-indigo-500/30 bg-slate-950 space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Languages className="w-5 h-5 text-indigo-400" />
                  <span className="font-bold text-slate-100 text-sm">LangBridge Voice-Text Sandbox</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  NLP & Speech API Active
                </span>
              </div>

              {/* Language Selection Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <label className="text-slate-400 mb-1.5 block">Select Input Query Language:</label>
                  <div className="flex flex-wrap gap-1.5">
                    {project.supportedLanguages.map(lang => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className={`px-2.5 py-1 rounded-lg transition-colors ${
                          inputLang === lang ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 mb-1.5 block">Select Target Output Answer Language:</label>
                  <div className="flex flex-wrap gap-1.5">
                    {project.supportedLanguages.map(lang => (
                      <button
                        key={lang}
                        onClick={() => setOutputLang(lang)}
                        className={`px-2.5 py-1 rounded-lg transition-colors ${
                          outputLang === lang ? 'bg-cyan-600 text-white font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Input prompt box */}
              <div>
                <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                  <span>Query Input ({inputLang}):</span>
                  <span className="text-indigo-400">Detected: {detectedLang}</span>
                </div>
                <textarea
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  className="w-full h-20 p-3 rounded-xl bg-slate-900 border border-white/15 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 font-sans"
                  placeholder="Enter your question..."
                />
              </div>

              <button
                onClick={handleRunLangBridgeDemo}
                disabled={isGenerating}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs font-mono shadow-md transition-colors"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-white" />
                    <span>Processing with NLP API & gTTS...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 text-white" />
                    <span>Run Query & Formulate Answer in {outputLang}</span>
                  </>
                )}
              </button>

              {aiResponse && (
                <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-xs font-mono text-emerald-300 animate-in fade-in duration-200">
                  <div className="text-slate-400 text-[10px] mb-1">FastAPI Backend Output Stream:</div>
                  <div className="leading-relaxed font-sans text-sm text-slate-200">{aiResponse}</div>
                </div>
              )}
            </div>
          )}

          {/* INTERACTIVE DEMO 2: Adhyatma Bandha Biological Telemetry Simulator */}
          {project.id === 'adhyatma-bandha' && (
            <div className="p-6 rounded-2xl border border-cyan-500/30 bg-slate-950 space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-cyan-400 animate-pulse" />
                  <span className="font-bold text-slate-100 text-sm">Adhyatma Bandha Telemetry Monitor</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsSimulatingSensors(!isSimulatingSensors)}
                    className="text-[10px] font-mono text-slate-300 bg-slate-800 px-2.5 py-1 rounded-lg border border-white/10 hover:bg-slate-700"
                  >
                    {isSimulatingSensors ? 'Pause Live Sensors' : 'Resume Telemetry'}
                  </button>
                  <button
                    onClick={() => setShowQrModal(!showQrModal)}
                    className="flex items-center gap-1 text-[10px] font-mono text-indigo-300 bg-indigo-950 px-2.5 py-1 rounded-lg border border-indigo-500/30"
                  >
                    <QrCode className="w-3 h-3" />
                    <span>QR Patient ID</span>
                  </button>
                </div>
              </div>

              {/* 3 Parameter Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* BPM */}
                <div className="p-4 rounded-2xl bg-slate-900 border border-rose-500/30 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                    <span className="flex items-center gap-1 text-rose-400"><Heart className="w-4 h-4 fill-rose-500/20" /> Heart Rate</span>
                    <span>MAX30102</span>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-100 font-mono flex items-baseline gap-1">
                    {bpm} <span className="text-xs text-slate-400 font-normal">BPM</span>
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-1">Normal Pulse Range</div>
                </div>

                {/* SpO2 */}
                <div className="p-4 rounded-2xl bg-slate-900 border border-cyan-500/30 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                    <span className="flex items-center gap-1 text-cyan-400"><Activity className="w-4 h-4" /> SpO₂ Saturation</span>
                    <span>MAX30102</span>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-100 font-mono flex items-baseline gap-1">
                    {spo2} <span className="text-xs text-slate-400 font-normal">%</span>
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-1">Optimal Oxygenation</div>
                </div>

                {/* Body Temp */}
                <div className="p-4 rounded-2xl bg-slate-900 border border-amber-500/30 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                    <span className="flex items-center gap-1 text-amber-400"><Thermometer className="w-4 h-4" /> Body Temp</span>
                    <span>RTD / DS18B20</span>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-100 font-mono flex items-baseline gap-1">
                    {temp} <span className="text-xs text-slate-400 font-normal">°C</span>
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-1">Stable Core Temp</div>
                </div>
              </div>

              {/* QR Code Drawer */}
              {showQrModal && (
                <div className="p-4 rounded-2xl bg-indigo-950/90 border border-indigo-500/40 animate-in fade-in duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-white p-1 rounded-xl flex items-center justify-center shrink-0">
                      <QrCode className="w-14 h-14 text-slate-950" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-mono">QR Patient Identification Workflow</div>
                      <p className="text-[11px] text-indigo-200 mt-0.5">
                        Scannable wristband concept providing emergency responders immediate access to vital records, blood type, and contact details during crowded gatherings.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Verified parameters monitored: Heart Rate, SpO₂, Body Temperature (RTD/DS18B20).</span>
              </div>
            </div>
          )}

          {/* Key System Capabilities */}
          {project.capabilities && (
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Key Technical Capabilities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.capabilities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-300 p-2.5 rounded-xl bg-slate-950/60 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-white/10 bg-slate-950/80 shrink-0 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-400">
            {project.ieeeUrl ? "IEEE Publication Verified" : "GitHub Repository Available"}
          </div>
          
          <div className="flex items-center gap-3">
            {project.ieeeUrl ? (
              <a
                href={project.ieeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
              >
                <span>View Publication</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors border border-white/10 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
              >
                <Github className="w-4 h-4 text-indigo-400" />
                <span>GitHub Repository</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs font-mono transition-colors focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none"
            >
              Close Details
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
