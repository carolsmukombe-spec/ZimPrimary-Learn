import React, { useState } from 'react';
import { SubjectCategory } from '../types/curriculum';
import { ENCYCLOPEDIA_ARTICLES, EncyclopediaArticle } from '../data/encyclopediaData';
import { 
  Search, 
  BookOpen, 
  Sparkles, 
  X, 
  Info, 
  MapPin, 
  Heart, 
  ChevronRight, 
  Tag, 
  HelpCircle,
  Lightbulb,
  Globe2,
  Filter
} from 'lucide-react';

interface EncyclopediaViewProps {
  onAskAiTutor?: (topicTitle: string) => void;
}

export const EncyclopediaView: React.FC<EncyclopediaViewProps> = ({
  onAskAiTutor
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<EncyclopediaArticle | null>(null);

  const categoryOptions = [
    'All',
    'History & Heritage',
    'Natural Sciences',
    'Mathematics & Economy',
    'Culture & Language',
    'Agriculture & Ecology',
    'Technology & ICT'
  ];

  const subjectOptions = [
    'All',
    'Social Science',
    'Science & Technology',
    'Mathematics',
    'Shona / Indigenous Languages',
    'Agriculture & Food Tech',
    'Visual & Performing Arts',
    'English Language',
    'Physical Education'
  ];

  const filteredArticles = ENCYCLOPEDIA_ARTICLES.filter(art => {
    if (selectedCategory !== 'All' && art.category !== selectedCategory) return false;
    if (selectedSubject !== 'All' && art.subject !== selectedSubject) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        art.title.toLowerCase().includes(q) ||
        (art.shonaTitle && art.shonaTitle.toLowerCase().includes(q)) ||
        (art.ndebeleTitle && art.ndebeleTitle.toLowerCase().includes(q)) ||
        art.summary.toLowerCase().includes(q) ||
        art.fullArticle.toLowerCase().includes(q) ||
        art.localZimbabweContext.toLowerCase().includes(q) ||
        art.keyTerms.some(kt => kt.term.toLowerCase().includes(q) || kt.definition.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-indigo-800/60 rounded-2xl p-5 sm:p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">
              <Globe2 className="w-4 h-4 text-amber-400" />
              <span>ZimPrimary Educational Encyclopedia • Britannica Style</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
              <span>Zimbabwe Primary Knowledge Base</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1 leading-relaxed">
              Search and explore comprehensive encyclopedic entries, local heritage facts, scientific concepts, historical events, indigenous proverbs, and MoPSE syllabus topics for ECD A to Grade 7.
            </p>
          </div>

          <div className="flex items-center space-x-3 bg-slate-950/80 border border-indigo-700/60 p-3 rounded-xl shrink-0">
            <BookOpen className="w-6 h-6 text-indigo-400" />
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Encyclopedia Knowledge</span>
              <span className="text-sm font-extrabold text-white">{ENCYCLOPEDIA_ARTICLES.length} Verified Articles</span>
            </div>
          </div>
        </div>

        {/* Search Input Bar */}
        <div className="mt-5 relative z-10">
          <div className="relative">
            <Search className="w-5 h-5 text-indigo-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search encyclopedia entries (e.g., Great Zimbabwe, Photosynthesis, Mbuya Nehanda, ZiG currency, Tsumo, Keyhole garden)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/90 border border-indigo-700/60 focus:border-indigo-400 rounded-xl pl-12 pr-10 py-3.5 text-sm text-white placeholder-slate-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-lg space-y-3">
        {/* Category Filter */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-bold text-slate-400 uppercase shrink-0 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-indigo-400" /> Category:
          </span>
          {categoryOptions.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md font-bold'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Subject Filter */}
        <div className="flex items-center space-x-2 overflow-x-auto pt-1 border-t border-slate-800/80 scrollbar-none">
          <span className="text-xs font-bold text-slate-400 uppercase shrink-0 mr-1 flex items-center gap-1">
            <Tag className="w-3.5 h-3.5 text-emerald-400" /> Subject:
          </span>
          {subjectOptions.map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className={`px-3 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition cursor-pointer ${
                selectedSubject === sub
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-500 font-bold'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      {/* Results Grid Header */}
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>Showing {filteredArticles.length} encyclopedia articles</span>
        {(selectedCategory !== 'All' || selectedSubject !== 'All' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedSubject('All');
              setSearchQuery('');
            }}
            className="text-indigo-400 hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Articles Cards Grid */}
      {filteredArticles.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-3">
          <HelpCircle className="w-12 h-12 text-slate-500 mx-auto" />
          <h3 className="text-base font-bold text-slate-200">No Encyclopedia Entries Found</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Try searching for a different keyword like "Great Zimbabwe", "Photosynthesis", or "ZiG", or ask Teacher Chipo AI Tutor for custom research.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="bg-slate-900 border border-slate-800 hover:border-indigo-600/60 rounded-2xl p-5 transition shadow-lg flex flex-col justify-between group relative"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl p-1 bg-slate-950 rounded-lg border border-slate-800">{art.iconEmoji}</span>
                    <div>
                      <span className="bg-indigo-950 text-indigo-300 border border-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                        {art.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 font-semibold">{art.gradeRange}</span>
                </div>

                {/* Article Titles */}
                <h3 className="font-extrabold text-base text-white group-hover:text-indigo-300 transition leading-snug">
                  {art.title}
                </h3>
                {art.shonaTitle && (
                  <p className="text-xs text-emerald-400/90 font-medium mt-0.5">
                    🇿🇼 {art.shonaTitle}
                  </p>
                )}

                {/* Summary */}
                <p className="text-xs text-slate-300 mt-2.5 line-clamp-3 leading-relaxed">
                  {art.summary}
                </p>

                {/* Local Zimbabwe Context pill */}
                <div className="mt-3 bg-amber-950/30 border border-amber-900/40 p-2 rounded-xl text-[11px] text-amber-200/90 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{art.localZimbabweContext}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-medium">{art.subject}</span>
                <button
                  onClick={() => setActiveArticle(art)}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center space-x-1"
                >
                  <span>Read Full Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* FULL ARTICLE MODAL / DRAWER */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-slate-900 border border-indigo-700/60 rounded-2xl max-w-3xl w-full p-5 sm:p-6 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto relative text-slate-100">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="flex items-center space-x-3">
                <span className="text-3xl p-2 bg-slate-950 rounded-xl border border-slate-800">{activeArticle.iconEmoji}</span>
                <div>
                  <div className="flex items-center space-x-2 text-[10px] uppercase font-bold text-indigo-400">
                    <span>{activeArticle.category}</span>
                    <span>•</span>
                    <span className="text-emerald-400">{activeArticle.subject}</span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-white">{activeArticle.title}</h2>
                  {activeArticle.shonaTitle && (
                    <p className="text-xs text-emerald-400 font-semibold mt-0.5">
                      Shona: {activeArticle.shonaTitle} {activeArticle.ndebeleTitle && `| Ndebele: ${activeArticle.ndebeleTitle}`}
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Article Content */}
            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-200 whitespace-pre-line">
              {activeArticle.fullArticle}
            </div>

            {/* Key Facts Box */}
            <div className="bg-slate-950 border border-indigo-900/60 rounded-xl p-4 space-y-2">
              <h4 className="text-xs font-bold uppercase text-indigo-400 flex items-center gap-1.5">
                <Lightbulb className="w-4 h-4 text-amber-400" /> Key Examination Facts:
              </h4>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                {activeArticle.keyFacts.map((fact, idx) => (
                  <li key={idx}>{fact}</li>
                ))}
              </ul>
            </div>

            {/* Local Zimbabwe Context */}
            <div className="bg-amber-950/40 border border-amber-800/60 rounded-xl p-4 space-y-1 text-xs text-amber-200">
              <h4 className="font-bold text-amber-300 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400" /> Zimbabwe Local & Cultural Context:
              </h4>
              <p>{activeArticle.localZimbabweContext}</p>
            </div>

            {/* Key Terms */}
            {activeArticle.keyTerms.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase text-slate-400">Key Vocabulary Terms:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeArticle.keyTerms.map((kt, idx) => (
                    <div key={idx} className="bg-slate-950 border border-slate-800 p-2.5 rounded-lg text-xs">
                      <span className="font-bold text-emerald-400 block">{kt.term}</span>
                      <span className="text-slate-300 text-[11px]">{kt.definition}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Modal Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-[11px] text-slate-400">
                <span>Aligned with MoPSE Syllabus: </span>
                <span className="text-slate-200 font-semibold">{activeArticle.relatedSyllabusTopics.join(', ')}</span>
              </div>

              <div className="flex items-center space-x-2 w-full sm:w-auto">
                {onAskAiTutor && (
                  <button
                    onClick={() => {
                      const topic = activeArticle.title;
                      setActiveArticle(null);
                      onAskAiTutor(topic);
                    }}
                    className="w-full sm:w-auto bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition cursor-pointer flex items-center justify-center space-x-1.5 shadow-md"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Ask Teacher Chipo About This</span>
                  </button>
                )}
                <button
                  onClick={() => setActiveArticle(null)}
                  className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold px-4 py-2 rounded-xl transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
