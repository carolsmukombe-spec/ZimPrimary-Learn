import React, { useState } from 'react';
import { TopicLesson, ExerciseQuestion, GradeLevel, SubjectCategory } from '../types/curriculum';
import { SAMPLE_LESSONS } from '../data/lessons';
import confetti from 'canvas-confetti';
import { 
  BookOpen, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Sparkles, 
  Clock, 
  Award, 
  ArrowRight, 
  RotateCcw,
  Check,
  ChevronRight,
  Layers,
  MapPin,
  Flame,
  Package
} from 'lucide-react';

interface LessonViewerProps {
  grade: GradeLevel;
  selectedSubjectFilter?: SubjectCategory;
  onCompleteTopicLesson: (topicId: string, subject: SubjectCategory) => void;
  onSaveTestScore: (testId: string, score: number, total: number, subject: SubjectCategory) => void;
  completedTopicIds: string[];
}

export const LessonViewer: React.FC<LessonViewerProps> = ({
  grade,
  selectedSubjectFilter,
  onCompleteTopicLesson,
  onSaveTestScore,
  completedTopicIds
}) => {
  // Filter lessons matching grade or provide default
  const gradeLessons = SAMPLE_LESSONS.filter(l => l.grade === grade);
  const lessonsToDisplay = selectedSubjectFilter
    ? gradeLessons.filter(l => l.subject === selectedSubjectFilter)
    : gradeLessons;

  const [activeLesson, setActiveLesson] = useState<TopicLesson>(
    lessonsToDisplay[0] || SAMPLE_LESSONS[0]
  );

  const [lessonMode, setLessonMode] = useState<'study' | 'exercise' | 'test' | 'test-results'>('study');
  
  // Exercise state
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<string, number>>({});
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});

  // Test state
  const [testAnswers, setTestAnswers] = useState<Record<string, number>>({});
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [testScore, setTestScore] = useState(0);

  // Speech Synthesizer
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeakText = (text: string) => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleExerciseSelect = (questionId: string, optionIndex: number) => {
    setExerciseAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleTestSelect = (questionId: string, optionIndex: number) => {
    setTestAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmitTest = () => {
    let score = 0;
    const questions = activeLesson.endOfTopicTest.questions;
    questions.forEach(q => {
      if (testAnswers[q.id] === q.correctAnswerIndex) {
        score++;
      }
    });

    setTestScore(score);
    setTestSubmitted(true);
    setLessonMode('test-results');

    // Save score in local storage
    onSaveTestScore(activeLesson.id, score, questions.length, activeLesson.subject);
    onCompleteTopicLesson(activeLesson.id, activeLesson.subject);

    // Confetti celebration if 75%+
    if ((score / questions.length) >= 0.75) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const isCompleted = completedTopicIds.includes(activeLesson.id);

  return (
    <div className="space-y-6">
      {/* Lesson Navigation Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-lg">
        <div className="flex items-center space-x-2 overflow-x-auto max-w-full pb-1 scrollbar-none">
          <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider shrink-0 mr-1">
            Topic Lessons ({grade}):
          </span>
          {SAMPLE_LESSONS.map(l => {
            const isCurrent = l.id === activeLesson.id;
            const isDone = completedTopicIds.includes(l.id);
            return (
              <button
                key={l.id}
                onClick={() => {
                  setActiveLesson(l);
                  setLessonMode('study');
                  setExerciseAnswers({});
                  setTestAnswers({});
                  setTestSubmitted(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap flex items-center space-x-1.5 transition cursor-pointer ${
                  isCurrent
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                <span>{l.title.split('&')[0]}</span>
                <span className="text-[10px] opacity-75">({l.grade})</span>
              </button>
            );
          })}
        </div>

        {/* View Mode Switches */}
        <div className="flex items-center space-x-1.5 bg-slate-950 border border-slate-800 p-1 rounded-xl text-xs font-medium">
          <button
            onClick={() => setLessonMode('study')}
            className={`px-3 py-1 rounded-lg transition cursor-pointer ${
              lessonMode === 'study' ? 'bg-slate-800 text-emerald-400 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            1. Lesson Notes
          </button>
          <button
            onClick={() => setLessonMode('exercise')}
            className={`px-3 py-1 rounded-lg transition cursor-pointer ${
              lessonMode === 'exercise' ? 'bg-slate-800 text-emerald-400 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            2. Exercise
          </button>
          <button
            onClick={() => setLessonMode('test')}
            className={`px-3 py-1 rounded-lg transition cursor-pointer ${
              lessonMode === 'test' || lessonMode === 'test-results' ? 'bg-slate-800 text-amber-400 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            3. End-of-Topic Test
          </button>
        </div>
      </div>

      {/* Lesson Meta Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center space-x-2">
              <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                {activeLesson.subject}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {activeLesson.grade}
              </span>
              <span className="text-xs text-slate-500">•</span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {activeLesson.estimatedMinutes} mins
              </span>
              {isCompleted && (
                <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Check className="w-3 h-3" /> Topic Completed
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {activeLesson.title}
            </h2>

            {/* Objectives */}
            <div className="mt-3">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">
                Learning Objectives:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                {activeLesson.objectives.map((obj, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Voice Read Aloud Button */}
          <button
            onClick={() => handleSpeakText(`${activeLesson.title}. ${activeLesson.contentSections.map(s => s.body).join(' ')}`)}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition cursor-pointer shadow-md ${
              isSpeaking
                ? 'bg-amber-600 border-amber-500 text-white animate-pulse'
                : 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
            }`}
          >
            <Volume2 className="w-4 h-4 text-emerald-400" />
            <span>{isSpeaking ? 'Stop Audio' : 'Listen to Lesson'}</span>
          </button>
        </div>
      </div>

      {/* MODE 1: STUDY LESSON CONTENT */}
      {lessonMode === 'study' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Sections */}
          <div className="lg:col-span-2 space-y-6">
            {activeLesson.contentSections.map((section, idx) => (
              <div 
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-lg"
              >
                <h3 className="text-lg font-bold text-slate-100 border-b border-slate-800 pb-2">
                  {section.heading}
                </h3>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {section.body}
                </p>

                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2 text-xs sm:text-sm text-slate-300">
                    {section.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Local Context Box */}
                {section.localContextNote && (
                  <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-xl p-3.5 text-xs text-emerald-200 flex items-start space-x-2.5">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-emerald-300">Zimbabwe Community Example: </span>
                      <span>{section.localContextNote}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Bottom Proceed Button */}
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setLessonMode('exercise')}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center space-x-2 transition cursor-pointer shadow-lg shadow-emerald-950"
              >
                <span>Proceed to Practice Exercise</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Sidebar: Key Vocabulary & Language Terms */}
          <div className="space-y-5">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Key Vocabulary & Terms
              </h3>

              <div className="space-y-3">
                {activeLesson.keyVocabulary.map((vocab, vIdx) => (
                  <div key={vIdx} className="bg-slate-950 border border-slate-800/80 rounded-xl p-3 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-emerald-300">{vocab.word}</span>
                      {vocab.localTerm && (
                        <span className="text-[10px] bg-amber-950 text-amber-300 border border-amber-800 px-2 py-0.5 rounded font-mono">
                          {vocab.localTerm}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-300">{vocab.definition}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Syllabus Teaching Resources Box */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
              <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                <Package className="w-4 h-4 text-emerald-400" />
                <span>MoPSE Required Syllabus Materials</span>
              </h3>
              <p className="text-xs text-slate-400 leading-snug">
                Syllabus resources recommended by MoPSE for teaching {activeLesson.subject}:
              </p>
              <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-3 text-xs space-y-2 text-slate-300">
                <div className="flex items-center space-x-2 text-emerald-300 font-semibold">
                  <span>•</span>
                  <span>Concrete counters & local specimens</span>
                </div>
                <div className="flex items-center space-x-2 text-emerald-300 font-semibold">
                  <span>•</span>
                  <span>MoPSE Approved Heritage Textbook Reader</span>
                </div>
                <div className="flex items-center space-x-2 text-emerald-300 font-semibold">
                  <span>•</span>
                  <span>CALA Practical Exercise Workbook</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: PRACTICE EXERCISE */}
      {lessonMode === 'exercise' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-6">
          <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-400" />
                Topic Practice Exercise
              </h3>
              <p className="text-xs text-slate-400">
                Answer the practice questions below. Instant feedback is provided for each option!
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {activeLesson.exercise.map((q, idx) => {
              const selectedOpt = exerciseAnswers[q.id];
              const isAnswered = selectedOpt !== undefined;
              const isCorrect = selectedOpt === q.correctAnswerIndex;

              return (
                <div key={q.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-bold text-base text-slate-100">
                      <span className="text-emerald-400 font-black mr-2">Q{idx + 1}.</span>
                      {q.question}
                    </h4>

                    {/* Hint Toggle */}
                    {q.hint && (
                      <button
                        onClick={() => setShowHints(prev => ({ ...prev, [q.id]: !prev[q.id] }))}
                        className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 shrink-0 bg-amber-950/40 border border-amber-800/60 px-2.5 py-1 rounded-lg cursor-pointer"
                      >
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>{showHints[q.id] ? 'Hide Hint' : 'Show Hint'}</span>
                      </button>
                    )}
                  </div>

                  {/* Hint Box */}
                  {showHints[q.id] && (
                    <div className="bg-amber-950/40 border border-amber-800/50 p-3 rounded-xl text-xs text-amber-200">
                      <span className="font-bold">Teacher Hint: </span>{q.hint}
                    </div>
                  )}

                  {/* Options List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((optionText, oIdx) => {
                      const isThisSelected = selectedOpt === oIdx;
                      let btnStyle = 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800/80';

                      if (isAnswered) {
                        if (oIdx === q.correctAnswerIndex) {
                          btnStyle = 'bg-emerald-950 border-emerald-600 text-emerald-200 font-bold';
                        } else if (isThisSelected && !isCorrect) {
                          btnStyle = 'bg-rose-950 border-rose-600 text-rose-200';
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleExerciseSelect(q.id, oIdx)}
                          className={`p-3.5 rounded-xl border text-xs sm:text-sm text-left transition cursor-pointer flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{optionText}</span>
                          {isAnswered && oIdx === q.correctAnswerIndex && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                          )}
                          {isAnswered && isThisSelected && !isCorrect && (
                            <XCircle className="w-4 h-4 text-rose-400 shrink-0 ml-2" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation Box when Answered */}
                  {isAnswered && (
                    <div className={`p-3.5 rounded-xl text-xs sm:text-sm ${
                      isCorrect ? 'bg-emerald-950/60 border border-emerald-800 text-emerald-200' : 'bg-slate-900 border border-slate-800 text-slate-300'
                    }`}>
                      <span className="font-bold block mb-1">
                        {isCorrect ? 'Correct! Makorokoto!' : 'Explanation:'}
                      </span>
                      <span>{q.explanation}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-slate-800">
            <button
              onClick={() => setLessonMode('study')}
              className="text-xs text-slate-400 hover:text-slate-200 underline cursor-pointer"
            >
              Back to Lesson Notes
            </button>

            <button
              onClick={() => setLessonMode('test')}
              className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2.5 rounded-xl font-bold text-xs flex items-center space-x-2 transition cursor-pointer shadow-lg shadow-amber-950"
            >
              <span>Take End-of-Topic Test</span>
              <Award className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* MODE 3: END-OF-TOPIC TEST */}
      {lessonMode === 'test' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-6">
          <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">End-of-Topic MoPSE Test</span>
              <h3 className="text-xl font-bold text-slate-100">
                {activeLesson.endOfTopicTest.testTitle}
              </h3>
            </div>

            <div className="bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-xl text-xs text-amber-300 font-mono flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>{activeLesson.endOfTopicTest.timeLimitMinutes} mins limit</span>
            </div>
          </div>

          <div className="space-y-6">
            {activeLesson.endOfTopicTest.questions.map((q, idx) => {
              const selectedOpt = testAnswers[q.id];

              return (
                <div key={q.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <h4 className="font-bold text-sm sm:text-base text-slate-100">
                    <span className="text-amber-400 font-black mr-2">Q{idx + 1}.</span>
                    {q.question}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((optText, oIdx) => {
                      const isSelected = selectedOpt === oIdx;
                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleTestSelect(q.id, oIdx)}
                          className={`p-3 rounded-xl border text-xs sm:text-sm text-left transition cursor-pointer ${
                            isSelected
                              ? 'bg-amber-600/30 border-amber-500 text-white font-bold ring-2 ring-amber-500/50'
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          <span>{optText}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-slate-800">
            <button
              onClick={() => setLessonMode('exercise')}
              className="text-xs text-slate-400 hover:text-slate-200 underline cursor-pointer"
            >
              Back to Practice Exercise
            </button>

            <button
              onClick={handleSubmitTest}
              disabled={Object.keys(testAnswers).length < activeLesson.endOfTopicTest.questions.length}
              className={`px-6 py-3 rounded-xl font-bold text-xs flex items-center space-x-2 transition cursor-pointer shadow-lg ${
                Object.keys(testAnswers).length === activeLesson.endOfTopicTest.questions.length
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              <span>Submit & Grade Test</span>
              <Check className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* MODE 4: TEST RESULTS & SCORE ANALYSIS */}
      {lessonMode === 'test-results' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-center space-y-6 shadow-2xl">
          <div className="w-20 h-20 rounded-full bg-emerald-950 border-2 border-emerald-500 mx-auto flex items-center justify-center shadow-xl">
            <Award className="w-10 h-10 text-emerald-400" />
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-white">
              Test Completed! Makorokoto!
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              {activeLesson.endOfTopicTest.testTitle}
            </p>
          </div>

          <div className="inline-block bg-slate-950 border border-slate-800 rounded-2xl p-6 min-w-[220px]">
            <span className="text-xs text-slate-400 font-semibold block uppercase">Your Score</span>
            <span className="text-4xl font-black text-emerald-400">
              {testScore} / {activeLesson.endOfTopicTest.questions.length}
            </span>
            <span className="text-xs text-slate-400 block mt-1 font-bold">
              {Math.round((testScore / activeLesson.endOfTopicTest.questions.length) * 100)}% Grade
            </span>
          </div>

          <div className="flex justify-center space-x-3">
            <button
              onClick={() => {
                setTestAnswers({});
                setTestSubmitted(false);
                setLessonMode('test');
              }}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-5 py-2.5 rounded-xl font-bold text-xs flex items-center space-x-2 cursor-pointer transition"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Test</span>
            </button>

            <button
              onClick={() => setLessonMode('study')}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-xl font-bold text-xs flex items-center space-x-2 cursor-pointer transition shadow-lg shadow-emerald-950"
            >
              <span>Back to Lesson Notes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
