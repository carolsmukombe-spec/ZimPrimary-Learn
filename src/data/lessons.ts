import { TopicLesson, SubjectCategory, GradeLevel } from '../types/curriculum';

export const SAMPLE_LESSONS: TopicLesson[] = [
  // --- LESSON 1: GRADE 5 MATHEMATICS ---
  {
    id: 'g5-math-placevalue',
    title: 'Place Value up to 100,000 & ZiG Currency Calculations',
    subject: 'Mathematics',
    grade: 'Grade 5',
    estimatedMinutes: 20,
    objectives: [
      'Understand digits up to Tens of Thousands (10,000s) and Hundreds of Thousands (100,000s)',
      'Write numbers in expanded form and words',
      'Solve money calculations using ZiG (Zimbabwe Gold) currency and USD'
    ],
    keyVocabulary: [
      { word: 'Place Value', definition: 'The value of a digit depending on its position in a number.', localTerm: 'Kukosha kweMuerengwa' },
      { word: 'Expanded Form', definition: 'Breaking down a number into the sum of its place values (e.g. 45,230 = 40,000 + 5,000 + 200 + 30).', localTerm: 'Kukudza nhamba' },
      { word: 'ZiG Currency', definition: 'Zimbabwe Gold currency backed by gold reserves.', localTerm: 'Mari yeZimbabwe' }
    ],
    contentSections: [
      {
        heading: '1. What is Place Value?',
        body: 'In Zimbabwe, when we count cattle in a farm, or bags of maize at the GMB (Grain Marketing Board), numbers quickly grow past thousands! Every digit in a number has a position: Units (U), Tens (T), Hundreds (H), Thousands (Th), Tens of Thousands (TTh), and Hundreds of Thousands (HTh).',
        bulletPoints: [
          'In 45,821: 4 is in the Tens of Thousands place (40,000)',
          '5 is in the Thousands place (5,000)',
          '8 is in the Hundreds place (800)',
          '2 is in the Tens place (20)',
          '1 is in the Units place (1)'
        ],
        localContextNote: 'Example: Harare to Bulawayo is about 440 kilometres. The population of Mutare is over 220,000 people!',
        diagramType: 'place-value'
      },
      {
        heading: '2. Expanded Form & Words',
        body: 'To write 67,405 in expanded form: 60,000 + 7,000 + 400 + 0 + 5. In words, it is written as: Sixty-seven thousand, four hundred and five.',
        bulletPoints: [
          'Always group digits in threes from right to left using a comma space (e.g., 89,250).'
        ]
      },
      {
        heading: '3. Money Application (ZiG & USD)',
        body: 'If a farmer sells 3 bags of maize for 450 ZiG each, how much ZiG does the farmer earn? 450 x 3 = 1,350 ZiG.',
        bulletPoints: [
          'Addition: 1,350 ZiG + 2,500 ZiG = 3,850 ZiG',
          'Subtraction: 10,000 ZiG - 3,450 ZiG = 6,550 ZiG'
        ]
      }
    ],
    exercise: [
      {
        id: 'ex1',
        question: 'What is the place value of digit 7 in 74,520?',
        options: ['Hundreds', 'Thousands', 'Tens of Thousands', 'Units'],
        correctAnswerIndex: 2,
        explanation: 'In 74,520, the 7 is 5 places from the right, which represents 70,000 (Tens of Thousands).',
        hint: 'Count from the right: Units, Tens, Hundreds, Thousands, Tens of Thousands.'
      },
      {
        id: 'ex2',
        question: 'Write 30,000 + 5,000 + 400 + 2 in standard form.',
        options: ['35,420', '35,402', '354,002', '3,542'],
        correctAnswerIndex: 1,
        explanation: '30,000 + 5,000 = 35,000. Adding 400 gives 35,400. Adding 2 gives 35,402.',
        hint: 'Notice there are 0 Tens in this sum!'
      },
      {
        id: 'ex3',
        question: 'Tawana bought 2 solar lights for 120 ZiG each and a school bag for 250 ZiG. How much did Tawana spend in total?',
        options: ['370 ZiG', '490 ZiG', '500 ZiG', '240 ZiG'],
        correctAnswerIndex: 1,
        explanation: '2 solar lights = 2 x 120 = 240 ZiG. Total = 240 + 250 = 490 ZiG.',
        hint: 'Calculate the cost of the 2 lights first!'
      }
    ],
    endOfTopicTest: {
      testTitle: 'Grade 5 Place Value & Currency End-of-Topic Test',
      totalMarks: 4,
      timeLimitMinutes: 10,
      questions: [
        {
          id: 'test-q1',
          question: 'Which number is Sixty-eight thousand, nine hundred and fourteen?',
          options: ['68,914', '689,014', '6,894', '68,940'],
          correctAnswerIndex: 0,
          explanation: 'Sixty-eight thousand = 68,000. Nine hundred = 900. Fourteen = 14. Total = 68,914.'
        },
        {
          id: 'test-q2',
          question: 'What is the value of 5 in 15,204?',
          options: ['50', '500', '5,000', '50,000'],
          correctAnswerIndex: 2,
          explanation: 'The digit 5 is in the Thousands column, so its value is 5,000.'
        },
        {
          id: 'test-q3',
          question: 'Round 48,275 to the nearest Thousand.',
          options: ['48,000', '49,000', '48,300', '50,000'],
          correctAnswerIndex: 0,
          explanation: 'Look at the Hundreds digit (2). Since 2 is less than 5, we round down to 48,000.'
        },
        {
          id: 'test-q4',
          question: 'Farmer Moyo harvested 12,450 kg of maize in 2024 and 15,300 kg in 2025. What was his total harvest?',
          options: ['27,750 kg', '27,650 kg', '28,150 kg', '25,750 kg'],
          correctAnswerIndex: 0,
          explanation: '12,450 + 15,300 = 27,750 kg.'
        }
      ]
    }
  },

  // --- LESSON 2: GRADE 7 SCIENCE & TECH ---
  {
    id: 'g7-sci-watercycle',
    title: 'The Water Cycle & Water Conservation in Zimbabwe',
    subject: 'Science & Technology',
    grade: 'Grade 7',
    estimatedMinutes: 25,
    objectives: [
      'Explain the 4 main processes in the water cycle: Evaporation, Transpiration, Condensation, Precipitation',
      'Understand the role of forests and wetlands (like Monavale Vlei) in maintaining water supply',
      'List water purification methods used in Zimbabwean communities'
    ],
    keyVocabulary: [
      { word: 'Evaporation', definition: 'The process where liquid water turns into water vapour due to heat from the sun.', localTerm: 'Kushanduka kwemvura kuita mhute' },
      { word: 'Condensation', definition: 'Cooling of water vapour into tiny water droplets forming clouds.', localTerm: 'Kugwamba kwemhute' },
      { word: 'Precipitation', definition: 'Water falling from clouds as rain, hail, or sleet.', localTerm: 'Kunaya kwemvura' },
      { word: 'Transpiration', definition: 'Loss of water vapour from plant leaves into the atmosphere.' }
    ],
    contentSections: [
      {
        heading: '1. The Journey of Water in Zimbabwe',
        body: 'Water from Lake Kariba, Manyame River, and the Indian Ocean warms up under the Zimbabwean sun. This warmth turns liquid water into invisible gas called water vapour in a process called EVAPORATION.',
        diagramType: 'water-cycle'
      },
      {
        heading: '2. Condensation & Rain (Precipitation)',
        body: 'As water vapour rises high into the cool atmosphere, it cools down and condenses into clouds (CONDENSATION). When clouds become heavy with droplets, gravity pulls the rain down (PRECIPITATION) to nourish our crops and rivers!',
        bulletPoints: [
          'Evaporation: Heat from sun converts water to vapour.',
          'Transpiration: Trees (like Indigenous Musasa) release water from leaves.',
          'Condensation: Vapour cools to form rain clouds.',
          'Precipitation: Rain falls into catchment areas like Mazowe, Tugwi Mukosi, and Kariba.'
        ]
      },
      {
        heading: '3. Protecting Wetlands & Purifying Water',
        body: 'Wetlands (matoro / amaxhaphozi) act as natural sponges that clean and store water for underground aquifers. Communities purify water by: 1) Boiling, 2) Using WaterGuard or chlorine, 3) Sand filtration.',
        localContextNote: 'Boiling water for at least 1 minute kills bacteria that cause cholera and typhoid!'
      }
    ],
    exercise: [
      {
        id: 'sci-ex1',
        question: 'Which process describes water vapour cooling down to form clouds high in the sky?',
        options: ['Evaporation', 'Condensation', 'Transpiration', 'Precipitation'],
        correctAnswerIndex: 1,
        explanation: 'Condensation happens when warm water vapour cools down and turns back into liquid droplets that form clouds.',
        hint: 'Think of water droplets forming on the outside of a cold cup of water!'
      },
      {
        id: 'sci-ex2',
        question: 'Trees release water vapour into the air through their leaves. What is this called?',
        options: ['Respiration', 'Photosynthesis', 'Transpiration', 'Germination'],
        correctAnswerIndex: 2,
        explanation: 'Transpiration is the evaporation of water from plant leaves.',
        hint: 'It sounds like "evaporation" but happens in plants!'
      }
    ],
    endOfTopicTest: {
      testTitle: 'Grade 7 Water Cycle & Environment ZIMSEC Test',
      totalMarks: 4,
      timeLimitMinutes: 10,
      questions: [
        {
          id: 'test-sci-q1',
          question: 'What is the main source of energy that drives the water cycle in Zimbabwe?',
          options: ['Wind', 'The Sun', 'Underground fires', 'Electricity'],
          correctAnswerIndex: 1,
          explanation: 'The sun heats water in rivers, dams, and oceans, causing evaporation.'
        },
        {
          id: 'test-sci-q2',
          question: 'Which of the following is a safe home method to purify water from a borehole or river?',
          options: ['Adding salt', 'Boiling water for 1 minute', 'Leaving it under shade', 'Filtering with cloth only'],
          correctAnswerIndex: 1,
          explanation: 'Boiling kills disease-causing germs like cholera and typhoid bacteria.'
        },
        {
          id: 'test-sci-q3',
          question: 'How do wetlands (matoro) protect Zimbabwean water sources?',
          options: ['They dry out rivers', 'They filter pollution and store ground water', 'They stop rain from falling', 'They increase soil erosion'],
          correctAnswerIndex: 1,
          explanation: 'Wetlands filter natural impurities and absorb flood water like a giant natural sponge.'
        },
        {
          id: 'test-sci-q4',
          question: 'Rain, hail, and snow are all examples of:',
          options: ['Condensation', 'Evaporation', 'Precipitation', 'Runoff'],
          correctAnswerIndex: 2,
          explanation: 'Precipitation is any form of water that falls from clouds to the ground.'
        }
      ]
    }
  },

  // --- LESSON 3: GRADE 4 SOCIAL SCIENCE (HERITAGE) ---
  {
    id: 'g4-her-monuments',
    title: 'Great Zimbabwe & National Heritage Monuments',
    subject: 'Social Science',
    grade: 'Grade 4',
    estimatedMinutes: 20,
    objectives: [
      'Locate Great Zimbabwe Monument on a map near Masvingo',
      'Explain the architectural wonder of dry stone walling (Kuvaka nemabwe pasina dhaka)',
      'Identify the Zimbabwe Bird (Hungwe) symbol and national flag'
    ],
    keyVocabulary: [
      { word: 'Great Zimbabwe', definition: 'An ancient stone city built by Shona ancestors near Masvingo.', localTerm: 'Dzimba dzaMabwe' },
      { word: 'Dry Stone Walling', definition: 'Building technique using neatly stacked granite stones without mortar or cement.', localTerm: 'Kuvaka nemabwe' },
      { word: 'Zimbabwe Bird (Hungwe)', definition: 'National emblem carved from soapstone found at Great Zimbabwe.' }
    ],
    contentSections: [
      {
        heading: '1. What is Great Zimbabwe?',
        body: 'Great Zimbabwe ("Dzimba dzamabwe" meaning houses of stone) is the largest ancient stone structure in Africa south of the Sahara. It was the capital of a prosperous kingdom famous for gold trade, cattle farming, and pottery.',
        diagramType: 'heritage-map'
      },
      {
        heading: '2. The Genius of Dry Stone Walling',
        body: 'The builders used granite stones that naturally flaked into rectangular blocks. They laid these blocks with immense skill without using mortar or cement. The walls have stood strong for over 800 years!',
        bulletPoints: [
          'Great Enclosure: Features a wall over 11 metres high and a Conical Tower.',
          'Hill Complex: The royal residence and spiritual centre where the 8 soapstone Zimbabwe Birds were placed.',
          'Valley Ruins: Residences for nobles and craftspeople.'
        ]
      },
      {
        heading: '3. National Symbols',
        body: 'The Soapstone Zimbabwe Bird (Hungwe / Chapungu) represents our national identity and spiritual heritage. It appears on our national flag, currency, and passport!',
        localContextNote: 'Unhu / Ubuntu lesson: Great Zimbabwe teaches us unity, hard work, engineering skill, and peaceful trading.'
      }
    ],
    exercise: [
      {
        id: 'her-ex1',
        question: 'Near which Zimbabwean city is the Great Zimbabwe Monument located?',
        options: ['Bulawayo', 'Harare', 'Masvingo', 'Mutare'],
        correctAnswerIndex: 2,
        explanation: 'Great Zimbabwe is located approximately 30 km from the town of Masvingo.',
        hint: 'It is near the Lake Mutirikwi area in Masvingo province.'
      },
      {
        id: 'her-ex2',
        question: 'What special method was used to build the walls of Great Zimbabwe?',
        options: ['Mud and thatch', 'Dry stone walling without mortar', 'Concrete and steel', 'Wooden poles'],
        correctAnswerIndex: 1,
        explanation: 'The builders stacked granite blocks perfectly without any mortar or cement.',
        hint: 'No cement or glue was used!'
      }
    ],
    endOfTopicTest: {
      testTitle: 'Grade 4 Heritage & Monuments Assessment',
      totalMarks: 4,
      timeLimitMinutes: 10,
      questions: [
        {
          id: 'test-her-q1',
          question: 'What does the phrase "Dzimba dzaMabwe" mean in Shona?',
          options: ['Big mountains', 'Houses of stone', 'Rivers of gold', 'Trees of shade'],
          correctAnswerIndex: 1,
          explanation: 'Dzimba (houses) dzaMabwe (of stone) is the origin of the name Zimbabwe.'
        },
        {
          id: 'test-her-q2',
          question: 'Which sacred bird carved from soapstone was discovered at Great Zimbabwe?',
          options: ['Eagle', 'Hungwe (Zimbabwe Bird)', 'Falcon', 'Owl'],
          correctAnswerIndex: 1,
          explanation: 'The Hungwe soapstone carving is our national emblem.'
        },
        {
          id: 'test-her-q3',
          question: 'Which part of Great Zimbabwe features the famous 11-metre high wall and Conical Tower?',
          options: ['Hill Complex', 'Great Enclosure', 'Valley Ruins', 'Water Gate'],
          correctAnswerIndex: 1,
          explanation: 'The Great Enclosure holds the massive outer wall and the Conical Tower.'
        },
        {
          id: 'test-her-q4',
          question: 'Which core Zimbabwean value is demonstrated by the monumental construction of Great Zimbabwe?',
          options: ['Laziness', 'Unhu / Ubuntu and unity', 'Selfishness', 'Dishonesty'],
          correctAnswerIndex: 1,
          explanation: 'It demonstrates cooperative community effort, unity, and excellence.'
        }
      ]
    }
  }
];

