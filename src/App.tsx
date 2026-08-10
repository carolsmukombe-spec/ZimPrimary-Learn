/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  getLearnerProgress, 
  saveLearnerProgress, 
  updateGrade, 
  markTopicCompleted, 
  saveTestScore 
} from './lib/storage';
import { LearnerProgress, GradeLevel, LanguageOption, SubjectCategory } from './types/curriculum';
import { AndroidFrame } from './components/AndroidFrame';
import { Navbar } from './components/Navbar';
import { GradeSelector } from './components/GradeSelector';
import { SyllabusExplorer } from './components/SyllabusExplorer';
import { LessonViewer } from './components/LessonViewer';
import { EncyclopediaView } from './components/EncyclopediaView';
import { ProjectHub } from './components/ProjectHub';
import { TestBankView } from './components/TestBankView';
import { ConceptMasterTutor } from './components/ConceptMasterTutor';
import { ProgressTracker } from './components/ProgressTracker';
import { LearnerProfileModal } from './components/LearnerProfileModal';

export default function App() {
  const [progress, setProgress] = useState<LearnerProgress>(() => getLearnerProgress());
  const [activeTab, setActiveTab] = useState<string>('syllabus');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<SubjectCategory | undefined>(undefined);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

  useEffect(() => {
    saveLearnerProgress(progress);
  }, [progress]);

  const handleSelectGrade = (newGrade: GradeLevel) => {
    const updated = updateGrade(newGrade);
    setProgress(updated);
  };

  const handleSelectSubject = (subject: SubjectCategory) => {
    setSelectedSubjectFilter(subject);
    setActiveTab('syllabus');
  };

  const handleSaveProfile = (name: string, grade: GradeLevel, language: LanguageOption) => {
    const updated = {
      ...progress,
      learnerName: name,
      grade: grade,
      primaryLanguage: language
    };
    saveLearnerProgress(updated);
    setProgress(updated);
  };

  const handleCompleteTopicLesson = (topicId: string, subject: SubjectCategory) => {
    const updated = markTopicCompleted(topicId, subject);
    setProgress(updated);
  };

  const handleSaveTestScore = (testId: string, score: number, total: number, subject: SubjectCategory) => {
    const updated = saveTestScore(testId, score, total, subject);
    setProgress(updated);
  };

  const handleUpdateProjectStatus = (projectId: string, status: 'not_started' | 'in_progress' | 'completed') => {
    const updated = {
      ...progress,
      projectStatus: {
        ...progress.projectStatus,
        [projectId]: status
      }
    };
    saveLearnerProgress(updated);
    setProgress(updated);
  };

  return (
    <AndroidFrame
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      learnerName={progress.learnerName}
      grade={progress.grade}
    >
      <div className="flex-1 flex flex-col bg-slate-950 text-slate-100 font-sans">
        {/* Navigation Bar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          grade={progress.grade}
          learnerName={progress.learnerName}
          primaryLanguage={progress.primaryLanguage}
          streakDays={progress.streakDays}
          unlockedBadgeCount={progress.unlockedBadgeIds.length}
          onOpenProfileModal={() => setIsProfileModalOpen(true)}
        />

        {/* Main Workspace Container */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
          {/* Top Standalone Grade & Subject Selector */}
          <GradeSelector
            selectedGrade={progress.grade}
            onSelectGrade={handleSelectGrade}
            selectedSubject={selectedSubjectFilter}
            onSelectSubject={handleSelectSubject}
          />

          {/* TAB 1: SYLLABUS EXPLORER */}
          {activeTab === 'syllabus' && (
            <SyllabusExplorer
              selectedGrade={progress.grade}
              onSelectSubjectForLesson={(subject) => {
                setSelectedSubjectFilter(subject);
                setActiveTab('lessons');
              }}
            />
          )}

          {/* TAB 2: TOPIC LESSONS */}
          {activeTab === 'lessons' && (
            <LessonViewer
              grade={progress.grade}
              selectedSubjectFilter={selectedSubjectFilter}
              onCompleteTopicLesson={handleCompleteTopicLesson}
              onSaveTestScore={handleSaveTestScore}
              completedTopicIds={progress.completedTopicIds}
            />
          )}

          {/* TAB 3: ZIMPRIMARY ENCYCLOPEDIA */}
          {activeTab === 'encyclopedia' && (
            <EncyclopediaView
              onAskAiTutor={() => {
                setActiveTab('ai-tutor');
              }}
            />
          )}

          {/* TAB 3: CALA SCHOOL PROJECTS */}
          {activeTab === 'projects' && (
            <ProjectHub
              grade={progress.grade}
              projectStatus={progress.projectStatus}
              onUpdateProjectStatus={handleUpdateProjectStatus}
            />
          )}

          {/* TAB 4: TEST BANK & EXAM SIMULATOR */}
          {activeTab === 'testbank' && (
            <TestBankView
              grade={progress.grade}
              onSaveTestScore={handleSaveTestScore}
            />
          )}

          {/* TAB 5: CONCEPT MASTER AI TUTOR */}
          {activeTab === 'ai-tutor' && (
            <ConceptMasterTutor
              grade={progress.grade}
              primaryLanguage={progress.primaryLanguage}
            />
          )}

          {/* TAB 6: PROGRESS TRACKER & REPORT CARD */}
          {activeTab === 'progress' && (
            <ProgressTracker progress={progress} />
          )}
        </main>

        {/* Learner Profile Modal */}
        <LearnerProfileModal
          isOpen={isProfileModalOpen}
          onClose={() => setIsProfileModalOpen(false)}
          currentName={progress.learnerName}
          currentGrade={progress.grade}
          currentLanguage={progress.primaryLanguage}
          onSaveProfile={handleSaveProfile}
        />
      </div>
    </AndroidFrame>
  );
}
