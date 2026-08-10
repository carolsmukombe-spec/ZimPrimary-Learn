import { GradeLevel, SubjectCategory } from '../types/curriculum';

export interface SyllabusSubject {
  category: SubjectCategory;
  aims: string[];
  keyCompetencies: string[];
  topics: {
    title: string;
    subtopics: string[];
    learningObjectives: string[];
    heritageIntegration: string;
  }[];
}

export interface GradeSyllabus {
  grade: GradeLevel;
  stage: 'Infant School' | 'Junior School';
  description: string;
  subjects: SyllabusSubject[];
}

export const ALL_CORE_SUBJECTS: { category: SubjectCategory; title: string; icon: string; description: string }[] = [
  { category: 'Mathematics', title: 'Mathematics', icon: '🔢', description: 'Numeracy, shapes, measurements, place value, ZIMSEC problem solving' },
  { category: 'English Language', title: 'English Language', icon: '📖', description: 'Phonics, vocabulary, comprehension, grammar, and composition writing' },
  { category: 'Science & Technology', title: 'Science & Technology', icon: '🔬', description: 'Living things, water cycle, energy, ICT hardware, and experiments' },
  { category: 'Shona / Indigenous Languages', title: 'Shona & Indigenous Languages', icon: '🇿🇼', description: 'Ngano, tsumo, madimikira, verenga unyore, and cultural storytelling' },
  { category: 'Social Science', title: 'Social Science (Heritage)', icon: '🏛️', description: 'Unhu/Ubuntu values, Zimbabwean monuments, heroes, and governance' },
  { category: 'Physical Education', title: 'Physical Education (PE)', icon: '⚽', description: 'Gymnastics, athletics, team games, safety, and physical fitness' },
  { category: 'Visual & Performing Arts', title: 'Visual & Performing Arts', icon: '🎨', description: 'Music, traditional dance (Muchongoyo, Jerusarema), drawing, and craft' },
  { category: 'Agriculture & Food Tech', title: 'Agriculture & Food Tech', icon: '🌱', description: 'Crop farming, soil preparation, livestock care, keyhole beds, and food tech' }
];

