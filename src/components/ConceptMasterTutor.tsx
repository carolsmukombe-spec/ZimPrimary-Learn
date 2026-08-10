import React, { useState } from 'react';
import { GradeLevel, LanguageOption, SubjectCategory } from '../types/curriculum';
import { 
  Sparkles, 
  Send, 
  Loader2, 
  CheckCircle2, 
  HelpCircle, 
  BookOpen, 
  MapPin, 
  Volume2, 
  Zap,
  Heart,
  AlertCircle
} from 'lucide-react';

interface ConceptMasterTutorProps {
  grade: GradeLevel;
  primaryLanguage: LanguageOption;
}

export const ConceptMasterTutor: React.FC<ConceptMasterTutorProps> = ({
  grade,
  primaryLanguage
}) => {
  const [subject, setSubject] = useState<SubjectCategory>('Mathematics');
  const [topicInput, setTopicInput] = useState('');
  const [questionInput, setQuestionInput] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [guideResult, setGuideResult] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Quick Check Answer state
  const [userQuickCheckAnswer, setUserQuickCheckAnswer] = useState<number | null>(null);

  const handleAskTeacherChipo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionInput.trim()) return;

    setIsLoading(true);
    setErrorMessage(null);
    setUserQuickCheckAnswer(null);

    try {
      const res = await fetch('/api/tutor/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grade,
          subject,
          topic: topicInput || 'General Concept',
          question: questionInput,
          languagePreference: `${primaryLanguage} and English`
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setGuideResult(data.data);
      } else {
        setErrorMessage(data.error || 'Could not fetch concept explanation.');
      }
    } catch (err: any) {
      setErrorMessage('Network connection error. Please check your internet connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const samplePrompts = [
    { subject: 'Mathematics', q: 'How do I divide fractions like 1/2 ÷ 1/4?' },
    { subject: 'Science & Technology', q: 'Explain photosynthesis simply using trees in Zimbabwe.' },
    { subject: 'Heritage & Social Studies', q: 'Why was Great Zimbabwe built without mortar?' },
    { subject: 'Indigenous Languages', q: 'Explain the Shona proverb: "Kure kwegava ndokusina mutsubvu".' }
  ];

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-slate-900 border border-teal-800/60 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs text-teal-400 font-semibold uppercase tracking-wider mb-1">
              <span>Teacher Chipo (Mfundisi Ndlovu) • AI Concept Master</span>
              <span>•</span>
              <span>{grade}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Step-by-Step Concept Master
            </h2>
            <p className="text-sm text-slate-300 max-w-3xl mt-1 leading-relaxed">
              Stuck on a tricky math problem or science topic? Teacher Chipo breaks down any Zimbabwean primary school concept into 4 simple steps with local examples!
            </p>
          </div>

          <div className="bg-slate-950/80 border border-teal-700/60 p-3 rounded-xl text-center min-w-[140px]">
            <span className="text-xs text-slate-400 font-medium block">AI Model Active</span>
            <span className="text-sm font-bold text-teal-400">Gemini 3.6 Flash</span>
          </div>
        </div>
      </div>

      {/* Input Form & Sample Prompts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Question Form */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl">
          <form onSubmit={handleAskTeacherChipo} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Learning Area:</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value as SubjectCategory)}
                  className="w-full bg-slate-950 border border-slate-800 text-xs text-slate-200 p-2.5 rounded-xl focus:border-teal-500 focus:outline-none"
                >
                  <option value="Mathematics">Mathematics</option>
                  <option value="English Language">English Language</option>
                  <option value="Indigenous Languages">Indigenous Languages (Shona/Ndebele)</option>
                  <option value="Science & Technology">Science & Technology</option>
                  <option value="Heritage & Social Studies">Heritage & Social Studies</option>
                  <option value="Agriculture & Food Tech">Agriculture & Food Tech</option>
                  <option value="Visual & Performing Arts">Visual & Performing Arts</option>
                  <option value="PESMD">Physical Education (PESMD)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Topic Name (Optional):</label>
                <input
                  type="text"
                  value={topicInput}
                  onChange={(e) => setTopicInput(e.target.value)}
                  placeholder="e.g. Fractions, Circulatory System, Tsumo"
                  className="w-full bg-slate-950 border border-slate-800 text-xs text-slate-200 p-2.5 rounded-xl focus:border-teal-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">What concept or homework question do you want explained step-by-step?</label>
              <textarea
                value={questionInput}
                onChange={(e) => setQuestionInput(e.target.value)}
                placeholder="e.g. How do I calculate the area of a rectangle with length 12m and width 5m? Or explain how rain forms in Kariba."
                required
                className="w-full bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 p-3 rounded-xl focus:border-teal-500 focus:outline-none min-h-[100px]"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition cursor-pointer shadow-lg shadow-teal-950"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Teacher Chipo is preparing your 4-step guide...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Explain Step-by-Step with Local Examples</span>
                </>
              )}
            </button>
          </form>

          {errorMessage && (
            <div className="bg-rose-950/60 border border-rose-800 p-3.5 rounded-xl text-xs text-rose-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}
        </div>

        {/* Right Column: Sample Questions */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-3">
          <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            Try Asking Teacher Chipo:
          </h4>

          <div className="space-y-2">
            {samplePrompts.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSubject(item.subject as SubjectCategory);
                  setQuestionInput(item.q);
                }}
                className="w-full text-left bg-slate-950 hover:bg-slate-800/80 border border-slate-800 p-3 rounded-xl text-xs text-slate-300 transition cursor-pointer"
              >
                <span className="font-bold text-teal-400 block mb-0.5">{item.subject}</span>
                <span>"{item.q}"</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Guide Breakdown Result */}
      {guideResult && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 space-y-6 shadow-2xl">
          <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-teal-950 border border-teal-500 text-teal-300 font-bold flex items-center justify-center">
                TC
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100">Teacher Chipo's Step-by-Step Breakdown</h3>
                <span className="text-xs text-teal-400">{grade} • {subject}</span>
              </div>
            </div>
          </div>

          {/* 1. Summary */}
          {guideResult.summary && (
            <div className="bg-teal-950/40 border border-teal-800/60 p-4 rounded-xl text-sm text-teal-200">
              <span className="font-bold text-teal-300 block mb-1">Teacher Summary:</span>
              <p>{guideResult.summary}</p>
            </div>
          )}

          {/* 2. Step-by-Step Cards */}
          {guideResult.steps && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                Step-by-Step Action Steps:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {guideResult.steps.map((step: any, sIdx: number) => (
                  <div key={sIdx} className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="w-6 h-6 rounded-lg bg-teal-950 text-teal-400 border border-teal-800 font-black text-xs flex items-center justify-center">
                        {sIdx + 1}
                      </span>
                      <h5 className="font-bold text-sm text-slate-100">{step.title}</h5>
                    </div>

                    <p className="text-xs text-slate-300">{step.description}</p>

                    {step.localExample && (
                      <div className="bg-slate-900 p-2.5 rounded-lg text-[11px] text-amber-300 border border-amber-900/40 flex items-start gap-1.5">
                        <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span><strong>Local Example: </strong>{step.localExample}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Key Vocabulary */}
          {guideResult.keyVocabulary && guideResult.keyVocabulary.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-2">
                Key Words to Remember:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                {guideResult.keyVocabulary.map((v: any, i: number) => (
                  <div key={i} className="bg-slate-950 border border-slate-800 p-3 rounded-xl">
                    <span className="font-bold text-teal-300 block">{v.word}</span>
                    <span className="text-slate-300">{v.definition}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Quick Understanding Check */}
          {guideResult.quickCheck && (
            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                Quick Understanding Check:
              </span>
              <p className="text-sm font-bold text-slate-100">{guideResult.quickCheck.question}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {guideResult.quickCheck.options?.map((opt: string, oIdx: number) => {
                  const isSelected = userQuickCheckAnswer === oIdx;
                  const isCorrect = oIdx === guideResult.quickCheck.correctIndex;

                  let style = 'bg-slate-900 border-slate-800 text-slate-200';
                  if (userQuickCheckAnswer !== null) {
                    if (isCorrect) style = 'bg-emerald-950 border-emerald-600 text-emerald-200 font-bold';
                    else if (isSelected) style = 'bg-rose-950 border-rose-600 text-rose-200';
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => setUserQuickCheckAnswer(oIdx)}
                      className={`p-3 rounded-xl border text-xs text-left transition cursor-pointer ${style}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {userQuickCheckAnswer !== null && (
                <div className="bg-slate-900 p-3 rounded-xl text-xs text-slate-300 border border-slate-800">
                  <span className="font-bold text-teal-400">Explanation: </span>
                  {guideResult.quickCheck.explanation}
                </div>
              )}
            </div>
          )}

          {/* Teacher Encouragement Sign Off */}
          {guideResult.encouragement && (
            <div className="text-center font-bold text-amber-400 text-sm flex items-center justify-center gap-1.5 pt-2">
              <Heart className="w-4 h-4 fill-amber-400" />
              <span>{guideResult.encouragement}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
