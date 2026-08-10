import React, { useRef } from 'react';
import { LearnerProgress } from '../types/curriculum';
import { BADGES } from '../data/badges';
import { 
  BarChart3, 
  Award, 
  CheckCircle2, 
  Flame, 
  Printer, 
  GraduationCap, 
  BookOpen, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

interface ProgressTrackerProps {
  progress: LearnerProgress;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({ progress }) => {
  const reportCardRef = useRef<HTMLDivElement>(null);

  const handlePrintReport = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Top Banner Card */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 border border-emerald-800/60 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white font-black text-2xl flex items-center justify-center shadow-lg border-2 border-emerald-500">
              {progress.learnerName.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center space-x-2 text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-0.5">
                <span>{progress.grade}</span>
                <span>•</span>
                <span>Language: {progress.primaryLanguage}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {progress.learnerName}'s Progress Dashboard
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Tracking MoPSE Competencies, Test Scores & Heritage Project Achievements
              </p>
            </div>
          </div>

          <button
            onClick={handlePrintReport}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center space-x-2 transition cursor-pointer shadow-lg shadow-emerald-950"
          >
            <Printer className="w-4 h-4" />
            <span>Print Learner Report Card</span>
          </button>
        </div>
      </div>

      {/* Stats Quick Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center shadow-lg">
          <Flame className="w-6 h-6 text-amber-500 mx-auto mb-1 animate-pulse" />
          <span className="text-2xl font-black text-amber-400 block">{progress.streakDays} Days</span>
          <span className="text-xs text-slate-400 font-medium">Study Streak</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center shadow-lg">
          <BookOpen className="w-6 h-6 text-emerald-400 mx-auto mb-1" />
          <span className="text-2xl font-black text-emerald-400 block">{progress.completedTopicIds.length} Topics</span>
          <span className="text-xs text-slate-400 font-medium">Completed Lessons</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center shadow-lg">
          <Award className="w-6 h-6 text-teal-400 mx-auto mb-1" />
          <span className="text-2xl font-black text-teal-400 block">{progress.unlockedBadgeIds.length} Badges</span>
          <span className="text-xs text-slate-400 font-medium">Unlocked Achievements</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center shadow-lg">
          <GraduationCap className="w-6 h-6 text-indigo-400 mx-auto mb-1" />
          <span className="text-2xl font-black text-indigo-400 block">
            {Object.keys(progress.testScores).length} Tests
          </span>
          <span className="text-xs text-slate-400 font-medium">Completed Tests</span>
        </div>
      </div>

      {/* Subject Mastery Progress Bars */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl">
        <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-emerald-400" />
          Learning Area Competency Mastery
        </h3>

        <div className="space-y-3">
          {Object.entries(progress.subjectMastery).map(([subject, val]) => (
            <div key={subject} className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-200">
                <span>{subject}</span>
                <span className="text-emerald-400">{val}% Mastery</span>
              </div>
              <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className="bg-gradient-to-r from-emerald-600 to-teal-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${val}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Badges Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl">
        <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-400" />
          Heritage & Academic Badges
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {BADGES.map((badge) => {
            const isUnlocked = progress.unlockedBadgeIds.includes(badge.id);
            return (
              <div 
                key={badge.id}
                className={`p-4 rounded-xl border flex items-start space-x-3 transition ${
                  isUnlocked 
                    ? 'bg-slate-950 border-emerald-500/80 shadow-md' 
                    : 'bg-slate-950/40 border-slate-800/80 opacity-50'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0 ${
                  isUnlocked ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-500'
                }`}>
                  <Award className="w-5 h-5" />
                </div>

                <div className="space-y-0.5">
                  <div className="font-bold text-xs text-slate-100 flex items-center gap-1">
                    {badge.name}
                    {isUnlocked && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                  </div>
                  {badge.titleShona && (
                    <span className="text-[10px] text-amber-400 font-mono block">
                      {badge.titleShona}
                    </span>
                  )}
                  <p className="text-[11px] text-slate-400">{badge.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Printable Learner Progress Report Card */}
      <div 
        ref={reportCardRef}
        className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl print:bg-white print:text-black"
      >
        <div className="border-b border-slate-800 print:border-slate-300 pb-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              Republic of Zimbabwe • Ministry of Primary & Secondary Education
            </span>
            <h3 className="text-2xl font-black text-slate-100 print:text-black">
              Official Learner Progress Report
            </h3>
          </div>
          <div className="text-right text-xs text-slate-400">
            <span>Date: {new Date().toLocaleDateString()}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-slate-900 print:bg-slate-100 p-4 rounded-xl border border-slate-800 print:border-slate-300">
          <div>
            <span className="text-slate-400 font-medium block">Learner Name:</span>
            <span className="font-bold text-slate-100 print:text-black">{progress.learnerName}</span>
          </div>
          <div>
            <span className="text-slate-400 font-medium block">Grade Level:</span>
            <span className="font-bold text-slate-100 print:text-black">{progress.grade}</span>
          </div>
          <div>
            <span className="text-slate-400 font-medium block">Primary Language:</span>
            <span className="font-bold text-slate-100 print:text-black">{progress.primaryLanguage}</span>
          </div>
          <div>
            <span className="text-slate-400 font-medium block">Active Streak:</span>
            <span className="font-bold text-emerald-400">{progress.streakDays} Days</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-slate-200 print:text-black mb-2">Subject Mastery Summary</h4>
          <div className="border border-slate-800 print:border-slate-300 rounded-xl overflow-hidden text-xs">
            {Object.entries(progress.subjectMastery).map(([subject, val]) => (
              <div key={subject} className="flex justify-between p-3 border-b border-slate-800 print:border-slate-200 last:border-0">
                <span className="font-medium text-slate-300 print:text-black">{subject}</span>
                <span className="font-bold text-emerald-400 print:text-black">{val}% Competency</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
