import React, { useState } from 'react';
import { Upload, Book, Code, Activity, Brain, FileText, Database, Cpu } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('projects');
  
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans flex">
      
      {/* Sidebar */}
      <aside className="w-72 bg-[#161b22] border-r border-[#30363d] p-6 flex flex-col h-screen sticky top-0">
        <h1 className="text-2xl font-bold text-white mb-2">Naman Jain</h1>
        <p className="text-[#8b949e] text-sm mb-6">IBCP Student | Year 1</p>
        
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-[#238636] text-white text-xs rounded-md">Python</span>
            <span className="px-2 py-1 bg-[#1f6feb] text-white text-xs rounded-md">React</span>
            <span className="px-2 py-1 bg-[#8957e5] text-white text-xs rounded-md">Streamlit</span>
            <span className="px-2 py-1 bg-[#d29922] text-white text-xs rounded-md">OpenCV / YOLOv8</span>
          </div>
        </div>

        <nav className="space-y-2 flex-grow">
          <button onClick={() => setActiveTab('projects')} className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${activeTab === 'projects' ? 'bg-[#30363d] text-white' : 'hover:bg-[#21262d] text-[#8b949e]'}`}>
            <Code size={18} /> AI & Tech Projects
          </button>
          <button onClick={() => setActiveTab('subjects')} className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${activeTab === 'subjects' ? 'bg-[#30363d] text-white' : 'hover:bg-[#21262d] text-[#8b949e]'}`}>
            <Book size={18} /> DP Subjects
          </button>
          <button onClick={() => setActiveTab('core')} className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${activeTab === 'core' ? 'bg-[#30363d] text-white' : 'hover:bg-[#21262d] text-[#8b949e]'}`}>
            <Activity size={18} /> CP Core (PPS, CE)
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          
          <header className="flex justify-between items-center mb-10 pb-5 border-b border-[#30363d]">
            <h2 className="text-3xl font-semibold text-white">
              {activeTab === 'projects' && 'AI & Development Projects'}
              {activeTab === 'subjects' && 'IBDP Subjects'}
              {activeTab === 'core' && 'IBCP Core Components'}
            </h2>
            <button className="flex items-center gap-2 bg-[#238636] hover:bg-[#2ea043] text-white px-4 py-2 rounded-md font-medium transition-colors">
              <Upload size={18} /> Upload File
            </button>
          </header>

          {/* Projects View */}
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#8b949e] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="text-[#58a6ff]" />
                  <h3 className="text-xl font-semibold text-[#58a6ff]">StockSense Pro 2</h3>
                </div>
                <p className="text-[#8b949e] text-sm mb-4">Automated computer vision project detecting and identifying grocery items using Roboflow datasets and YOLOv8 models.</p>
              </div>
              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#8b949e] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Brain className="text-[#58a6ff]" />
                  <h3 className="text-xl font-semibold text-[#58a6ff]">Exam Ascent AI</h3>
                </div>
                <p className="text-[#8b949e] text-sm mb-4">Streamlit-based exam preparation platform with structured practice questions, formula references, and integrated study tools.</p>
              </div>
            </div>
          )}

          {/* Subjects View */}
          {activeTab === 'subjects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Mathematics</h3>
                <p className="text-[#8b949e] text-sm mb-2">Calculus, differential equations, and optimization.</p>
                <span className="text-xs bg-[#30363d] px-2 py-1 rounded text-white">Casio fx-CG</span>
              </div>
              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Physics (HL)</h3>
                <p className="text-[#8b949e] text-sm mb-2">Mechanics, thermodynamics, and electromagnetic induction.</p>
                <span className="text-xs bg-[#30363d] px-2 py-1 rounded text-white">Faraday-Lenz IA</span>
              </div>
              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Chemistry</h3>
                <p className="text-[#8b949e] text-sm mb-2">Organic synthesis, Hess's law, and stoichiometry.</p>
              </div>
              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">English</h3>
                <p className="text-[#8b949e] text-sm">Language, cultural studies, and literature analysis.</p>
              </div>
            </div>
          )}

          {/* Core View */}
          {activeTab === 'core' && (
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 flex items-start gap-4">
                <FileText className="text-[#3fb950] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Personal and Professional Skills (PPS)</h3>
                  <p className="text-[#8b949e] text-sm">Portfolio covering Learning Outcomes 1-5, mapping reflections, educational infographics, and project activities to IB requirements.</p>
                </div>
              </div>
              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 flex items-start gap-4">
                <Cpu className="text-[#d29922] mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Reflective Project (RP) & Civic Engagement (CE)</h3>
                  <p className="text-[#8b949e] text-sm">Ethical analysis of space mining, orbital mechanics, and community-focused projects integrating cultural studies (LCS).</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
