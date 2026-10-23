import React from 'react';
import { 
  Tv, 
  HelpCircle, 
  Gamepad2, 
  BookOpen, 
  Sparkles,
  Flame
} from 'lucide-react';

export type ActiveView = 'video' | 'quiz' | 'games' | 'dictionary' | 'results';

interface NavbarProps {
  activeView: ActiveView;
  onSelectView: (view: ActiveView) => void;
  quizScore?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onSelectView,
  quizScore
}) => {
  const navItems = [
    { id: 'video' as ActiveView, label: 'Vídeo y Subtítulos', icon: Tv },
    { id: 'quiz' as ActiveView, label: 'Quiz interactivo (15)', icon: HelpCircle },
    { id: 'games' as ActiveView, label: '5 Juegos didácticos', icon: Gamepad2 },
    { id: 'dictionary' as ActiveView, label: 'Expresiones del vídeo', icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1f0308]/95 backdrop-blur-md border-b border-red-900/60 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo / Title */}
          <div
            onClick={() => onSelectView('video')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-red-600 via-orange-500 to-amber-400 p-0.5 shadow-lg shadow-red-950/50 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#200308] rounded-[14px] flex items-center justify-center">
                <Flame className="w-5 h-5 text-amber-400 fill-amber-400" />
              </div>
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-orange-400 font-heading leading-tight">
                Español con Natalia y Facundo
              </div>
              <div className="text-[10px] sm:text-xs text-amber-300/70 font-semibold tracking-wider uppercase">
                Got Talent • Muñeca Brava
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 bg-[#140205] p-1.5 rounded-2xl border border-red-900/50 shadow-inner">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectView(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-stone-950 shadow-md shadow-amber-500/20'
                      : 'text-amber-200/80 hover:text-amber-100 hover:bg-[#2e050c]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Info Badge */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2a050d] border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Español & Հայերեն</span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="md:hidden flex items-center justify-between gap-1 py-2 border-t border-red-900/40 overflow-x-auto scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectView(item.id)}
                className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-stone-950 shadow'
                    : 'text-amber-200/80 hover:bg-[#2e050c]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
