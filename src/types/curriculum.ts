export type GradeLevel = 
  | 'ECD A' 
  | 'ECD B' 
  | 'Grade 1' 
  | 'Grade 2' 
  | 'Grade 3' 
  | 'Grade 4' 
  | 'Grade 5' 
  | 'Grade 6' 
  | 'Grade 7';

export type EducationStage = 'Infant School' | 'Junior School';

export type SubjectCategory = 
  | 'Mathematics'
  | 'English Language'
  | 'Science & Technology'
  | 'Shona / Indigenous Languages'
  | 'Social Science'
  | 'Physical Education'
  | 'Visual & Performing Arts'
  | 'Agriculture & Food Tech';

export type LanguageOption = 'Shona' | 'Ndebele' | 'Kalanga' | 'Tonga' | 'Shangani' | 'Venda';

export interface ExerciseQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  hint?: string;
  illustration?: string; // Icon or SVG type identifier
}

export interface TopicLesson {
  id: string;
  title: string;
  subject: SubjectCategory;
  grade: GradeLevel;
  estimatedMinutes: number;
  objectives: string[];
  keyVocabulary: { word: string; definition: string; localTerm?: string }[];
  contentSections: {
    heading: string;
    body: string;
    bulletPoints?: string[];
    localContextNote?: string;
    diagramType?: 'number-line' | 'water-cycle' | 'plant-parts' | 'food-chain' | 'heritage-map' | 'place-value' | 'fractions' | 'solar-system';
  }[];
  exercise: ExerciseQuestion[];
  endOfTopicTest: {
    testTitle: string;
    totalMarks: number;
    timeLimitMinutes: number;
    questions: ExerciseQuestion[];
  };
}

export interface ProjectGuide {
  id: string;
  title: string;
  subject: SubjectCategory;
  grade: GradeLevel;
  term: 'Term 1' | 'Term 2' | 'Term 3';
  competencyFocus: string;
  durationDays: number;
  materialsNeeded: string[];
  steps: {
    stepNumber: number;
    title: string;
    description: string;
    expectedDeliverable: string;
  }[];
  assessmentRubric: {
    criteria: string;
    maxMarks: number;
  }[];
}

export interface TestPaper {
  id: string;
  title: string;
  type: 'ZIMSEC Mock Paper 1 (MCQ)' | 'Mid-Term Progress Test' | 'End of Term Assessment';
  grade: GradeLevel;
  subject: SubjectCategory;
  durationMinutes: number;
  totalQuestions: number;
  questions: ExerciseQuestion[];
}

export interface LearnerProgress {
  learnerId: string;
  learnerName: string;
  grade: GradeLevel;
  primaryLanguage: LanguageOption;
  avatarSeed: string;
  streakDays: number;
  completedTopicIds: string[]; // Topic IDs
  testScores: Record<string, { score: number; total: number; date: string }>; // testId -> score
  projectStatus: Record<string, 'not_started' | 'in_progress' | 'completed'>;
  unlockedBadgeIds: string[];
  subjectMastery: Record<SubjectCategory, number>; // Percentage 0-100
  lastActiveDate: string;
}

export interface Badge {
  id: string;
  name: string;
  titleShona?: string;
  titleNdebele?: string;
  description: string;
  iconName: string;
  category: SubjectCategory | 'General';
  requirement: string;
}
