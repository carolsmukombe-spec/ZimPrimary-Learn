import { ProjectGuide, GradeLevel, SubjectCategory } from '../types/curriculum';

export const SAMPLE_PROJECTS: ProjectGuide[] = [
  {
    id: 'proj-g5-sci-1',
    title: 'Building a Simple Solar Water Heater Model',
    subject: 'Science & Technology',
    grade: 'Grade 5',
    term: 'Term 1',
    competencyFocus: 'Applying solar radiation energy to clean technology and water heating in Zimbabwe.',
    durationDays: 7,
    materialsNeeded: [
      '1 clear plastic bottle (1.5L or 2L recycled soft drink bottle)',
      'Black poster paint or black plastic sheet',
      'Small clear plastic tubing or straw',
      'Aluminum foil or shiny cereal box lining',
      'Cardboard shoe box',
      'Thermometer or water temperature record sheet'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Research & Planning',
        description: 'Investigate why black objects absorb heat faster than white objects in the sun. Write 3 sentences in your project workbook.',
        expectedDeliverable: 'Introductory notes on solar heat absorption.'
      },
      {
        stepNumber: 2,
        title: 'Model Construction',
        description: 'Line the shoe box with aluminum foil. Paint one side of the plastic bottle black and insert the tubing inside the foil reflector box.',
        expectedDeliverable: 'Assembled solar water heater prototype.'
      },
      {
        stepNumber: 3,
        title: 'Testing in Zimbabwean Sunlight',
        description: 'Fill bottle with cool water. Measure initial temperature. Place in direct midday sun for 2 hours. Measure final temperature.',
        expectedDeliverable: 'Temperature observation chart showing temperature increase.'
      },
      {
        stepNumber: 4,
        title: 'Evaluation & Conclusion',
        description: 'Explain how solar water heaters can help rural and urban households in Zimbabwe save electricity and wood.',
        expectedDeliverable: 'Summary report with photo or drawing of your solar model.'
      }
    ],
    assessmentRubric: [
      { criteria: 'Problem Identification & Materials Collection', maxMarks: 5 },
      { criteria: 'Model Design & Solar Panel Construction', maxMarks: 10 },
      { criteria: 'Data Collection & Temperature Log', maxMarks: 5 },
      { criteria: 'Presentation & Environmental Reflection', maxMarks: 5 }
    ]
  },
  {
    id: 'proj-g4-her-1',
    title: 'Family Heritage & Unhu Tree Portfolio',
    subject: 'Social Science',
    grade: 'Grade 4',
    term: 'Term 1',
    competencyFocus: 'Investigating family ancestry, totems (Mitupo / Izibongo), traditional proverbs, and community values.',
    durationDays: 10,
    materialsNeeded: [
      'A4 poster paper or cardboard box cut open',
      'Colored pencils, crayons, or markers',
      'Interviews with parents, grandparents, or guardians',
      'Old family photos or drawings'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Elders Interview',
        description: 'Interview your parents or elders to learn your Family Totem (Mutupo e.g., Shumba, Gumbo, Moyo, Mhofu, Nkomo) and origin story.',
        expectedDeliverable: 'Written transcript of 5 interview questions.'
      },
      {
        stepNumber: 2,
        title: 'Drawing the Heritage Tree',
        description: 'Draw a large baobab or acacia tree. Put Great Grandparents at roots, Grandparents on main branches, Parents on sub-branches, and You/Siblings on leaves.',
        expectedDeliverable: 'Artistic Family Heritage Tree diagram.'
      },
      {
        stepNumber: 3,
        title: 'Unhu / Ubuntu Values Section',
        description: 'List 3 traditional Zimbabwean proverbs (Tsumo / Izaga) that teach good character and respect.',
        expectedDeliverable: '3 proverbs with explanations in English and Indigenous language.'
      }
    ],
    assessmentRubric: [
      { criteria: 'Elder Interview Quality & Totem Record', maxMarks: 5 },
      { criteria: 'Heritage Tree Organization & Visual Artistry', maxMarks: 10 },
      { criteria: 'Proverbs & Unhu Values Explanation', maxMarks: 5 },
      { criteria: 'Classroom Oral Presentation', maxMarks: 5 }
    ]
  },
  {
    id: 'proj-g7-agri-1',
    title: 'Keyhole Garden & Soil Moisture Retention Trial',
    subject: 'Agriculture & Food Tech',
    grade: 'Grade 7',
    term: 'Term 2',
    competencyFocus: 'Designing drought-resistant, water-conserving agricultural systems for climate resilience in Zimbabwe.',
    durationDays: 14,
    materialsNeeded: [
      'Bricks, stones, or wooden poles',
      'Organic compost (mupfudze), soil, dry leaves',
      'Central mesh or basket tube made from wire/reeds',
      'Spinach or covo vegetable seedlings'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Site Preparation & Layout',
        description: 'Design a circular raised garden bed with a keyhole notch and a central compost tube that delivers moisture directly to roots.',
        expectedDeliverable: 'Dimensioned sketch of Keyhole Garden.'
      },
      {
        stepNumber: 2,
        title: 'Building & Soil Preparation',
        description: 'Build stone outer wall. Fill with alternating layers of manure, compost, and soil. Insert central watering basket.',
        expectedDeliverable: 'Completed keyhole bed ready for planting.'
      },
      {
        stepNumber: 3,
        title: 'Planting & Growth Measurement',
        description: 'Plant seedlings. Water through central tube using kitchen greywater (soapy water strained through sand). Measure leaf height weekly.',
        expectedDeliverable: '2-week vegetable growth chart.'
      }
    ],
    assessmentRubric: [
      { criteria: 'Keyhole Design & Climate Resilience Rationale', maxMarks: 5 },
      { criteria: 'Construction Quality & Central Watering Tube', maxMarks: 10 },
      { criteria: 'Plant Growth Data & Moisture Measurements', maxMarks: 5 },
      { criteria: 'Final Project Report & CALA Documentation', maxMarks: 5 }
    ]
  }
];

