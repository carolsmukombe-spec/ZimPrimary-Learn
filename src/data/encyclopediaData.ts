import { SubjectCategory } from '../types/curriculum';

export interface EncyclopediaArticle {
  id: string;
  title: string;
  shonaTitle?: string;
  ndebeleTitle?: string;
  subject: SubjectCategory;
  category: 'History & Heritage' | 'Natural Sciences' | 'Mathematics & Economy' | 'Culture & Language' | 'Agriculture & Ecology' | 'Technology & ICT' | 'Health & Physical Education';
  gradeRange: string;
  summary: string;
  fullArticle: string;
  keyFacts: string[];
  localZimbabweContext: string;
  relatedSyllabusTopics: string[];
  keyTerms: { term: string; definition: string }[];
  iconEmoji: string;
}

export const ENCYCLOPEDIA_ARTICLES: EncyclopediaArticle[] = [
  {
    id: 'enc-great-zimbabwe',
    title: 'Great Zimbabwe Monuments',
    shonaTitle: 'Masvingo aMambo (Great Zimbabwe)',
    ndebeleTitle: 'Rinsika ye Great Zimbabwe',
    subject: 'Social Science',
    category: 'History & Heritage',
    gradeRange: 'Grade 3 to Grade 7',
    summary: 'An ancient stone city built between the 11th and 15th centuries AD by Shona ancestors without mortar. It is the pride and origin of our country’s name, Zimbabwe (Dzimba dzaMabwe).',
    fullArticle: `Great Zimbabwe is one of the most famous archaeological monuments in Africa, located near Masvingo. Built by ancestors of the Shona people during the Kingdom of Zimbabwe (1100–1450 AD), the city was a center of international trade, cattle wealth, and royal governance.

The walls were built using granite blocks fitted together without any mortar or cement—a method known as dry-stone walling. The Great Enclosure features a Conical Tower standing over 10 metres high. Eight soapstone carved birds (the Zimbabwe Birds) were discovered at the site; one is proudly displayed on the National Flag and official ZiG currency.

The name "Zimbabwe" comes from the Shona phrase "Dzimba dzaMabwe" meaning "Houses of Stone". Great Zimbabwe demonstrates the high level of engineering, architectural skill, and organized governance of indigenous Africans long before colonization.`,
    keyFacts: [
      'Built between 1100 AD and 1450 AD by indigenous Shona ancestors.',
      'Constructed using dry-stone walling without mortar or cement.',
      'Contains the Conical Tower and Great Enclosure.',
      'Home to the 8 Soapstone Zimbabwe Birds (hungwe), a national emblem.',
      'Trade network extended to Sofala, Swahili coast, Arabia, and China.'
    ],
    localZimbabweContext: 'Located 30km from Masvingo city. Inspired our national name "Zimbabwe" and emblem on the flag.',
    relatedSyllabusTopics: ['Pre-Colonial Kingdoms', 'National Heritage & Symbols', 'Dry-Stone Walling'],
    keyTerms: [
      { term: 'Dzimba dzaMabwe', definition: 'Shona for "Houses of Stone", origin of the name Zimbabwe.' },
      { term: 'Dry-stone walling', definition: 'Building technique using neatly stacked stones without mortar.' },
      { term: 'Hungwe', definition: 'The Fish Eagle represented in the soapstone Zimbabwe Bird carvings.' }
    ],
    iconEmoji: '🏛️'
  },
  {
    id: 'enc-photosynthesis',
    title: 'Photosynthesis & Green Plants',
    shonaTitle: 'Maitiro eMiti eKugadzira Chikafu',
    ndebeleTitle: 'Ukudla Kwezihlathi',
    subject: 'Science & Technology',
    category: 'Natural Sciences',
    gradeRange: 'Grade 4 to Grade 7',
    summary: 'The chemical process by which green plants manufacture their own food (glucose) using sunlight energy, water, carbon dioxide, and chlorophyll.',
    fullArticle: `Photosynthesis is the fundamental biological process that sustains life on Earth. Green plants absorb water and minerals from the soil through their root systems and carbon dioxide gas from the air through tiny leaf pores called stomata.

Using solar radiation trapped by the green pigment chlorophyll inside chloroplasts, plants convert water and carbon dioxide into glucose (sugar) and release oxygen gas back into the atmosphere.

The word equation is:
Carbon Dioxide + Water + Sunlight -> Glucose + Oxygen.

Without photosynthesis, animals and humans would not have oxygen to breathe or food to eat. In Zimbabwe, maintaining forests like the Mutare teak and indigenous Musasa trees is essential for clean air and oxygen generation.`,
    keyFacts: [
      'Requires 4 ingredients: Sunlight, Water, Carbon Dioxide, and Chlorophyll.',
      'Produces Glucose (food) and Oxygen gas.',
      'Occurs in plant leaves containing green chlorophyll.',
      'Tiny leaf pores called stomata take in carbon dioxide and emit oxygen.'
    ],
    localZimbabweContext: 'Indigenous trees such as Musasa, Munondo, and Baobab produce vast oxygen supplies in Zimbabwean woodlands.',
    relatedSyllabusTopics: ['Plants & Ecosystems', 'Solar Energy', 'Living Things'],
    keyTerms: [
      { term: 'Chlorophyll', definition: 'Green pigment in plant leaves that absorbs sunlight.' },
      { term: 'Stomata', definition: 'Microscopic pores on leaf surfaces for gas exchange.' },
      { term: 'Glucose', definition: 'A simple sugar produced by plants as energy food.' }
    ],
    iconEmoji: '🌱'
  },
  {
    id: 'enc-water-cycle',
    title: 'The Water Cycle & Climate',
    shonaTitle: 'Mupaka weMvura neKunaya',
    ndebeleTitle: 'Ukujikeleza Kwamanzi',
    subject: 'Science & Technology',
    category: 'Natural Sciences',
    gradeRange: 'Grade 3 to Grade 7',
    summary: 'The continuous movement of water on, above, and below the surface of the Earth driven by heat from the sun.',
    fullArticle: `The water cycle (hydrological cycle) describes how water evaporates from rivers like the Zambezi and Limpopo, lakes like Kariba and Chivero, rises into the atmosphere, cools down, condenses into clouds, and falls back to Earth as precipitation (rain or hail).

The 4 main steps are:
1. Evaporation: Sun heats liquid water, turning it into water vapor.
2. Transpiration: Moisture released from plant leaves into the air.
3. Condensation: Cool air turns water vapor into liquid droplets, forming clouds.
4. Precipitation: Rain falls from clouds when water droplets become heavy.

In Zimbabwe, the rainy season runs from November to March during the summer monsoon period. Conserving water in dams and boreholes is vital during dry winter months.`,
    keyFacts: [
      'Driven by solar heat energy.',
      '4 stages: Evaporation, Transpiration, Condensation, Precipitation.',
      'Zimbabwe rainy season spans November to March.',
      'Major water reservoirs include Lake Kariba, Tugwi-Mukosi, and Lake Chivero.'
    ],
    localZimbabweContext: 'Lake Kariba and Victoria Falls are major Zimbabwean geographic landmarks in the global water cycle.',
    relatedSyllabusTopics: ['Weather & Seasons', 'Water Conservation', 'Environmental Science'],
    keyTerms: [
      { term: 'Evaporation', definition: 'Process where liquid water turns into invisible vapor gas.' },
      { term: 'Condensation', definition: 'Process where water vapor cools and turns into liquid drops or clouds.' },
      { term: 'Precipitation', definition: 'Water falling from clouds as rain, hail, or sleet.' }
    ],
    iconEmoji: '🌧️'
  },
  {
    id: 'enc-nehanda-liberation',
    title: 'Mbuya Nehanda & Liberation History',
    shonaTitle: 'Mbuya Nehanda naMurenga wa1896',
    ndebeleTitle: 'U Mbuya Nehanda Lempi yokuQala',
    subject: 'Social Science',
    category: 'History & Heritage',
    gradeRange: 'Grade 4 to Grade 7',
    summary: 'Nehanda Charwe Nyakasikana was a revered spirit medium and heroine of the First Chimurenga (1896-1897) who rallied indigenous Zimbabweans against colonial occupation.',
    fullArticle: `Mbuya Nehanda Charwe Nyakasikana (c. 1840–1898) was a powerful Shona spirit medium who played a central leadership role in organizing the First Chimurenga (1896–1897) alongside Sekuru Kaguvi.

When British settlers occupied Zimbabwe, Mbuya Nehanda urged local chiefs and fighters to unite and defend their ancestral land and freedom. She was captured by colonial forces and executed in Harare in 1898.

Before her death, she uttered her famous prophecy: "Mapfupa angu achamuka" ("My bones shall surely rise"), predicting that future generations would fight and win back Zimbabwe's independence. This prophecy inspired the Second Chimurenga, leading to National Independence on April 18, 1980. Her monument stands prominently in central Harare.`,
    keyFacts: [
      'Revered spirit medium of the First Chimurenga (1896–1897).',
      'Worked alongside Sekuru Kaguvi to resist colonial land seizure.',
      'Uttered the historic prophecy "Mapfupa angu achamuka".',
      'Honored on April 18 Heroes Day and with a bronze statue in Harare.'
    ],
    localZimbabweContext: 'A grand bronze statue of Mbuya Nehanda stands at the intersection of Samora Machel and Julius Nyerere Avenues in Harare.',
    relatedSyllabusTopics: ['First & Second Chimurenga', 'Heroes of Zimbabwe', 'National Independence'],
    keyTerms: [
      { term: 'Chimurenga', definition: 'Shona word for liberation struggle or war of national resistance.' },
      { term: 'Svikiro', definition: 'Spirit medium through whom ancestral guidance is communicated.' }
    ],
    iconEmoji: '🛡️'
  },
  {
    id: 'enc-zig-currency',
    title: 'Zimbabwe Gold (ZiG) & Money Mathematics',
    shonaTitle: 'Mariyedu yeZiG naSvomhu',
    ndebeleTitle: 'Imali YeZiG La Masamu',
    subject: 'Mathematics',
    category: 'Mathematics & Economy',
    gradeRange: 'Grade 1 to Grade 7',
    summary: 'Zimbabwe Gold (ZiG) is the official national currency backed by foreign reserves and physical gold held in the Reserve Bank of Zimbabwe.',
    fullArticle: `Understanding currency and financial mathematics is a core competency in MoPSE Mathematics. The Reserve Bank of Zimbabwe introduced Zimbabwe Gold (ZiG) as the sovereign national currency, backed by gold bullion reserves and foreign exchange.

In primary school mathematics, learners master:
1. Denominations: 1 ZiG, 2 ZiG, 5 ZiG, 10 ZiG, 20 ZiG, 50 ZiG, 100 ZiG, and 200 ZiG notes/coins.
2. Money calculations: Addition, subtraction, calculating change at local spaza shops (zvitoro), and budget planning.
3. Percentage discounts & profit/loss in agricultural trading.

Money management teaches financial discipline, honesty, and economic independence in alignment with Unhu/Ubuntu values.`,
    keyFacts: [
      'Backed by physical gold reserves held by the Reserve Bank of Zimbabwe.',
      'Used for trade, buying goods, paying school fees, and banking.',
      'Requires mastery of addition, subtraction, decimals, and percentage math.'
    ],
    localZimbabweContext: 'Used in markets across Harare, Bulawayo, Gweru, Mutare, and rural business centres.',
    relatedSyllabusTopics: ['Money & Currency', 'Financial Literacy', 'Addition & Decimals'],
    keyTerms: [
      { term: 'ZiG', definition: 'Zimbabwe Gold, the official currency introduced in 2024.' },
      { term: 'Change', definition: 'The balance returned to a buyer when paying with a higher denomination note.' }
    ],
    iconEmoji: '🪙'
  },
  {
    id: 'enc-jerusarema-dance',
    title: 'Jerusarema Mbende & Traditional Dance',
    shonaTitle: 'Dhanzi reJerusarema Mbende',
    ndebeleTitle: 'Igubhu LeJerusarema',
    subject: 'Visual & Performing Arts',
    category: 'Culture & Language',
    gradeRange: 'ECD A to Grade 7',
    summary: 'A celebrated traditional Shona acrobatic dance from Murewa and Uzumba-Maramba-Pfungwe, recognized by UNESCO as an Intangible Cultural Heritage.',
    fullArticle: `Jerusarema (originally called Mbende) is a popular traditional dance practiced by the Zezuru Shona people of east-central Zimbabwe, particularly in Murewa and Uzumba.

The dance features rapid drumming on wooden drums (mutumba and jenje), clapping in 12/8 polyrhythm, and energetic acrobatic movements by male and female dancers. The dance mimics the swift movements of the burrowing mole (mbende).

In 2005, UNESCO declared Jerusarema Mbende a Masterpiece of the Oral and Intangible Heritage of Humanity. Today, it is performed at national celebrations, school arts festivals, and weddings across Zimbabwe.`,
    keyFacts: [
      'Originates from Murewa and Uzumba-Maramba-Pfungwe districts.',
      'Proclaimed a UNESCO Intangible Cultural Heritage Masterpiece in 2005.',
      'Accompanied by mutumba drum beats, hosho rattles, and polyrhythmic clapping.',
      'Celebrates physical agility, cultural joy, and community unity.'
    ],
    localZimbabweContext: 'Murewa Culture Centre hosts the annual Jerusarema Mbende Dance Festival every year.',
    relatedSyllabusTopics: ['Traditional Dance & Music', 'UNESCO Cultural Heritage', 'Performing Arts'],
    keyTerms: [
      { term: 'Mbende', definition: 'Shona word for the swift burrowing mole that inspired the dance.' },
      { term: 'Mutumba', definition: 'A large hollowed wooden drum used in traditional Zimbabwean music.' }
    ],
    iconEmoji: '🥁'
  },
  {
    id: 'enc-keyhole-gardening',
    title: 'Keyhole Gardening & Soil Conservation',
    shonaTitle: 'Bindu reKeyhole naMupfudze',
    ndebeleTitle: 'Isilimo Se Keyhole Lesilimo',
    subject: 'Agriculture & Food Tech',
    category: 'Agriculture & Ecology',
    gradeRange: 'Grade 3 to Grade 7',
    summary: 'A drought-resilient circular raised garden bed with a central compost basket that conserves water, soil nutrients, and space.',
    fullArticle: `Keyhole gardening is a climate-smart agricultural technique widely adopted in Zimbabwe to ensure household food security even during low rainfall seasons.

The garden is built in a circle using local stones, bricks, or timber, with a cutout notch that resembles a keyhole. In the center sits a tall basket woven from reeds or wire mesh filled with organic compost manure (mupfudze), wood ash, and dry leaves.

Water and household greywater are poured directly into the central basket, carrying dissolved nutrients outwards to vegetable roots (covo, rape, spinach, onions, tomatoes). Keyhole gardens hold moisture for up to 2 weeks without daily watering.`,
    keyFacts: [
      'Saves up to 70% more water compared to flat garden beds.',
      'Uses organic waste, kitchen greywater, and mupfudze (manure).',
      'Produces fresh vegetables all year round in drought-prone areas.',
      'Key CALA practical project area in MoPSE Primary Agriculture.'
    ],
    localZimbabweContext: 'Promoted by MoPSE and Agritex across Matabeleland, Masvingo, Manicaland, and Mashonaland schools.',
    relatedSyllabusTopics: ['Climate Smart Agriculture', 'Soil Fertility', 'CALA Gardening Projects'],
    keyTerms: [
      { term: 'Mupfudze', definition: 'Shona word for organic cattle manure used as rich natural fertilizer.' },
      { term: 'Greywater', definition: 'Used household water (e.g. dishwashing) filtered for garden irrigation.' }
    ],
    iconEmoji: '🥬'
  },
  {
    id: 'enc-ict-hardware',
    title: 'Computers, ICT & Digital Devices',
    shonaTitle: 'Makombiyuta neMishini yeICT',
    ndebeleTitle: 'Amakhompuyutha Le Digital',
    subject: 'Science & Technology',
    category: 'Technology & ICT',
    gradeRange: 'Grade 1 to Grade 7',
    summary: 'Electronic devices that accept input, process data according to instructions, store information, and produce useful output.',
    fullArticle: `In the modern MoPSE Science & Technology curriculum, digital literacy is a vital life skill for every Zimbabwean primary learner.

A computer system consists of two main parts:
1. Hardware: Physical parts you can touch (Keyboard, Mouse, Monitor, System Unit / CPU, Printer, Speaker, Tablets, Solar Power Units).
2. Software: Programs and applications that run on the computer (Operating System, Educational Games, e-Learning Apps).

Input devices (keyboard, mouse, touchscreen) feed data into the Central Processing Unit (CPU) - the brain of the computer. The CPU processes data and sends results to output devices (monitor screen, printer, speakers). Solar energy power packs allow rural Zimbabwean schools to access computers reliably.`,
    keyFacts: [
      'Input devices: Keyboard, Mouse, Microphone, Camera.',
      'Processing unit: CPU (Central Processing Unit) - the computer brain.',
      'Output devices: Monitor screen, Speaker, Printer.',
      'Storage devices: Hard drives, USB flash sticks, SD memory cards.'
    ],
    localZimbabweContext: 'MoPSE digital e-learning initiatives equip primary school computer labs with tablets and solar battery packs.',
    relatedSyllabusTopics: ['Computer Hardware', 'Input & Output Devices', 'Digital Literacy'],
    keyTerms: [
      { term: 'CPU', definition: 'Central Processing Unit, the main chip that processes computer instructions.' },
      { term: 'Hardware', definition: 'Physical equipment components of a computer system.' }
    ],
    iconEmoji: '💻'
  },
  {
    id: 'enc-tsumo-madimikira',
    title: 'Tsumo neMadimikira (Shona Proverbs & Idioms)',
    shonaTitle: 'Tsumo, Madimikira neKufananidza',
    ndebeleTitle: 'Izaga Le Zihlabani',
    subject: 'Shona / Indigenous Languages',
    category: 'Culture & Language',
    gradeRange: 'Grade 3 to Grade 7',
    summary: 'Traditional Shona proverbs (tsumo) and idioms (madimikira) passed down through generations to teach wisdom, Unhu/Ubuntu ethics, and rich language expression.',
    fullArticle: `Tsumo (proverbs) and Madimikira (idioms) are the jewels of Shona literature and communication. They condense centuries of African philosophy, moral values, and social observation into memorable expressions.

Examples of Tsumo:
1. "Chara chimwe hachitswanyi inda" (One finger cannot crush a louse) -> Meaning: Cooperation and unity are necessary to solve difficult tasks.
2. "Ahurowa mupfana anemukoma" (He who has a brother will be defended) -> Meaning: Family support brings strength.
3. "Kugara nhaka kuona dzimwe" (To inherit requires observing others) -> Meaning: Learn from experience and elder wisdom.

Examples of Madimikira:
- "Kuba musoro" (To steal a head) -> Meaning: To pretend to be innocent.
- "Kubata maoko" (To hold hands) -> Meaning: To pass condolences to a bereaved family.

Mastering Tsumo neMadimikira is essential for passing Grade 7 ZIMSEC Shona Paper 1 and Paper 2 composition writing.`,
    keyFacts: [
      'Tsumo teach Unhu/Ubuntu moral values like respect, honesty, and teamwork.',
      'Madimikira use figurative language to express deep meanings poetically.',
      'Essential for ZIMSEC Shona Language composition writing and comprehension.'
    ],
    localZimbabweContext: 'Spoken daily by elders in village dare meetings, family gatherings, and national literature.',
    relatedSyllabusTopics: ['Shona Composition', 'Unhu / Ubuntu Ethics', 'Indigenous Culture'],
    keyTerms: [
      { term: 'Tsumo', definition: 'Shona word for wise traditional proverbs.' },
      { term: 'Madimikira', definition: 'Shona word for figurative idioms and expressions.' }
    ],
    iconEmoji: '📜'
  },
  {
    id: 'enc-victoria-falls',
    title: 'Victoria Falls (Mosi-oa-Tunya)',
    shonaTitle: 'Mosi-oa-Tunya (Bvuma Rinotinhira)',
    ndebeleTitle: 'Mosi-oa-Tunya',
    subject: 'Social Science',
    category: 'History & Heritage',
    gradeRange: 'ECD A to Grade 7',
    summary: 'One of the Seven Natural Wonders of the World, located on the Zambezi River between Zimbabwe and Zambia.',
    fullArticle: `Victoria Falls, locally named "Mosi-oa-Tunya" ("The Smoke That Thunders"), is the largest curtain of falling water in the world, spanning 1,708 metres wide and dropping over 108 metres into the Batoka Gorge.

Formed by the Zambezi River flowing over a basalt plateau, the falling water creates mist plumes that rise over 400 metres into the air and can be seen 50 kilometers away. The spray sustains the lush Victoria Falls Rainforest, home to unique ferns, mahogany trees, and wildlife like bushbuck and hornbills.

Victoria Falls is a protected UNESCO World Heritage Site and Zimbabwe's premier tourist destination, attracting visitors from across the globe.`,
    keyFacts: [
      'Indigenous name: Mosi-oa-Tunya ("The Smoke That Thunders").',
      'Located on the Zambezi River in Matabeleland North.',
      '1,708 metres wide and 108 metres high.',
      'UNESCO World Heritage Natural Site.'
    ],
    localZimbabweContext: 'A national pride landmark bringing international tourists and revenue to Zimbabwe.',
    relatedSyllabusTopics: ['Physical Features of Zimbabwe', 'National Parks & Tourism', 'Rivers of Zimbabwe'],
    keyTerms: [
      { term: 'Mosi-oa-Tunya', definition: 'Indigenous Kololo/Tonga name meaning "The Smoke That Thunders".' },
      { term: 'Batoka Gorge', definition: 'Deep basalt canyon through which the Zambezi River rushes below the falls.' }
    ],
    iconEmoji: '🌊'
  }
];
