import React, { useState } from 'react';
import { Upload, Book, Code, Activity, Search, Bell, FileText, Database, Brain, Cpu, TrendingUp, CheckCircle, Clock, Settings, FolderPlus } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('subjects');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Custom 3D Button Component
  const Button3D = ({ children, color = "blue", onClick, fullWidth = false }) => {
    const colorStyles = {
      blue: "bg-[#2563eb] shadow-[0_5px_0_#1e3a8a] hover:bg-[#3b82f6]",
      green: "bg-[#16a34a] shadow-[0_5px_0_#14532d] hover:bg-[#22c55e]",
      purple: "bg-[#9333ea] shadow-[0_5px_0_#581c87] hover:bg-[#a855f7]",
      gray: "bg-[#4b5563] shadow-[0_5px_0_#1f2937] hover:bg-[#6b7280]",
    };
    
    return (
      <button 
        onClick={onClick}
        className={`${colorStyles[color]} ${fullWidth ? 'w-full justify-center' : ''} text-white px-4 py-2 rounded-xl font-bold transition-all active:translate-y-[5px] active:shadow-[0_0px_0_transparent] flex items-center gap-2`}
      >
        {children}
      </button>
    );
  };

  const ibSubjects = [
    { name: "Mathematics", desc: "Calculus, differential equations, optimization.", tool: "Casio fx-CG", progress: 75, status: "On Track" },
    { name: "Physics (HL)", desc: "Mechanics, thermodynamics, electromagnetic induction.", tool: "Faraday-Lenz IA", progress: 60, status: "Experimenting" },
    { name: "Chemistry", desc: "Organic synthesis, Hess's law, stoichiometry.", tool: "Lab Reports", progress: 85, status: "Reviewing" },
    { name: "English", desc: "Language, cultural studies, literature analysis.", tool: "Essays", progress: 90, status: "Completed" }
  ];

  const coreComponents = [
    { name: "Personal & Professional Skills (PPS)", desc: "Learning Outcomes 1-5, infographics, reflections.", progress: 80 },
    { name: "Reflective Project (RP)", desc: "Ethical analysis of space mining & orbital mechanics.", progress: 45 },
    { name: "Civic Engagement (CE)", desc: "Community impact and service integration.", progress: 100 },
    { name: "Language & Cultural Studies (LCS)", desc: "Fluency in English, Hindi, and Tamil contexts.", progress: 95 }
  ];

  const aiProjects = [
    { name: "StockSense Pro 2", icon: <Database />, desc: "Automated grocery detection using Roboflow & YOLOv8.", tech: "Computer Vision" },
    { name: "Exam Ascent AI", icon: <Brain />, desc: "Streamlit exam prep platform with structured practice.", tech: "Python / Streamlit" },
    { name: "EV Smart Analytics", icon: <TrendingUp />, desc: "K-Means clustering and 3D vehicle visualization.", tech: "Machine Learning" },
    { name: "MindfulWork", icon: <Clock />, desc: "Wellness app with guided breathing and stress tracking.", tech: "JS / CSS / HTML" }
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black text-gray-100 font-sans flex selection:bg-blue-500 selection:text-white">
      
      {/* Sidebar - Fixed width, sticky */}
      <aside className="w-80 bg-gray-900/80 backdrop-blur-xl border-r border-gray-700 p-6 flex flex-col h-screen sticky top-0 shadow-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-tight mb-1">Naman Jain</h1>
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <p className="text-gray-400 text-sm font-medium">IBCP Year 1 Student</p>
          </div>
        </div>
        
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700/50">
            <p className="text-gray-500 text-xs font-bold uppercase">Files</p>
            <p className="text-2xl font-black text-blue-400">24</p>
          </div>
          <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700/50">
            <p className="text-gray-500 text-xs font-bold uppercase">Projects</p>
            <p className="text-2xl font-black text-purple-400">6</p>
          </div>
        </div>

        <nav className="space-y-3 flex-grow">
          <button onClick={() => setActiveTab('subjects')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'subjects' ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'hover:bg-gray-800 text-gray-400'}`}>
            <Book size={20} /> <span className="font-semibold">DP Subjects</span>
          </button>
          <button onClick={() => setActiveTab('core')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'core' ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30' : 'hover:bg-gray-800 text-gray-400'}`}>
            <Activity size={20} /> <span className="font-semibold">CP Core Components</span>
          </button>
          <button onClick={() => setActiveTab('projects')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'projects' ? 'bg-green-600/20 text-green-400 border border-green-500/30' : 'hover:bg-gray-800 text-gray-400'}`}>
            <Code size={20} /> <span className="font-semibold">AI & Dev Projects</span>
          </button>
        </nav>

        <div className="mt-auto">
          <Button3D color="gray" fullWidth={true}><Settings size={18}/> Settings</Button3D>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative">
        {/* Top Navbar */}
        <header className="sticky top-0 z-10 bg-gray-900/60 backdrop-blur-md border-b border-gray-800 p-6 flex justify-between items-center">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search portfolio, subjects, or files..." 
              className="w-full bg-gray-800 border border-gray-700 rounded-full py-2 pl-10 pr-4 text-sm text-gray-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-4 items-center">
            <button className="text-gray-400 hover:text-white transition-colors relative">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 bg-red-500 h-3 w-3 rounded-full border-2 border-gray-900"></span>
            </button>
            <Button3D color="green"><Upload size={18} /> Global Upload</Button3D>
          </div>
        </header>

        <div className="p-10 max-w-7xl mx-auto">
          <div className="mb-10 flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-black text-white mb-2 drop-shadow-md">
                {activeTab === 'subjects' && 'Academic Subjects'}
                {activeTab === 'core' && 'IBCP Core Portfolio'}
                {activeTab === 'projects' && 'Technical & AI Innovation'}
              </h2>
              <p className="text-gray-400">Manage your coursework, track progress, and upload specific files.</p>
            </div>
          </div>

          {/* Subjects View */}
          {activeTab === 'subjects' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {ibSubjects.map((sub, idx) => (
                <div key={idx} className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{sub.name}</h3>
                      <span className="inline-block px-3 py-1 bg-gray-700 text-xs font-semibold rounded-full mb-3">{sub.tool}</span>
                    </div>
                    <span className={`flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full ${sub.progress >= 80 ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                      <CheckCircle size={14} /> {sub.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-6 h-10">{sub.desc}</p>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000" style={{ width: `${sub.progress}%` }}></div>
                  </div>

                  {/* Subject-Specific Upload Dropzone */}
                  <div className="border-2 border-dashed border-gray-600 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-gray-900/30 mb-4 hover:border-blue-500 transition-colors cursor-pointer">
                    <FolderPlus className="text-gray-500 mb-2" size={32} />
                    <p className="text-sm text-gray-400">Drag & drop files for <strong className="text-gray-200">{sub.name}</strong></p>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOCX, ZIP up to 50MB</p>
                  </div>

                  <div className="flex justify-end">
                    <Button3D color="blue"><Upload size={16} /> Upload to {sub.name.split(' ')[0]}</Button3D>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Core View */}
          {activeTab === 'core' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {coreComponents.map((core, idx) => (
                <div key={idx} className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{core.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 h-10">{core.desc}</p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-bold text-gray-300">Completion:</span>
                    <div className="flex-1 bg-gray-700 rounded-full h-3">
                      <div className="bg-purple-500 h-3 rounded-full" style={{ width: `${core.progress}%` }}></div>
                    </div>
                    <span className="text-sm font-bold text-purple-400">{core.progress}%</span>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700">
                    <p className="text-xs text-gray-500">Requires Portfolio Evidence</p>
                    <Button3D color="purple"><FileText size={16} /> Add Evidence</Button3D>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Projects View */}
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {aiProjects.map((proj, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 rounded-2xl p-6 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-green-400 mb-4 shadow-inner">
                    {proj.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{proj.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 h-12">{proj.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 text-xs font-bold rounded-lg shadow-sm">
                      {proj.tech}
                    </span>
                    <Button3D color="gray">View Repository <Code size={16}/></Button3D>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
