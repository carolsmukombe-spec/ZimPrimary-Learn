import React from 'react';
import { GradeLevel, SubjectCategory } from '../types/curriculum';
import { Sparkles, CheckCircle2, ChevronRight, BookOpen } from 'lucide-react';

interface GradeSelectorProps {
  selectedGrade: GradeLevel;
  onSelectGrade: (grade: GradeLevel) => void;
  selectedSubject?: SubjectCategory;
  onSelectSubject?: (subject: SubjectCategory) => void;
}

export interface SubjectItem {
  id: string;
  name: string;
  shortName: string;
  category: SubjectCategory;
  icon: string;
  color: string;
  bgGradient: string;
  description: string;
}

export const CORE_SUBJECTS: SubjectItem[] = [
  {
    id: 'maths',
    name: 'Mathematics',
    shortName: 'Maths',
    category: 'Mathematics',
    icon: '🔢',
    color: 'emerald',
    bgGradient: 'from-emerald-600 to-teal-700',
    description: 'Numeracy, problem solving, shapes, place value, and ZIMSEC maths'
  },
  {
    id: 'english',
    name: 'English Language',
    shortName: 'English',
    category: 'English Language',
    icon: '📖',
    color: 'amber',
    bgGradient: 'from-amber-600 to-yellow-600',
    description: 'Phonics, reading fluency, grammar, vocabulary, and composition'
  },
  {
    id: 'science',
    name: 'Science & Technology',
    shortName: 'Science & Tech',
    category: 'Science & Technology',
    icon: '🔬',
    color: 'cyan',
    bgGradient: 'from-cyan-600 to-blue-700',
    description: 'Living things, water cycle, energy, ICT hardware, and experiments'
  },
  {
    id: 'shona',
    name: 'Shona & Indigenous Languages',
    shortName: 'Shona',
    category: 'Shona / Indigenous Languages',
    icon: '🇿🇼',
    color: 'green',
    bgGradient: 'from-green-600 to-emerald-800',
    description: 'Verenga unyore, ngano, tsumo, madimikira, and cultural story telling'
  },
  {
    id: 'social',
    name: 'Social Science',
    shortName: 'Social Science',
    category: 'Social Science',
    icon: '🏛️',
    color: 'rose',
    bgGradient: 'from-rose-600 to-pink-700',
    description: 'Heritage studies, Great Zimbabwe monuments, Unhu values, and civic duties'
  },
  {
    id: 'pe',
    name: 'Physical Education',
    shortName: 'PE',
    category: 'Physical Education',
    icon: '⚽',
    color: 'orange',
    bgGradient: 'from-orange-600 to-amber-700',
    description: 'Gymnastics, track athletics, team sports, and health safety'
  },
  {
    id: 'arts',
    name: 'Visual & Performing Arts',
    shortName: 'Arts',
    category: 'Visual & Performing Arts',
    icon: '🎨',
    color: 'purple',
    bgGradient: 'from-purple-600 to-indigo-700',
    description: 'Traditional dance (Jerusarema/Muchongoyo), marimba, mbira, and crafts'
  },
  {
    id: 'agri',
    name: 'Agriculture & Food Tech',
    shortName: 'Agri & Food Tech',
    category: 'Agriculture & Food Tech',
    icon: '🌱',
    color: 'emerald',
    bgGradient: 'from-emerald-700 to-green-900',
    description: 'Crop farming, soil preparation, livestock care, keyhole beds, and food tech'
  }
];

const GRADES_LIST: { grade: GradeLevel; stage: 'Infant School' | 'Junior School'; age: string; color: string; desc: string }[] = [
  { grade: 'ECD A', stage: 'Infant School', age: 'Ages 3-4', color: 'from-pink-500 to-rose-600', desc: 'Play-based sensory learning, early counting 1-5, mother tongue rhymes' },
  { grade: 'ECD B', stage: 'Infant School', age: 'Ages 4-5', color: 'from-purple-500 to-indigo-600', desc: 'Grade 1 readiness, counting 1-10, letter sounds, garden care' },
  { grade: 'Grade 1', stage: 'Infant School', age: 'Ages 5-6', color: 'from-blue-500 to-cyan-600', desc: 'Formal reading, addition to 20, ZiG currency, national flag & symbols' },
  { grade: 'Grade 2', stage: 'Infant School', age: 'Ages 6-7', color: 'from-teal-500 to-emerald-600', desc: 'Numbers to 100, analogue clocks, weather seasons, traditional dance' },
  { grade: 'Grade 3', stage: 'Junior School', age: 'Ages 7-8', color: 'from-emerald-500 to-green-600', desc: 'Numbers to 1000, fractions, soil types, ICT basics, and tsumo' },
  { grade: 'Grade 4', stage: 'Junior School', age: 'Ages 8-9', color: 'from-amber-500 to-yellow-600', desc: 'Decimals, Great Zimbabwe dry stone walling, human digestive system' },
  { grade: 'Grade 5', stage: 'Junior School', age: 'Ages 9-10', color: 'from-orange-500 to-amber-600', desc: 'Numbers to 100k, percentages, solar water heating, CALA projects' },
  { grade: 'Grade 6', stage: 'Junior School', age: 'Ages 10-11', color: 'from-red-500 to-rose-600', desc: 'Pre-ZIMSEC speed/distance, circulatory system, liberation history' },
  { grade: 'Grade 7', stage: 'Junior School', age: 'Ages 11-12 (ZIMSEC)', color: 'from-indigo-600 to-purple-700', desc: 'ZIMSEC Primary Exam Year: Complete syllabus mastery & mock papers' }
];

