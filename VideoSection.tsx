import React, { useState, useEffect, useRef } from 'react';
import { SubtitleLine } from './types.ts';
import { SUBTITLES_DATA } from './subtitlesData.ts';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Languages, 
  Sparkles, 
  Eye, 
  Clock, 
  Search, 
  Tv, 
  ChevronRight,
  Split,
  Maximize2,
  Type
} from 'lucide-react';

interface VideoSectionProps {
  onNavigateToQuiz: () => void;
  onNavigateToExpressions: () => void;
  initialTime?: number;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT: any;
  }
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  onNavigateToQuiz,
  onNavigateToExpressions,
  initialTime = 0
}) => {
  const [currentTime, setCurrentTime] = useState<number>(initialTime);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // Independent subtitles mode by default: playing video does NOT drag/jump subtitles
  const [isSyncActive, setIsSyncActive] = useState<boolean>(false);
  const [selectedSubtitleId, setSelectedSubtitleId] = useState<number | null>(null);
  const [revealedTranslations, setRevealedTranslations] = useState<{ [key: number]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isApiReady, setIsApiReady] = useState<boolean>(false);
  // Font scale: 'normal' | 'large' | 'xlarge'
  const [fontSizeLevel, setFontSizeLevel] = useState<'large' | 'xlarge'>('large');

  const playerRef = useRef<any>(null);
  const subtitlesContainerRef = useRef<HTMLDivElement>(null);
  const activeSubtitleRef = useRef<HTMLDivElement>(null);

  // Initialize YouTube Iframe Player
  useEffect(() => {
    let interval: any;

    const setupPlayer = () => {
      if (!window.YT || !window.YT.Player) return;

      try {
        playerRef.current = new window.YT.Player('youtube-player-frame', {
          videoId: 'scTGyo6vJYA',
          playerVars: {
            start: 0, // Starts at 0:00 as required
            autoplay: 0,
            controls: 1,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
          },
          events: {
            onReady: (event: any) => {
              setIsApiReady(true);
              if (initialTime > 0) {
                event.target.seekTo(initialTime, true);
              } else {
                event.target.seekTo(0, true);
              }
              // STRICT REQUIREMENT: Never auto-play! Playback starts ONLY on clicking the play icon
              event.target.pauseVideo();
              setIsPlaying(false);
            },
            onStateChange: (event: any) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
              } else if (
                event.data === window.YT.PlayerState.PAUSED ||
                event.data === window.YT.PlayerState.ENDED
              ) {
                setIsPlaying(false);
              }
            },
          },
        });
      } catch (e) {
        console.warn('YouTube API notice:', e);
      }
    };

    if (window.YT && window.YT.Player) {
      setupPlayer();
    } else {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        setupPlayer();
      };
    }

    // Polling player time
    interval = setInterval(() => {
      if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
        try {
          const t = playerRef.current.getCurrentTime();
          if (typeof t === 'number' && !isNaN(t)) {
            setCurrentTime(t);
            // ONLY sync active subtitle if user explicitly turns on Live Sync mode
            if (isSyncActive) {
              const active = SUBTITLES_DATA.find((sub) => t >= sub.start && t <= sub.end);
              if (active) {
                setSelectedSubtitleId(active.id);
              }
            }
          }
        } catch (err) {
          // ignore
        }
      }
    }, 250);

    return () => {
      if (interval) clearInterval(interval);
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // cleanup
        }
      }
    };
  }, [isSyncActive, initialTime]);

  // Auto-scroll ONLY when isSyncActive is enabled
  useEffect(() => {
    if (isSyncActive && activeSubtitleRef.current && subtitlesContainerRef.current) {
      activeSubtitleRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [selectedSubtitleId, isSyncActive]);

  // Jump to specific timecode: only plays when shouldPlay is explicitly set to true
  const seekToTime = (seconds: number, subtitleId?: number, shouldPlay: boolean = false) => {
    setCurrentTime(seconds);
    if (subtitleId) {
      setSelectedSubtitleId(subtitleId);
    }

    if (playerRef.current && typeof playerRef.current.seekTo === 'function') {
      playerRef.current.seekTo(seconds, true);
      if (shouldPlay) {
        playerRef.current.playVideo();
        setIsPlaying(true);
      } else {
        // Keeps video paused at that exact moment without starting playback automatically
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      }
    }
  };

  // Replay phrase: explicitly plays when clicking the replay icon
  const replayPhrase = (sub: SubtitleLine, e: React.MouseEvent) => {
    e.stopPropagation();
    seekToTime(sub.start, sub.id, true);
  };

  // Toggle Armenian translation for a specific phrase
  const toggleTranslation = (id: number) => {
    setRevealedTranslations((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Toggle playback
  const togglePlay = () => {
    if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const changeSpeed = (speed: number) => {
    setPlaybackSpeed(speed);
    if (playerRef.current && typeof playerRef.current.setPlaybackRate === 'function') {
      playerRef.current.setPlaybackRate(speed);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const filteredSubtitles = SUBTITLES_DATA.filter((sub) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      sub.spanishText.toLowerCase().includes(q) ||
      sub.armenianText.toLowerCase().includes(q) ||
      sub.speaker.toLowerCase().includes(q)
    );
  });

  // Dynamic font size classes based on user setting
  const spanishTextClass = fontSizeLevel === 'xlarge' 
    ? 'text-lg sm:text-2xl font-bold' 
    : 'text-base sm:text-xl font-bold';

  const armenianTextClass = fontSizeLevel === 'xlarge'
    ? 'text-base sm:text-lg font-semibold'
    : 'text-sm sm:text-base font-medium';

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Banner Header */}
      <div className="bg-gradient-to-r from-[#480a12] via-[#66101d] to-[#38060d] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">
              <Tv className="w-4 h-4 text-amber-400" />
              <span>Got Talent Uruguay 3 • Programa 7</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-orange-400 font-heading">
              Natalia Oreiro y Facundo Arana
            </h1>
            <p className="text-amber-100/90 mt-2 text-base sm:text-lg max-w-3xl leading-relaxed">
              El inolvidable reencuentro de los protagonistas de <span className="text-yellow-400 font-bold">«Muñeca Brava»</span>. 
              El vídeo se reproduce de forma independiente para que puedas leer y estudiar las frases con tranquilidad.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={onNavigateToQuiz}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-red-500/30 transition-all flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Quiz Interactivo</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={onNavigateToExpressions}
              className="px-5 py-3.5 rounded-2xl bg-[#2e050b]/80 hover:bg-[#3d0810] border border-amber-500/30 text-amber-200 font-semibold text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Expresiones</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Video + Subtitles */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Video Player & Video Controls */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#26040a] border-2 border-red-900/60 rounded-3xl p-3 sm:p-5 shadow-2xl relative">
            {/* Player Container */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner border border-amber-500/20">
              <div id="youtube-player-frame" className="w-full h-full"></div>
            </div>

            {/* Video Controls Bar */}
            <div className="mt-4 px-2 flex flex-wrap items-center justify-between gap-3 text-sm">
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-stone-950 font-black text-sm flex items-center gap-2 shadow-lg hover:shadow-amber-500/30 transition-all cursor-pointer active:scale-95"
                  title={isPlaying ? "Pausar vídeo" : "Iniciar reproducción al hacer clic"}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-5 h-5 fill-current" />
                      <span>Pausar</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                      <span>Reproducir</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => seekToTime(Math.max(0, currentTime - 5), undefined, false)}
                  className="px-3.5 py-2.5 rounded-xl bg-[#3b0811] hover:bg-[#4d0b16] text-amber-200 text-xs sm:text-sm font-semibold border border-red-800/40 transition-colors flex items-center gap-1 cursor-pointer"
                  title="Retroceder 5 segundos (sin reproducir)"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>-5s</span>
                </button>

                <button
                  onClick={() => seekToTime(0, undefined, false)}
                  className="px-3.5 py-2.5 rounded-xl bg-[#3b0811] hover:bg-[#4d0b16] text-amber-200 text-xs sm:text-sm font-semibold border border-red-800/40 transition-colors cursor-pointer"
                  title="Ubicar en 0:00 (sin reproducir)"
                >
                  0:00
                </button>

                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-amber-300 font-mono px-3 py-1.5 rounded-lg bg-[#1a0206] border border-amber-500/20 font-bold">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>{formatTime(currentTime)}</span>
                  <span className="text-stone-500">/</span>
                  <span className="text-stone-400">1:35</span>
                </div>
              </div>

              {/* Playback Speed Controls */}
              <div className="flex items-center gap-1 bg-[#1a0206] p-1.5 rounded-xl border border-amber-500/20">
                <span className="text-xs uppercase font-bold text-amber-400/80 px-1.5">Velocidad:</span>
                {[0.75, 1, 1.25].map((speed) => (
                  <button
                    key={speed}
                    onClick={() => changeSpeed(speed)}
                    className={`px-2.5 py-1 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      playbackSpeed === speed
                        ? 'bg-amber-500 text-black shadow'
                        : 'text-amber-200/70 hover:text-amber-200 hover:bg-[#3b0811]'
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
            </div>

            {/* Note banner on independent reading */}
            <div className="mt-4 p-3.5 rounded-2xl bg-gradient-to-r from-[#3b0811]/90 to-[#28050b]/90 border border-amber-500/20 text-xs sm:text-sm text-amber-200/90 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-yellow-300">Modo de lectura libre:</span> El vídeo corre sin forzar el avance de los subtítulos. Puedes desplazarte y leer las frases a tu propio ritmo sin que la pantalla salte.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Independent Subtitles List with enlarged font */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#26040a] border-2 border-red-900/60 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col h-[640px]">
            {/* Header of Subtitles */}
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-red-900/60">
              <div className="flex items-center gap-2">
                <Languages className="w-6 h-6 text-yellow-400" />
                <h2 className="text-xl font-bold text-yellow-300 font-heading">
                  Subtítulos didácticos
                </h2>
              </div>

              {/* Font Size Selector: Normal / Grande / Extra Grande */}
              <div className="flex items-center gap-1 bg-[#170205] p-1 rounded-xl border border-amber-500/30">
                <span className="text-[11px] text-amber-300/80 font-bold px-1.5 flex items-center gap-1">
                  <Type className="w-3.5 h-3.5 text-amber-400" />
                  <span>Шрифт:</span>
                </span>
                <button
                  onClick={() => setFontSizeLevel('large')}
                  className={`px-2 py-0.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    fontSizeLevel === 'large'
                      ? 'bg-amber-400 text-stone-950 shadow'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                  title="Шрифт побольше"
                >
                  Большой
                </button>
                <button
                  onClick={() => setFontSizeLevel('xlarge')}
                  className={`px-2 py-0.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    fontSizeLevel === 'xlarge'
                      ? 'bg-amber-400 text-stone-950 shadow'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                  title="Максимальный шрифт"
                >
                  Очень большой
                </button>
              </div>
            </div>

            {/* Subtitles Mode & Search Bar */}
            <div className="py-3 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-amber-400/60" />
                  <input
                    type="text"
                    placeholder="Buscar frase en español o armenio..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#170205] border border-amber-500/20 text-sm text-amber-100 placeholder:text-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* Subtitle Independence Toggle */}
                <button
                  onClick={() => setIsSyncActive(!isSyncActive)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSyncActive
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                      : 'bg-[#180205] border-red-900/60 text-stone-400 hover:text-stone-200'
                  }`}
                  title="Alternar entre modo independiente y sincronizado en vivo"
                >
                  <Split className="w-3.5 h-3.5" />
                  <span>{isSyncActive ? 'Sincronizado' : 'Independiente'}</span>
                </button>
              </div>

              {/* Status explanation */}
              <div className="text-xs text-amber-200/80 bg-[#35070f]/60 px-3 py-2 rounded-xl flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Haz clic en cualquier frase para ver su traducción al armenio.</span>
                </span>
                <span className="text-[11px] font-bold text-amber-400/70 shrink-0">
                  {SUBTITLES_DATA.length} frases
                </span>
              </div>
            </div>

            {/* Subtitles Scrollable List (Separated, doesn't jump automatically) */}
            <div
              ref={subtitlesContainerRef}
              className="flex-1 overflow-y-auto space-y-3.5 pr-1.5"
            >
              {filteredSubtitles.map((sub) => {
                const isSelected = selectedSubtitleId === sub.id;
                const isRevealed = revealedTranslations[sub.id] || false;
                const isNatalia = sub.speaker === 'Natalia Oreiro';

                return (
                  <div
                    key={sub.id}
                    ref={isSelected ? activeSubtitleRef : null}
                    onClick={() => {
                      setSelectedSubtitleId(sub.id);
                      toggleTranslation(sub.id);
                    }}
                    className={`group p-4 rounded-2xl border transition-all cursor-pointer relative ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#4d0b16] to-[#69111f] border-amber-400 shadow-xl shadow-amber-500/10 ring-1 ring-amber-400/50'
                        : 'bg-[#1b0307]/90 hover:bg-[#2e050d] border-red-950/80 hover:border-amber-500/40'
                    }`}
                  >
                    {/* Speaker Header + Timecode Controls */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                            isNatalia
                              ? 'bg-red-600 text-white'
                              : 'bg-amber-500 text-stone-950'
                          }`}
                        >
                          {isNatalia ? 'NO' : 'FA'}
                        </span>
                        <span
                          className={`text-sm font-extrabold ${
                            isNatalia ? 'text-red-300' : 'text-amber-300'
                          }`}
                        >
                          {sub.speaker}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {/* Position timecode (without auto-playing) */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            seekToTime(sub.start, sub.id, false);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-[#140205] hover:bg-stone-800 border border-amber-500/30 text-xs font-mono text-amber-300 font-bold transition-colors flex items-center gap-1 cursor-pointer"
                          title="Ubicar vídeo en este segundo (sin reproducir)"
                        >
                          <Clock className="w-3 h-3 text-amber-400" />
                          <span>{formatTime(sub.start)}</span>
                        </button>

                        {/* Play upon clicking this icon */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            seekToTime(sub.start, sub.id, true);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-[#140205] hover:bg-amber-400 hover:text-stone-950 border border-amber-500/30 text-xs text-amber-300 hover:text-stone-950 font-bold transition-all flex items-center gap-1 cursor-pointer shadow"
                          title="Reproducir frase al hacer clic en el icono"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>Reproducir</span>
                        </button>

                        <button
                          onClick={(e) => replayPhrase(sub, e)}
                          className="p-1.5 rounded-lg bg-[#140205] hover:bg-orange-500 hover:text-black text-amber-400/80 hover:text-black border border-amber-500/30 transition-colors cursor-pointer"
                          title="Repetir esta frase"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Spanish Text (Enlarged font) */}
                    <div className={`${spanishTextClass} text-amber-50 group-hover:text-yellow-200 transition-colors leading-snug`}>
                      {sub.spanishText}
                    </div>

                    {/* Armenian Translation (Toggled on click) */}
                    {isRevealed ? (
                      <div className="mt-3 pt-3 border-t border-amber-400/25 bg-[#160205]/80 p-3 rounded-xl animate-fadeIn space-y-1">
                        <div className="flex items-center justify-between text-xs text-amber-400 font-sans uppercase font-bold">
                          <span>Հայերեն թարգմանություն</span>
                          <span className="text-stone-400 normal-case font-normal text-[11px]">
                            Սեղմեք թաքցնելու համար
                          </span>
                        </div>
                        <div className={`${armenianTextClass} text-orange-200 font-armenian leading-relaxed`}>
                          {sub.armenianText}
                        </div>
                      </div>
                    ) : (
                      <div className="mt-2 flex items-center justify-end">
                        <span className="text-xs text-amber-400/60 group-hover:text-amber-400 transition-colors flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5" />
                          <span>Հայերեն թարգմանություն (սեղմեք)</span>
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}

              {filteredSubtitles.length === 0 && (
                <div className="text-center py-16 text-stone-500 text-sm">
                  No se encontraron frases que coincidan con la búsqueda.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
