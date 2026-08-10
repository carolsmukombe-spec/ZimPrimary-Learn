import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  FileText, 
  FolderGit2, 
  Sparkles, 
  BarChart3, 
  Flame, 
  User, 
  Globe2,
  ChevronDown,
  Award
} from 'lucide-react';
import { GradeLevel, LanguageOption } from '../types/curriculum';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  grade: GradeLevel;
  learnerName: string;
  primaryLanguage: LanguageOption;
  streakDays: number;
  unlockedBadgeCount: number;
  onOpenProfileModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  grade,
  learnerName,
  primaryLanguage,
  streakDays,
  unlockedBadgeCount,
  onOpenProfileModal
}) => {
  const navItems = [
    { id: 'syllabus', label: 'Syllabus', icon: GraduationCap },
    { id: 'lessons', label: 'Topic Lessons', icon: BookOpen },
    { id: 'encyclopedia', label: 'Encyclopedia', icon: Globe2 },
    { id: 'projects', label: 'CALA Projects', icon: FolderGit2 },
    { id: 'testbank', label: 'Test Bank', icon: FileText },
    { id: 'ai-tutor', label: 'Concept Master AI', icon: Sparkles },
    { id: 'progress', label: 'Progress & Report', icon: BarChart3 }
  ];

  return (
    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-30 shadow-md">
      {/* Top Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Logo & App Name */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-amber-500 p-0.5 flex items-center justify-center shadow-lg shadow-emerald-900/30">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
              <span className="text-xl">🇿🇼</span>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <h1 className="font-bold text-lg sm:text-xl text-slate-100 tracking-tight">
                ZimPrimary <span className="text-emerald-400">Learn</span>
              </h1>
              <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                New Curriculum
              </span>
            </div>
            <p className="text-xs text-slate-400">
              MoPSE Zimbabwe Primary Competencies
            </p>
          </div>
        </div>

        {/* Right Learner Status & Grade Switcher Button */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Learning Streak */}
          <div 
            className="flex items-center space-x-1.5 bg-amber-950/60 border border-amber-800/60 text-amber-400 px-2.5 py-1 rounded-lg text-xs font-medium"
            title={`${streakDays} Day Learning Streak!`}
          >
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-pulse" />
            <span>{streakDays} Days</span>
          </div>

          {/* Badges Badge */}
          <div 
            onClick={() => setActiveTab('progress')}
            className="hidden sm:flex items-center space-x-1.5 bg-teal-950/60 border border-teal-800/60 text-teal-300 px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer hover:bg-teal-900/60 transition"
            title="Unlocked Badges"
          >
            <Award className="w-4 h-4 text-teal-400" />
            <span>{unlockedBadgeCount} Badges</span>
          </div>

          {/* Learner Profile Selector Button */}
          <button
            onClick={onOpenProfileModal}
            className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700/80 border border-slate-700 px-3 py-1.5 rounded-xl text-xs text-slate-200 transition cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
              {learnerName.charAt(0).toUpperCase()}
            </div>
            <div className="text-left leading-tight hidden xs:block">
              <div className="font-semibold text-slate-100 flex items-center gap-1">
                {learnerName}
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>
              <div className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                <span className="font-bold">{grade}</span> • {primaryLanguage}
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="bg-slate-950/80 border-t border-slate-800/60 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex space-x-1 sm:space-x-2 py-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/40 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/70'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
