import React, { useState } from 'react';
import { QuizQuestion } from './types.ts';
import { QUIZ_QUESTIONS } from './quizData.ts';
import { 
  Award, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Video, 
  Eye, 
  Sparkles, 
  Gamepad2, 
  ChevronDown, 
  ChevronUp,
  AlertCircle
} from 'lucide-react';

interface ResultsViewProps {
  score: number;
  total: number;
  userAnswers: { [questionId: number]: string };
  onRepeatQuiz: () => void;
  onBackToVideo: () => void;
  onPracticeAgain: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  score,
  total,
  userAnswers,
  onRepeatQuiz,
  onBackToVideo,
  onPracticeAgain,
}) => {
  const [showErrorsOnly, setShowErrorsOnly] = useState<boolean>(false);
  const [revealedTranslations, setRevealedTranslations] = useState<{ [qId: number]: boolean }>({});

  const percentage = Math.round((score / total) * 100);

  // Identify wrong questions
  const wrongQuestions = QUIZ_QUESTIONS.filter((q) => {
    const userChoice = userAnswers[q.id];
    return userChoice !== q.correctOptionId;
  });

  const toggleTranslation = (qId: number) => {
    setRevealedTranslations((prev) => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const getBadge = () => {
    if (percentage >= 90) {
      return {
        title: '¡Excelente nivel rioplatense!',
        subtitle: 'Has captado los matices, el humor y la complicidad de Natalia y Facundo a la perfección.',
        color: 'from-amber-400 to-yellow-500 text-stone-950',
      };
    } else if (percentage >= 70) {
      return {
        title: '¡Muy buen resultado!',
        subtitle: 'Comprendes la gran mayoría de expresiones y situaciones del vídeo.',
        color: 'from-orange-500 to-amber-500 text-stone-950',
      };
    } else {
      return {
        title: '¡Buen intento! Sigue practicando.',
        subtitle: 'Revisa las frases del vídeo y los significados de las expresiones para dominar el diálogo.',
        color: 'from-red-600 to-orange-600 text-white',
      };
    }
  };

  const badge = getBadge();
  const questionsToDisplay = showErrorsOnly ? wrongQuestions : QUIZ_QUESTIONS;

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn pb-16">
      {/* Score Header Card */}
      <div className="bg-gradient-to-r from-[#440911] via-[#5c0e1b] to-[#31050b] border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-yellow-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider mb-4">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Resultados del Quiz Interactivo</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-orange-400 font-heading mb-2">
          {score} de {total} correctas
        </h1>

        <div className="text-4xl sm:text-6xl font-black text-yellow-400 font-mono my-3">
          {percentage}%
        </div>

        <div className="max-w-xl mx-auto mt-4 p-4 rounded-2xl bg-[#240409]/80 border border-amber-500/30">
          <div className="text-lg font-bold text-yellow-300 mb-1">{badge.title}</div>
          <div className="text-xs sm:text-sm text-amber-100/80 leading-relaxed">{badge.subtitle}</div>
        </div>

        {/* Action Buttons required by brief:
            - Repetir el quiz
            - Revisar mis errores
            - Volver al vídeo
            - Practicar otra vez
        */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onRepeatQuiz}
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold text-sm shadow-lg hover:shadow-red-500/30 transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-100"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Repetir el quiz</span>
          </button>

          <button
            onClick={() => setShowErrorsOnly(!showErrorsOnly)}
            className={`px-5 py-3 rounded-2xl font-bold text-sm border transition-all flex items-center gap-2 cursor-pointer ${
              showErrorsOnly
                ? 'bg-amber-400 text-stone-950 border-amber-300 shadow'
                : 'bg-[#29050c] hover:bg-[#3d0812] text-amber-200 border-amber-500/30'
            }`}
          >
            <AlertCircle className="w-4 h-4" />
            <span>
              {showErrorsOnly ? 'Ver todas las preguntas' : `Revisar mis errores (${wrongQuestions.length})`}
            </span>
          </button>

          <button
            onClick={onBackToVideo}
            className="px-5 py-3 rounded-2xl bg-[#29050c] hover:bg-[#3d0812] border border-amber-500/30 text-amber-200 font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <Video className="w-4 h-4 text-amber-400" />
            <span>Volver al vídeo</span>
          </button>

          <button
            onClick={onPracticeAgain}
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-extrabold text-sm shadow transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-100"
          >
            <Gamepad2 className="w-4 h-4" />
            <span>Practicar otra vez</span>
          </button>
        </div>
      </div>

      {/* Review Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-xl font-bold text-yellow-300 font-heading flex items-center gap-2">
            <span>Desglose detallado</span>
            <span className="text-xs text-amber-300/70 bg-[#250409] px-2.5 py-0.5 rounded-full border border-amber-500/20 font-normal">
              {questionsToDisplay.length} preguntas
            </span>
          </h2>
          <span className="text-xs text-amber-300/60">
            Haz clic en cualquier pregunta para ver la traducción al armenio
          </span>
        </div>

        {wrongQuestions.length === 0 && showErrorsOnly ? (
          <div className="p-10 rounded-3xl bg-[#240409] border border-amber-500/30 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto" />
            <div className="text-lg font-bold text-yellow-300">¡No cometiste ningún error!</div>
            <div className="text-xs text-amber-200/80">Has respondido correctamente todas las preguntas del quiz.</div>
          </div>
        ) : (
          questionsToDisplay.map((q) => {
            const userChoice = userAnswers[q.id];
            const isCorrect = userChoice === q.correctOptionId;
            const isRevealed = revealedTranslations[q.id] || false;
            const correctOpt = q.options.find((o) => o.id === q.correctOptionId);
            const userOpt = q.options.find((o) => o.id === userChoice);

            return (
              <div
                key={q.id}
                onClick={() => toggleTranslation(q.id)}
                className={`p-5 rounded-3xl border transition-all cursor-pointer ${
                  isCorrect
                    ? 'bg-[#1c0307] border-green-500/30 hover:border-green-500/60'
                    : 'bg-[#26040a] border-red-500/50 hover:border-red-500/80'
                }`}
              >
                {/* Header: Question status & Question Es */}
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                    )}
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs sm:text-sm font-bold text-amber-400">
                        Pregunta {q.id}
                      </span>
                      <span className="text-xs text-amber-400/70 flex items-center gap-1 font-semibold">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Հայերեն (սեղմեք)</span>
                      </span>
                    </div>

                    <div className="text-lg sm:text-xl font-black text-amber-100 leading-snug">
                      {q.questionEs}
                    </div>

                    {/* Armenian Translation of Question */}
                    {isRevealed && (
                      <div className="pt-2.5 text-sm sm:text-base font-semibold text-orange-200 font-armenian bg-[#160205] p-3 rounded-xl border border-amber-500/20 animate-fadeIn leading-relaxed">
                        {q.questionHy}
                      </div>
                    )}

                    {/* User's choice and correct choice */}
                    <div className="pt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                      <div className="p-3 rounded-xl bg-[#170205] border border-red-900/40">
                        <span className="text-stone-400 block mb-0.5 text-xs font-semibold">Tu respuesta:</span>
                        <span className={`font-bold ${isCorrect ? 'text-green-300' : 'text-red-300'}`}>
                          {userOpt ? userOpt.textEs : 'Sin responder'}
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-[#170205] border border-amber-500/30">
                        <span className="text-amber-400/80 block mb-0.5 text-xs font-semibold">Respuesta correcta:</span>
                        <span className="font-bold text-yellow-300">
                          {correctOpt?.textEs}
                        </span>
                      </div>
                    </div>

                    {/* Explanation */}
                    <div className="pt-2.5 text-sm sm:text-base text-amber-200/90 leading-relaxed border-t border-red-950/60">
                      <span className="font-bold text-amber-400">Explicación: </span>
                      <span>{q.explanationEs}</span>
                      {isRevealed && (
                        <div className="mt-2 pt-2 border-t border-amber-500/20 text-sm sm:text-base text-orange-200 font-armenian leading-relaxed">
                          {q.explanationHy}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
