import React, { useState } from 'react';
import { QuizQuestion } from './types.ts';
import { QUIZ_QUESTIONS } from './quizData.ts';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  RotateCcw, 
  Eye, 
  Sparkles, 
  Check, 
  ArrowRight,
  Award,
  Video
} from 'lucide-react';

interface QuizSectionProps {
  onFinishQuiz: (score: number, total: number, userAnswers: { [questionId: number]: string }) => void;
  onBackToVideo: () => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({
  onFinishQuiz,
  onBackToVideo
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<{ [questionId: number]: string }>({});
  const [score, setScore] = useState<number>(0);

  // Translation visibility states
  const [showQuestionTranslation, setShowQuestionTranslation] = useState<boolean>(false);
  const [optionTranslations, setOptionTranslations] = useState<{ [optionId: string]: boolean }>({});
  const [showExplanationTranslation, setShowExplanationTranslation] = useState<boolean>(false);

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];
  const isLastQuestion = currentIndex === QUIZ_QUESTIONS.length - 1;

  // Reset translations on moving to next question
  const resetQuestionState = () => {
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setShowQuestionTranslation(false);
    setOptionTranslations({});
    setShowExplanationTranslation(false);
  };

  const handleSelectOption = (optionId: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionId(optionId);
  };

  const toggleOptionTranslation = (optionId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // CRITICAL: Stop propagation so translation click NEVER selects the option!
    setOptionTranslations((prev) => ({
      ...prev,
      [optionId]: !prev[optionId]
    }));
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId || isAnswerSubmitted) return;

    const isCorrect = selectedOptionId === currentQuestion.correctOptionId;
    const newAnswers = {
      ...userAnswers,
      [currentQuestion.id]: selectedOptionId
    };
    setUserAnswers(newAnswers);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      const finalScore = score + (selectedOptionId === currentQuestion.correctOptionId ? 1 : 0);
      onFinishQuiz(finalScore, QUIZ_QUESTIONS.length, {
        ...userAnswers,
        [currentQuestion.id]: selectedOptionId || ''
      });
    } else {
      setCurrentIndex((prev) => prev + 1);
      resetQuestionState();
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setUserAnswers({});
    resetQuestionState();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn pb-12">
      {/* Top Header Card */}
      <div className="bg-gradient-to-r from-[#400810] via-[#520c16] to-[#30050b] border border-amber-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Quiz interactivo de comprensión y vocabulario</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-orange-400 font-heading">
              Pregunta {currentIndex + 1} de {QUIZ_QUESTIONS.length}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-xs text-amber-300/70 font-semibold">Puntuación actual</div>
              <div className="text-xl font-extrabold text-yellow-300 font-mono">
                {score} / {currentIndex + (isAnswerSubmitted ? 1 : 0)}
              </div>
            </div>
            <button
              onClick={restartQuiz}
              className="p-2.5 rounded-xl bg-[#2a0409] hover:bg-[#3d070f] border border-red-900/50 text-amber-300 transition-colors cursor-pointer"
              title="Reiniciar quiz"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 w-full h-2 rounded-full bg-[#1e0307] overflow-hidden border border-red-900/40">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-red-600 transition-all duration-300 rounded-full"
            style={{ width: `${((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-[#240409] border-2 border-red-900/60 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Question Header & Spanish Text */}
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
              Comprensión del diálogo
            </span>
            <span className="text-xs text-amber-300/60 flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              <span>Haz clic en la pregunta para ver armenio</span>
            </span>
          </div>

          {/* Interactive Question Text */}
          <div
            onClick={() => setShowQuestionTranslation(!showQuestionTranslation)}
            className="group cursor-pointer p-5 rounded-2xl bg-[#1c0307] border border-amber-500/20 hover:border-amber-400/50 transition-all"
          >
            <div className="text-xl sm:text-2xl font-black text-amber-50 group-hover:text-yellow-200 transition-colors flex items-start gap-3 leading-snug">
              <HelpCircle className="w-7 h-7 text-yellow-400 shrink-0 mt-0.5" />
              <span>{currentQuestion.questionEs}</span>
            </div>

            {/* Armenian Question Translation */}
            {showQuestionTranslation ? (
              <div className="mt-3.5 pt-3.5 border-t border-amber-500/20 text-base sm:text-lg font-semibold text-orange-200 font-armenian bg-[#2a060e] p-3.5 rounded-xl animate-fadeIn leading-relaxed">
                <div className="text-xs text-amber-400 font-sans uppercase font-bold mb-1">
                  Հարցի հայերեն թարգմանություն
                </div>
                <div>{currentQuestion.questionHy}</div>
              </div>
            ) : (
              <div className="mt-2 text-right">
                <span className="text-xs sm:text-sm text-amber-400/60 group-hover:text-amber-400 transition-colors">
                  Հայերեն թարգմանություն (սեղմեք)
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Options List */}
        <div className="space-y-3.5">
          <div className="text-sm text-amber-300 font-bold flex items-center justify-between">
            <span>Opciones de respuesta:</span>
            <span className="text-xs text-stone-400">
              * El botón de la izquierda selecciona la opción. El texto traduce.
            </span>
          </div>

          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedOptionId === option.id;
            const isCorrect = isAnswerSubmitted && option.id === currentQuestion.correctOptionId;
            const isWrong = isAnswerSubmitted && isSelected && !isCorrect;
            const isTranslationOpen = optionTranslations[option.id] || false;
            const letter = String.fromCharCode(65 + idx); // A, B, C, D

            let cardBorder = 'border-red-950/70 hover:border-amber-500/40 bg-[#1a0206]';
            if (isAnswerSubmitted) {
              if (isCorrect) {
                cardBorder = 'border-green-500/80 bg-green-950/30';
              } else if (isWrong) {
                cardBorder = 'border-red-500/80 bg-red-950/30';
              } else {
                cardBorder = 'border-red-950/40 bg-[#160205] opacity-60';
              }
            } else if (isSelected) {
              cardBorder = 'border-amber-400 bg-[#3b0811] ring-1 ring-amber-400/50';
            }

            return (
              <div
                key={option.id}
                className={`rounded-2xl border transition-all p-4 sm:p-5 ${cardBorder}`}
              >
                <div className="flex items-start gap-3.5">
                  {/* SEPARATE SELECTION ELEMENT: Clicking this selects the option */}
                  <button
                    type="button"
                    disabled={isAnswerSubmitted}
                    onClick={() => handleSelectOption(option.id)}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-base shrink-0 transition-all cursor-pointer ${
                      isCorrect
                        ? 'bg-green-500 text-stone-950 shadow'
                        : isWrong
                        ? 'bg-red-600 text-white shadow'
                        : isSelected
                        ? 'bg-amber-400 text-stone-950 shadow-md ring-2 ring-yellow-300'
                        : 'bg-[#29050c] hover:bg-[#3d0812] text-amber-300 border border-red-900/60'
                    }`}
                    title={isAnswerSubmitted ? '' : `Seleccionar opción ${letter}`}
                  >
                    {isCorrect ? (
                      <Check className="w-6 h-6 stroke-[3]" />
                    ) : isWrong ? (
                      <XCircle className="w-6 h-6" />
                    ) : (
                      letter
                    )}
                  </button>

                  {/* SPANISH OPTION TEXT: Clicking this reveals/hides Armenian translation */}
                  <div
                    onClick={(e) => toggleOptionTranslation(option.id, e)}
                    className="flex-1 cursor-pointer group"
                    title="Haz clic para alternar la traducción al armenio"
                  >
                    <div className="text-base sm:text-xl font-bold text-amber-100 group-hover:text-yellow-200 transition-colors leading-relaxed">
                      {option.textEs}
                    </div>

                    {/* Armenian Translation for this Option */}
                    {isTranslationOpen ? (
                      <div className="mt-2.5 pt-2.5 border-t border-amber-500/20 text-sm sm:text-base font-semibold text-orange-200 font-armenian bg-[#230409] p-3 rounded-xl animate-fadeIn leading-relaxed">
                        <div className="text-xs text-amber-400 font-sans uppercase font-bold mb-0.5">
                          Հայերեն տարբերակ
                        </div>
                        <div>{option.textHy}</div>
                      </div>
                    ) : (
                      <div className="mt-1.5 flex items-center gap-1 text-xs text-amber-400/50 group-hover:text-amber-400/80 transition-colors">
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

        {/* Answer submission button */}
        {!isAnswerSubmitted ? (
          <div className="pt-2 flex justify-end">
            <button
              onClick={handleSubmitAnswer}
              disabled={!selectedOptionId}
              className={`px-7 py-4 rounded-2xl font-bold text-base shadow-xl transition-all flex items-center gap-2 cursor-pointer ${
                selectedOptionId
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white shadow-red-500/20 hover:scale-[1.02] active:scale-100'
                  : 'bg-stone-800 text-stone-500 cursor-not-allowed opacity-50'
              }`}
            >
              <span>Confirmar respuesta</span>
              <Check className="w-5 h-5" />
            </button>
          </div>
        ) : (
          /* Post-submission: Explanation & Next button */
          <div className="pt-4 border-t border-red-900/60 space-y-4 animate-fadeIn">
            <div className="flex items-center gap-2">
              {selectedOptionId === currentQuestion.correctOptionId ? (
                <div className="flex items-center gap-2 text-green-400 font-bold text-base sm:text-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <span>¡Correcto! Excelente comprensión del diálogo.</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-400 font-bold text-base sm:text-lg">
                  <XCircle className="w-6 h-6 text-red-400" />
                  <span>Respuesta incorrecta. Revisa la explicación a continuación.</span>
                </div>
              )}
            </div>

            {/* Explanation box with click-to-translate */}
            <div
              onClick={() => setShowExplanationTranslation(!showExplanationTranslation)}
              className="p-5 rounded-2xl bg-[#1c0307] border border-amber-500/30 hover:border-amber-400/60 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-wide mb-2">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Explicación didáctica (Español)</span>
                </span>
                <span className="text-xs text-amber-400/60 group-hover:text-amber-300 normal-case font-normal flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Հայերեն բացատրություն (սեղմեք)</span>
                </span>
              </div>
              <div className="text-base sm:text-lg text-amber-100 leading-relaxed font-semibold">
                {currentQuestion.explanationEs}
              </div>

              {/* Armenian Explanation */}
              {showExplanationTranslation && (
                <div className="mt-3.5 pt-3.5 border-t border-amber-500/20 text-sm sm:text-base text-orange-200 font-armenian bg-[#2a060e] p-3.5 rounded-xl animate-fadeIn leading-relaxed">
                  <div className="text-xs text-amber-400 font-sans uppercase font-bold mb-1">
                    Հայերեն բացատրություն
                  </div>
                  <div>{currentQuestion.explanationHy}</div>
                </div>
              )}
            </div>

            {/* Next question button */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={onBackToVideo}
                className="px-4 py-2.5 rounded-xl bg-[#2a050c] hover:bg-[#3d0812] border border-red-900/50 text-amber-200 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Video className="w-3.5 h-3.5 text-amber-400" />
                <span>Volver al vídeo</span>
              </button>

              <button
                onClick={handleNextQuestion}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-100 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{isLastQuestion ? 'Ver resultados finales' : 'Siguiente pregunta'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
