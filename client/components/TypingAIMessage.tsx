import { useConsciousTyping } from '../hooks/useConsciousTyping';

interface TypingAIMessageProps {
  message: string;
  isActive: boolean;
  onComplete?: () => void;
}

export const TypingAIMessage = ({ message, isActive, onComplete }: TypingAIMessageProps) => {
  const { displayedText, isTyping, showCursor } = useConsciousTyping(
    message,
    isActive,
    {
      baseSpeed: 45,
      onComplete
    }
  );

  return (
    <div className="flex flex-col items-start w-full max-w-xs sm:max-w-md lg:max-w-lg">
      <div className="text-xs font-manrope text-black/60 uppercase tracking-wide mb-2 font-medium">
        Our AI
      </div>
      <div className="flex p-2.5 justify-center items-start gap-2.5 self-stretch rounded-lg border border-white bg-white/50 backdrop-blur-sm min-h-[50px]">
        <div className="text-sm font-manrope text-chat-dark font-normal leading-relaxed whitespace-pre-line">
          {displayedText}
          {(isTyping || showCursor) && (
            <span className={`inline-block w-[2px] h-[1.2em] bg-chat-dark ml-[1px] ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
              |
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
