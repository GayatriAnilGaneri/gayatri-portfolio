import React, { useState } from 'react';
import { Cpu, Server, Globe, Activity, Terminal, Zap, Layers, Radio } from 'lucide-react';

export default function InteractiveCanvas() {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    {
      id: 'ollama',
      title: 'Local LLM (Ollama)',
      subtitle: 'Qwen2.5 3B Engine',
      category: 'AI Inference',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-600',
      borderColor: 'border-indigo-500/40',
      x: '15%',
      y: '22%',
      status: 'Inference Active',
      metrics: 'Latency: ~18ms • Temp: 0.2'
    },
    {
      id: 'fastapi',
      title: 'FastAPI Service',
      subtitle: 'Async Python Backend',
      category: 'REST API',
      icon: Server,
      color: 'from-cyan-500 to-blue-600',
      borderColor: 'border-cyan-500/40',
      x: '65%',
      y: '20%',
      status: 'API Gateway',
      metrics: 'Endpoints: /detect, /generate'
    },
    {
      id: 'react',
      title: 'React + Tailwind',
      subtitle: 'Multilingual UI',
      category: 'Frontend',
      icon: Globe,
      color: 'from-emerald-500 to-teal-600',
      borderColor: 'border-emerald-500/40',
      x: '75%',
      y: '70%',
      status: 'UI State Rendered',
      metrics: '5 Languages Supported'
    },
    {
      id: 'esp32',
      title: 'ESP32 Hardware',
      subtitle: 'Biological Telemetry',
      category: 'IoT Wearable',
      icon: Radio,
      color: 'from-amber-500 to-orange-600',
      borderColor: 'border-amber-500/40',
      x: '20%',
      y: '72%',
      status: 'Sensors Reading',
      metrics: 'MAX30102 • DS18B20'
    }
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto aspect-square rounded-3xl p-6 glass-card overflow-hidden group shadow-2xl shadow-indigo-950/40">
      
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-grid-lines opacity-40"></div>
      
      {/* Glowing Gradient Orbs in Background */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle"></div>

      {/* Header bar of visualizer */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2">architecture_graph.v2</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>System Online</span>
        </div>
      </div>

      {/* Node SVG Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Lines connecting nodes */}
        <line x1="30%" y1="35%" x2="70%" y2="30%" stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
        <line x1="75%" y1="35%" x2="80%" y2="65%" stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="35%" y1="75%" x2="70%" y2="75%" stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="25%" y1="38%" x2="25%" y2="65%" stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="4 4" />

        {/* Central Hub Core Circle */}
        <circle cx="50%" cy="50%" r="35" fill="rgba(99, 102, 241, 0.05)" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1.5" strokeDasharray="6 6" />
      </svg>

      {/* Central Hub Badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <div className="w-16 h-16 rounded-2xl bg-slate-900/90 border border-indigo-500/30 flex items-center justify-center mx-auto shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
          <Zap className="w-8 h-8 text-indigo-400 animate-pulse" />
        </div>
        <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded-full border border-indigo-500/30 mt-2 inline-block">
          Core Engine
        </span>
      </div>

      {/* Interactive Node Cards */}
      {nodes.map((node) => {
        const Icon = node.icon;
        const isHovered = activeNode === node.id;
        return (
          <div
            key={node.id}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
            style={{ left: node.x, top: node.y }}
            className={`absolute z-20 cursor-pointer -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              isHovered ? 'scale-110 z-30' : 'scale-100'
            }`}
          >
            <div className={`p-3 rounded-2xl bg-slate-900/90 border ${node.borderColor} shadow-xl backdrop-blur-md flex items-center gap-3 min-w-[170px]`}>
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center text-white shrink-0 shadow-md`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-100 tracking-tight">{node.title}</span>
                <span className="text-[10px] text-slate-400 font-mono">{node.subtitle}</span>
              </div>
            </div>

            {/* Hover Tooltip detail */}
            {isHovered && (
              <div className="absolute top-full left-0 mt-2 w-48 p-2.5 rounded-xl bg-slate-950 border border-white/20 shadow-2xl text-[11px] font-mono text-slate-300 z-40 animate-in fade-in zoom-in-95 duration-150">
                <div className="text-indigo-400 font-bold mb-1">{node.category}</div>
                <div className="text-slate-400">{node.status}</div>
                <div className="text-[10px] text-emerald-400 mt-1">{node.metrics}</div>
              </div>
            )}
          </div>
        );
      })}

      {/* Bottom Terminal Live Status Bar */}
      <div className="absolute bottom-4 left-4 right-4 z-10 bg-slate-950/90 border border-white/10 rounded-xl p-3 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <Terminal className="w-4 h-4 text-indigo-400" />
          <span className="text-slate-400 text-[11px]">System Status:</span>
          <span className="text-emerald-400 text-[11px]">LangBridge & IoT Online</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
          <Activity className="w-3 h-3 text-cyan-400" /> 2 Real Prototypes
        </div>
      </div>

    </div>
  );
}
