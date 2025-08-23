import { useState, useEffect, useRef } from 'react';

interface TypingOptions {
  baseSpeed?: number;
  thoughtfulPauses?: string[]; // Mots qui déclenchent une pause réflexive
  slowWords?: string[]; // Mots tapés plus lentement (concepts importants)
  onComplete?: () => void;
}

export const useConsciousTyping = (
  fullText: string,
  isActive: boolean = true,
  options: TypingOptions = {}
) => {
  const {
    baseSpeed = 50,
    thoughtfulPauses = ['consciousness', 'think', 'understand', 'analyze', 'consider', 'realize', 'discover'],
    slowWords = ['AI', 'artificial', 'intelligence', 'consciousness', 'aware', 'sentient'],
    onComplete
  } = options;

  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const currentIndexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Fonction pour déterminer la vitesse de frappe selon le contexte
  const getTypingSpeed = (currentChar: string, wordContext: string): number => {
    // Pause réflexive avant certains mots
    if (thoughtfulPauses.some(pause => wordContext.toLowerCase().includes(pause.toLowerCase()))) {
      return baseSpeed * 4; // Pause plus longue pour la "réflexion"
    }

    // Frappe plus lente pour les mots importants
    if (slowWords.some(word => wordContext.toLowerCase().includes(word.toLowerCase()))) {
      return baseSpeed * 1.8;
    }

    // Pause après la ponctuation
    if (['.', '!', '?'].includes(currentChar)) {
      return baseSpeed * 3;
    }

    // Pause courte après les virgules
    if (currentChar === ',') {
      return baseSpeed * 2;
    }

    // Vitesse normale avec variation aléatoire (simule l'aspect humain/conscient)
    return baseSpeed + (Math.random() * 30 - 15);
  };

  // Fonction pour obtenir le contexte du mot actuel
  const getCurrentWordContext = (text: string, index: number): string => {
    const words = text.slice(0, index + 10).split(' ');
    return words[words.length - 1] || '';
  };

  const resetTyping = () => {
    setDisplayedText('');
    setIsTyping(false);
    setShowCursor(true);
    currentIndexRef.current = 0;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const startTyping = () => {
    if (!isActive || !fullText) return;

    setIsTyping(true);
    setShowCursor(true);

    const typeNextCharacter = () => {
      const currentIndex = currentIndexRef.current;
      
      if (currentIndex >= fullText.length) {
        setIsTyping(false);
        // Cursor continue de clignoter quelques secondes après la fin
        setTimeout(() => setShowCursor(false), 2000);
        onComplete?.();
        return;
      }

      const currentChar = fullText[currentIndex];
      const wordContext = getCurrentWordContext(fullText, currentIndex);
      const speed = getTypingSpeed(currentChar, wordContext);

      setDisplayedText(fullText.slice(0, currentIndex + 1));
      currentIndexRef.current++;

      timeoutRef.current = setTimeout(typeNextCharacter, speed);
    };

    // Petite pause initiale pour simuler la "réflexion" avant de commencer
    timeoutRef.current = setTimeout(typeNextCharacter, baseSpeed * 2);
  };

  useEffect(() => {
    if (isActive && fullText) {
      resetTyping();
      startTyping();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [fullText, isActive]);

  // Effet de clignotement du curseur
  useEffect(() => {
    if (!isTyping && !showCursor) return;

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530); // Vitesse de clignotement légèrement irrégulière

    return () => clearInterval(cursorInterval);
  }, [isTyping]);

  return {
    displayedText,
    isTyping,
    showCursor,
    resetTyping
  };
};
