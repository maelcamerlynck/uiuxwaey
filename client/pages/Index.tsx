import { useState } from "react";

// Sparkle icon components - corrected to display properly
const SparkleIcon1 = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 0.085968C10.5 0.085968 11.079 5.4934 13.336 7.75002C15.593 10.0066 21 10.586 21 10.586C21 10.586 15.593 11.1653 13.336 13.4219C11.079 15.6785 10.5 21.086 10.5 21.086C10.5 21.086 9.921 15.6785 7.664 13.4219C5.407 11.1653 0 10.586 0 10.586C0 10.586 5.407 10.0066 7.664 7.75002C9.921 5.4934 10.5 0.085968 10.5 0.085968Z" fill="#160211"/>
  </svg>
);

const SparkleIcon2 = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 21 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 8C10.5 8 11.079 13.4074 13.336 15.664C15.593 17.9207 21 18.5 21 18.5C21 18.5 15.593 19.0793 13.336 21.336C11.079 23.5926 10.5 29 10.5 29C10.5 29 9.921 23.5926 7.664 21.336C5.407 19.0793 0 18.5 0 18.5C0 18.5 5.407 17.9207 7.664 15.664C9.921 13.4074 10.5 8 10.5 8Z" fill="#160211"/>
  </svg>
);

const SparkleIcon3 = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 21 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 16.914C10.5 16.914 11.079 22.3215 13.336 24.5781C15.593 26.8347 21 27.414 21 27.414C21 27.414 15.593 27.9934 13.336 30.25C11.079 32.5066 10.5 37.914 10.5 37.914C10.5 37.914 9.921 32.5066 7.664 30.25C5.407 27.9934 0 27.414 0 27.414C0 27.414 5.407 26.8347 7.664 24.5781C9.921 22.3215 10.5 16.914 10.5 16.914Z" fill="#160211"/>
  </svg>
);

// Send icon component
const SendIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_0_17)">
      <path 
        d="M34.8522 17.4802L1.24281 0.629307C1.1062 0.561003 0.949507 0.544932 0.800846 0.581093C0.635855 0.621881 0.493748 0.726385 0.405641 0.871724C0.317535 1.01706 0.290608 1.19139 0.330757 1.35654L3.79415 15.5074C3.84638 15.7204 4.00308 15.8931 4.21201 15.9614L10.1464 17.9985L4.21602 20.0356C4.0071 20.1079 3.8504 20.2766 3.80219 20.4896L0.330757 34.6606C0.294596 34.8092 0.310668 34.9659 0.378971 35.0985C0.535668 35.4159 0.921382 35.5445 1.24281 35.3878L34.8522 18.6333C34.9767 18.5731 35.0772 18.4686 35.1415 18.3481C35.2982 18.0266 35.1696 17.6409 34.8522 17.4802ZM4.29236 30.6347L6.31335 22.3739L18.1741 18.3039C18.2665 18.2717 18.3428 18.1994 18.375 18.103C18.4312 17.9342 18.3428 17.7534 18.1741 17.6931L6.31335 13.6271L4.3004 5.3985L29.5325 18.0507L4.29236 30.6347Z" 
        fill="currentColor" 
        fillOpacity="0.5"
      />
    </g>
  </svg>
);

// Suggestion card component
const SuggestionCard = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="inline-flex p-2.5 justify-center items-center gap-2.5 rounded-lg border border-white bg-white/50 backdrop-blur-sm hover:bg-white/60 transition-all duration-200 text-sm font-dm-sans text-chat-dark font-normal leading-normal w-full sm:w-auto min-h-[56px]"
  >
    {children}
  </button>
);

// Chat message component
const ChatMessage = ({ sender, children, isLoading = false }: {
  sender: "Me" | "Our AI",
  children: React.ReactNode,
  isLoading?: boolean
}) => (
  <div className="flex flex-col items-start w-full max-w-xs sm:max-w-md lg:max-w-lg">
    <div className="text-xs font-manrope text-black/60 uppercase tracking-wide mb-2 font-medium">
      {sender}
    </div>
    <div className={`flex p-2.5 justify-center items-start gap-2.5 self-stretch rounded-lg border border-white ${isLoading ? 'bg-gradient-to-r from-white/25 to-white/40' : 'bg-white/50'} backdrop-blur-sm min-h-[50px]`}>
      {isLoading ? (
        <div className="flex items-center justify-center w-full gap-2">
          <SparkleIcon1 className="w-4 h-4 text-white animate-pulse" />
          <SparkleIcon2 className="w-3 h-3 text-white animate-pulse" style={{ animationDelay: '0.2s' }} />
          <SparkleIcon3 className="w-4 h-4 text-white animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
      ) : (
        <div className="text-sm font-manrope text-chat-dark font-normal leading-relaxed whitespace-pre-line">
          {children}
        </div>
      )}
    </div>
  </div>
);