export const ZIM_SYLLABUSES: GradeSyllabus[] = [
  // --- ECD A ---
  {
    grade: 'ECD A',
    stage: 'Infant School',
    description: 'Early Childhood Development A (Ages 3-4): Play-based foundational learning, sensory exploration, early counting, mother-tongue rhymes, and motor skills.',
    subjects: [
      {
        category: 'Mathematics',
        aims: ['Develop early counting skills (1-5)', 'Identify basic shapes and colors', 'Develop spatial awareness'],
        keyCompetencies: ['Counting 1 to 5', 'Matching & Sorting', 'Pattern recognition'],
        topics: [
          {
            title: 'Numbers and Counting (1-5)',
            subtopics: ['Counting local fruits & toys', 'Number rhymes in Shona/Ndebele', 'One-to-one matching'],
            learningObjectives: ['Count up to 5 objects using concrete local items', 'Recite number rhymes'],
            heritageIntegration: 'Using marula seeds, pebbles, and local stories for counting.'
          },
          {
            title: 'Shapes and Colors',
            subtopics: ['Circle, Square, Triangle', 'Red, Yellow, Blue, Green'],
            learningObjectives: ['Sort objects by shape and color'],
            heritageIntegration: 'Observing shapes in round rondavel huts and woven baskets.'
          }
        ]
      },
      {
        category: 'English Language',
        aims: ['Introduce English nursery sounds', 'Name common classroom objects'],
        keyCompetencies: ['Listening comprehension', 'Naming objects', 'Greeting in English'],
        topics: [
          {
            title: 'First Words & Greetings',
            subtopics: ['Good morning / Good afternoon', 'Classroom items (ball, book, chair)'],
            learningObjectives: ['Respond to simple greetings', 'Name 5 familiar objects in English'],
            heritageIntegration: 'Pairing English greetings with respectful gestures.'
          }
        ]
      },
      {
        category: 'Science & Technology',
        aims: ['Explore immediate natural environment', 'Develop body awareness and hygiene'],
        keyCompetencies: ['Five senses', 'Personal cleanliness', 'Plant and animal observation'],
        topics: [
          {
            title: 'My Body & Cleanliness',
            subtopics: ['Body parts', 'Washing hands with soap before meals', 'Domestic animals'],
            learningObjectives: ['Identify eye, ear, hand, mouth', 'Demonstrate proper handwashing'],
            heritageIntegration: 'Respecting hygiene before eating sadza with hands.'
          }
        ]
      },
      {
        category: 'Shona / Indigenous Languages',
        aims: ['Build oral communication skills', 'Develop listening and storytelling abilities'],
        keyCompetencies: ['Phonemic awareness', 'Vocabulary building', 'Expressing feelings'],
        topics: [
          {
            title: 'Ngano neDzinesu (Storytelling & Rhymes)',
            subtopics: ['Family words (Amai, Baba, Gogo)', 'Traditional nursery rhymes'],
            learningObjectives: ['Express self clearly in mother tongue', 'Listen and retell simple traditional stories'],
            heritageIntegration: 'Traditional folktales (Ngano) about Hare (Tsuro) and Baboon (Gudo).'
          }
        ]
      },
      {
        category: 'Social Science',
        aims: ['Understand family relations', 'Promote Unhu/Ubuntu values'],
        keyCompetencies: ['Respect', 'Sharing', 'Knowing family roles'],
        topics: [
          {
            title: 'My Family & Unhu/Ubuntu',
            subtopics: ['Greeting elders (Kugona kukwazisa)', 'Sharing toys with friends'],
            learningObjectives: ['Practice respectful greetings in local culture', 'Identify family members'],
            heritageIntegration: 'Clapping hands (Kuchomera/Kuwombera) when greeting elders.'
          }
        ]
      },
      {
        category: 'Physical Education',
        aims: ['Develop gross motor skills', 'Balance and coordination games'],
        keyCompetencies: ['Running, jumping, catching', 'Body balance', 'Playground safety'],
        topics: [
          {
            title: 'Basic Movement & Play',
            subtopics: ['Walking on straight line', 'Hopping and jumping', 'Catching large soft ball'],
            learningObjectives: ['Demonstrate spatial balance', 'Follow simple play rules safely'],
            heritageIntegration: 'Traditional outdoor chasing games (Nhodo / Pada / Mahumbwe).'
          }
        ]
      },
      {
        category: 'Visual & Performing Arts',
        aims: ['Express creativity through drawing and singing', 'Develop fine motor rhythm'],
        keyCompetencies: ['Scribbling & coloring', 'Singing local children songs', 'Rhythmic clapping'],
        topics: [
          {
            title: 'Coloring & Traditional Songs',
            subtopics: ['Coloring native animals', 'Clapping to drum rhythms', 'Clay modeling basics'],
            learningObjectives: ['Hold crayon comfortably', 'Sing 3 local nursery rhymes together'],
            heritageIntegration: 'Molding cattle and birds out of river clay (daga).'
          }
        ]
      }
    ]
  },

  // --- ECD B ---
  {
    grade: 'ECD B',
    stage: 'Infant School',
    description: 'Early Childhood Development B (Ages 4-5): Readiness for Grade 1, counting 1-10, phonics sounds, environmental care, and physical coordination.',
    subjects: [
      {
        category: 'Mathematics',
        aims: ['Extend counting to 10', 'Understand simple addition concepts', 'Compare quantities'],
        keyCompetencies: ['Counting 1-10', 'Comparing heavy/light', 'Simple addition with counters'],
        topics: [
          {
            title: 'Numbers 1 to 10 & Sorting',
            subtopics: ['Counting objects 1-10', 'Writing numerals', 'More or less'],
            learningObjectives: ['Count and write numbers 1 to 10', 'Combine two sets of objects'],
            heritageIntegration: 'Counting cattle, goats, or maize cobs in rural and urban settings.'
          }
        ]
      },
      {
        category: 'English Language',
        aims: ['Build early English vocabulary', 'Phonics & letter sounds (a-z)'],
        keyCompetencies: ['Greetings in English', 'Identifying classroom items', 'Basic phonics'],
        topics: [
          {
            title: 'Phonics & Basic Words',
            subtopics: ['Sounds /a/ to /z/', 'Object names (cat, mat, sun, tree)'],
            learningObjectives: ['Recognize letter sounds', 'Follow simple 2-step instructions'],
            heritageIntegration: 'Relating English animal names to Zimbabwean wildlife.'
          }
        ]
      },
      {
        category: 'Science & Technology',
        aims: ['Appreciate plants and food sources', 'Understand rain and water conservation'],
        keyCompetencies: ['Identifying crops', 'Watering plants', 'Healthy eating'],
        topics: [
          {
            title: 'Plants and Gardening',
            subtopics: ['Maize, groundnuts, mangoes', 'Watering seedling beds'],
            learningObjectives: ['Identify staple crops of Zimbabwe', 'Demonstrate watering small plants'],
            heritageIntegration: 'Importance of maize (chibage) as Zimbabwe staple food.'
          }
        ]
      },
      {
        category: 'Shona / Indigenous Languages',
        aims: ['Enhance indigenous vocabulary and pronunciation', 'Poetry and rhymes'],
        keyCompetencies: ['Oral fluency', 'Listening skills', 'Naming local trees and animals'],
        topics: [
          {
            title: 'Nhetembo dzevana (Children Poetry)',
            subtopics: ['Naming animals in Shona', 'Short children poems'],
            learningObjectives: ['Recite short indigenous poems with correct intonation'],
            heritageIntegration: 'Learning names of native birds and wild animals.'
          }
        ]
      },
      {
        category: 'Social Science',
        aims: ['Community helpers awareness', 'Good manners and hygiene'],
        keyCompetencies: ['Helper roles', 'Sharing', 'Sanitation practices'],
        topics: [
          {
            title: 'Helpers in Our Community',
            subtopics: ['Teachers, Nurses, Farmers, Drivers', 'Helping at home'],
            learningObjectives: ['Identify roles of 4 community helpers', 'State home duties'],
            heritageIntegration: 'Helping elders with light household chores (Mubato).'
          }
        ]
      },
      {
        category: 'Physical Education',
        aims: ['Obstacle courses and coordination', 'Body agility'],
        keyCompetencies: ['Throwing & catching', 'Obstacle navigation', 'Teamwork'],
        topics: [
          {
            title: 'Agility & Outdoor Games',
            subtopics: ['Running between cones', 'Throwing beanbags into hoops'],
            learningObjectives: ['Throw beanbag accurately into target 2 meters away'],
            heritageIntegration: 'Traditional group games promoting camaraderie.'
          }
        ]
      },
      {
        category: 'Visual & Performing Arts',
        aims: ['Percussion instruments and creative drawing', 'Roleplay'],
        keyCompetencies: ['Playing shakers/hosho', 'Coloring within borders'],
        topics: [
          {
            title: 'Percussion & Creative Drawing',
            subtopics: ['Playing rattles/hosho', 'Drawing family members'],
            learningObjectives: ['Keep time with hosho or drumbeat', 'Draw recognizable human figures'],
            heritageIntegration: 'Making hosho from dry gourds and seeds.'
          }
        ]
      }
    ]
  },

  // --- GRADE 1 ---
  {
    grade: 'Grade 1',
    stage: 'Infant School',
    description: 'Grade 1 (Ages 5-6): Formal literacy and numeracy foundation, addition/subtraction to 20, national flag & symbols, science of living things.',
    subjects: [
      {
        category: 'Mathematics',
        aims: ['Master addition & subtraction to 20', 'Place value (Tens & Units)', 'Identify ZiG coins and notes'],
        keyCompetencies: ['Place value up to 20', 'Basic word problems', 'Money counting'],
        topics: [
          {
            title: 'Numbers to 20 & ZiG Money',
            subtopics: ['Counting 1-20', 'Tens and Units', 'ZiG cash recognition'],
            learningObjectives: ['Add and subtract numbers up to 20', 'Identify Zimbabwean currency coins'],
            heritageIntegration: 'Buying healthy fruit at the local tuckshop (chitoro).'
          }
        ]
      },
      {
        category: 'English Language',
        aims: ['Read 3-4 letter CVC words', 'Write clear sentences', 'Comprehension of short passages'],
        keyCompetencies: ['Sight word reading', 'Handwriting', 'Simple story comprehension'],
        topics: [
          {
            title: 'Sentence Building & Reading',
            subtopics: ['CVC words (cat, dog, pin)', 'Punctuation basics', 'My Family story'],
            learningObjectives: ['Read short passages aloud', 'Write 3 complete sentences'],
            heritageIntegration: 'Stories reflecting Zimbabwean school and village life.'
          }
        ]
      },
      {
        category: 'Science & Technology',
        aims: ['Identify living and non-living things', 'Weather basics and water safety'],
        keyCompetencies: ['Observation', 'Classification', 'Hygiene rules'],
        topics: [
          {
            title: 'Living Things & Weather',
            subtopics: ['Plants vs animals', 'Sunny, rainy, windy days', 'Safe drinking water'],
            learningObjectives: ['Classify 10 objects into living and non-living', 'Record weather daily'],
            heritageIntegration: 'Protecting natural water wells (zvisipiti).'
          }
        ]
      },
      {
        category: 'Shona / Indigenous Languages',
        aims: ['Master alphabet sounds in Shona/Ndebele', 'Reading simple texts'],
        keyCompetencies: ['Inogona kuverenga', 'Tsumo dzekutanga', 'Unhu mumaverengero'],
        topics: [
          {
            title: 'Verenga Unyore (Reading & Writing)',
            subtopics: ['A-E-I-O-U mhanzi dzinotsanangura', 'Verenga mazwi mashoma'],
            learningObjectives: ['Read grade 1 indigenous texts accurately', 'Write clear Shona letters'],
            heritageIntegration: 'Learning traditional proverbs and greetings.'
          }
        ]
      },
      {
        category: 'Social Science',
        aims: ['Understand national identity', 'Recognize Zimbabwe Flag & Monuments'],
        keyCompetencies: ['National Flag colors', 'National Anthem', 'Community helpers'],
        topics: [
          {
            title: 'National Symbols & Heritage',
            subtopics: ['Colors of Zimbabwe Flag', 'Great Zimbabwe Monument', 'Community Helpers'],
            learningObjectives: ['Recite meaning of Flag colors', 'Explain significance of Great Zimbabwe'],
            heritageIntegration: 'Gold, Green, Red, Black, White, and the Zimbabwe Bird (Hungwe).'
          }
        ]
      },
      {
        category: 'Physical Education',
        aims: ['Basic athletics and gymnastics movements', 'Safety rules'],
        keyCompetencies: ['50m sprint', 'Forward roll', 'Passing ball'],
        topics: [
          {
            title: 'Introductory Athletics & Gymnastics',
            subtopics: ['Sprinting stance', 'Gymnastic balance', 'Team relay races'],
            learningObjectives: ['Perform forward roll safely on a mat', 'Participate in relay race'],
            heritageIntegration: 'Traditional energetic children games.'
          }
        ]
      },
      {
        category: 'Visual & Performing Arts',
        aims: ['Exploring textures, colors, and indigenous music', 'Drama'],
        keyCompetencies: ['Primary colors', 'Mbira/marimba sound recognition', 'Creative drama'],
        topics: [
          {
            title: 'Indigenous Music & Visual Art',
            subtopics: ['Recognizing Marimba and Mbira', 'Drawing local trees and birds'],
            learningObjectives: ['Identify Marimba musical instrument', 'Mix primary colors'],
            heritageIntegration: 'Appreciating Zimbabwean marimba and mbira cultural music.'
          }
        ]
      }
    ]
  },

  // --- GRADE 2 ---
  {
    grade: 'Grade 2',
    stage: 'Infant School',
    description: 'Grade 2 (Ages 6-7): Consolidating Infant School skills, numbers to 100, skip counting, environmental science, and creative performing arts.',
    subjects: [
      {
        category: 'Mathematics',
        aims: ['Numbers up to 100', 'Skip counting by 2, 5, 10', 'Basic 2D/3D shapes and time'],
        keyCompetencies: ['Place value to 100', 'Intro to multiplication', 'Telling time'],
        topics: [
          {
            title: 'Numbers to 100 & Clock Time',
            subtopics: ['Expanded form (45 = 40 + 5)', 'Analogue clock reading', 'Tally charts'],
            learningObjectives: ['Represent numbers up to 100', 'Tell time on analogue clock to the hour'],
            heritageIntegration: 'Daily routines in Zimbabwe (sunrise, school time, chores).'
          }
        ]
      },
      {
        category: 'English Language',
        aims: ['Fluent oral reading', 'Capital letters and full stops', 'Descriptive vocabulary'],
        keyCompetencies: ['Reading fluency', 'Punctuation', 'Spelling 50 sight words'],
        topics: [
          {
            title: 'Reading Fluency & Paragraphs',
            subtopics: ['Describing my pet / my school', 'Plural words (-s, -es)', 'Action verbs'],
            learningObjectives: ['Write a 4-sentence paragraph with correct punctuation'],
            heritageIntegration: 'Describing local animals and school environments.'
          }
        ]
      },
      {
        category: 'Science & Technology',
        aims: ['Understand materials and weather', 'Uses of water and soil conservation'],
        keyCompetencies: ['Weather chart recording', 'Solids & liquids', 'Water saving'],
        topics: [
          {
            title: 'Weather Seasons & Materials',
            subtopics: ['Rainy, Sunny, Cold seasons in Zim', 'Water conservation methods'],
            learningObjectives: ['Record daily weather in chart', 'State 4 ways to save clean water'],
            heritageIntegration: 'Traditional rainmaking traditions (Mukwerera) and water storage.'
          }
        ]
      },
      {
        category: 'Shona / Indigenous Languages',
        aims: ['Composition of short Shona passages', 'Unhu values in communication'],
        keyCompetencies: ['Nhetembo', 'Madimikira', 'Kunyora tsamba duku'],
        topics: [
          {
            title: 'Tsika neMagariro',
            subtopics: ['Rondedzero duku', 'Kuremekedza vakuru', 'Zvirahwe (Riddles)'],
            learningObjectives: ['Solve 5 traditional Shona riddles (Zvirahwe)', 'Write short essay'],
            heritageIntegration: 'Zvirahwe (traditional riddles) promoting critical thinking.'
          }
        ]
      },
      {
        category: 'Social Science',
        aims: ['My School and My Village / Town', 'Rules and Road Safety'],
        keyCompetencies: ['Traffic signals', 'School rules', 'Local leadership'],
        topics: [
          {
            title: 'Road Safety & Local Leadership',
            subtopics: ['Pedestrian crossing & traffic lights', 'Chiefs, Headmen, Ward Councillors'],
            learningObjectives: ['Demonstrate road crossing safety', 'Identify role of Sabhuku/Headman'],
            heritageIntegration: 'Respect for traditional leaders (Madzisabhuku).'
          }
        ]
      },
      {
        category: 'Physical Education',
        aims: ['Ball handling and gymnastics routines'],
        keyCompetencies: ['Dribbling ball', 'Balance beam', 'Team strategy'],
        topics: [
          {
            title: 'Ball Skills & Balance',
            subtopics: ['Soccer kick and pass', 'Netball chest pass', 'Rhythmic gymnastics'],
            learningObjectives: ['Pass soccer/netball to partner accurately 5 times'],
            heritageIntegration: 'School sporting competitions (NAPH).'
          }
        ]
      },
      {
        category: 'Visual & Performing Arts',
        aims: ['Traditional dances and clay sculpting'],
        keyCompetencies: ['Dance steps', 'Texture sculpting', 'Dramatic skits'],
        topics: [
          {
            title: 'Traditional Dance & Craft',
            subtopics: ['Basic Muchongoyo or Jerusarema steps', 'Making clay pots'],
            learningObjectives: ['Perform basic traditional dance step in rhythm'],
            heritageIntegration: 'UNESCO recognized Jerusarema Mbende dance heritage.'
          }
        ]
      }
    ]
  },

  // --- GRADE 3 ---
  {
    grade: 'Grade 3',
    stage: 'Junior School',
    description: 'Grade 3 (Ages 7-8): Transition to Junior School curriculum. Numbers to 1,000, fractions, formal science experimentation, ICT basics, and Agriculture foundation.',
    subjects: [
      {
        category: 'Mathematics',
        aims: ['Numbers to 1000', 'Fractions (halves, quarters, thirds)', '4 basic operations (+, -, x, /)'],
        keyCompetencies: ['Long addition & subtraction', 'Multiplication tables 2-10', 'Fraction shade'],
        topics: [
          {
            title: 'Numbers to 1000 & Fractions',
            subtopics: ['Place value Hundreds, Tens, Units', 'Equivalent fractions', 'Perimeter of shapes'],
            learningObjectives: ['Order numbers up to 1000', 'Add fractions with same denominator'],
            heritageIntegration: 'Dividing harvests or sadza portions equally among family members.'
          }
        ]
      },
      {
        category: 'English Language',
        aims: ['Comprehension passage inference', 'Nouns, verbs, adjectives', 'Short story writing'],
        keyCompetencies: ['Grammar identification', 'Creative writing', 'Dictionary skills'],
        topics: [
          {
            title: 'Grammar & Creative Stories',
            subtopics: ['Proper and common nouns', 'Past tense of irregular verbs', 'My Best Friend essay'],
            learningObjectives: ['Identify parts of speech in sentences', 'Write a 6-sentence story'],
            heritageIntegration: 'Tales of rural adventures and city visits.'
          }
        ]
      },
      {
        category: 'Science & Technology',
        aims: ['Study plants, animals, soil and simple energy forms'],
        keyCompetencies: ['Germination process', 'Soil types (Clay, Sand, Loam)', 'Simple electric circuits'],
        topics: [
          {
            title: 'Plants, Soils & Energy',
            subtopics: ['Parts of a flowering plant', 'Soil types in Zimbabwe', 'Light and Sound sources'],
            learningObjectives: ['Identify loam, clay, and sand soil properties', 'Demonstrate plant germination'],
            heritageIntegration: 'Indigenous trees of Zimbabwe (Baobab/Muuyu, Musasa).'
          }
        ]
      },
      {
        category: 'Shona / Indigenous Languages',
        aims: ['Deepen Shona reading, grammar, and traditional proverbs'],
        keyCompetencies: ['Tsumo', 'Madimikira', 'Rondedzero yeruzivo'],
        topics: [
          {
            title: 'Tsumo neMadimikira muna Grade 3',
            subtopics: ['Tsumo dzekutanga nekushandiswa kwadzo', 'Rondedzero: Zuva reMusi Wevhu'],
            learningObjectives: ['Use 5 traditional proverbs correctly in sentences'],
            heritageIntegration: 'Preserving indigenous knowledge through proverbs.'
          }
        ]
      },
      {
        category: 'Social Science',
        aims: ['Zimbabwean natural resources and provincial map awareness'],
        keyCompetencies: ['Map reading', 'Resource management', 'Provincial capitals'],
        topics: [
          {
            title: 'Provinces & Natural Resources of Zimbabwe',
            subtopics: ['10 Provinces of Zimbabwe', 'Minerals (Gold, Chrome, Platinum)', 'Wildlife parks'],
            learningObjectives: ['Locate home province on Zimbabwe map', 'List 3 major minerals mined in Zim'],
            heritageIntegration: 'Appreciating Zimbabwe rich mineral wealth.'
          }
        ]
      },
      {
        category: 'Physical Education',
        aims: ['Track athletics, high jump basics, and sport strategy'],
        keyCompetencies: ['Sprinting technique', 'Scissor high jump', 'Volleyball catch-ball'],
        topics: [
          {
            title: 'Athletics & High Jump Techniques',
            subtopics: ['Baton passing in relays', 'Scissor jump over soft bar'],
            learningObjectives: ['Demonstrate clean baton exchange in relay race'],
            heritageIntegration: 'School inter-house athletic carnivals.'
          }
        ]
      },
      {
        category: 'Visual & Performing Arts',
        aims: ['Crafting woven items and traditional theater skits'],
        keyCompetencies: ['Weaving reeds/paper', 'Drama performance', 'Sound effects'],
        topics: [
          {
            title: 'Weaving & Heritage Drama',
            subtopics: ['Weaving paper mats/baskets', 'Dramatizing Ngano stories'],
            learningObjectives: ['Weave a simple patterned mat using local materials', 'Act in a class play'],
            heritageIntegration: 'Traditional basket weaving (Rukuse/Duku).'
          }
        ]
      }
    ]
  },

  // --- GRADE 4 ---
  {
    grade: 'Grade 4',
    stage: 'Junior School',
    description: 'Grade 4 (Ages 8-9): Expanding problem solving, decimals, human body systems, Zimbabwe history, ICT & computer coding concepts.',
    subjects: [
      {
        category: 'Mathematics',
        aims: ['Numbers up to 10,000', 'Decimals and percentages intro', 'Area and volume'],
        keyCompetencies: ['Multiplication 2-digit by 2-digit', 'Long division', 'Decimal addition'],
        topics: [
          {
            title: 'Whole Numbers & Decimals',
            subtopics: ['Place value to 10,000', 'Decimal tenths and hundredths', 'Area calculation (L x W)'],
            learningObjectives: ['Perform 4 operations on 4-digit numbers', 'Convert fractions to decimals'],
            heritageIntegration: 'Measuring land dimensions for communal gardens.'
          }
        ]
      },
      {
        category: 'English Language',
        aims: ['Direct and indirect speech', 'Formal letter writing', 'Comprehension strategies'],
        keyCompetencies: ['Report writing', 'Active/passive voice', 'Spelling mastery'],
        topics: [
          {
            title: 'Composition & Direct Speech',
            subtopics: ['Writing a report on a school trip', 'Quotation marks and dialogue'],
            learningObjectives: ['Punctuate direct speech correctly', 'Write a 120-word report'],
            heritageIntegration: 'Writing letters connecting urban and rural relatives.'
          }
        ]
      },
      {
        category: 'Science & Technology',
        aims: ['Human digestive system', 'Simple machines (lever, pulley, inclined plane)', 'Computer hardware'],
        keyCompetencies: ['Machine mechanical advantage', 'Digestion organs', 'Keyboarding'],
        topics: [
          {
            title: 'Simple Machines & Human Digestion',
            subtopics: ['Levers and wheelbarrows', 'Path of food through digestive tract', 'Mouse and keyboard ICT'],
            learningObjectives: ['Explain how a wheelbarrow makes work easier', 'Diagram the digestive system'],
            heritageIntegration: 'Traditional tools like mortars and pestles (Duri nemutswi).'
          }
        ]
      },
      {
        category: 'Shona / Indigenous Languages',
        aims: ['Advanced Shona grammar, rondedzero (compositions), and culture'],
        keyCompetencies: ['Nyaya dzechinyakare', 'Zvirahwe zvemhando yepamusoro', 'Rondedzero'],
        topics: [
          {
            title: 'Rondedzero neRuzivo rweChivanhu',
            subtopics: ['Kunyora rondedzero: Zuva randisingakanganwi', 'Tsika dzekuwanana nekuroora'],
            learningObjectives: ['Write a 150-word well-structured Shona composition'],
            heritageIntegration: 'Cultural customs and respect during family ceremonies.'
          }
        ]
      },
      {
        category: 'Social Science',
        aims: ['Pre-colonial and colonial history of Zimbabwe', 'Heroes and National Monuments'],
        keyCompetencies: ['Great Zimbabwe civilization', 'First Chimurenga heroes', 'Constitution basics'],
        topics: [
          {
            title: 'Zimbabwe Heritage & Monuments',
            subtopics: ['Monuments: Khami Ruins, Great Zimbabwe, Victoria Falls', 'Heroes (Mbuya Nehanda, Sekuru Kaguvi)'],
            learningObjectives: ['Describe dry stone walling technique', 'List key historical heroes of Zimbabwe'],
            heritageIntegration: 'Dry stone wall building technique without mortar (Kuvaka nemabwe).'
          }
        ]
      },
      {
        category: 'Physical Education',
        aims: ['Team sports rules (Soccer, Netball, Volleyball) and fitness testing'],
        keyCompetencies: ['Positional play', 'Referee signals', 'Endurance running'],
        topics: [
          {
            title: 'Team Sport Rules & Fitness',
            subtopics: ['Soccer offside and fouls', 'Netball footwork rule', '1000m endurance run'],
            learningObjectives: ['Explain offside rule in soccer or footwork in netball'],
            heritageIntegration: 'Fair play and unhu sportsmanship.'
          }
        ]
      },
      {
        category: 'Visual & Performing Arts',
        aims: ['Wire model crafting (making wire cars/toys) and musical composition'],
        keyCompetencies: ['Wire craft', 'Rhythm notation', 'Costume design'],
        topics: [
          {
            title: 'Wire Crafting & Indigenous Music',
            subtopics: ['Making toy cars from recycled wire', 'Playing 4-note tunes on Marimba'],
            learningObjectives: ['Construct a functional wire toy car with rolling wheels'],
            heritageIntegration: 'Zimbabwean wire craft ingenuity (Mota dzewaya).'
          }
        ]
      }
    ]
  },

  // --- GRADE 5 ---
  {
    grade: 'Grade 5',
    stage: 'Junior School',
    description: 'Grade 5 (Ages 9-10): Intermediate Junior School, numbers to 100,000, water cycle, renewable energy, Zimbabwean geography, and CALA project work.',
    subjects: [
      {
        category: 'Mathematics',
        aims: ['Numbers up to 100,000', 'Percentages, ratio and proportion', 'Angles & Geometry'],
        keyCompetencies: ['Ratio simplification', 'Percentage calculations', 'Protractor angle measurement'],
        topics: [
          {
            title: 'Percentages, Ratios & Geometry',
            subtopics: ['Finding percentage of quantity', 'Ratio sharing', 'Acute, Right, Obtuse angles'],
            learningObjectives: ['Calculate percentage profit/loss', 'Measure and classify angles'],
            heritageIntegration: 'Calculating crop yields and sharing produce in cooperatives.'
          }
        ]
      },
      {
        category: 'English Language',
        aims: ['Formal letter writing, descriptive essays, advanced comprehension'],
        keyCompetencies: ['Letter formats', 'Tense consistency', 'Idioms and similes'],
        topics: [
          {
            title: 'Letter Writing & Comprehension Skills',
            subtopics: ['Writing a letter to a friend about holidays', 'Descriptive essay: A Day at Victoria Falls'],
            learningObjectives: ['Write a 150-word formal/informal letter with correct layout'],
            heritageIntegration: 'Promoting local eco-tourism destinations in Zimbabwe.'
          }
        ]
      },
      {
        category: 'Science & Technology',
        aims: ['Water cycle, solar energy, water purification, Scratch block coding'],
        keyCompetencies: ['Solar panel operation', 'Water cycle stages', 'Block coding algorithms'],
        topics: [
          {
            title: 'Water Cycle & Solar Energy Tech',
            subtopics: ['Evaporation, condensation, precipitation', 'Solar panels and clean power', 'Scratch coding algorithms'],
            learningObjectives: ['Explain the 4 stages of the water cycle', 'Describe solar water heating'],
            heritageIntegration: 'Abundant sunshine in Zimbabwe as a green energy source.'
          }
        ]
      },
      {
        category: 'Shona / Indigenous Languages',
        aims: ['Nhetembo dzekuimba, tsumo dzakadzama, rondedzero dzebvunzo'],
        keyCompetencies: ['Kushandisa tsumo murondedzero', 'Zvirevo zvakachenjera', 'Nzvisisa'],
        topics: [
          {
            title: 'Tsika, Tsumo neMunyorio waGrade 5',
            subtopics: ['Tsumo nemadimikira pakunyora', 'Nzvisisa panyaya yelocal farming'],
            learningObjectives: ['Incorporate at least 3 proverbs naturally in a Shona narrative'],
            heritageIntegration: 'Preserving ancestral wisdom through rich linguistic idioms.'
          }
        ]
      },
      {
        category: 'Social Science',
        aims: ['Governance, National symbols, Trade in SADCC region'],
        keyCompetencies: ['Government branches', 'Regional trade', 'Environmental protection'],
        topics: [
          {
            title: 'Governance & Regional Cooperation',
            subtopics: ['Executive, Legislature, Judiciary', 'SADC neighboring countries (Zambia, Mozambique, SA, Botswana)'],
            learningObjectives: ['Name the 3 arms of government', 'Identify Zimbabwe export commodities'],
            heritageIntegration: 'Promoting peaceful pan-African trade and solidarity.'
          }
        ]
      },
      {
        category: 'Physical Education',
        aims: ['Advanced athletics, cricket/rounders basics, swimming safety'],
        keyCompetencies: ['Cricket batting/bowling', 'Swimming flotation', 'First aid basics'],
        topics: [
          {
            title: 'Striking Games & Swimming Safety',
            subtopics: ['Cricket batting stance and bowling action', 'Water safety and flotation'],
            learningObjectives: ['Demonstrate correct cricket batting grip', 'Perform back float in water'],
            heritageIntegration: 'Zimbabwean world-class cricket and swimming achievements.'
          }
        ]
      },
      {
        category: 'Visual & Performing Arts',
        aims: ['Stone carving techniques (Soapstone modeling) and choral music'],
        keyCompetencies: ['Stone carving safety', '3-part harmony singing', 'Art exhibition'],
        topics: [
          {
            title: 'Sculpture & Choral Music',
            subtopics: ['Shona soapstone sculpture traditions', 'Singing National Anthem in 3 parts'],
            learningObjectives: ['Carve a simple animal motif from soft clay or soapstone'],
            heritageIntegration: 'World renowned Shona Sculpture art movement (Chapungu).'
          }
        ]
      }
    ]
  },

  // --- GRADE 6 ---
  {
    grade: 'Grade 6',
    stage: 'Junior School',
    description: 'Grade 6 (Ages 10-11): Pre-ZIMSEC preparation. Advanced operations, algebra intro, electric circuits, Zimbabwe governance, environmental management.',
    subjects: [
      {
        category: 'Mathematics',
        aims: ['Numbers to 1,000,000', 'Speed, distance, time', 'Simple equations & algebra'],
        keyCompetencies: ['Speed formula (S = D/T)', 'Averages', 'Solving 1-step equations'],
        topics: [
          {
            title: 'Speed, Distance, Time & Algebra',
            subtopics: ['Calculating speed in km/h', 'Mean, median, mode', 'Solving x + 5 = 12'],
            learningObjectives: ['Solve real-world speed word problems', 'Calculate mean score from data set'],
            heritageIntegration: 'Calculating travel distance between Harare, Bulawayo, Mutare, Gweru.'
          }
        ]
      },
      {
        category: 'English Language',
        aims: ['Report writing, argumentative essays, advanced comprehension'],
        keyCompetencies: ['Argumentative writing', 'Grammar precision', 'Vocabulary antonyms/synonyms'],
        topics: [
          {
            title: 'Report & Argumentative Writing',
            subtopics: ['Debate topic: Boarding school vs Day school', 'Comprehension analysis'],
            learningObjectives: ['Write a 180-word balanced argument essay', 'Answer inference questions accurately'],
            heritageIntegration: 'Debating issues affecting youth and education in Zimbabwe.'
          }
        ]
      },
      {
        category: 'Science & Technology',
        aims: ['Human circulatory system, electric circuits, ecosystems, computer software'],
        keyCompetencies: ['Heart and blood vessels', 'Series and parallel circuits', 'Food webs'],
        topics: [
          {
            title: 'Circulatory System & Electricity',
            subtopics: ['Heart chambers and blood flow', 'Series vs parallel circuits', 'Python/Scratch basics'],
            learningObjectives: ['Diagram double circulatory system', 'Construct a circuit with switch and bulb'],
            heritageIntegration: 'Using locally available copper and batteries for experiments safely.'
          }
        ]
      },
      {
        category: 'Shona / Indigenous Languages',
        aims: ['Rondedzero dzekuenzanisa, tsumo nemadimikira, nhetembo dzepamusoro'],
        keyCompetencies: ['Nhetembo', 'Ukubala lokubhala', 'Kupindura mibvunzo yakaoma'],
        topics: [
          {
            title: 'Gadziriro yeRondedzero neUvaranomwe',
            subtopics: ['Rondedzero yeruzivo: Kudzivirira zvirwere', 'Tsumo dzakafanana kureva'],
            learningObjectives: ['Write a 200-word fluent Shona composition with advanced idioms'],
            heritageIntegration: 'Health and sanitation wisdom in local tradition.'
          }
        ]
      },
      {
        category: 'Social Science',
        aims: ['Second Chimurenga history, Constitution of Zimbabwe, Wildlife conservation'],
        keyCompetencies: ['Liberation war milestones', 'Constitutional rights', 'Anti-poaching'],
        topics: [
          {
            title: 'Liberation History & Constitution',
            subtopics: ['Second Chimurenga / Umvukela history', 'Fundamental human rights in Constitution', 'Hwange & Gonarezhou parks'],
            learningObjectives: ['Explain significance of Heroes Day', 'List 3 rights guaranteed in Constitution'],
            heritageIntegration: 'Honoring liberation war veterans and peace building.'
          }
        ]
      },
      {
        category: 'Physical Education',
        aims: ['Competitive track & field, gymnastics vaulting, outdoor survival camping'],
        keyCompetencies: ['Long jump technique', 'Vaulting box jump', 'Camp craft'],
        topics: [
          {
            title: 'Field Events & Outdoor Adventure',
            subtopics: ['Long jump hitch kick stance', 'Gymnastics vault', 'Tent pitching and knot tying'],
            learningObjectives: ['Perform hitch kick long jump landing in sand pit safely'],
            heritageIntegration: 'Bushcraft skills and survival in wild outdoors.'
          }
        ]
      },
      {
        category: 'Visual & Performing Arts',
        aims: ['Graphic design, poster making, theatrical productions'],
        keyCompetencies: ['Poster typography', 'Stage blocking', 'Lighting/sound design'],
        topics: [
          {
            title: 'Graphic Design & Theatre Production',
            subtopics: ['Designing anti-litter campaign poster', 'Staging a 10-minute historical play'],
            learningObjectives: ['Create a eye-catching awareness poster with clear slogan'],
            heritageIntegration: 'Using arts for community health and environmental awareness.'
          }
        ]
      }
    ]
  },

  // --- GRADE 7 ---
  {
    grade: 'Grade 7',
    stage: 'Junior School',
    description: 'Grade 7 (Ages 11-12): Final Primary ZIMSEC Examination Year. Full syllabus revision, past exam papers, mock tests, and mastery of all primary competencies.',
    subjects: [
      {
        category: 'Mathematics',
        aims: ['Complete Primary Mathematics Syllabus for ZIMSEC Paper 1 & Paper 2'],
        keyCompetencies: ['Problem solving', 'Data handling & bar graphs', 'Financial mathematics (ZiG/USD)'],
        topics: [
          {
            title: 'ZIMSEC Revision: Number, Money & Mensuration',
            subtopics: ['4 Operations mastery', 'Compound interest & profit', 'Volume of cuboids & cylinders'],
            learningObjectives: ['Achieve 100% accuracy on ZIMSEC Paper 1 multiple choice format', 'Solve structured Paper 2 problems'],
            heritageIntegration: 'ZIMSEC examination preparation strategies and unhu values.'
          }
        ]
      },
      {
        category: 'English Language',
        aims: ['ZIMSEC Paper 1 (Comprehension & Grammar) & Paper 2 (Composition & Guided Writing)'],
        keyCompetencies: ['Guided Composition (Letter/Report)', 'Comprehension inference', 'Grammar mastery'],
        topics: [
          {
            title: 'ZIMSEC Paper 1 & 2 Examination Mastery',
            subtopics: ['Reading comprehension tactics', 'Report writing on school projects', 'Register and idiom mastery'],
            learningObjectives: ['Write a 200-word structured composition with correct register', 'Score high marks in comprehension'],
            heritageIntegration: 'Expressing pride in Zimbabwean achievements and culture through narrative.'
          }
        ]
      },
      {
        category: 'Science & Technology',
        aims: ['ZIMSEC General Science & ICT Examination prep'],
        keyCompetencies: ['Scientific method', 'Reproduction in plants & animals', 'Environmental conservation'],
        topics: [
          {
            title: 'ZIMSEC Science & Tech Comprehensive',
            subtopics: ['Pollination & fertilization', 'Diseases & Prevention (Malaria, Cholera)', 'Renewable Tech'],
            learningObjectives: ['Identify disease vectors and prevention methods in Zimbabwe', 'Explain scientific principles clearly'],
            heritageIntegration: 'Health and sanitation practices in local communities.'
          }
        ]
      },
      {
        category: 'Shona / Indigenous Languages',
        aims: ['ZIMSEC Shona/Ndebele Paper 1 (Nhetembo, Inyanduko) & Paper 2 (Rondedzero)'],
        keyCompetencies: ['Tsumo neMadimikira', 'Rondedzero yeruzivo', 'Nhetembo'],
        topics: [
          {
            title: 'Gadziriro yeZIMSEC (Shona / Ndebele)',
            subtopics: ['Kushandiswa kweTsumo neMadimikira', 'Rondedzero (Inshoko)', 'Nzvisisa (Inzwisiso)'],
            learningObjectives: ['Write a top-tier ZIMSEC Shona composition with correct idioms', 'Answer all comprehension questions accurately'],
            heritageIntegration: 'Mubatanidzwa wetsika, unhu, tsika dzechivanhu dzemuZimbabwe.'
          }
        ]
      },
      {
        category: 'Social Science',
        aims: ['ZIMSEC Heritage Studies Paper 1 & 2'],
        keyCompetencies: ['National History, Governance, Natural Resources, Culture'],
        topics: [
          {
            title: 'ZIMSEC Heritage & Social Studies Final Master',
            subtopics: ['Second and Third Chimurenga', 'Government arms', 'Mining & Wildlife conservation'],
            learningObjectives: ['Explain arms of government', 'Describe wildlife protection at Hwange & Gonarezhou'],
            heritageIntegration: 'Protecting Zimbabwe national assets and wildlife heritage.'
          }
        ]
      },
      {
        category: 'Physical Education',
        aims: ['ZIMSEC PE, Sport & Mass Displays Examination syllabus'],
        keyCompetencies: ['Mass display choreography', 'Physical fitness assessment', 'Sport administration'],
        topics: [
          {
            title: 'ZIMSEC Physical Education & Mass Displays',
            subtopics: ['Choreographing a background display', 'Cardiovascular endurance testing', 'Sports first aid'],
            learningObjectives: ['Design a 16-count mass display routine with props', 'Explain RICE first aid for sprains'],
            heritageIntegration: 'Celebrating national events with patriotic mass display routines.'
          }
        ]
      },
      {
        category: 'Visual & Performing Arts',
        aims: ['ZIMSEC Visual & Performing Arts practical and theory exam'],
        keyCompetencies: ['Art criticism', 'Portfolio presentation', 'Musical composition'],
        topics: [
          {
            title: 'ZIMSEC Visual & Performing Arts Final Portfolio',
            subtopics: ['Analyzing traditional vs modern Zimbabwean art', 'Composing a 16-bar melody on Marimba'],
            learningObjectives: ['Present a completed creative arts portfolio', 'Identify features of Shona stone sculpture'],
            heritageIntegration: 'Promoting Zimbabwean artistic identity on world stages.'
          }
        ]
      }
    ]
  }
];
