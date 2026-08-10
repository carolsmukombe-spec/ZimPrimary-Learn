import { GradeLevel, SubjectCategory } from '../types/curriculum';

export interface HBCResource {
  id: string;
  title: string;
  type: 'Concrete Counters' | 'Science & Tech Equipment' | 'Heritage & Cultural Artifacts' | 'Musical & Performing Arts' | 'Agriculture & Environment' | 'ICT & Digital Tools';
  subject: SubjectCategory;
  gradeRange: string;
  description: string;
  teachingPurpose: string;
  howToSourceInZimbabwe: string;
  iconName: string;
  syllabusRequirementRef: string;
}

export interface HBCTextbookGuide {
  subject: SubjectCategory;
  bookTitle: string;
  approvedBy: string; // MoPSE Curriculum Development Unit (CDU)
  totalChapters: number;
  chapters: {
    chapterNumber: number;
    title: string;
    keyConcepts: string[];
    requiredResourcesNeeded: string[];
    calaConnection: string;
  }[];
}

export const HBC_RESOURCES_DIRECTORY: HBCResource[] = [
  {
    id: 'res-math-counters',
    title: 'Marula Seeds, Bottle Tops & Counters',
    type: 'Concrete Counters',
    subject: 'Mathematics',
    gradeRange: 'ECD A to Grade 3',
    description: 'Clean dried marula seeds, small smooth pebbles, or recycled plastic bottle caps used for hands-on counting, addition, and subtraction.',
    teachingPurpose: 'Builds concrete number sense (1-100), place value bundles of 10s, and equal grouping division.',
    howToSourceInZimbabwe: 'Collected by learners in local villages/suburbs or recycled from home.',
    iconName: 'Hash',
    syllabusRequirementRef: 'MoPSE Infant Mathematics Syllabus Section 3.1: Concrete Operations'
  },
  {
    id: 'res-math-abacus',
    title: 'Place Value Wooden Abacus & Chart',
    type: 'Concrete Counters',
    subject: 'Mathematics',
    gradeRange: 'Grade 3 to Grade 7',
    description: 'A 6-column place value chart with colored beads representing Units, Tens, Hundreds, Thousands, Tens of Thousands, and Hundreds of Thousands.',
    teachingPurpose: 'Teaches large number notation, expanded forms, carrying in addition, and borrowing in subtraction.',
    howToSourceInZimbabwe: 'Constructed using wire, wooden frame, and drilled bottle tops in school wood workshop.',
    iconName: 'Calculator',
    syllabusRequirementRef: 'MoPSE Junior Mathematics Syllabus Section 4.2: Place Value & Notation'
  },
  {
    id: 'res-heritage-artifacts',
    title: 'Great Zimbabwe Dry-Stone Replica & Heritage Artifacts',
    type: 'Heritage & Cultural Artifacts',
    subject: 'Social Science',
    gradeRange: 'Grade 3 to Grade 7',
    description: 'Miniature soapstone Zimbabwe Bird carvings, dry-stone walling samples, woven winning baskets (rusero), and traditional pottery (hali).',
    teachingPurpose: 'Illustrates pre-colonial Zimbabwean architectural ingenuity, trade routes, Unhu/Ubuntu heritage, and cultural customs.',
    howToSourceInZimbabwe: 'Sourced from local artisans, heritage centres, or carved out of soft soapstone in art class.',
    iconName: 'Landmark',
    syllabusRequirementRef: 'MoPSE Social Science / Heritage Syllabus Module 2: National Heritage & Culture'
  },
  {
    id: 'res-science-solar',
    title: 'Solar Panel Reflection Box & Thermometer Kit',
    type: 'Science & Tech Equipment',
    subject: 'Science & Technology',
    gradeRange: 'Grade 4 to Grade 7',
    description: 'Cardboard reflector lined with aluminum foil, 1.5L black painted plastic bottle, plastic tubing, and liquid thermometer.',
    teachingPurpose: 'Demonstrates solar radiation absorption, water heating, and clean renewable energy applications for rural & urban Zimbabwean homes.',
    howToSourceInZimbabwe: 'Built out of recycled cereal boxes, foil wraps, and black water bottles.',
    iconName: 'Sun',
    syllabusRequirementRef: 'MoPSE Science & Technology Syllabus Section 5.3: Solar & Clean Energy'
  },
  {
    id: 'res-music-instruments',
    title: 'Mbira dzaVadzimu, Hosho & Marimba Set',
    type: 'Musical & Performing Arts',
    subject: 'Visual & Performing Arts',
    gradeRange: 'ECD A to Grade 7',
    description: 'Authentic 22-key Mbira dzaVadzimu inside deze gourd resonator, pair of dried magaka hosho rattles, and hardwood soprano marimba.',
    teachingPurpose: 'Teaches traditional 12/8 time signatures, polyrhythms, indigenous music preservation, and Jerusarema/Muchongoyo dance accompaniment.',
    howToSourceInZimbabwe: 'Sourced from local traditional instrument craftsmen in Mbare, Domboshava, or school music department.',
    iconName: 'Music',
    syllabusRequirementRef: 'MoPSE Visual & Performing Arts Syllabus Unit 2: Indigenous Musical Instruments'
  },
  {
    id: 'res-agri-keyhole',
    title: 'Keyhole Raised Bed & Compost Materials (Mupfudze)',
    type: 'Agriculture & Environment',
    subject: 'Agriculture & Food Tech',
    gradeRange: 'Grade 3 to Grade 7',
    description: 'Local field stones or bricks, central wire basket, organic compost manure (mupfudze), dry maize stalks, and vegetable seedlings (covo, spinach).',
    teachingPurpose: 'Teaches climate-smart agriculture, soil moisture conservation, greywater recycling, and sustainable food security.',
    howToSourceInZimbabwe: 'Built directly in the school garden using local stones and organic waste from school grounds.',
    iconName: 'Sprout',
    syllabusRequirementRef: 'MoPSE Agriculture & Food Tech Syllabus Module 4: Climate Smart Gardening'
  },
  {
    id: 'res-ict-digital',
    title: 'Offline Digital Learning Tablet & Solar Power Pack',
    type: 'ICT & Digital Tools',
    subject: 'Science & Technology',
    gradeRange: 'Grade 1 to Grade 7',
    description: 'Touchscreen tablet loaded with offline MoPSE curriculum apps, interactive quizzes, audio pronunciation guides, and solar power bank.',
    teachingPurpose: 'Builds digital literacy, typing proficiency, interactive science simulations, and self-paced exam revision.',
    howToSourceInZimbabwe: 'Distributed via MoPSE e-learning drive or school computer laboratory.',
    iconName: 'Smartphone',
    syllabusRequirementRef: 'MoPSE Science & ICT Syllabus Section 6.1: Digital Literacy & Hardware'
  },
  {
    id: 'res-pe-balls',
    title: 'Handmade Nhava / Fabric Balls & Athletics Markers',
    type: 'Musical & Performing Arts',
    subject: 'Physical Education',
    gradeRange: 'ECD A to Grade 7',
    description: 'Stuffed fabric soccer balls (chira/nhava), wooden relay batons, rope jump lines, and field cones.',
    teachingPurpose: 'Develops motor coordination, spatial balance, track relay racing, and indigenous children play games (Pada, Nhodo, Mahumbwe).',
    howToSourceInZimbabwe: 'Crafted from recycled cloth remnants, plastic bags, and smooth wooden branches.',
    iconName: 'Activity',
    syllabusRequirementRef: 'MoPSE Physical Education Syllabus Unit 1: Movement & Physical Fitness'
  }
];