// Helper to get lessons or generate a complete lesson dynamically for ANY Grade and Subject
export function getLessonsForGradeAndSubject(grade: GradeLevel, subject: SubjectCategory): TopicLesson[] {
  // First check matching exact or partial subjects
  const directMatches = SAMPLE_LESSONS.filter(l => {
    if (l.grade !== grade) return false;
    if (l.subject === subject) return true;
    if (subject === 'Shona / Indigenous Languages' && (l.subject as string).includes('Indigenous')) return true;
    if (subject === 'Social Science' && (l.subject as string).includes('Heritage')) return true;
    return false;
  });

  if (directMatches.length > 0) {
    return directMatches;
  }

  // Otherwise, construct a rich, grade-and-subject specific syllabus lesson dynamically
  return [generateDynamicLesson(grade, subject)];
}

function generateDynamicLesson(grade: GradeLevel, subject: SubjectCategory): TopicLesson {
  const isInfant = grade.includes('ECD') || grade === 'Grade 1' || grade === 'Grade 2';

  const subjectTitles: Record<SubjectCategory, { title: string; desc: string; term: string }> = {
    'Mathematics': {
      title: `${grade} Numeracy, Patterns & Money Concepts`,
      desc: `Master fundamental ${grade} mathematical reasoning, place values, number operations, geometry, and real-life ZiG currency calculations.`,
      term: 'Kukudza neKuverenga Nhamba'
    },
    'English Language': {
      title: `${grade} Phonics, Reading Comprehension & Composition`,
      desc: `Build strong reading, phonics, vocabulary, sentence punctuation, and creative composition skills according to MoPSE ${grade} English syllabus.`,
      term: 'Reading & Grammar Mastery'
    },
    'Science & Technology': {
      title: `${grade} Living Organisms, Environment & Digital Tech`,
      desc: `Explore the natural world, body health, simple experiments, water conservation, and ICT technology fundamentals for ${grade}.`,
      term: 'Sainzi neUnyanzvi'
    },
    'Shona / Indigenous Languages': {
      title: `${grade} Ngano, Tsumo, Madimikira neKuverenga`,
      desc: `Kudzidza mutauro nemagariro ezevhana, kuverenga zvinyorwa, kushandisa tsumo nemadimikira, nekukudza unhu.`,
      term: 'Mutauro weMusha neUnhu'
    },
    'Social Science': {
      title: `${grade} Heritage Studies, Unhu/Ubuntu & Zimbabwe Identity`,
      desc: `Understand family values, Zimbabwean national monuments (Great Zimbabwe, Victoria Falls), national symbols, and civic responsibilities.`,
      term: 'Tsika, Nhaka neUnhu'
    },
    'Physical Education': {
      title: `${grade} Movement, Athletics & Physical Fitness`,
      desc: `Develop gross motor agility, balance, track and field techniques, team games, safety rules, and healthy living.`,
      term: 'Unyanzvi hweMutambo neHutano'
    },
    'Visual & Performing Arts': {
      title: `${grade} Traditional Music, Dance & Creative Crafts`,
      desc: `Experience Zimbabwean traditional music (Marimba, Mbira, Hosho), indigenous dances (Jerusarema, Muchongoyo), drawing, and clay modeling.`,
      term: 'Unyanzvi hweMhanzi neKudhirowa'
    },
    'Agriculture & Food Tech': {
      title: `${grade} Farming Practices, Soil & Food Tech`,
      desc: `Learn vegetable gardening, soil preparation (mupfudze), plant nutrition, and sustainable agriculture in Zimbabwe.`,
      term: 'Urimo neChikafu'
    }
  };

  const meta = subjectTitles[subject] || {
    title: `${grade} ${subject} Foundation Lesson`,
    desc: `Comprehensive MoPSE syllabus module covering ${subject} for ${grade}.`,
    term: 'Dzidzo'
  };

  return {
    id: `dyn-${grade.toLowerCase().replace(/\s+/g, '')}-${subject.toLowerCase().replace(/[^a-z]/g, '')}`,
    title: meta.title,
    subject: subject,
    grade: grade,
    estimatedMinutes: isInfant ? 15 : 25,
    objectives: [
      `Understand core ${subject} concepts suitable for ${grade} level`,
      `Apply step-by-step problem-solving and critical thinking`,
      `Integrate local Zimbabwean examples, Unhu/Ubuntu values, and practical application`
    ],
    keyVocabulary: [
      { word: 'Core Competency', definition: 'The essential knowledge and skill mastered in this module.', localTerm: 'Unyanzvi' },
      { word: 'Unhu / Ubuntu', definition: 'The Zimbabwean ethos of respect, responsibility, and community care.', localTerm: meta.term },
      { word: 'Practical Application', definition: 'Using what you learn to solve real problems at home, school, and community.' }
    ],
    contentSections: [
      {
        heading: `1. Introduction to ${meta.title}`,
        body: `Welcome to your ${grade} lesson in ${subject}! In this topic, MoPSE curriculum guides us to explore ${meta.desc}`,
        bulletPoints: [
          `Key concept 1: Step-by-step understanding tuned for ${grade}`,
          `Key concept 2: Building confidence with interactive exercises`,
          `Key concept 3: Connecting knowledge with local Zimbabwean life`
        ],
        localContextNote: `In Zimbabwe, learning ${subject} helps us care for our families, succeed in school, and build a bright future!`
      },
      {
        heading: `2. Guided Learning & Key Skills`,
        body: `Let us break down the key ideas step by step. Practice speaking, writing, and reflecting as you follow along:`,
        bulletPoints: [
          `Observation & Analysis: Observe carefully and notice patterns in your environment.`,
          `Practice: Solve questions carefully using teacher hints whenever you need guidance.`
        ]
      }
    ],
    exercise: [
      {
        id: `dyn-ex-1`,
        question: `What is a primary goal of studying ${subject} in ${grade}?`,
        options: [
          `To gain essential knowledge and practical skills for everyday life in Zimbabwe`,
          `To memorize words without understanding`,
          `To avoid practicing exercises`,
          `None of the above`
        ],
        correctAnswerIndex: 0,
        explanation: `Studying ${subject} empowers learners with practical skills and knowledge aligned with MoPSE curriculum.`,
        hint: `Think about how learning helps you solve problems at school and home!`
      },
      {
        id: `dyn-ex-2`,
        question: `Which core Zimbabwean value guides respectful learning and community care?`,
        options: [`Selfishness`, `Unhu / Ubuntu`, `Carelessness`, `Laziness`],
        correctAnswerIndex: 1,
        explanation: `Unhu / Ubuntu (vumunhu) is the foundation of respectful, ethical Zimbabwean living.`,
        hint: `It is our national cultural ethos!`
      }
    ],
    endOfTopicTest: {
      testTitle: `${grade} ${subject} Topic Mastery Assessment`,
      totalMarks: 3,
      timeLimitMinutes: 10,
      questions: [
        {
          id: `dyn-t-1`,
          question: `In ${subject} for ${grade}, what approach leads to the best understanding?`,
          options: [
            `Regular practice, asking questions, and applying concepts to real life`,
            `Guessing answers quickly`,
            `Skipping exercises and tests`,
            `Studying only before exams`
          ],
          correctAnswerIndex: 0,
          explanation: `Consistent practice and applying concepts to local examples ensures long-term mastery.`
        },
        {
          id: `dyn-t-2`,
          question: `Why is local Zimbabwean context integrated into ${subject}?`,
          options: [
            `To make learning meaningful, relatable, and culturally relevant`,
            `To make lessons longer`,
            `To avoid national standards`,
            `It has no purpose`
          ],
          correctAnswerIndex: 0,
          explanation: `Connecting lessons to local flora, fauna, heritage, and currency makes learning relatable and effective.`
        },
        {
          id: `dyn-t-3`,
          question: `What should you do if you encounter a challenging concept during a lesson?`,
          options: [
            `Use the Concept Master Teacher Chipo tutor for step-by-step explanation`,
            `Give up immediately`,
            `Skip the subject`,
            `Close the app`
          ],
          correctAnswerIndex: 0,
          explanation: `Teacher Chipo provides instant 4-step AI guidance in Shona, Ndebele, or English to help you master any concept.`
        }
      ]
    }
  };
}
