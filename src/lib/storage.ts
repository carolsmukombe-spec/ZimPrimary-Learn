import { LearnerProgress, GradeLevel, LanguageOption, SubjectCategory } from '../types/curriculum';

const STORAGE_KEY = 'zimprimary_learner_progress';

export const DEFAULT_PROGRESS: LearnerProgress = {
  learnerId: 'default-learner-1',
  learnerName: 'Tawana',
  grade: 'Grade 5',
  primaryLanguage: 'Shona',
  avatarSeed: 'tawana-g5',
  streakDays: 3,
  completedTopicIds: ['g5-math-placevalue'],
  testScores: {
    'g5-math-placevalue': { score: 4, total: 4, date: new Date().toISOString() }
  },
  projectStatus: {
    'proj-g5-sci-1': 'in_progress'
  },
  unlockedBadgeIds: ['badge-first-lesson', 'badge-test-master'],
  subjectMastery: {
    'Mathematics': 75,
    'English Language': 60,
    'Science & Technology': 70,
    'Shona / Indigenous Languages': 80,
    'Social Science': 85,
    'Physical Education': 60,
    'Visual & Performing Arts': 50,
    'Agriculture & Food Tech': 65
  },
  lastActiveDate: new Date().toISOString().split('T')[0]
};

export function getLearnerProgress(): LearnerProgress {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(data);
    return { ...DEFAULT_PROGRESS, ...parsed };
  } catch (e) {
    console.error("Error reading localStorage progress:", e);
    return DEFAULT_PROGRESS;
  }
}

export function saveLearnerProgress(progress: LearnerProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error("Error saving localStorage progress:", e);
  }
}

export function updateGrade(grade: GradeLevel): LearnerProgress {
  const current = getLearnerProgress();
  const updated = { ...current, grade };
  saveLearnerProgress(updated);
  return updated;
}

export function updateLanguage(primaryLanguage: LanguageOption): LearnerProgress {
  const current = getLearnerProgress();
  const updated = { ...current, primaryLanguage };
  saveLearnerProgress(updated);
  return updated;
}

export function markTopicCompleted(topicId: string, subject: SubjectCategory): LearnerProgress {
  const current = getLearnerProgress();
  if (!current.completedTopicIds.includes(topicId)) {
    const completedTopicIds = [...current.completedTopicIds, topicId];
    // Increase mastery slightly
    const currentMastery = current.subjectMastery[subject] || 50;
    const newMastery = Math.min(100, currentMastery + 10);
    const subjectMastery = { ...current.subjectMastery, [subject]: newMastery };
    
    // Check if unlocked first lesson badge
    const unlockedBadgeIds = [...current.unlockedBadgeIds];
    if (!unlockedBadgeIds.includes('badge-first-lesson')) {
      unlockedBadgeIds.push('badge-first-lesson');
    }

    const updated = { ...current, completedTopicIds, subjectMastery, unlockedBadgeIds };
    saveLearnerProgress(updated);
    return updated;
  }
  return current;
}

export function saveTestScore(testId: string, score: number, total: number, subject: SubjectCategory): LearnerProgress {
  const current = getLearnerProgress();
  const testScores = {
    ...current.testScores,
    [testId]: { score, total, date: new Date().toISOString() }
  };

  const unlockedBadgeIds = [...current.unlockedBadgeIds];
  if (score === total && !unlockedBadgeIds.includes('badge-test-master')) {
    unlockedBadgeIds.push('badge-test-master');
  }

  // Boost mastery
  const percentage = Math.round((score / total) * 100);
  const currentMastery = current.subjectMastery[subject] || 50;
  const newMastery = Math.min(100, Math.round((currentMastery + percentage) / 2));
  const subjectMastery = { ...current.subjectMastery, [subject]: newMastery };

  const updated = { ...current, testScores, unlockedBadgeIds, subjectMastery };
  saveLearnerProgress(updated);
  return updated;
}
