import { TestPaper, GradeLevel, SubjectCategory } from '../types/curriculum';

export const SAMPLE_TEST_PAPERS: TestPaper[] = [
  {
    id: 'zimsec-g7-math-mock1',
    title: 'Grade 7 ZIMSEC Mathematics Mock Paper 1',
    type: 'ZIMSEC Mock Paper 1 (MCQ)',
    grade: 'Grade 7',
    subject: 'Mathematics',
    durationMinutes: 45,
    totalQuestions: 6,
    questions: [
      {
        id: 'z1',
        question: 'What is 45,280 written in words?',
        options: [
          'Forty-five thousand, two hundred and eighty',
          'Four hundred and fifty-two thousand, eighty',
          'Forty-five hundred and twenty-eight',
          'Four thousand, five hundred and twenty-eight'
        ],
        correctAnswerIndex: 0,
        explanation: '45 = Forty-five thousand, 280 = two hundred and eighty.'
      },
      {
        id: 'z2',
        question: 'Calculate: 3.45 + 12.8 - 5.02',
        options: ['11.23', '10.23', '16.25', '11.83'],
        correctAnswerIndex: 0,
        explanation: '3.45 + 12.8 = 16.25. 16.25 - 5.02 = 11.23.'
      },
      {
        id: 'z3',
        question: 'Express 3/5 as a percentage.',
        options: ['35%', '60%', '30%', '75%'],
        correctAnswerIndex: 1,
        explanation: '3/5 = (3 x 20) / (5 x 20) = 60/100 = 60%.'
      },
      {
        id: 'z4',
        question: 'A bus left Harare at 07:30 and arrived in Mutare at 11:45. How long did the journey take?',
        options: ['4 hours 15 minutes', '3 hours 45 minutes', '4 hours 30 minutes', '5 hours 15 minutes'],
        correctAnswerIndex: 0,
        explanation: 'From 07:30 to 11:30 is 4 hours. From 11:30 to 11:45 is 15 minutes. Total = 4 hours 15 mins.'
      },
      {
        id: 'z5',
        question: 'Find the area of a rectangular garden with length 15 metres and width 8 metres.',
        options: ['46 sq metres', '120 sq metres', '23 sq metres', '230 sq metres'],
        correctAnswerIndex: 1,
        explanation: 'Area = Length x Width = 15 x 8 = 120 square metres.'
      },
      {
        id: 'z6',
        question: 'If 4 bags of fertilizer cost 320 ZiG, how much will 7 bags cost at the same rate?',
        options: ['560 ZiG', '640 ZiG', '480 ZiG', '520 ZiG'],
        correctAnswerIndex: 0,
        explanation: 'Cost per bag = 320 / 4 = 80 ZiG. Cost for 7 bags = 80 x 7 = 560 ZiG.'
      }
    ]
  },
  {
    id: 'zimsec-g7-eng-mock1',
    title: 'Grade 7 ZIMSEC English Language Comprehension & Grammar',
    type: 'ZIMSEC Mock Paper 1 (MCQ)',
    grade: 'Grade 7',
    subject: 'English Language',
    durationMinutes: 45,
    totalQuestions: 5,
    questions: [
      {
        id: 'e1',
        question: 'Choose the sentence with the CORRECT punctuation:',
        options: [
          'mbuya nehanda was a great hero of Zimbabwe.',
          'Mbuya Nehanda was a great hero of Zimbabwe.',
          'Mbuya nehanda was a Great hero of zimbabwe',
          'Mbuya Nehanda was, a great hero of Zimbabwe'
        ],
        correctAnswerIndex: 1,
        explanation: 'Proper nouns (Mbuya, Nehanda, Zimbabwe) and sentence starters must be capitalized.'
      },
      {
        id: 'e2',
        question: 'Select the OPPOSITE in meaning (antonym) of the underlined word: "The river was very DEEP during the rainy season."',
        options: ['Shallow', 'Wide', 'Muddy', 'Fast'],
        correctAnswerIndex: 0,
        explanation: 'The opposite of deep is shallow.'
      },
      {
        id: 'e3',
        question: 'Complete the sentence: Neither Tawana nor her brothers _______ going to the agricultural fair today.',
        options: ['is', 'are', 'was', 'were not'],
        correctAnswerIndex: 1,
        explanation: 'With "neither... nor", the verb agrees with the closer subject ("her brothers" -> plural -> "are").'
      },
      {
        id: 'e4',
        question: 'Choose the correct preposition: The cattle walked _______ the wooden gate into the kraal.',
        options: ['through', 'across', 'over', 'under'],
        correctAnswerIndex: 0,
        explanation: 'You walk through an opening or gate.'
      },
      {
        id: 'e5',
        question: 'Identify the plural form of "Ox":',
        options: ['Oxes', 'Oxen', 'Oxs', 'Oxies'],
        correctAnswerIndex: 1,
        explanation: 'The plural of ox is oxen.'
      }
    ]
  },
  {
    id: 'g5-gen-midterm',
    title: 'Grade 5 General Science & Tech Mid-Term Check',
    type: 'Mid-Term Progress Test',
    grade: 'Grade 5',
    subject: 'Science & Technology',
    durationMinutes: 30,
    totalQuestions: 4,
    questions: [
      {
        id: 'g5s1',
        question: 'Which organ in the human body pumps blood through blood vessels?',
        options: ['Lungs', 'Stomach', 'Heart', 'Brain'],
        correctAnswerIndex: 2,
        explanation: 'The heart pumps oxygenated and deoxygenated blood through the body.'
      },
      {
        id: 'g5s2',
        question: 'Which form of renewable energy is most abundant in Zimbabwe throughout the year?',
        options: ['Wind energy', 'Solar energy', 'Geothermal energy', 'Nuclear energy'],
        correctAnswerIndex: 1,
        explanation: 'Zimbabwe receives over 300 days of bright sunshine per year.'
      },
      {
        id: 'g5s3',
        question: 'Which gas do green plants absorb from air during photosynthesis?',
        options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
        correctAnswerIndex: 1,
        explanation: 'Plants absorb carbon dioxide and release oxygen.'
      },
      {
        id: 'g5s4',
        question: 'Which computer hardware component is used to input text into a computer?',
        options: ['Monitor', 'Keyboard', 'Speaker', 'Printer'],
        correctAnswerIndex: 1,
        explanation: 'The keyboard is an input device used to type letters and numbers.'
      }
    ]
  }
];

