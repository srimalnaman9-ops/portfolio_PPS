import React, { useState, useEffect, useRef } from 'react';
import { 
  Book, 
  BookOpen, 
  Code, 
  Cpu, 
  Upload as UploadIcon, 
  User, 
  Star, 
  GitFork, 
  MapPin, 
  Calendar,
  Briefcase,
  Lightbulb,
  Globe,
  MessageCircle,
  FileText,
  FileCode,
  FileArchive,
  Image as ImageIcon,
  CheckCircle2,
  X,
  Plus
} from 'lucide-react';

// Mock Data for the Portfolio
const USER_PROFILE = {
  name: 'Naman Jain',
  username: 'namanjain-ibcp',
  bio: 'IBCP Student at Jain Vidyalaya | Tech & AI Enthusiast',
  location: 'Madurai, Tamil Nadu, India',
};

const TECH_STACK = ['Python', 'Streamlit', 'React', 'HTML', 'CSS', 'JS', 'YOLOv8'];

const DP_SUBJECTS = [
  { id: 'chem', title: 'Chemistry', desc: 'Organic and physical chemistry, IUPAC nomenclature, reaction mechanisms.', lang: 'Lab', color: '#f1e05a', updated: '2 days ago' },
  { id: 'math', title: 'Mathematics', desc: 'Advanced calculus, differential equations, optimization, Casio fx-CG integration.', lang: 'Math', color: '#b07219', updated: '4 days ago' },
  { id: 'phys', title: 'Physics', desc: 'Higher-level mechanics, thermodynamic emissivity, Faraday-Lenz\'s Law.', lang: 'Physics', color: '#e34c26', updated: '1 week ago' },
  { id: 'eng', title: 'English', desc: 'Literary analysis, essay drafting, and critical reading.', lang: 'Literature', color: '#563d7c', updated: '2 weeks ago' },
];

const CORE_COMPONENTS = [
  { id: 'pps', title: 'PPS', desc: 'Personal and Professional Skills portfolio and learning outcome reflections.', icon: Briefcase, color: '#89e051' },
  { id: 'ce', title: 'CE', desc: 'Community Engagement and service-learning initiatives.', icon: Globe, color: '#2b7489' },
  { id: 'rp', title: 'RP', desc: 'Reflective Project: Ethical considerations of asteroid trajectory modification.', icon: Lightbulb, color: '#f1e05a' },
  { id: 'lcs', title: 'LCS', desc: 'Language and Cultural Studies focusing on Māori heritage and traditions.', icon: MessageCircle, color: '#e34c26' },
];

const AI_PROJECTS = [
  { 
    id: 'crypto', 
    title: 'Crypto Volatility Visualizer', 
    desc: 'Public AI Edition Streamlit application for BTEC CRS Mathematics coursework.', 
    lang: 'Python', 
    color: '#3572A5', 
    stars: 12, 
    forks: 3, 
    updated: 'Feb 2026',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'exam', 
    title: 'Exam Ascent AI', 
    desc: 'Streamlit exam preparation platform designed for IB student revision.', 
    lang: 'Python', 
    color: '#3572A5', 
    stars: 28, 
    forks: 7, 
    updated: 'Mar 2026',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'ev', 
    title: 'EV Smart Analytics', 
    desc: 'Dashboard incorporating EV dataset analysis, K-Means clustering, and 3D visualization.', 
    lang: 'JavaScript', 
    color: '#f1e05a', 
    stars: 45, 
    forks: 12, 
    updated: 'Mar 2026',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938cb?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'mindful', 
    title: 'MindfulWork', 
    desc: 'Single-page web application prototype for workplace wellness with guided breathing.', 
    lang: 'HTML/CSS/JS', 
    color: '#e34c26', 
    stars: 15, 
    forks: 2, 
    updated: 'Apr 2026',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'stock', 
    title: 'StockSense Pro 2', 
    desc: 'Automated computer vision project for grocery item detection using Roboflow.', 
    lang: 'Jupyter Notebook', 
    color: '#DA5B0B', 
    stars: 33, 
    forks: 5, 
    updated: 'Sep 2026',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80'
  }
];


