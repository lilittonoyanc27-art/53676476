import React, { useState } from 'react';
import { Navbar, ActiveView } from './Navbar.tsx';
import { VideoSection } from './VideoSection.tsx';
import { QuizSection } from './QuizSection.tsx';
import { GamesSection } from './GamesSection.tsx';
import { DictionarySection } from './DictionarySection.tsx';
import { ResultsView } from './ResultsView.tsx';
import { 
  Tv, 
  HelpCircle, 
  Gamepad2, 
  BookOpen, 
  Heart, 
  Sparkles, 
  Flame,
  Award
} from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('video');
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizTotal, setQuizTotal] = useState<number>(15);
  const [userAnswers, setUserAnswers] = useState<{ [qId: number]: string }>({});
  const [videoJumpSeconds, setVideoJumpSeconds] = useState<number>(0);

  const handleFinishQuiz = (
    score: number,
    total: number,
    answers: { [qId: number]: string }
  ) => {
    setQuizScore(score);
    setQuizTotal(total);
    setUserAnswers(answers);
    setActiveView('results');
  };

  const handleJumpToVideoTime = (seconds: number) => {
    setVideoJumpSeconds(seconds);
    setActiveView('video');
  };

  return (
    <div className="min-h-screen bg-[#1a0307] text-amber-50 flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Top Navigation */}
      <Navbar
        activeView={activeView}
        onSelectView={(view) => setActiveView(view)}
        quizScore={quizScore}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeView === 'video' && (
          <VideoSection
            initialTime={videoJumpSeconds}
            onNavigateToQuiz={() => setActiveView('quiz')}
            onNavigateToExpressions={() => setActiveView('dictionary')}
          />
        )}

        {activeView === 'quiz' && (
          <QuizSection
            onFinishQuiz={handleFinishQuiz}
            onBackToVideo={() => setActiveView('video')}
          />
        )}

        {activeView === 'games' && (
          <GamesSection onBackToVideo={() => setActiveView('video')} />
        )}

        {activeView === 'dictionary' && (
          <DictionarySection onJumpToVideoTime={handleJumpToVideoTime} />
        )}

        {activeView === 'results' && (
          <ResultsView
            score={quizScore}
            total={quizTotal}
            userAnswers={userAnswers}
            onRepeatQuiz={() => setActiveView('quiz')}
            onBackToVideo={() => setActiveView('video')}
            onPracticeAgain={() => setActiveView('games')}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#140205] border-t border-red-950/80 py-8 px-4 text-center text-xs text-amber-300/60 space-y-2">
        <div className="flex items-center justify-center gap-2 text-amber-400 font-bold">
          <Sparkles className="w-4 h-4" />
          <span>Aprende Español Rioplatense con Got Talent Uruguay</span>
        </div>
        <p className="max-w-xl mx-auto text-stone-400 text-[11px] leading-relaxed">
          Natalia Oreiro y Facundo Arana reviven la complicidad de «Muñeca Brava» en Got Talent Uruguay. 
          Todas las réplicas cuentan con traducción interactiva al armenio (Հայերեն) disponible al hacer clic.
        </p>
        <div className="text-[10px] text-stone-500 pt-2">
          Solo español y armenio en la interfaz • Sin traducción automática obligatoria
        </div>
      </footer>
    </div>
  );
}
