import React, { useState } from 'react';
import { GradeLevel, SubjectCategory } from '../types/curriculum';
import { 
  HBC_RESOURCES_DIRECTORY, 
  HBC_TEXTBOOK_GUIDES, 
  HBCResource 
} from '../data/hbcResources';
import { 
  BookOpen, 
  Sparkles, 
  Search, 
  FolderCheck, 
  CheckCircle2, 
  Package, 
  Sun, 
  Landmark, 
  Music, 
  Sprout, 
  Calculator, 
  Smartphone,
  Info
} from 'lucide-react';

interface HbcResourceCenterProps {
  selectedGrade: GradeLevel;
  onSelectSubjectForLesson: (subject: SubjectCategory) => void;
}

export const HbcResourceCenter: React.FC<HbcResourceCenterProps> = ({
  selectedGrade,
  onSelectSubjectForLesson
}) => {
  const [activeTab, setActiveTab] = useState<'resources' | 'textbooks'>('resources');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const typeOptions = [
    'All',
    'Concrete Counters',
    'Science & Tech Equipment',
    'Heritage & Cultural Artifacts',
    'Musical & Performing Arts',
    'Agriculture & Environment',
    'ICT & Digital Tools'
  ];

  const filteredResources = HBC_RESOURCES_DIRECTORY.filter(res => {
    if (selectedTypeFilter !== 'All' && res.type !== selectedTypeFilter) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        res.title.toLowerCase().includes(q) ||
        res.description.toLowerCase().includes(q) ||
        res.subject.toLowerCase().includes(q) ||
        res.teachingPurpose.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Landmark': return <Landmark className="w-5 h-5 text-amber-400" />;
      case 'Sun': return <Sun className="w-5 h-5 text-yellow-400" />;
      case 'Music': return <Music className="w-5 h-5 text-purple-400" />;
      case 'Sprout': return <Sprout className="w-5 h-5 text-emerald-400" />;
      case 'Calculator': return <Calculator className="w-5 h-5 text-cyan-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-blue-400" />;
      default: return <Package className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-amber-950 border border-emerald-800/60 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>MoPSE Heritage-Based Curriculum (HBC 2024–2030)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Syllabus Resources & Textbook Hub
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1 leading-relaxed">
              Find every required teaching material, local resource, concrete counter, science kit, heritage artifact, and approved HBC textbook guide specified by Zimbabwe MoPSE syllabuses for {selectedGrade}.
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0 bg-slate-950/80 border border-emerald-700/60 p-1.5 rounded-xl">
            <button
              onClick={() => setActiveTab('resources')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'resources'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Required Resources</span>
            </button>
            <button
              onClick={() => setActiveTab('textbooks')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer flex items-center space-x-1.5 ${
                activeTab === 'textbooks'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>HBC Textbooks & CALA</span>
            </button>
          </div>
        </div>
      </div>

      {/* TAB 1: REQUIRED SYLLABUS RESOURCES */}
      {activeTab === 'resources' && (
        <div className="space-y-5">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-lg">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search required resources, seeds, tools, maps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Type Filter Pills */}
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {typeOptions.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedTypeFilter(type)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                    selectedTypeFilter === type
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-500 font-bold'
                      : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredResources.map((res) => (
              <div
                key={res.id}
                className="bg-slate-900 border border-slate-800 hover:border-emerald-700/60 rounded-2xl p-5 transition shadow-lg space-y-3.5 relative flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-3 border-b border-slate-800/80 pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 shadow">
                        {getIconComponent(res.iconName)}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base text-white">
                          {res.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-[10px] text-slate-400 mt-0.5">
                          <span className="bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded-md font-semibold">
                            {res.subject}
                          </span>
                          <span>•</span>
                          <span>{res.gradeRange}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {res.description}
                  </p>

                  {/* Purpose & How to Source */}
                  <div className="mt-3.5 space-y-2 text-xs">
                    <div className="bg-slate-950/80 border border-slate-800 p-2.5 rounded-xl">
                      <span className="text-[10px] font-bold uppercase text-emerald-400 block mb-0.5">
                        🎯 MoPSE Teaching Purpose:
                      </span>
                      <p className="text-slate-300 leading-snug">{res.teachingPurpose}</p>
                    </div>

                    <div className="bg-amber-950/30 border border-amber-900/50 p-2.5 rounded-xl">
                      <span className="text-[10px] font-bold uppercase text-amber-400 block mb-0.5">
                        🇿🇼 How to Source in Zimbabwe:
                      </span>
                      <p className="text-amber-200/90 leading-snug">{res.howToSourceInZimbabwe}</p>
                    </div>
                  </div>
                </div>

                {/* Footer Syllabus Reference */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                  <div className="flex items-center space-x-1 text-slate-400">
                    <Info className="w-3.5 h-3.5 text-slate-500" />
                    <span>{res.syllabusRequirementRef}</span>
                  </div>
                  <button
                    onClick={() => onSelectSubjectForLesson(res.subject)}
                    className="text-emerald-400 font-bold hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>Open {res.subject} Lessons</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: APPROVED HBC TEXTBOOKS & CALA */}
      {activeTab === 'textbooks' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              MoPSE Approved HBC Textbook Reader Directory
            </h3>
            <p className="text-xs text-slate-300 mb-4">
              Access embedded textbook chapters aligned with the MoPSE Heritage-Based Curriculum for {selectedGrade}.
            </p>

            <div className="space-y-6">
              {HBC_TEXTBOOK_GUIDES.map((tb, idx) => (
                <div key={idx} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div>
                      <span className="bg-emerald-950 text-emerald-400 text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-emerald-800 uppercase">
                        {tb.subject}
                      </span>
                      <h4 className="font-extrabold text-base text-white mt-1">
                        {tb.bookTitle}
                      </h4>
                      <p className="text-[11px] text-slate-400">{tb.approvedBy}</p>
                    </div>
                    <button
                      onClick={() => onSelectSubjectForLesson(tb.subject)}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition cursor-pointer shrink-0"
                    >
                      Read Textbook Lessons
                    </button>
                  </div>

                  {/* Chapters List */}
                  <div className="space-y-2">
                    {tb.chapters.map((ch, cIdx) => (
                      <div key={cIdx} className="bg-slate-900 border border-slate-800/80 p-3 rounded-lg text-xs space-y-1.5">
                        <div className="flex items-center justify-between font-bold text-slate-200">
                          <span>Chapter {ch.chapterNumber}: {ch.title}</span>
                          <span className="text-[10px] text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-800">
                            {ch.calaConnection}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          <span className="text-slate-400 text-[10px]">Key Concepts:</span>
                          {ch.keyConcepts.map((kc, kIdx) => (
                            <span key={kIdx} className="bg-slate-950 text-slate-300 text-[10px] px-2 py-0.5 rounded border border-slate-800">
                              {kc}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
