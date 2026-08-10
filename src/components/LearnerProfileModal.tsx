import React, { useState } from 'react';
import { GradeLevel, LanguageOption } from '../types/curriculum';
import { User, X, Check, Globe2, Sparkles, GraduationCap } from 'lucide-react';

interface LearnerProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentName: string;
  currentGrade: GradeLevel;
  currentLanguage: LanguageOption;
  onSaveProfile: (name: string, grade: GradeLevel, language: LanguageOption) => void;
}

const GRADES_LIST: GradeLevel[] = [
  'ECD A', 'ECD B', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7'
];

const LANGUAGES_LIST: LanguageOption[] = [
  'Shona', 'Ndebele', 'Kalanga', 'Tonga', 'Shangani', 'Venda'
];

export const LearnerProfileModal: React.FC<LearnerProfileModalProps> = ({
  isOpen,
  onClose,
  currentName,
  currentGrade,
  currentLanguage,
  onSaveProfile
}) => {
  const [nameInput, setNameInput] = useState(currentName);
  const [gradeInput, setGradeInput] = useState<GradeLevel>(currentGrade);
  const [languageInput, setLanguageInput] = useState<LanguageOption>(currentLanguage);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      onSaveProfile(nameInput.trim(), gradeInput, languageInput);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl space-y-5 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 border-b border-slate-800 pb-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center text-lg">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">Learner Profile Settings</h3>
            <p className="text-xs text-slate-400">Manage grade, name, and indigenous language preference</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">Learner's Name:</label>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">Grade Level (ECD A to Grade 7):</label>
            <div className="grid grid-cols-3 gap-2">
              {GRADES_LIST.map((g) => (
                <button
                  type="button"
                  key={g}
                  onClick={() => setGradeInput(g)}
                  className={`p-2 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                    gradeInput === g
                      ? 'bg-emerald-600 border-emerald-500 text-white shadow'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">Primary Indigenous Language:</label>
            <div className="grid grid-cols-3 gap-2">
              {LANGUAGES_LIST.map((lang) => (
                <button
                  type="button"
                  key={lang}
                  onClick={() => setLanguageInput(lang)}
                  className={`p-2 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                    languageInput === lang
                      ? 'bg-amber-600 border-amber-500 text-white shadow'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center space-x-2 transition cursor-pointer shadow-lg shadow-emerald-950"
            >
              <Check className="w-4 h-4" />
              <span>Save Learner Profile</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
