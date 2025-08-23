import { useState } from "react";

// Sparkle icon component
const SparkleIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 4.5C12 4.5 12.579 9.90745 14.836 12.164C17.093 14.4207 22.5 15 22.5 15C22.5 15 17.093 15.5793 14.836 17.836C12.579 20.0926 12 25.5 12 25.5C12 25.5 11.421 20.0926 9.164 17.836C6.907 15.5793 1.5 15 1.5 15C1.5 15 6.907 14.4207 9.164 12.164C11.421 9.90745 12 4.5 12 4.5Z"
      fill="currentColor"
    />
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
  <div className="flex flex-col items-start w-full max-w-md">
    <div className="text-xs font-manrope text-black/60 uppercase tracking-wide mb-2 font-medium">
      {sender}
    </div>
    <div className={`flex p-2.5 justify-center items-center gap-2.5 self-stretch rounded-lg border border-white ${isLoading ? 'bg-gradient-to-r from-white/25 to-white/40' : 'bg-white/50'} backdrop-blur-sm`}>
      {isLoading ? (
        <div className="flex items-center gap-2">
          <SparkleIcon className="w-4 h-4 text-white animate-pulse" />
          <SparkleIcon className="w-3 h-3 text-white animate-pulse" style={{ animationDelay: '0.2s' }} />
          <SparkleIcon className="w-4 h-4 text-white animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
      ) : (
        <div className="text-sm font-manrope text-chat-dark font-normal leading-normal">
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
      {/* Gradient background blur effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[150px] left-[322px] w-[880px] h-[880px] rounded-full bg-chat-blue-blur opacity-100 blur-[150px]"></div>
        <div className="absolute top-[0px] left-[-142px] w-[1414px] h-[1414px] rounded-full bg-chat-pink-blur opacity-100 blur-[250px]"></div>
      </div>

      {/* Main container */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header with sparkles and title */}
        <div className="flex flex-col items-center gap-12 mt-32 mb-16">
          <div className="flex items-center gap-6">
            <SparkleIcon className="w-8 h-8 text-chat-dark" />
            <SparkleIcon className="w-6 h-6 text-chat-dark" />
            <SparkleIcon className="w-8 h-8 text-chat-dark" />
          </div>
          <h1 className="text-2xl font-manrope text-chat-dark font-normal">
            Ask our AI anything
          </h1>
        </div>

        {/* Chat conversation area */}
        {showChat && (
          <div className="flex flex-col gap-6 mb-8 px-4">
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
          <div className="flex flex-col items-start gap-4 mb-8 px-4">
            <div className="text-sm font-manrope text-chat-muted font-bold">
              Suggestions on what to ask Our AI
            </div>
            <div className="flex flex-wrap gap-4">
              {suggestions.map((suggestion, index) => (
                <SuggestionCard key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion}
                </SuggestionCard>
              ))}
            </div>
          </div>
        )}

        {/* Bottom input area */}
        <div className="mt-auto px-4">
          <div className="flex w-full max-w-[883px] mx-auto p-2.5 justify-between items-center rounded-lg border border-chat-dark/30 bg-white">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about your projects"
              className="flex-1 bg-transparent text-sm font-manrope text-chat-muted font-normal outline-none placeholder:text-chat-muted"
            />
            <button
              onClick={handleSendMessage}
              className="w-9 h-9 flex items-center justify-center text-chat-muted/50 hover:text-chat-muted transition-colors"
            >
              <SendIcon className="w-9 h-9" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
