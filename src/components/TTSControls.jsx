import React, { useState, useEffect, useRef, useCallback } from 'react';

const TTSControls = ({ textContent, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [speed, setSpeed] = useState(1.0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSupported, setIsSupported] = useState(true);
  
  const utteranceRef = useRef(null);
  const synthesisRef = useRef(null);

  const supportedLanguages = ['en-US', 'en-GB', 'fr-FR', 'de-DE', 'ru-RU', 'es-ES'];

  // Initialize speech synthesis
  useEffect(() => {
    if (!window.speechSynthesis) {
      setIsSupported(false);
      setIsLoading(false);
      console.warn('Speech synthesis not supported in this browser');
      return;
    }

    synthesisRef.current = window.speechSynthesis;

    const loadVoices = () => {
      const availableVoices = synthesisRef.current.getVoices();
      const filteredVoices = availableVoices.filter(voice => {
        const lang = voice.lang.toLowerCase();
        return supportedLanguages.some(supported => 
          lang === supported.toLowerCase()
        );
      });

      // Sort by language preference
      const sortedVoices = [...filteredVoices].sort((a, b) => {
        const aLang = a.lang.toLowerCase();
        const bLang = b.lang.toLowerCase();
        
        // Exact matches first
        if (supportedLanguages.includes(aLang) && !supportedLanguages.includes(bLang)) return -1;
        if (!supportedLanguages.includes(aLang) && supportedLanguages.includes(bLang)) return 1;
        
        // Language family matches second
        const aFamily = aLang.split('-')[0];
        const bFamily = bLang.split('-')[0];
        const supportedFamilies = supportedLanguages.map(l => l.split('-')[0]);
        
        if (supportedFamilies.includes(aFamily) && !supportedFamilies.includes(bFamily)) return -1;
        if (!supportedFamilies.includes(aFamily) && supportedFamilies.includes(bFamily)) return 1;
        
        return 0;
      });

      setVoices(sortedVoices);
      
      // Select first available voice or fallback
      if (sortedVoices.length > 0) {
        setSelectedVoice(sortedVoices[0]);
      } else if (availableVoices.length > 0) {
        // Fallback to any available voice
        setSelectedVoice(availableVoices[0]);
      }
      
      setIsLoading(false);
    };

    loadVoices();
    
    // Handle voice loading in Chrome
    if (synthesisRef.current.onvoiceschanged !== undefined) {
      synthesisRef.current.onvoiceschanged = loadVoices;
    }

    return () => {
      if (synthesisRef.current) {
        synthesisRef.current.cancel();
      }
    };
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (utteranceRef.current) {
        utteranceRef.current.onend = null;
        utteranceRef.current.onerror = null;
      }
      if (synthesisRef.current) {
        synthesisRef.current.cancel();
      }
    };
  }, []);

  const handlePlay = useCallback(() => {
    if (!textContent?.trim() || !selectedVoice) return;

    if (isPaused && utteranceRef.current) {
      synthesisRef.current.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    // Cancel any existing speech
    synthesisRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(textContent);
    utterance.voice = selectedVoice;
    utterance.rate = speed;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = (event) => {
      console.warn('Speech synthesis error:', event.error);
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    synthesisRef.current.speak(utterance);
  }, [textContent, selectedVoice, speed, isPaused]);

  const handlePause = useCallback(() => {
    if (synthesisRef.current && isPlaying) {
      synthesisRef.current.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  }, [isPlaying]);

  const handleStop = useCallback(() => {
    if (synthesisRef.current) {
      synthesisRef.current.cancel();
      setIsPlaying(false);
      setIsPaused(false);
    }
  }, []);

  const handleVoiceChange = useCallback((voice) => {
    setSelectedVoice(voice);
    if (isPlaying || isPaused) {
      handleStop();
      // Restart with new voice
      setTimeout(() => {
        const newUtterance = new SpeechSynthesisUtterance(textContent);
        newUtterance.voice = voice;
        newUtterance.rate = speed;
        newUtterance.pitch = 1;
        newUtterance.volume = 1;
        
        newUtterance.onstart = () => {
          setIsPlaying(true);
          setIsPaused(false);
        };
        
        newUtterance.onend = () => {
          setIsPlaying(false);
          setIsPaused(false);
        };
        
        newUtterance.onerror = (event) => {
          console.warn('Speech synthesis error:', event.error);
          setIsPlaying(false);
          setIsPaused(false);
        };
        
        utteranceRef.current = newUtterance;
        synthesisRef.current.speak(newUtterance);
      }, 100);
    }
  }, [isPlaying, isPaused, textContent, speed, handleStop]);

  const handleSpeedChange = useCallback((newSpeed) => {
    setSpeed(newSpeed);
    if (utteranceRef.current) {
      utteranceRef.current.rate = newSpeed;
    }
  }, []);

  const isDisabled = !textContent?.trim() || !isSupported;

  if (!isSupported) {
    return (
      <div className={`p-4 rounded-lg bg-red-50 border border-red-200 ${className}`}>
        <p className="text-sm text-red-700">Speech synthesis not supported in this browser.</p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-4 p-4 rounded-lg bg-global-2 border border-gray-200 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        <PlayPauseButton
          isPlaying={isPlaying}
          isPaused={isPaused}
          isDisabled={isDisabled}
          onPlay={handlePlay}
          onPause={handlePause}
          onStop={handleStop}
        />
        
        <SpeedControl
          speed={speed}
          onSpeedChange={handleSpeedChange}
          isDisabled={isDisabled}
        />
        
        <VoiceSelector
          voices={voices}
          selectedVoice={selectedVoice}
          onVoiceChange={handleVoiceChange}
          isLoading={isLoading}
          isDisabled={isDisabled}
        />
      </div>
      
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {isPlaying ? 'Playing' : isPaused ? 'Paused' : 'Stopped'}
      </div>
    </div>
  );
};

const PlayPauseButton = ({ isPlaying, isPaused, isDisabled, onPlay, onPause, onStop }) => {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={isPlaying ? onPause : onPlay}
        disabled={isDisabled}
        className="flex-1 sm:flex-none px-4 py-2 rounded-md bg-global-1 text-global-4 hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        aria-label={isPlaying ? 'Pause speech' : isPaused ? 'Resume speech' : 'Play speech'}
      >
        {isPlaying ? (
          <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        ) : isPaused ? (
          <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        )}
      </button>
      
      <button
        type="button"
        onClick={onStop}
        disabled={isDisabled || (!isPlaying && !isPaused)}
        className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        aria-label="Stop speech"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

const SpeedControl = ({ speed, onSpeedChange, isDisabled }) => {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="speed-control" className="text-sm font-medium text-gray-700 whitespace-nowrap">
        Speed:
      </label>
      <input
        id="speed-control"
        type="range"
        min="0.5"
        max="2.0"
        step="0.1"
        value={speed}
        onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
        disabled={isDisabled}
        className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Speech speed"
      />
      <span className="text-sm text-gray-600 w-12 text-right" aria-live="polite">
        {speed.toFixed(1)}×
      </span>
    </div>
  );
};

const VoiceSelector = ({ voices, selectedVoice, onVoiceChange, isLoading, isDisabled }) => {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="voice-selector" className="text-sm font-medium text-gray-700 whitespace-nowrap">
        Voice:
      </label>
      <select
        id="voice-selector"
        value={selectedVoice?.name || ''}
        onChange={(e) => {
          const voice = voices.find(v => v.name === e.target.value);
          if (voice) onVoiceChange(voice);
        }}
        disabled={isDisabled || isLoading}
        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
        aria-label="Select voice"
      >
        {isLoading ? (
          <option value="">Loading voices...</option>
        ) : voices.length === 0 ? (
          <option value="">No voices available</option>
        ) : (
          voices.map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name} ({voice.lang})
            </option>
          ))
        )}
      </select>
    </div>
  );
};

export default TTSControls;