export const HBC_TEXTBOOK_GUIDES: HBCTextbookGuide[] = [
  {
    subject: 'Mathematics',
    bookTitle: 'MoPSE Heritage-Based Primary Mathematics (Grades 1 - 7)',
    approvedBy: 'Ministry of Primary and Secondary Education Curriculum Development Unit',
    totalChapters: 8,
    chapters: [
      {
        chapterNumber: 1,
        title: 'Numbers, Notation & Place Value (Up to 100,000)',
        keyConcepts: ['Place value columns', 'Expanded form notation', 'ZiG Currency calculations'],
        requiredResourcesNeeded: ['Place value wooden abacus', 'ZiG play currency bills', 'Bottle caps'],
        calaConnection: 'CALA 1: Design a household expenditure log using ZiG currency.'
      },
      {
        chapterNumber: 2,
        title: 'Fractions, Decimals & Percentages',
        keyConcepts: ['Equivalent fractions', 'Shading grid boxes', 'Converting decimals to %'],
        requiredResourcesNeeded: ['Fraction circles', 'Paper strips', 'Ruler'],
        calaConnection: 'CALA 2: Calculate crop yield percentages in school garden.'
      }
    ]
  },
  {
    subject: 'Social Science',
    bookTitle: 'MoPSE Heritage Studies & Unhu/Ubuntu Education',
    approvedBy: 'MoPSE National Curriculum Framework 2024-2030',
    totalChapters: 6,
    chapters: [
      {
        chapterNumber: 1,
        title: 'National Identity, Flag & Heritage Sites',
        keyConcepts: ['Great Zimbabwe Monuments', 'Khami Ruins', 'National Flag colors', 'National Anthem in Shona, Ndebele & English'],
        requiredResourcesNeeded: ['National Flag sample', 'Dry-stone walling photos', 'Map of Zimbabwe'],
        calaConnection: 'CALA 1: Construct a model of Great Zimbabwe or write family ancestry tree.'
      }
    ]
  },
  {
    subject: 'Agriculture & Food Tech',
    bookTitle: 'MoPSE Climate-Smart Agriculture & Food Technology',
    approvedBy: 'MoPSE Agricultural Science Board',
    totalChapters: 6,
    chapters: [
      {
        chapterNumber: 1,
        title: 'Soil Conservation & Keyhole Gardening',
        keyConcepts: ['Soil organic matter', 'Composting (Mupfudze)', 'Keyhole bed construction', 'Water retention'],
        requiredResourcesNeeded: ['Organic manure', 'Local stones', 'Wire mesh central basket', 'Seedlings'],
        calaConnection: 'CALA 1: Build a keyhole garden bed at school and track vegetable growth for 14 days.'
      }
    ]
  }
];