export function getProjectsForGradeAndSubject(grade: GradeLevel, subject: SubjectCategory): ProjectGuide[] {
  const direct = SAMPLE_PROJECTS.filter(p => {
    if (p.grade !== grade) return false;
    if (p.subject === subject) return true;
    if (subject === 'Shona / Indigenous Languages' && (p.subject as string).includes('Indigenous')) return true;
    if (subject === 'Social Science' && (p.subject as string).includes('Heritage')) return true;
    return false;
  });

  if (direct.length > 0) return direct;

  return [generateDynamicProject(grade, subject)];
}

function generateDynamicProject(grade: GradeLevel, subject: SubjectCategory): ProjectGuide {
  return {
    id: `proj-${grade.toLowerCase().replace(/\s+/g, '')}-${subject.toLowerCase().replace(/[^a-z]/g, '')}`,
    title: `${grade} ${subject} Practical CALA Project`,
    subject: subject,
    grade: grade,
    term: 'Term 1',
    competencyFocus: `Hands-on school project investigating ${subject} applications in local Zimbabwean communities.`,
    durationDays: 7,
    materialsNeeded: [
      'A4 exercise book or project file',
      'Local recycled materials (cardboard, plastic bottles, wire, river clay, or plant specimens)',
      'Colored pencils, markers, or ruler',
      'Interviews with family members, local elders, or teachers'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Planning & Problem Definition',
        description: `Define the core problem or topic in ${subject} for ${grade}. Write a 3-sentence introduction in your project file.`,
        expectedDeliverable: 'Project title, aims, and materials list.'
      },
      {
        stepNumber: 2,
        title: 'Information Gathering & Practical Action',
        description: 'Collect local data, interview family/community members, or construct a simple model or specimen collection.',
        expectedDeliverable: 'Data observation table or constructed model.'
      },
      {
        stepNumber: 3,
        title: 'Reflection & Presentation',
        description: `Explain how this project reflects Unhu / Ubuntu values and helps improve community life in Zimbabwe.`,
        expectedDeliverable: 'Final report with photos or drawings and oral presentation.'
      }
    ],
    assessmentRubric: [
      { criteria: 'Problem Identification & Materials Collection', maxMarks: 5 },
      { criteria: 'Practical Execution & Model/Data Quality', maxMarks: 10 },
      { criteria: 'Unhu Values & Local Community Connection', maxMarks: 5 },
      { criteria: 'Presentation & Documentation', maxMarks: 5 }
    ]
  };
}