export function getTestPapersForGradeAndSubject(grade: GradeLevel, subject: SubjectCategory): TestPaper[] {
  const direct = SAMPLE_TEST_PAPERS.filter(tp => {
    if (tp.grade !== grade) return false;
    if (tp.subject === subject) return true;
    if (subject === 'Shona / Indigenous Languages' && (tp.subject as string).includes('Indigenous')) return true;
    if (subject === 'Social Science' && (tp.subject as string).includes('Heritage')) return true;
    return false;
  });

  if (direct.length > 0) return direct;

  return [generateDynamicTestPaper(grade, subject)];
}

function generateDynamicTestPaper(grade: GradeLevel, subject: SubjectCategory): TestPaper {
  return {
    id: `tp-${grade.toLowerCase().replace(/\s+/g, '')}-${subject.toLowerCase().replace(/[^a-z]/g, '')}`,
    title: `${grade} ${subject} MoPSE Assessment Paper`,
    type: grade === 'Grade 7' ? 'ZIMSEC Mock Paper 1 (MCQ)' : 'Mid-Term Progress Test',
    grade: grade,
    subject: subject,
    durationMinutes: 30,
    totalQuestions: 4,
    questions: [
      {
        id: 'dq1',
        question: `Which of the following represents a core concept in ${grade} ${subject}?`,
        options: [
          `Applying systematic problem solving and local Zimbabwean knowledge`,
          `Skipping basic facts`,
          `Memorizing without understanding`,
          `None of the above`
        ],
        correctAnswerIndex: 0,
        explanation: `MoPSE curriculum stresses practical understanding, critical thinking, and local heritage integration.`
      },
      {
        id: 'dq2',
        question: `How does mastering ${subject} benefit learners at ${grade} level?`,
        options: [
          `It builds foundational competencies for national examinations and real life`,
          `It is only needed for one day`,
          `It replaces all other learning areas`,
          `It has no connection to future grades`
        ],
        correctAnswerIndex: 0,
        explanation: `${grade} syllabus modules form an essential building block for academic progress and life skills.`
      },
      {
        id: 'dq3',
        question: `Which attitude aligns with Unhu / Ubuntu values during school work in ${subject}?`,
        options: [
          `Collaborating respectfully, honesty, and continuous effort`,
          `Cheating during tests`,
          `Refusing to share learning materials`,
          `Disrespecting teachers and peers`
        ],
        correctAnswerIndex: 0,
        explanation: `Unhu/Ubuntu principles emphasize mutual respect, integrity, and cooperative effort.`
      },
      {
        id: 'dq4',
        question: `When preparing for a ${subject} test in ${grade}, what is the best strategy?`,
        options: [
          `Reviewing topic notes, practicing exercises, and seeking step-by-step guidance`,
          `Rushing through questions without reading carefully`,
          `Ignoring teacher hints`,
          `Leaving answer sheets blank`
        ],
        correctAnswerIndex: 0,
        explanation: `Thorough revision and guided practice guarantee excellent performance.`
      }
    ]
  };
}