export default function Index() {
  const [inputValue, setInputValue] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState<{ sender: "Me" | "Our AI", message: string }[]>([]);

  const suggestions = [
    "What can I ask you to do?",
    "Which one of my projects is performing the best?",
    "What projects should I be concerned about right now?"
  ];

  const handleSuggestionClick = (suggestion: string) => {
    setConversation([{ sender: "Me", message: suggestion }]);
    setShowChat(true);
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      setIsLoading(false);
      if (suggestion === "What can I ask you to do?") {
        setConversation(prev => [...prev, {
          sender: "Our AI",
          message: "Great question! You can ask for my help with the following:\n• Anything to do with your reports in our software e.g. What is the last report we exported?\n• Anything to do with your organisation e.g. how many employees are using our software?\n• Anything to do with the features we have in our software e.g how can I change the colours of my report?"
        }]);
      }
    }, 2000);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    setConversation(prev => [...prev, { sender: "Me", message: inputValue }]);
    setShowChat(true);
    setIsLoading(true);
    setInputValue("");
    
    // Simulate AI response
    setTimeout(() => {
      setIsLoading(false);
      setConversation(prev => [...prev, {
        sender: "Our AI",
        message: "I understand your question. Let me help you with that."
      }]);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      {/* Dynamic gradient background - Living AI consciousness */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blue consciousness orb */}
        <div className="ai-blue-consciousness absolute top-[20%] right-[15%] w-[280px] h-[280px] rounded-full bg-[#89BCFF] blur-[150px] opacity-80"></div>

        {/* Pink consciousness orb */}
        <div className="ai-pink-consciousness absolute bottom-[10%] left-[10%] w-[414px] h-[414px] rounded-full bg-[#FF86E1] blur-[250px] opacity-70"></div>

        {/* Additional floating thought particles */}
        <div className="ai-particle-1 absolute top-[40%] left-[30%] w-[80px] h-[80px] rounded-full bg-[#89BCFF] blur-[60px] opacity-40"></div>

        <div className="ai-particle-2 absolute top-[60%] right-[25%] w-[120px] h-[120px] rounded-full bg-[#FF86E1] blur-[80px] opacity-30"></div>
      </div>

      {/* Main container */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 min-h-screen flex flex-col">
        {/* Header with sparkles and title */}
        <div className="flex flex-col items-center gap-8 sm:gap-12 mt-16 sm:mt-32 mb-8 sm:mb-16">
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <SparkleIcon3 className="w-5 h-5 sm:w-6 sm:h-6" />
            <SparkleIcon2 className="w-4 h-4 sm:w-5 sm:h-5" />
            <SparkleIcon1 className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h1 className="text-xl sm:text-2xl font-manrope text-chat-dark font-normal text-center">
            Ask our AI anything
          </h1>
        </div>

        {/* Chat conversation area */}
        {showChat && (
          <div className="flex flex-col gap-4 sm:gap-6 mb-6 sm:mb-8 px-0 sm:px-4">
            {conversation.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "Me" ? "justify-start" : "justify-end"}`}>
                <ChatMessage sender={msg.sender}>
                  {msg.message}
                </ChatMessage>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end">
                <ChatMessage sender="Our AI" isLoading />
              </div>
            )}
          </div>
        )}

        {/* Suggestions section - only show when not in chat mode */}
        {!showChat && (
          <div className="flex flex-col items-start gap-4 mb-6 sm:mb-8 px-0 sm:px-4">
            <div className="text-sm font-manrope text-chat-muted font-bold">
              Suggestions on what to ask Our AI
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full">
              {suggestions.map((suggestion, index) => (
                <SuggestionCard key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </SuggestionCard>
              ))}
            </div>
          </div>
        )}

        {/* Bottom input area */}
        <div className="mt-auto px-0 sm:px-4">
          <div className="flex w-full max-w-[883px] mx-auto p-2.5 justify-between items-center rounded-lg border border-chat-dark/30 bg-white">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about your projects"
              className="flex-1 bg-transparent text-sm font-manrope text-chat-muted font-normal outline-none placeholder:text-chat-muted px-2"
            />
            <button
              onClick={handleSendMessage}
              className="w-9 h-9 flex items-center justify-center text-chat-muted/50 hover:text-chat-muted transition-colors flex-shrink-0"
            >
              <SendIcon className="w-8 h-8 sm:w-9 sm:h-9" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
