import React, { useState } from 'react';
import { ProjectGuide, GradeLevel } from '../types/curriculum';
import { SAMPLE_PROJECTS } from '../data/projects';
import { 
  FolderGit2, 
  CheckSquare, 
  Sparkles, 
  Send, 
  FileCheck2, 
  ListChecks, 
  Layers, 
  Loader2, 
  AlertCircle,
  Clock,
  ShieldAlert
} from 'lucide-react';

interface ProjectHubProps {
  grade: GradeLevel;
  projectStatus: Record<string, 'not_started' | 'in_progress' | 'completed'>;
  onUpdateProjectStatus: (projectId: string, status: 'not_started' | 'in_progress' | 'completed') => void;
}

export const ProjectHub: React.FC<ProjectHubProps> = ({
  grade,
  projectStatus,
  onUpdateProjectStatus
}) => {
  const gradeProjects = SAMPLE_PROJECTS.filter(p => p.grade === grade);
  const projectsToDisplay = gradeProjects.length > 0 ? gradeProjects : SAMPLE_PROJECTS;

  const [activeProject, setActiveProject] = useState<ProjectGuide>(
    projectsToDisplay[0] || SAMPLE_PROJECTS[0]
  );

  // AI Project Assistant State
  const [userIdeaInput, setUserIdeaInput] = useState('');
  const [aiGuideResult, setAiGuideResult] = useState<any | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const handleAskAiAssistant = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAiLoading(true);
    setAiError(null);

    try {
      const res = await fetch('/api/project/assist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          grade,
          subject: activeProject.subject,
          projectTitle: activeProject.title,
          userIdea: userIdeaInput || 'How do I start and gather local materials?'
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setAiGuideResult(data.projectGuide);
      } else {
        setAiError(data.error || 'Could not fetch AI project advice.');
      }
    } catch (err: any) {
      setAiError('Network issue connecting to Teacher Chipo Project AI.');
    } finally {
      setIsAiLoading(false);
    }
  };

  const currentStatus = projectStatus[activeProject.id] || 'not_started';

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-slate-900 border border-amber-800/60 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">
              <span>School Based Continuous Assessment (CALA / Projects)</span>
              <span>•</span>
              <span>{grade}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Heritage & School Project Guides
            </h2>
            <p className="text-sm text-slate-300 max-w-3xl mt-1 leading-relaxed">
              Practical hands-on projects for every subject and grade using local Zimbabwean materials. Build, research, and present!
            </p>
          </div>

          <div className="bg-slate-950/80 border border-amber-700/60 p-3 rounded-xl text-center min-w-[140px]">
            <span className="text-xs text-slate-400 font-medium block">Projects Available</span>
            <span className="text-2xl font-black text-amber-400">{projectsToDisplay.length} Guides</span>
          </div>
        </div>
      </div>

      {/* Project Selector Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
        {SAMPLE_PROJECTS.map((proj) => {
          const isSelected = proj.id === activeProject.id;
          const status = projectStatus[proj.id] || 'not_started';

          return (
            <button
              key={proj.id}
              onClick={() => {
                setActiveProject(proj);
                setAiGuideResult(null);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap flex items-center space-x-2 transition cursor-pointer ${
                isSelected
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <FolderGit2 className="w-4 h-4 text-amber-300" />
              <span>{proj.title}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                status === 'completed' ? 'bg-emerald-950 text-emerald-300' :
                status === 'in_progress' ? 'bg-amber-950 text-amber-300' : 'bg-slate-800 text-slate-400'
              }`}>
                {status === 'completed' ? 'Done' : status === 'in_progress' ? 'Active' : 'New'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Overview, Steps, Rubric */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-5 shadow-xl">
            {/* Title & Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  {activeProject.subject} • {activeProject.grade} ({activeProject.term})
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mt-0.5">
                  {activeProject.title}
                </h3>
              </div>

              {/* Status Toggle Button */}
              <div className="flex items-center space-x-2">
                <select
                  value={currentStatus}
                  onChange={(e) => onUpdateProjectStatus(activeProject.id, e.target.value as any)}
                  className="bg-slate-950 border border-amber-800/80 text-amber-300 text-xs font-bold px-3 py-2 rounded-xl cursor-pointer"
                >
                  <option value="not_started">Status: Not Started</option>
                  <option value="in_progress">Status: In Progress</option>
                  <option value="completed">Status: Completed ✓</option>
                </select>
              </div>
            </div>

            {/* Competency Focus */}
            <div className="bg-amber-950/30 border border-amber-800/40 rounded-xl p-3.5 text-xs text-amber-200">
              <span className="font-bold text-amber-300">MoPSE Competency Focus: </span>
              <span>{activeProject.competencyFocus}</span>
            </div>

            {/* Local Materials Needed */}
            <div>
              <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2 mb-2">
                <ListChecks className="w-4 h-4 text-amber-400" />
                Local Materials Needed:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {activeProject.materialsNeeded.map((mat, idx) => (
                  <li key={idx} className="bg-slate-950 border border-slate-800 p-2.5 rounded-xl flex items-center space-x-2">
                    <CheckSquare className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step-by-Step Action Plan */}
            <div>
              <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-emerald-400" />
                Step-by-Step Action Plan:
              </h4>

              <div className="space-y-3">
                {activeProject.steps.map((step) => (
                  <div key={step.stepNumber} className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400">
                        Step {step.stepNumber}: {step.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">{step.description}</p>
                    <div className="text-[11px] bg-slate-900 border border-slate-800 p-2 rounded text-slate-400 font-mono">
                      <span className="font-bold text-amber-400">Deliverable: </span>
                      {step.expectedDeliverable}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assessment Rubric */}
            <div>
              <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2 mb-2">
                <FileCheck2 className="w-4 h-4 text-amber-400" />
                CALA Marking Rubric Breakdown:
              </h4>
              <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden text-xs">
                {activeProject.assessmentRubric.map((item, idx) => (
                  <div key={idx} className="flex justify-between p-3 border-b border-slate-800/80 last:border-0 text-slate-300">
                    <span>{item.criteria}</span>
                    <span className="font-bold text-amber-400">{item.maxMarks} Marks</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Project Assistant */}
        <div className="space-y-5">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Teacher Chipo AI Project Assistant
            </h3>
            <p className="text-xs text-slate-400">
              Need help customizing your project, finding local substitute materials in your town, or structuring your presentation? Ask Gemini AI!
            </p>

            <form onSubmit={handleAskAiAssistant} className="space-y-3">
              <textarea
                value={userIdeaInput}
                onChange={(e) => setUserIdeaInput(e.target.value)}
                placeholder="e.g. How do I make the solar heater using a juice box instead? Or list presentation tips in Shona/Ndebele."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 min-h-[90px]"
              />

              <button
                type="submit"
                disabled={isAiLoading}
                className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center space-x-2 transition cursor-pointer shadow-lg shadow-amber-950"
              >
                {isAiLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Asking Teacher Chipo...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Get AI Project Guidance</span>
                  </>
                )}
              </button>
            </form>

            {aiError && (
              <div className="bg-rose-950/60 border border-rose-800 p-3 rounded-xl text-xs text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{aiError}</span>
              </div>
            )}

            {/* AI Custom Output */}
            {aiGuideResult && (
              <div className="bg-slate-950 border border-amber-800/60 rounded-xl p-4 space-y-3 text-xs text-slate-200">
                <div className="font-bold text-amber-300 flex items-center gap-1.5 border-b border-slate-800 pb-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>AI Custom Project Guidance</span>
                </div>

                <p className="text-slate-300">{aiGuideResult.projectOverview}</p>

                {aiGuideResult.materialsNeeded && (
                  <div>
                    <span className="font-bold text-amber-400 block mb-1">Local Material Suggestions:</span>
                    <ul className="list-disc list-inside space-y-1 text-slate-300">
                      {aiGuideResult.materialsNeeded.map((m: string, i: number) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {aiGuideResult.presentationTips && (
                  <div>
                    <span className="font-bold text-emerald-400 block mb-1">Presentation Tips:</span>
                    <ul className="list-disc list-inside space-y-1 text-slate-300">
                      {aiGuideResult.presentationTips.map((tip: string, i: number) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
