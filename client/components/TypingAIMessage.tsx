import { useConsciousTyping } from "../hooks/useConsciousTyping";

interface TypingAIMessageProps {
  message: string;
  isActive: boolean;
  onComplete?: () => void;
}

export const TypingAIMessage = ({
  message,
  isActive,
  onComplete,
}: TypingAIMessageProps) => {
  const { displayedText, isTyping, showCursor } = useConsciousTyping(
    message,
    isActive,
    {
      baseSpeed: 45,
      onComplete,
    },
  );

  return (
    <div className="flex flex-col items-start w-full max-w-xs sm:max-w-md lg:max-w-lg">
      <div className="text-xs font-manrope text-black/60 uppercase tracking-wide mb-2 font-medium">
        Our AI
      </div>
      <div
        className={`flex p-2.5 justify-center items-start gap-2.5 self-stretch rounded-lg border border-white backdrop-blur-sm min-h-[50px] transition-all duration-300 ${
          isTyping
            ? "bg-gradient-to-r from-white/40 to-white/60 shadow-lg shadow-blue-100/20"
            : "bg-white/50"
        }`}
      >
        <div className="text-sm font-manrope text-chat-dark font-normal leading-relaxed whitespace-pre-line">
          {displayedText}
          {(isTyping || showCursor) && (
            <span
              className={`inline-block w-[2px] h-[1.2em] ml-[1px] transition-all duration-100 ${
                showCursor
                  ? "opacity-100 bg-gradient-to-b from-blue-500 to-purple-500"
                  : "opacity-0 bg-chat-dark"
              }`}
            >
              |
            </span>
          )}
          {isTyping && (
            <div className="inline-flex ml-1 gap-1">
              <div
                className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