export const GradeSelector: React.FC<GradeSelectorProps> = ({
  selectedGrade,
  onSelectGrade,
  selectedSubject,
  onSelectSubject
}) => {
  const currentGradeInfo = GRADES_LIST.find(g => g.grade === selectedGrade) || GRADES_LIST[0];

  return (
    <div className="space-y-4">
      {/* Grade Portal Selection Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-slate-800 pb-3">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Zimbabwe MoPSE Primary Grades (ECD A to Grade 7)
            </h2>
            <p className="text-xs text-slate-400">
              Click any grade to open its standalone portal and view all 7 curriculum subjects
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs">
            <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 px-3 py-1 rounded-full font-bold">
              Active Portal: {selectedGrade}
            </span>
          </div>
        </div>

        {/* Standalone Grade Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
          {GRADES_LIST.map((item) => {
            const isSelected = selectedGrade === item.grade;
            return (
              <button
                key={item.grade}
                onClick={() => onSelectGrade(item.grade)}
                className={`relative flex flex-col items-center justify-between p-3 rounded-xl border transition cursor-pointer text-center ${
                  isSelected
                    ? 'bg-emerald-950/80 border-emerald-500 ring-2 ring-emerald-500/50 shadow-lg shadow-emerald-950/50 scale-105 z-10 text-white'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 text-slate-300'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-1 right-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 fill-emerald-950" />
                  </div>
                )}

                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center font-black text-xs text-white shadow mb-1.5`}>
                  {item.grade.includes('ECD') ? item.grade.split(' ')[1] : item.grade.split(' ')[1]}
                </div>

                <span className="font-bold text-xs leading-tight">
                  {item.grade}
                </span>

                <span className="text-[10px] text-slate-400 mt-0.5">
                  {item.age}
                </span>

                <span className={`text-[9px] font-semibold mt-1 px-1.5 py-0.5 rounded ${
                  item.stage === 'Infant School' ? 'bg-indigo-950 text-indigo-300 border border-indigo-800/50' : 'bg-amber-950 text-amber-300 border border-amber-800/50'
                }`}>
                  {item.stage === 'Infant School' ? 'Infant' : 'Junior'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* OPEN STANDALONE GRADE PORTAL HEADER & ALL 7 SUBJECTS */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border border-emerald-800/50 rounded-2xl p-5 sm:p-6 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5 mb-5">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
              <span>MoPSE Zimbabwe New Curriculum</span>
              <span>•</span>
              <span className="text-amber-400">{currentGradeInfo.stage}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
              <span>{selectedGrade} Standalone Learning Portal</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              {currentGradeInfo.desc}
            </p>
          </div>

          <div className="flex items-center space-x-3 bg-slate-950/80 border border-emerald-700/60 px-4 py-2.5 rounded-xl shrink-0">
            <BookOpen className="w-5 h-5 text-emerald-400" />
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Included Subjects</span>
              <span className="text-sm font-extrabold text-white">7 Core Subjects</span>
            </div>
          </div>
        </div>

        {/* ALL 7 SUBJECTS CARDS GRID */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs sm:text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Select Subject to Open Lessons, Exercises, Tests & Projects:</span>
            </h3>
            {selectedSubject && (
              <button
                onClick={() => onSelectSubject && onSelectSubject(undefined as any)}
                className="text-xs text-slate-400 hover:text-emerald-400 underline cursor-pointer"
              >
                Show All Subjects
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-3">
            {CORE_SUBJECTS.map((subj) => {
              const isSubjActive = selectedSubject === subj.category;
              return (
                <button
                  key={subj.id}
                  onClick={() => onSelectSubject && onSelectSubject(subj.category)}
                  className={`flex flex-col justify-between p-3.5 rounded-xl border transition cursor-pointer text-left relative group ${
                    isSubjActive
                      ? 'bg-emerald-950 border-emerald-400 ring-2 ring-emerald-400/50 shadow-lg shadow-emerald-950 scale-102 z-10'
                      : 'bg-slate-950/70 border-slate-800 hover:border-emerald-600/60 hover:bg-slate-900'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{subj.icon}</span>
                      {isSubjActive && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      )}
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-white group-hover:text-emerald-300 transition leading-tight">
                      {subj.shortName}
                    </h4>
                    <p className="text-[10px] text-slate-400 mt-1 line-clamp-2 leading-snug">
                      {subj.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-semibold text-emerald-400">
                    <span>Open Subject</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
