import React, { useState } from 'react';
import {
  TRUE_FALSE_DATA,
  FILL_BLANK_DATA,
  WHO_SAID_IT_DATA,
  WORD_ORDER_DATA,
  EXPRESSION_MEANING_DATA
} from './gamesData.ts';
import { 
  Check, 
  X, 
  RotateCcw, 
  Eye, 
  Sparkles, 
  HelpCircle, 
  Gamepad2, 
  CheckCircle2, 
  XCircle, 
  Shuffle, 
  ArrowRight,
  Smile,
  Award
} from 'lucide-react';

interface GamesSectionProps {
  onBackToVideo: () => void;
}

type GameTab = 'tf' | 'fill' | 'who' | 'order' | 'meaning';

export const GamesSection: React.FC<GamesSectionProps> = ({ onBackToVideo }) => {
  const [activeTab, setActiveTab] = useState<GameTab>('tf');

  // --- Game 1: Verdadero o Falso State ---
  const [tfIndex, setTfIndex] = useState<number>(0);
  const [tfSelectedAnswer, setTfSelectedAnswer] = useState<boolean | null>(null);
  const [tfShowArmenian, setTfShowArmenian] = useState<boolean>(false);
  const [tfScore, setTfScore] = useState<number>(0);

  // --- Game 2: Completa la frase State ---
  const [fillIndex, setFillIndex] = useState<number>(0);
  const [fillSelectedWord, setFillSelectedWord] = useState<string | null>(null);
  const [fillShowArmenian, setFillShowArmenian] = useState<boolean>(false);
  const [fillScore, setFillScore] = useState<number>(0);

  // --- Game 3: ¿Quién lo dijo? State ---
  const [whoIndex, setWhoIndex] = useState<number>(0);
  const [whoSelectedSpeaker, setWhoSelectedSpeaker] = useState<string | null>(null);
  const [whoShowArmenian, setWhoShowArmenian] = useState<boolean>(false);
  const [whoScore, setWhoScore] = useState<number>(0);

  // --- Game 4: Ordena las palabras State ---
  const [orderIndex, setOrderIndex] = useState<number>(0);
  const [orderSelectedWords, setOrderSelectedWords] = useState<string[]>([]);
  const [orderAvailableWords, setOrderAvailableWords] = useState<string[]>([]);
  const [orderIsChecked, setOrderIsChecked] = useState<boolean>(false);
  const [orderIsCorrect, setOrderIsCorrect] = useState<boolean>(false);
  const [orderShowArmenian, setOrderShowArmenian] = useState<boolean>(false);
  const [orderScore, setOrderScore] = useState<number>(0);

  // --- Game 5: Elige el significado State ---
  const [meaningIndex, setMeaningIndex] = useState<number>(0);
  const [meaningSelectedOption, setMeaningSelectedOption] = useState<string | null>(null);
  const [meaningShowArmenianQuestion, setMeaningShowArmenianQuestion] = useState<boolean>(false);
  const [meaningOptionTranslations, setMeaningOptionTranslations] = useState<{ [optId: string]: boolean }>({});
  const [meaningScore, setMeaningScore] = useState<number>(0);

  // Initialize Word Order shuffled words when index changes
  React.useEffect(() => {
    const current = WORD_ORDER_DATA[orderIndex];
    if (current) {
      // Shuffle words deterministically for game
      const shuffled = [...current.words].sort(() => Math.random() - 0.5);
      setOrderAvailableWords(shuffled);
      setOrderSelectedWords([]);
      setOrderIsChecked(false);
      setOrderIsCorrect(false);
      setOrderShowArmenian(false);
    }
  }, [orderIndex]);

  // Tab definitions
  const tabs = [
    { id: 'tf', label: '1. Verdadero o falso', icon: CheckCircle2 },
    { id: 'fill', label: '2. Completa la frase', icon: Sparkles },
    { id: 'who', label: '3. ¿Quién lo dijo?', icon: Smile },
    { id: 'order', label: '4. Ordena las palabras', icon: Shuffle },
    { id: 'meaning', label: '5. Elige el significado', icon: HelpCircle },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#420912] via-[#590e1a] to-[#2f040b] border border-amber-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30 text-xs font-bold uppercase mb-2">
              <Gamepad2 className="w-3.5 h-3.5 text-orange-400" />
              <span>Juegos didácticos interactivos</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-orange-400 font-heading">
              5 Actividades con Natalia y Facundo
            </h1>
            <p className="text-xs sm:text-sm text-amber-200/80 mt-1">
              Practica el vocabulario, las expresiones rioplatenses y los momentos clave del vídeo con traducciones al armenio al hacer clic.
            </p>
          </div>
          <button
            onClick={onBackToVideo}
            className="px-4 py-2 rounded-xl bg-[#2b050c] hover:bg-[#3d0812] border border-amber-500/30 text-amber-200 text-xs font-semibold transition-colors cursor-pointer"
          >
            Volver al vídeo
          </button>
        </div>

        {/* Game Navigation Tabs */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-1 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as GameTab)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-stone-950 shadow-lg shadow-amber-500/20 scale-[1.02]'
                    : 'bg-[#220409] hover:bg-[#33060f] text-amber-200/80 border border-red-900/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. VERDADERO O FALSO */}
      {/* ======================================================== */}
      {activeTab === 'tf' && (
        <div className="bg-[#240409] border-2 border-red-900/60 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-400">
              Afirmación {tfIndex + 1} de {TRUE_FALSE_DATA.length}
            </span>
            <span className="text-xs font-mono text-yellow-300 font-bold bg-[#170205] px-3 py-1 rounded-full border border-amber-500/20">
              Aciertos: {tfScore}
            </span>
          </div>

          {/* Statement card */}
          <div
            onClick={() => setTfShowArmenian(!tfShowArmenian)}
            className="group cursor-pointer p-6 rounded-2xl bg-[#1c0307] border border-amber-500/20 hover:border-amber-400/50 transition-all"
          >
            <div className="text-xl sm:text-2xl font-black text-amber-50 group-hover:text-yellow-200 transition-colors leading-relaxed">
              «{TRUE_FALSE_DATA[tfIndex].statementEs}»
            </div>

            {tfShowArmenian ? (
              <div className="mt-3.5 pt-3.5 border-t border-amber-500/20 text-base sm:text-lg font-semibold text-orange-200 font-armenian bg-[#2a060e] p-3.5 rounded-xl animate-fadeIn leading-relaxed">
                <div className="text-xs text-amber-400 font-sans uppercase font-bold mb-1">
                  Հայերեն թարգմանություն
                </div>
                <div>{TRUE_FALSE_DATA[tfIndex].statementHy}</div>
              </div>
            ) : (
              <div className="mt-2 text-right">
                <span className="text-xs sm:text-sm text-amber-400/60 group-hover:text-amber-400 transition-colors flex items-center justify-end gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Հայերեն թարգմանություն (սեղմեք)</span>
                </span>
              </div>
            )}
          </div>

          {/* True / False Choice Buttons */}
          {tfSelectedAnswer === null ? (
            <div className="grid grid-cols-2 gap-4 pt-2">
              <button
                onClick={() => {
                  setTfSelectedAnswer(true);
                  if (TRUE_FALSE_DATA[tfIndex].isTrue) setTfScore((s) => s + 1);
                }}
                className="py-5 px-6 rounded-2xl bg-gradient-to-br from-green-700 to-green-900 hover:from-green-600 hover:to-green-800 text-white font-black text-lg sm:text-xl shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer hover:scale-[1.02] active:scale-100"
              >
                <Check className="w-6 h-6 stroke-[3]" />
                <span>Verdadero</span>
              </button>

              <button
                onClick={() => {
                  setTfSelectedAnswer(false);
                  if (!TRUE_FALSE_DATA[tfIndex].isTrue) setTfScore((s) => s + 1);
                }}
                className="py-5 px-6 rounded-2xl bg-gradient-to-br from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-black text-lg sm:text-xl shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer hover:scale-[1.02] active:scale-100"
              >
                <X className="w-6 h-6 stroke-[3]" />
                <span>Falso</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4 pt-2 animate-fadeIn">
              <div className="flex items-center gap-2">
                {tfSelectedAnswer === TRUE_FALSE_DATA[tfIndex].isTrue ? (
                  <div className="flex items-center gap-2 text-green-400 font-bold text-lg">
                    <CheckCircle2 className="w-6 h-6" />
                    <span>¡Correcto! Excelente deducción.</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-400 font-bold text-lg">
                    <XCircle className="w-6 h-6" />
                    <span>Incorrecto. Mira la explicación abajo.</span>
                  </div>
                )}
              </div>

              {/* Explanation with Armenian toggle */}
              <div
                onClick={() => setTfShowArmenian(!tfShowArmenian)}
                className="p-5 rounded-2xl bg-[#1c0307] border border-amber-500/30 cursor-pointer"
              >
                <div className="text-xs sm:text-sm font-bold text-amber-400 uppercase mb-1">
                  Explicación
                </div>
                <div className="text-base sm:text-lg text-amber-100 font-semibold leading-relaxed">
                  {TRUE_FALSE_DATA[tfIndex].explanationEs}
                </div>
                <div className="mt-2.5 pt-2.5 border-t border-amber-500/20 text-sm sm:text-base text-orange-200 font-armenian leading-relaxed">
                  {TRUE_FALSE_DATA[tfIndex].explanationHy}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => {
                    if (tfIndex < TRUE_FALSE_DATA.length - 1) {
                      setTfIndex((i) => i + 1);
                      setTfSelectedAnswer(null);
                      setTfShowArmenian(false);
                    } else {
                      setTfIndex(0);
                      setTfSelectedAnswer(null);
                      setTfShowArmenian(false);
                    }
                  }}
                  className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-base shadow transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{tfIndex < TRUE_FALSE_DATA.length - 1 ? 'Siguiente afirmación' : 'Volver a jugar'}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* 2. COMPLETA LA FRASE */}
      {/* ======================================================== */}
      {activeTab === 'fill' && (
        <div className="bg-[#240409] border-2 border-red-900/60 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-bold text-amber-400">
              Frase {fillIndex + 1} de {FILL_BLANK_DATA.length}
            </span>
            <span className="text-xs sm:text-sm font-mono text-yellow-300 font-bold bg-[#170205] px-3 py-1 rounded-full border border-amber-500/20">
              Aciertos: {fillScore}
            </span>
          </div>

          {/* Sentence with blank */}
          <div
            onClick={() => setFillShowArmenian(!fillShowArmenian)}
            className="group cursor-pointer p-6 rounded-2xl bg-[#1c0307] border border-amber-500/20 hover:border-amber-400/50 transition-all"
          >
            <div className="text-xl sm:text-2xl font-black text-amber-50 group-hover:text-yellow-200 transition-colors leading-relaxed">
              <span>{FILL_BLANK_DATA[fillIndex].sentenceBefore} </span>
              <span className={`inline-block px-3.5 py-1.5 mx-1 rounded-xl border-2 font-mono font-black ${
                fillSelectedWord
                  ? fillSelectedWord === FILL_BLANK_DATA[fillIndex].missingWord
                    ? 'bg-green-900/50 border-green-500 text-green-300'
                    : 'bg-red-900/50 border-red-500 text-red-300'
                  : 'bg-amber-500/10 border-dashed border-amber-400 text-amber-300 animate-pulse'
              }`}>
                {fillSelectedWord || '________'}
              </span>
              <span> {FILL_BLANK_DATA[fillIndex].sentenceAfter}</span>
            </div>

            {fillShowArmenian ? (
              <div className="mt-3.5 pt-3.5 border-t border-amber-500/20 text-base sm:text-lg font-semibold text-orange-200 font-armenian bg-[#2a060e] p-3.5 rounded-xl animate-fadeIn leading-relaxed">
                <div className="text-xs text-amber-400 font-sans uppercase font-bold mb-1">
                  Հայերեն թարգմանություն
                </div>
                <div>{FILL_BLANK_DATA[fillIndex].sentenceHy}</div>
              </div>
            ) : (
              <div className="mt-2 text-right">
                <span className="text-xs sm:text-sm text-amber-400/60 group-hover:text-amber-400 transition-colors flex items-center justify-end gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Հայերեն թարգմանություն (սեղմեք)</span>
                </span>
              </div>
            )}
          </div>

          {/* Word options */}
          <div className="space-y-3">
            <div className="text-sm text-amber-300 font-bold">
              Elige la palabra exacta del vídeo:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {FILL_BLANK_DATA[fillIndex].options.map((word) => {
                const isSelected = fillSelectedWord === word;
                const isCorrect = word === FILL_BLANK_DATA[fillIndex].missingWord;

                let btnStyle = 'bg-[#1a0206] border-red-950/70 hover:border-amber-400/60 text-amber-100 hover:text-yellow-200';
                if (fillSelectedWord) {
                  if (isCorrect) {
                    btnStyle = 'bg-green-700 border-green-400 text-white font-black ring-2 ring-green-300';
                  } else if (isSelected) {
                    btnStyle = 'bg-red-700 border-red-400 text-white font-black';
                  } else {
                    btnStyle = 'bg-[#140205] border-red-950/40 text-stone-500 opacity-50';
                  }
                }

                return (
                  <button
                    key={word}
                    disabled={fillSelectedWord !== null}
                    onClick={() => {
                      setFillSelectedWord(word);
                      if (word === FILL_BLANK_DATA[fillIndex].missingWord) {
                        setFillScore((s) => s + 1);
                      }
                    }}
                    className={`py-4 px-4 rounded-2xl border text-base sm:text-lg font-black transition-all cursor-pointer shadow ${btnStyle}`}
                  >
                    {word}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation & Next */}
          {fillSelectedWord && (
            <div className="space-y-4 pt-2 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-[#1c0307] border border-amber-500/30">
                <div className="text-xs font-bold text-amber-400 uppercase mb-1">
                  Explicación didáctica
                </div>
                <div className="text-sm text-amber-100 font-medium">
                  {FILL_BLANK_DATA[fillIndex].explanationEs}
                </div>
                <div className="mt-2 pt-2 border-t border-amber-500/20 text-xs text-orange-200 font-armenian">
                  {FILL_BLANK_DATA[fillIndex].explanationHy}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => {
                    if (fillIndex < FILL_BLANK_DATA.length - 1) {
                      setFillIndex((i) => i + 1);
                      setFillSelectedWord(null);
                      setFillShowArmenian(false);
                    } else {
                      setFillIndex(0);
                      setFillSelectedWord(null);
                      setFillShowArmenian(false);
                    }
                  }}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-bold text-sm shadow transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{fillIndex < FILL_BLANK_DATA.length - 1 ? 'Siguiente frase' : 'Volver a empezar'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* 3. ¿QUIÉN LO DIJO? */}
      {/* ======================================================== */}
      {activeTab === 'who' && (
        <div className="bg-[#240409] border-2 border-red-900/60 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-400">
              Frase {whoIndex + 1} de {WHO_SAID_IT_DATA.length}
            </span>
            <span className="text-xs font-mono text-yellow-300 font-bold bg-[#170205] px-3 py-1 rounded-full border border-amber-500/20">
              Aciertos: {whoScore}
            </span>
          </div>

          {/* Quote card */}
          <div
            onClick={() => setWhoShowArmenian(!whoShowArmenian)}
            className="group cursor-pointer p-7 rounded-2xl bg-gradient-to-br from-[#1d0308] to-[#2c050c] border border-amber-500/30 hover:border-amber-400/60 transition-all text-center"
          >
            <div className="text-2xl sm:text-4xl font-black text-amber-100 group-hover:text-yellow-200 transition-colors leading-relaxed font-heading">
              «{WHO_SAID_IT_DATA[whoIndex].quoteEs}»
            </div>

            {whoShowArmenian ? (
              <div className="mt-4 pt-4 border-t border-amber-500/20 text-base sm:text-lg font-semibold text-orange-200 font-armenian bg-[#2a060e] p-4 rounded-xl animate-fadeIn text-left leading-relaxed">
                <div className="text-xs text-amber-400 font-sans uppercase font-bold mb-1">
                  Հայերեն թարգմանություն
                </div>
                <div>{WHO_SAID_IT_DATA[whoIndex].quoteHy}</div>
              </div>
            ) : (
              <div className="mt-3">
                <span className="text-xs sm:text-sm text-amber-400/60 group-hover:text-amber-400 transition-colors inline-flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Հայերեն թարգմանություն (սեղմեք)</span>
                </span>
              </div>
            )}
          </div>

          {/* Speaker selection buttons */}
          <div className="space-y-3">
            <div className="text-sm text-amber-300 font-bold text-center">
              ¿Quién pronunció esta frase?
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Natalia Oreiro */}
              <button
                disabled={whoSelectedSpeaker !== null}
                onClick={() => {
                  setWhoSelectedSpeaker('Natalia Oreiro');
                  if (WHO_SAID_IT_DATA[whoIndex].speaker === 'Natalia Oreiro') {
                    setWhoScore((s) => s + 1);
                  }
                }}
                className={`p-5 rounded-2xl border transition-all flex items-center gap-4 cursor-pointer shadow-lg ${
                  whoSelectedSpeaker
                    ? WHO_SAID_IT_DATA[whoIndex].speaker === 'Natalia Oreiro'
                      ? 'bg-green-950/60 border-green-500 ring-2 ring-green-400'
                      : whoSelectedSpeaker === 'Natalia Oreiro'
                      ? 'bg-red-950/60 border-red-500'
                      : 'bg-[#180206] opacity-50 border-stone-800'
                    : 'bg-[#1b0307] hover:bg-[#32070f] border-red-900/60 hover:border-amber-400/50'
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center font-black text-white text-lg shadow shrink-0">
                  NO
                </div>
                <div className="text-left">
                  <div className="text-lg sm:text-xl font-black text-white font-heading">
                    Natalia Oreiro
                  </div>
                  <div className="text-xs sm:text-sm text-red-300/90 font-medium">
                    Conductora de Got Talent
                  </div>
                </div>
              </button>

              {/* Facundo Arana */}
              <button
                disabled={whoSelectedSpeaker !== null}
                onClick={() => {
                  setWhoSelectedSpeaker('Facundo Arana');
                  if (WHO_SAID_IT_DATA[whoIndex].speaker === 'Facundo Arana') {
                    setWhoScore((s) => s + 1);
                  }
                }}
                className={`p-5 rounded-2xl border transition-all flex items-center gap-4 cursor-pointer shadow-lg ${
                  whoSelectedSpeaker
                    ? WHO_SAID_IT_DATA[whoIndex].speaker === 'Facundo Arana'
                      ? 'bg-green-950/60 border-green-500 ring-2 ring-green-400'
                      : whoSelectedSpeaker === 'Facundo Arana'
                      ? 'bg-red-950/60 border-red-500'
                      : 'bg-[#180206] opacity-50 border-stone-800'
                    : 'bg-[#1b0307] hover:bg-[#32070f] border-red-900/60 hover:border-amber-400/50'
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center font-black text-stone-950 text-lg shadow shrink-0">
                  FA
                </div>
                <div className="text-left">
                  <div className="text-lg sm:text-xl font-black text-white font-heading">
                    Facundo Arana
                  </div>
                  <div className="text-xs sm:text-sm text-amber-300/90 font-medium">
                    Jurado invitado especial
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Explanation & Next */}
          {whoSelectedSpeaker && (
            <div className="space-y-4 pt-2 animate-fadeIn">
              <div className="p-5 rounded-2xl bg-[#1c0307] border border-amber-500/30">
                <div className="text-xs sm:text-sm font-bold text-amber-400 uppercase mb-1">
                  Contexto en el vídeo
                </div>
                <div className="text-base sm:text-lg text-amber-100 font-semibold leading-relaxed">
                  {WHO_SAID_IT_DATA[whoIndex].contextEs}
                </div>
                <div className="mt-2.5 pt-2.5 border-t border-amber-500/20 text-sm sm:text-base text-orange-200 font-armenian leading-relaxed">
                  {WHO_SAID_IT_DATA[whoIndex].contextHy}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => {
                    if (whoIndex < WHO_SAID_IT_DATA.length - 1) {
                      setWhoIndex((i) => i + 1);
                      setWhoSelectedSpeaker(null);
                      setWhoShowArmenian(false);
                    } else {
                      setWhoIndex(0);
                      setWhoSelectedSpeaker(null);
                      setWhoShowArmenian(false);
                    }
                  }}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-bold text-sm shadow transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{whoIndex < WHO_SAID_IT_DATA.length - 1 ? 'Siguiente frase' : 'Volver a empezar'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* 4. ORDENA LAS PALABRAS */}
      {/* ======================================================== */}
      {activeTab === 'order' && (
        <div className="bg-[#240409] border-2 border-red-900/60 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-400">
              Frase {orderIndex + 1} de {WORD_ORDER_DATA.length}
            </span>
            <span className="text-xs font-mono text-yellow-300 font-bold bg-[#170205] px-3 py-1 rounded-full border border-amber-500/20">
              Aciertos: {orderScore}
            </span>
          </div>

          {/* Hint Card with Armenian translation on click */}
          <div
            onClick={() => setOrderShowArmenian(!orderShowArmenian)}
            className="group cursor-pointer p-5 rounded-2xl bg-[#1c0307] border border-amber-500/20 hover:border-amber-400/50 transition-all"
          >
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-amber-400 mb-1">
              <span>Pista sobre la frase:</span>
              <span className="text-xs text-amber-400/60 group-hover:text-amber-300 font-normal flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                <span>Հայերեն թարգմանություն (սեղմեք)</span>
              </span>
            </div>
            <div className="text-base sm:text-lg text-amber-100 font-semibold leading-relaxed">
              {WORD_ORDER_DATA[orderIndex].hintEs}
            </div>

            {orderShowArmenian && (
              <div className="mt-3.5 pt-3.5 border-t border-amber-500/20 text-base sm:text-lg font-bold text-yellow-300 font-armenian bg-[#29050c] p-3 rounded-xl animate-fadeIn leading-relaxed">
                <div className="text-xs text-amber-400/80 font-sans uppercase font-bold mb-1">
                  Հայերեն նպատակային թարգմանությունը
                </div>
                <div>{WORD_ORDER_DATA[orderIndex].translationHy}</div>
              </div>
            )}
          </div>

          {/* Slot for Selected Words (User's constructed sentence) */}
          <div className="space-y-2">
            <div className="text-sm text-amber-300 font-bold flex items-center justify-between">
              <span>Tu frase ordenada (toca las palabras para devolverlas):</span>
              {orderSelectedWords.length > 0 && !orderIsChecked && (
                <button
                  onClick={() => {
                    setOrderAvailableWords([...WORD_ORDER_DATA[orderIndex].words].sort(() => Math.random() - 0.5));
                    setOrderSelectedWords([]);
                  }}
                  className="text-xs text-red-400 hover:text-red-300 underline cursor-pointer"
                >
                  Reiniciar palabras
                </button>
              )}
            </div>

            <div className="min-h-[80px] p-5 rounded-2xl bg-[#140205] border-2 border-dashed border-amber-500/40 flex flex-wrap items-center gap-2.5">
              {orderSelectedWords.length === 0 ? (
                <div className="text-sm text-stone-500 italic">
                  Toca las palabras de abajo para armar la frase en el orden correcto...
                </div>
              ) : (
                orderSelectedWords.map((word, idx) => (
                  <button
                    key={`${word}-${idx}`}
                    disabled={orderIsChecked}
                    onClick={() => {
                      if (orderIsChecked) return;
                      // Remove from selected
                      const nextSelected = [...orderSelectedWords];
                      nextSelected.splice(idx, 1);
                      setOrderSelectedWords(nextSelected);
                      // Add back to available
                      setOrderAvailableWords((prev) => [...prev, word]);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-stone-950 font-black text-base sm:text-lg shadow hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    {word}
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Available Word Bank */}
          {!orderIsChecked && (
            <div className="space-y-2">
              <div className="text-sm text-amber-300 font-bold">
                Banco de palabras disponibles:
              </div>
              <div className="flex flex-wrap gap-3 p-4 rounded-2xl bg-[#1b0307] border border-red-950/60">
                {orderAvailableWords.map((word, idx) => (
                  <button
                    key={`${word}-${idx}`}
                    onClick={() => {
                      // Move word from available to selected
                      const nextAvailable = [...orderAvailableWords];
                      nextAvailable.splice(idx, 1);
                      setOrderAvailableWords(nextAvailable);
                      setOrderSelectedWords((prev) => [...prev, word]);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-[#2b050c] hover:bg-[#3d0812] text-amber-100 border border-amber-500/30 font-black text-base sm:text-lg shadow hover:border-amber-400 transition-all cursor-pointer"
                  >
                    {word}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Validation & Results */}
          {!orderIsChecked ? (
            <div className="flex justify-end pt-2">
              <button
                disabled={orderAvailableWords.length > 0}
                onClick={() => {
                  const constructed = orderSelectedWords.join(' ');
                  const target = WORD_ORDER_DATA[orderIndex].originalEs;
                  const isMatch = constructed.trim().toLowerCase() === target.trim().toLowerCase();
                  setOrderIsChecked(true);
                  setOrderIsCorrect(isMatch);
                  if (isMatch) setOrderScore((s) => s + 1);
                }}
                className={`px-7 py-3.5 rounded-2xl font-bold text-base shadow transition-all flex items-center gap-2 cursor-pointer ${
                  orderAvailableWords.length === 0
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 text-white shadow-red-500/30'
                    : 'bg-stone-800 text-stone-500 opacity-50 cursor-not-allowed'
                }`}
              >
                <span>Comprobar orden</span>
                <Check className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="space-y-4 pt-2 animate-fadeIn">
              {orderIsCorrect ? (
                <div className="flex items-center gap-2 text-green-400 font-bold text-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <span>¡Perfecto! Has ordenado la frase con exactitud.</span>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-red-400 font-bold text-lg">
                    <XCircle className="w-6 h-6 text-red-400" />
                    <span>El orden no es el correcto. La frase original era:</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#1c0307] border border-amber-400/40 text-yellow-300 font-black text-lg">
                    {WORD_ORDER_DATA[orderIndex].originalEs}
                  </div>
                </div>
              )}

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => {
                    if (orderIndex < WORD_ORDER_DATA.length - 1) {
                      setOrderIndex((i) => i + 1);
                    } else {
                      setOrderIndex(0);
                    }
                  }}
                  className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-base shadow transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{orderIndex < WORD_ORDER_DATA.length - 1 ? 'Siguiente frase' : 'Volver a ordenar'}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* 5. ELIGE EL SIGNIFICADO */}
      {/* ======================================================== */}
      {activeTab === 'meaning' && (
        <div className="bg-[#240409] border-2 border-red-900/60 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-bold text-amber-400">
              Expresión {meaningIndex + 1} de {EXPRESSION_MEANING_DATA.length}
            </span>
            <span className="text-xs sm:text-sm font-mono text-yellow-300 font-bold bg-[#170205] px-3 py-1 rounded-full border border-amber-500/20">
              Aciertos: {meaningScore}
            </span>
          </div>

          {/* Question / Expression Card */}
          <div
            onClick={() => setMeaningShowArmenianQuestion(!meaningShowArmenianQuestion)}
            className="group cursor-pointer p-6 rounded-2xl bg-[#1c0307] border border-amber-500/20 hover:border-amber-400/50 transition-all"
          >
            <div className="text-xl sm:text-2xl font-black text-amber-50 group-hover:text-yellow-200 transition-colors leading-relaxed">
              {EXPRESSION_MEANING_DATA[meaningIndex].expressionEs}
            </div>

            {meaningShowArmenianQuestion ? (
              <div className="mt-3.5 pt-3.5 border-t border-amber-500/20 text-base sm:text-lg font-semibold text-orange-200 font-armenian bg-[#2a060e] p-3.5 rounded-xl animate-fadeIn leading-relaxed">
                <div className="text-xs text-amber-400 font-sans uppercase font-bold mb-1">
                  Հայերեն թարգմանություն
                </div>
                <div>{EXPRESSION_MEANING_DATA[meaningIndex].expressionHy}</div>
              </div>
            ) : (
              <div className="mt-2 text-right">
                <span className="text-xs sm:text-sm text-amber-400/60 group-hover:text-amber-400 transition-colors flex items-center justify-end gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Հայերեն թարգմանություն (սեղմեք)</span>
                </span>
              </div>
            )}
          </div>

          {/* Meaning options */}
          <div className="space-y-3.5">
            <div className="text-sm text-amber-300 font-bold flex items-center justify-between">
              <span>Elige el significado correcto:</span>
              <span className="text-xs text-stone-400">
                * El botón de la letra selecciona. El texto traduce al armenio.
              </span>
            </div>

            {EXPRESSION_MEANING_DATA[meaningIndex].options.map((opt, idx) => {
              const letter = String.fromCharCode(65 + idx);
              const isSelected = meaningSelectedOption === opt.id;
              const isCorrect = meaningSelectedOption !== null && opt.id === EXPRESSION_MEANING_DATA[meaningIndex].correctOptionId;
              const isWrong = meaningSelectedOption !== null && isSelected && !isCorrect;
              const isTranslationOpen = meaningOptionTranslations[opt.id] || false;

              let cardStyle = 'bg-[#1a0206] border-red-950/70 hover:border-amber-500/40';
              if (meaningSelectedOption !== null) {
                if (isCorrect) {
                  cardStyle = 'bg-green-950/40 border-green-500';
                } else if (isWrong) {
                  cardStyle = 'bg-red-950/40 border-red-500';
                } else {
                  cardStyle = 'bg-[#150205] opacity-50 border-red-950/40';
                }
              }

              return (
                <div
                  key={opt.id}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all ${cardStyle}`}
                >
                  <div className="flex items-start gap-3.5">
                    {/* Separate selection element */}
                    <button
                      disabled={meaningSelectedOption !== null}
                      onClick={() => {
                        setMeaningSelectedOption(opt.id);
                        if (opt.id === EXPRESSION_MEANING_DATA[meaningIndex].correctOptionId) {
                          setMeaningScore((s) => s + 1);
                        }
                      }}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-base shrink-0 transition-all cursor-pointer ${
                        isCorrect
                          ? 'bg-green-500 text-stone-950 shadow'
                          : isWrong
                          ? 'bg-red-600 text-white shadow'
                          : isSelected
                          ? 'bg-amber-400 text-stone-950 ring-2 ring-yellow-300'
                          : 'bg-[#29050c] hover:bg-[#3d0812] text-amber-300 border border-red-900/60'
                      }`}
                      title={`Seleccionar opción ${letter}`}
                    >
                      {letter}
                    </button>

                    {/* Spanish text with Armenian translation on click */}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setMeaningOptionTranslations((prev) => ({
                          ...prev,
                          [opt.id]: !prev[opt.id]
                        }));
                      }}
                      className="flex-1 cursor-pointer group"
                    >
                      <div className="text-base sm:text-xl font-bold text-amber-100 group-hover:text-yellow-200 transition-colors leading-relaxed">
                        {opt.textEs}
                      </div>

                      {isTranslationOpen ? (
                        <div className="mt-2.5 pt-2.5 border-t border-amber-500/20 text-sm sm:text-base font-semibold text-orange-200 font-armenian bg-[#230409] p-3 rounded-xl animate-fadeIn leading-relaxed">
                          {opt.textHy}
                        </div>
                      ) : (
                        <div className="mt-1.5 flex items-center gap-1 text-xs text-amber-400/50 group-hover:text-amber-400 transition-colors">
                          <Eye className="w-3.5 h-3.5" />
                          <span>Հայերեն թարգմանություն (սեղմեք)</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Explanation & Next */}
          {meaningSelectedOption !== null && (
            <div className="space-y-4 pt-2 animate-fadeIn">
              <div className="p-5 rounded-2xl bg-[#1c0307] border border-amber-500/30">
                <div className="text-xs sm:text-sm font-bold text-amber-400 uppercase mb-1">
                  Explicación cultural y lingüística
                </div>
                <div className="text-base sm:text-lg text-amber-100 font-semibold leading-relaxed">
                  {EXPRESSION_MEANING_DATA[meaningIndex].explanationEs}
                </div>
                <div className="mt-2.5 pt-2.5 border-t border-amber-500/20 text-sm sm:text-base text-orange-200 font-armenian leading-relaxed">
                  {EXPRESSION_MEANING_DATA[meaningIndex].explanationHy}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => {
                    if (meaningIndex < EXPRESSION_MEANING_DATA.length - 1) {
                      setMeaningIndex((i) => i + 1);
                      setMeaningSelectedOption(null);
                      setMeaningShowArmenianQuestion(false);
                      setMeaningOptionTranslations({});
                    } else {
                      setMeaningIndex(0);
                      setMeaningSelectedOption(null);
                      setMeaningShowArmenianQuestion(false);
                      setMeaningOptionTranslations({});
                    }
                  }}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-bold text-sm shadow transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{meaningIndex < EXPRESSION_MEANING_DATA.length - 1 ? 'Siguiente expresión' : 'Volver a empezar'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
