import React, { useState } from 'react';
import { GradeLevel, SubjectCategory } from '../types/curriculum';
import { ZIM_SYLLABUSES } from '../data/syllabuses';
import { HbcResourceCenter } from './HbcResourceCenter';
import { BookOpen, CheckCircle, Heart, Sparkles, Filter, Package, ShieldCheck } from 'lucide-react';

interface SyllabusExplorerProps {
  selectedGrade: GradeLevel;
  onSelectSubjectForLesson: (subject: SubjectCategory) => void;
}

export const SyllabusExplorer: React.FC<SyllabusExplorerProps> = ({
  selectedGrade,
  onSelectSubjectForLesson
}) => {
  const currentSyllabus = ZIM_SYLLABUSES.find(s => s.grade === selectedGrade) || ZIM_SYLLABUSES[0];
  const [viewMode, setViewMode] = useState<'topics' | 'resources'>('topics');
  const [activeSubjectCat, setActiveSubjectCat] = useState<SubjectCategory>(
    currentSyllabus.subjects[0]?.category || 'Mathematics'
  );

  const selectedSubjectData = currentSyllabus.subjects.find(
    s => s.category === activeSubjectCat
  ) || currentSyllabus.subjects[0];

  return (
    <div className="space-y-6">
      {/* Top Main Mode Switcher */}
      <div className="flex items-center justify-between bg-slate-900 border border-slate-800 p-2 rounded-2xl shadow-lg">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('topics')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center space-x-2 ${
              viewMode === 'topics'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Syllabus Topics & Competencies</span>
          </button>

          <button
            onClick={() => setViewMode('resources')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center space-x-2 ${
              viewMode === 'resources'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Package className="w-4 h-4 text-amber-400" />
            <span>HBC Required Teaching Resources & Textbooks</span>
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-1.5 text-xs text-emerald-400 font-semibold px-3 py-1 bg-emerald-950 border border-emerald-800 rounded-lg">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>MoPSE HBC 2024–2030 Standard</span>
        </div>
      </div>

      {viewMode === 'resources' ? (
        <HbcResourceCenter
          selectedGrade={selectedGrade}
          onSelectSubjectForLesson={onSelectSubjectForLesson}
        />
      ) : (
        <div className="space-y-6">
          {/* Syllabus Header Card */}
          <div className="bg-gradient-to-r from-emerald-900/60 via-slate-900 to-slate-900 border border-emerald-800/60 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
              <div>
                <div className="flex items-center space-x-2 text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">
                  <span>MoPSE Zimbabwe New Curriculum (2024–2030)</span>
                  <span>•</span>
                  <span className="text-amber-400">{currentSyllabus.stage}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {currentSyllabus.grade} Official Syllabus
                </h2>
                <p className="text-sm text-slate-300 max-w-3xl mt-1 leading-relaxed">
                  {currentSyllabus.description}
                </p>
              </div>

              <div className="bg-slate-950/80 border border-emerald-700/60 p-3 rounded-xl text-center min-w-[140px]">
                <span className="text-xs text-slate-400 font-medium block">Learning Areas</span>
                <span className="text-2xl font-black text-emerald-400">{currentSyllabus.subjects.length} Subjects</span>
              </div>
            </div>
          </div>

          {/* Subject Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            <div className="text-xs text-slate-400 font-medium flex items-center gap-1 shrink-0 mr-2">
              <Filter className="w-3.5 h-3.5 text-emerald-400" />
              <span>Learning Area:</span>
            </div>
            {currentSyllabus.subjects.map((subj) => {
              const isActive = activeSubjectCat === subj.category;
              return (
                <button
                  key={subj.category}
                  onClick={() => setActiveSubjectCat(subj.category)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer flex items-center space-x-1.5 ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950 ring-2 ring-emerald-400/30'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span>{subj.category}</span>
                </button>
              );
            })}
          </div>

          {/* Active Subject Details */}
          {selectedSubjectData ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column: Aims & Core Competencies */}
              <div className="space-y-5">
                {/* Subject Overview Card */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
                  <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-emerald-400" />
                    Syllabus Aims
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {selectedSubjectData.aims.map((aim, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{aim}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-slate-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      Key MoPSE Competencies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedSubjectData.keyCompetencies.map((comp, idx) => (
                        <span 
                          key={idx}
                          className="bg-slate-950 border border-slate-800 text-slate-200 text-xs px-2.5 py-1 rounded-lg font-medium"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5">
                    <button
                      onClick={() => onSelectSubjectForLesson(selectedSubjectData.category)}
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition cursor-pointer shadow-lg shadow-emerald-950"
                    >
                      <span>Start {selectedSubjectData.category} Topic Lessons</span>
                      <BookOpen className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Topics & Heritage Integration */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-lg font-bold text-slate-100 flex items-center justify-between">
                  <span>Core Syllabus Topics for {selectedSubjectData.category}</span>
                  <span className="text-xs text-emerald-400 font-normal">
                    {selectedSubjectData.topics.length} Syllabus Modules
                  </span>
                </h3>

                <div className="space-y-4">
                  {selectedSubjectData.topics.map((topic, idx) => (
                    <div 
                      key={idx}
                      className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition shadow-lg space-y-3"
                    >
                      <div className="flex items-start justify-between gap-3 border-b border-slate-800/80 pb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-xl bg-emerald-950 text-emerald-400 font-black text-xs flex items-center justify-center border border-emerald-800">
                            {idx + 1}
                          </div>
                          <h4 className="font-bold text-base text-slate-100">
                            {topic.title}
                          </h4>
                        </div>
                      </div>

                      {/* Subtopics */}
                      <div>
                        <span className="text-xs text-slate-400 font-medium block mb-1.5">Subtopics Covered:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {topic.subtopics.map((sub, sIdx) => (
                            <span key={sIdx} className="bg-slate-950 text-slate-300 text-xs px-2.5 py-1 rounded-md border border-slate-800">
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Learning Objectives */}
                      <div>
                        <span className="text-xs text-slate-400 font-medium block mb-1">Learning Objectives:</span>
                        <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 pl-1">
                          {topic.learningObjectives.map((obj, oIdx) => (
                            <li key={oIdx}>{obj}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Heritage Integration */}
                      {topic.heritageIntegration && (
                        <div className="bg-amber-950/40 border border-amber-800/50 rounded-xl p-3 text-xs text-amber-200 flex items-start space-x-2">
                          <Heart className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-amber-300">Heritage & Unhu Integration: </span>
                            <span>{topic.heritageIntegration}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};
