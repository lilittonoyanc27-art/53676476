import React, { useState } from 'react';
import { EXPRESSIONS_DATA } from './expressionsData.ts';
import { ExpressionItem } from './types.ts';
import { 
  BookOpen, 
  Search, 
  Eye, 
  EyeOff, 
  Play, 
  Sparkles, 
  Tag, 
  User, 
  Bookmark, 
  BookmarkCheck, 
  ArrowRight,
  Video
} from 'lucide-react';

interface DictionarySectionProps {
  onJumpToVideoTime: (seconds: number) => void;
}

export const DictionarySection: React.FC<DictionarySectionProps> = ({
  onJumpToVideoTime
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('todos');
  const [revealedIds, setRevealedIds] = useState<{ [id: number]: boolean }>({});
  const [savedIds, setSavedIds] = useState<{ [id: number]: boolean }>({});

  // Unique tags
  const tags = ['todos', ...Array.from(new Set(EXPRESSIONS_DATA.map((e) => e.tag)))];

  const toggleReveal = (id: number) => {
    setRevealedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleSave = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredExpressions = EXPRESSIONS_DATA.filter((item) => {
    const matchesSearch =
      !searchQuery.trim() ||
      item.spanish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.armenian.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.explanationHy.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = selectedTag === 'todos' || item.tag === selectedTag;

    return matchesSearch && matchesTag;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#440911] via-[#5c0e1b] to-[#31050b] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase mb-2">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Vocabulario & Lunfardo Rioplatense</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-orange-400 font-heading">
              Expresiones del vídeo
            </h1>
            <p className="text-xs sm:text-sm text-amber-200/80 mt-2 max-w-2xl leading-relaxed">
              Diccionario interactivo con las frases memorables pronunciadas por Natalia Oreiro y Facundo Arana.
              Haz clic sobre cada expresión para ver su traducción exacta y explicación de significado en armenio.
            </p>
          </div>

          <div className="bg-[#240409] border border-amber-500/30 px-4 py-3 rounded-2xl text-center shrink-0">
            <div className="text-xs text-amber-300/80 font-semibold">Total de expresiones</div>
            <div className="text-2xl font-extrabold text-yellow-300 font-mono">
              {EXPRESSIONS_DATA.length}
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar & Tag Filter */}
      <div className="bg-[#240409] border border-red-900/60 rounded-3xl p-4 sm:p-5 shadow-xl space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-400/60" />
          <input
            type="text"
            placeholder="Buscar por expresión en español o armenio..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#170205] border border-amber-500/20 text-sm text-amber-100 placeholder:text-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
          />
        </div>

        {/* Tag Badges */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[11px] font-bold text-amber-400/70 uppercase px-1 shrink-0">
            Categoría:
          </span>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedTag === tag
                  ? 'bg-amber-400 text-stone-950 font-bold shadow'
                  : 'bg-[#1b0307] text-amber-200/70 hover:bg-[#32060f] border border-red-900/40'
              }`}
            >
              {tag === 'todos' ? 'Todas' : tag}
            </button>
          ))}
        </div>
      </div>

      {/* Expressions Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {filteredExpressions.map((item) => {
          const isRevealed = revealedIds[item.id] || false;
          const isSaved = savedIds[item.id] || false;
          const isNatalia = item.speaker === 'Natalia Oreiro';

          return (
            <div
              key={item.id}
              onClick={() => toggleReveal(item.id)}
              className={`group p-5 rounded-3xl border transition-all cursor-pointer relative shadow-xl flex flex-col justify-between ${
                isRevealed
                  ? 'bg-gradient-to-br from-[#3b0811] to-[#4d0c17] border-amber-400 ring-1 ring-amber-400/40'
                  : 'bg-[#200308]/90 hover:bg-[#2c050d] border-red-950/80 hover:border-amber-500/30'
              }`}
            >
              <div>
                {/* Card Header: Speaker badge, Category Tag, Bookmark */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isNatalia
                          ? 'bg-red-600/30 text-red-300 border border-red-500/40'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
                      }`}
                    >
                      {item.speaker}
                    </span>
                    <span className="text-[10px] text-amber-300/60 bg-[#160205] px-2 py-0.5 rounded-full border border-red-900/40">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => toggleSave(item.id, e)}
                      className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                        isSaved
                          ? 'bg-amber-400 text-stone-950 border-amber-300'
                          : 'bg-[#180206] text-amber-400/60 hover:text-amber-300 border-red-900/40'
                      }`}
                      title={isSaved ? 'Quitar de guardadas' : 'Guardar en favoritas'}
                    >
                      {isSaved ? <BookmarkCheck className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onJumpToVideoTime(item.timestamp);
                      }}
                      className="px-2 py-1 rounded-lg bg-[#180206] hover:bg-orange-500 hover:text-black border border-amber-500/20 text-[11px] font-mono text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                      title="Ver y escuchar este momento exacto en el vídeo"
                    >
                      <Video className="w-3 h-3" />
                      <span>{Math.floor(item.timestamp / 60)}:{item.timestamp % 60 < 10 ? '0' : ''}{item.timestamp % 60}</span>
                    </button>
                  </div>
                </div>

                {/* Spanish Expression Text */}
                <div className="text-2xl sm:text-3xl font-black text-yellow-300 group-hover:text-yellow-200 transition-colors font-heading mb-2">
                  «{item.spanish}»
                </div>

                {/* Context in Video */}
                <div className="text-sm sm:text-base text-amber-200/80 mb-3 leading-relaxed">
                  {item.contextEs}
                </div>
              </div>

              {/* Armenian Section (Toggled on click) */}
              {isRevealed ? (
                <div className="mt-3.5 pt-3.5 border-t border-amber-500/30 bg-[#160205]/80 p-4 rounded-2xl animate-fadeIn space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold text-amber-400 uppercase">
                    <span>Հայերեն թարգմանություն</span>
                    <span className="text-stone-400 normal-case font-normal text-xs">Սեղմեք փակելու համար</span>
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-orange-200 font-armenian leading-snug">
                    {item.armenian}
                  </div>

                  <div className="pt-2.5 border-t border-amber-500/20">
                    <div className="text-xs font-bold text-amber-400/90 uppercase mb-1">
                      Իմաստի բացատրություն
                    </div>
                    <div className="text-sm sm:text-base text-amber-100 font-armenian leading-relaxed">
                      {item.explanationHy}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-2.5 pt-2.5 border-t border-red-950/60 flex items-center justify-between text-xs sm:text-sm text-amber-400/70 group-hover:text-amber-300 transition-colors">
                  <span className="font-semibold">Հայերեն թարգմանություն և բացատրություն</span>
                  <span className="flex items-center gap-1.5 text-xs font-bold">
                    <Eye className="w-4 h-4" />
                    <span>Սեղմեք</span>
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredExpressions.length === 0 && (
        <div className="text-center py-16 bg-[#240409] rounded-3xl border border-red-900/60 text-stone-400 text-sm">
          No se encontraron expresiones con el término buscado.
        </div>
      )}
    </div>
  );
};