// GitHub Contribution Graph Mock
const ContributionGraph = () => {
  const weeks = 24; // 6 months roughly
  const days = 7;
  const colors = ['bg-[#161b22]', 'bg-[#0e4429]', 'bg-[#006d32]', 'bg-[#26a641]', 'bg-[#39d353]'];
  
  const generateGrid = () => {
    let grid = [];
    for (let i = 0; i < days; i++) {
      let row = [];
      for (let j = 0; j < weeks; j++) {
        // Randomize contributions for visual effect, heavier towards recent (right)
        const intensity = Math.random() > 0.6 ? Math.floor(Math.random() * 4) + 1 : 0;
        row.push(<div key={`${i}-${j}`} className={`w-3 h-3 rounded-[2px] ${colors[intensity]} outline outline-1 outline-white/5`} />);
      }
      grid.push(<div key={`row-${i}`} className="flex gap-1 mb-1">{row}</div>);
    }
    return grid;
  };

  return (
    <div className="border border-[#30363d] rounded-xl p-4 bg-[#0d1117] overflow-x-auto">
      <h3 className="text-sm text-[#c9d1d9] mb-3">1,204 contributions in the last year</h3>
      <div className="flex gap-1 min-w-max">
        <div className="flex flex-col text-xs text-[#8b949e] pr-2 justify-between py-1">
          <span>Mon</span>
          <span>Wed</span>
          <span>Fri</span>
        </div>
        <div>
          {generateGrid()}
        </div>
      </div>
      <div className="flex justify-end items-center gap-2 mt-2 text-xs text-[#8b949e]">
        <span>Less</span>
        <div className="flex gap-1">
          {colors.map((color, i) => (
            <div key={i} className={`w-3 h-3 rounded-[2px] ${color} outline outline-1 outline-white/5`} />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
};

// Generic Repository Card component
const RepoCard = ({ title, desc, lang, color, updated, image = null, stars = null, forks = null }) => (
  <div className="border border-[#30363d] bg-[#0d1117] rounded-xl overflow-hidden hover:border-[#8b949e] transition-colors flex flex-col h-full">
    {image && (
      <div className="h-40 w-full overflow-hidden border-b border-[#30363d]">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
      </div>
    )}
    <div className="p-4 flex flex-col flex-1">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-[#58a6ff] font-semibold text-lg hover:underline cursor-pointer">{title}</h3>
        <span className="px-2 py-0.5 rounded-full border border-[#30363d] text-xs text-[#8b949e] font-medium">Public</span>
      </div>
      <p className="text-[#8b949e] text-sm mb-4 flex-1">{desc}</p>
      <div className="flex items-center gap-4 text-xs text-[#8b949e] mt-auto">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></span>
          <span>{lang}</span>
        </div>
        {stars !== null && (
          <div className="flex items-center gap-1 hover:text-[#58a6ff] cursor-pointer">
            <Star className="w-3.5 h-3.5" /> {stars}
          </div>
        )}
        {forks !== null && (
          <div className="flex items-center gap-1 hover:text-[#58a6ff] cursor-pointer">
            <GitFork className="w-3.5 h-3.5" /> {forks}
          </div>
        )}
        <span>Updated {updated}</span>
      </div>
    </div>
  </div>
);

const UploadSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files);
    }
  };

  const processFiles = (newFiles) => {
    const fileArray = Array.from(newFiles).map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2) + ' MB',
      type: file.name.split('.').pop(),
      progress: 0,
      status: 'uploading' // uploading, complete
    }));

    setFiles(prev => [...fileArray, ...prev]);

    // Simulate upload progress
    fileArray.forEach(file => {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += Math.random() * 30;
        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(interval);
          setFiles(prev => prev.map(f => f.id === file.id ? { ...f, progress: 100, status: 'complete' } : f));
        } else {
          setFiles(prev => prev.map(f => f.id === file.id ? { ...f, progress: currentProgress } : f));
        }
      }, 500);
    });
  };

  const getFileIcon = (ext) => {
    if (['pdf'].includes(ext)) return <FileText className="text-red-400 w-5 h-5" />;
    if (['py', 'js', 'html', 'css', 'jsx'].includes(ext)) return <FileCode className="text-[#58a6ff] w-5 h-5" />;
    if (['png', 'jpg', 'jpeg'].includes(ext)) return <ImageIcon className="text-[#2ea043] w-5 h-5" />;
    if (['zip', 'rar'].includes(ext)) return <FileArchive className="text-yellow-400 w-5 h-5" />;
    return <FileText className="text-[#8b949e] w-5 h-5" />;
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center mb-4 border-b border-[#30363d] pb-4">
        <h2 className="text-2xl font-semibold text-[#c9d1d9]">Upload Coursework</h2>
      </div>

      <div 
        className={`border-2 border-dashed rounded-xl p-10 text-center transition-colors ${
          isDragging ? 'border-[#58a6ff] bg-[#58a6ff]/10' : 'border-[#30363d] bg-[#0d1117] hover:border-[#8b949e]'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <UploadIcon className={`w-12 h-12 mx-auto mb-4 ${isDragging ? 'text-[#58a6ff]' : 'text-[#8b949e]'}`} />
        <h3 className="text-lg font-medium text-[#c9d1d9] mb-2">Drag and drop files here to upload</h3>
        <p className="text-[#8b949e] text-sm mb-6">Attach files by dragging & dropping, selecting or pasting them.</p>
        
        <input 
          type="file" 
          multiple 
          ref={fileInputRef} 
          onChange={handleChange} 
          className="hidden" 
        />
        <button 
          onClick={() => fileInputRef.current.click()}
          className="bg-[#21262d] border border-[#30363d] text-[#c9d1d9] px-4 py-2 rounded-md hover:bg-[#30363d] transition-colors font-medium text-sm"
        >
          Choose your files
        </button>
      </div>

      {files.length > 0 && (
        <div className="border border-[#30363d] rounded-xl overflow-hidden bg-[#0d1117]">
          <div className="bg-[#161b22] px-4 py-3 border-b border-[#30363d] font-semibold text-[#c9d1d9]">
            Uploaded Files ({files.length})
          </div>
          <ul className="divide-y divide-[#30363d]">
            {files.map(file => (
              <li key={file.id} className="p-4 flex items-center justify-between hover:bg-[#161b22]/50 transition-colors">
                <div className="flex items-center gap-4 flex-1">
                  {getFileIcon(file.type)}
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#c9d1d9] truncate max-w-xs sm:max-w-md">{file.name}</p>
                    <p className="text-xs text-[#8b949e]">{file.size}</p>
                    
                    {file.status === 'uploading' && (
                      <div className="w-full bg-[#30363d] rounded-full h-1.5 mt-2 max-w-md">
                        <div 
                          className="bg-[#2ea043] h-1.5 rounded-full transition-all duration-300" 
                          style={{ width: `${file.progress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  {file.status === 'complete' ? (
                    <span className="flex items-center gap-1 text-xs text-[#2ea043] font-medium border border-[#2ea043]/30 bg-[#2ea043]/10 px-2 py-1 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Uploaded
                    </span>
                  ) : (
                    <span className="text-xs text-[#8b949e]">Uploading... {Math.round(file.progress)}%</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'dp', label: 'DP Subjects', icon: Book, badge: 4 },
    { id: 'core', label: 'Core Components', icon: Cpu, badge: 4 },
    { id: 'projects', label: 'AI Projects', icon: Code, badge: 4 },
    { id: 'upload', label: 'Upload Data', icon: UploadIcon },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <h2 className="text-[#c9d1d9] text-base mb-4 flex items-center justify-between">
                <span>Pinned</span>
                <span className="text-xs text-[#8b949e] font-normal cursor-pointer hover:text-[#58a6ff]">Customize your pins</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {AI_PROJECTS.slice(0, 4).map(proj => (
                  <RepoCard key={proj.id} {...proj} image={null} /> // Pinned doesn't show images usually
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-[#c9d1d9] text-base mb-4">Activity</h2>
              <ContributionGraph />
            </div>
          </div>
        );
      case 'dp':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-4 border-b border-[#30363d] pb-4">
              <h2 className="text-2xl font-semibold text-[#c9d1d9]">Diploma Programme Subjects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DP_SUBJECTS.map(sub => <RepoCard key={sub.id} {...sub} />)}
            </div>
          </div>
        );
      case 'core':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-4 border-b border-[#30363d] pb-4">
              <h2 className="text-2xl font-semibold text-[#c9d1d9]">IBCP Core Components</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CORE_COMPONENTS.map(core => (
                <div key={core.id} className="border border-[#30363d] bg-[#0d1117] rounded-xl p-5 hover:border-[#8b949e] transition-colors flex items-start gap-4">
                  <div className="p-3 bg-[#161b22] rounded-lg border border-[#30363d]">
                    <core.icon className="w-6 h-6" style={{ color: core.color }} />
                  </div>
                  <div>
                    <h3 className="text-[#58a6ff] font-semibold text-lg hover:underline cursor-pointer">{core.title}</h3>
                    <p className="text-[#8b949e] text-sm mt-1">{core.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-4 border-b border-[#30363d] pb-4">
              <h2 className="text-2xl font-semibold text-[#c9d1d9]">AI & Tech Projects Showcase</h2>
              <button className="bg-[#238636] hover:bg-[#2ea043] text-white px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1 transition-colors">
                <BookOpen className="w-4 h-4" /> New Project
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {AI_PROJECTS.map(proj => <RepoCard key={proj.id} {...proj} />)}
            </div>
          </div>
        );
      case 'upload':
        return <UploadSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      
      {/* Top Navbar Mock */}
      <header className="bg-[#161b22] border-b border-[#30363d] px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#58a6ff] to-[#238636] flex items-center justify-center text-white font-bold cursor-pointer">
            NJ
          </div>
          <div className="hidden md:flex bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1 w-64 items-center">
            <span className="text-[#8b949e] text-sm">Search or jump to...</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Plus className="w-5 h-5 text-[#c9d1d9] hover:text-white cursor-pointer" />
          <div className="w-8 h-8 rounded-full border border-[#30363d] overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=100&q=80" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Left Sidebar (Profile) */}
        <aside className="w-full md:w-[296px] shrink-0">
          <div className="flex items-center md:items-start md:flex-col gap-4 mb-4">
            <div className="relative w-20 h-20 md:w-[296px] md:h-[296px] rounded-full md:rounded-full border border-[#30363d] shadow-xl overflow-hidden shrink-0">
               <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=400&q=80" alt="Naman Jain" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-[#c9d1d9] leading-tight">{USER_PROFILE.name}</h1>
              <h2 className="text-xl text-[#8b949e] font-light">{USER_PROFILE.username}</h2>
            </div>
          </div>
          
          <p className="text-[#c9d1d9] text-base mb-4 hidden md:block">
            {USER_PROFILE.bio}
          </p>

          <button className="w-full bg-[#21262d] border border-[#30363d] hover:bg-[#30363d] text-[#c9d1d9] py-1.5 rounded-md font-medium text-sm transition-colors mb-4">
            Edit profile
          </button>

          <div className="text-sm text-[#c9d1d9] flex flex-col gap-3 mb-6 border-t border-[#30363d] pt-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#8b949e]" /> {USER_PROFILE.location}
            </div>
            
            <div className="mt-2">
              <h3 className="text-[#8b949e] font-semibold text-xs mb-2">TECH STACK</h3>
              <div className="flex flex-wrap gap-1.5">
                {TECH_STACK.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-[#161b22] border border-[#30363d] text-[#58a6ff] rounded-md text-xs font-medium hover:border-[#8b949e] transition-colors cursor-pointer">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Right Main Content */}
        <main className="flex-1 min-w-0">
          
          {/* Navigation Tabs */}
          <div className="border-b border-[#30363d] mb-6 overflow-x-auto">
            <nav className="flex gap-2 min-w-max">
              {tabs.map(tab => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 border-b-2 text-sm transition-colors ${
                      isActive 
                        ? 'border-[#f78166] text-[#c9d1d9] font-semibold' 
                        : 'border-transparent text-[#c9d1d9] hover:bg-[#161b22] hover:rounded-t-md'
                    }`}
                  >
                    <tab.icon className={`w-4 h-4 ${isActive ? 'text-[#8b949e]' : 'text-[#8b949e]'}`} />
                    {tab.label}
                    {tab.badge && (
                      <span className="bg-[#161b22] text-[#c9d1d9] px-2 py-0.5 rounded-full text-xs font-medium border border-[#30363d]">
                        {tab.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Dynamic Content */}
          <div className="pb-12">
            {renderContent()}
          </div>
          
        </main>
      </div>

      {/* Footer Mock */}
      <footer className="border-t border-[#30363d] mt-12 py-8 max-w-[1280px] mx-auto px-4 md:px-8 text-xs text-[#8b949e] flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <Globe className="w-5 h-5 text-[#8b949e]" />
          <span>© 2026 Naman Jain, IBCP.</span>
        </div>
        <div className="flex gap-4">
          <span className="hover:text-[#58a6ff] cursor-pointer hover:underline">Terms</span>
          <span className="hover:text-[#58a6ff] cursor-pointer hover:underline">Privacy</span>
          <span className="hover:text-[#58a6ff] cursor-pointer hover:underline">Security</span>
          <span className="hover:text-[#58a6ff] cursor-pointer hover:underline">Status</span>
          <span className="hover:text-[#58a6ff] cursor-pointer hover:underline">Docs</span>
        </div>
      </footer>
    </div>
  );
}
