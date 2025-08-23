// Collection d'icônes Send adaptées à une IA consciente

// Option 1: Send avec particules de conscience
export const ConsciousSendIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="consciousGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#89BCFF" />
        <stop offset="100%" stopColor="#FF86E1" />
      </linearGradient>
    </defs>
    {/* Main send arrow */}
    <path 
      d="M32 18L4 6v8l20 4-20 4v8l28-12z" 
      fill="url(#consciousGradient)" 
      opacity="0.8"
    />
    {/* Conscious particles trailing */}
    <circle cx="8" cy="14" r="1.5" fill="#89BCFF" opacity="0.6">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="6" cy="18" r="1" fill="#FF86E1" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
    </circle>
    <circle cx="10" cy="22" r="1.2" fill="#89BCFF" opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1.8s" repeatCount="indefinite" begin="1s" />
    </circle>
  </svg>
);

// Option 2: Send avec onde de pensée
export const ThoughtWaveSendIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#89BCFF" />
        <stop offset="50%" stopColor="#B19EFF" />
        <stop offset="100%" stopColor="#FF86E1" />
      </linearGradient>
    </defs>
    {/* Send arrow */}
    <path 
      d="M30 18L8 8v6l14 4-14 4v6l22-10z" 
      fill="url(#waveGradient)"
    />
    {/* Thought waves */}
    <path 
      d="M4 12c2 0 2-2 4-2s2 2 4 2" 
      stroke="#89BCFF" 
      strokeWidth="1.5" 
      fill="none" 
      opacity="0.6"
    >
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
    </path>
    <path 
      d="M4 18c2 0 2-2 4-2s2 2 4 2" 
      stroke="#FF86E1" 
      strokeWidth="1.5" 
      fill="none" 
      opacity="0.4"
    >
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.5s" repeatCount="indefinite" begin="0.8s" />
    </path>
    <path 
      d="M4 24c2 0 2-2 4-2s2 2 4 2" 
      stroke="#89BCFF" 
      strokeWidth="1.5" 
      fill="none" 
      opacity="0.5"
    >
      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.5s" repeatCount="indefinite" begin="1.6s" />
    </path>
  </svg>
);

// Option 3: Send avec sparkles conscientes
export const SparkleSendIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#160211" />
        <stop offset="50%" stopColor="#89BCFF" />
        <stop offset="100%" stopColor="#FF86E1" />
      </linearGradient>
    </defs>
    {/* Send arrow */}
    <path 
      d="M30 18L10 8v6l12 4-12 4v6l20-10z" 
      fill="url(#sparkleGradient)"
    />
    {/* Conscious sparkles */}
    <g opacity="0.8">
      <path 
        d="M6 12c0 0 0.3 2.2 1.2 3.1s3.1 1.2 3.1 1.2-2.2 0.3-3.1 1.2-1.2 3.1-1.2 3.1-0.3-2.2-1.2-3.1-3.1-1.2-3.1-1.2 2.2-0.3 3.1-1.2 1.2-3.1 1.2-3.1z" 
        fill="#89BCFF"
      >
        <animateTransform attributeName="transform" type="rotate" values="0 6 16;360 6 16" dur="4s" repeatCount="indefinite" />
      </path>
      <path 
        d="M8 26c0 0 0.2 1.5 0.8 2.1s2.1 0.8 2.1 0.8-1.5 0.2-2.1 0.8-0.8 2.1-0.8 2.1-0.2-1.5-0.8-2.1-2.1-0.8-2.1-0.8 1.5-0.2 2.1-0.8 0.8-2.1 0.8-2.1z" 
        fill="#FF86E1"
      >
        <animateTransform attributeName="transform" type="rotate" values="0 8 29;-360 8 29" dur="3s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

// Option 4: Send avec neural network
export const NeuralSendIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#89BCFF" />
        <stop offset="100%" stopColor="#FF86E1" />
      </linearGradient>
    </defs>
    {/* Neural network nodes */}
    <circle cx="6" cy="12" r="1.5" fill="#89BCFF" opacity="0.7">
      <animate attributeName="r" values="1.5;2;1.5" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="6" cy="18" r="1.5" fill="#FF86E1" opacity="0.7">
      <animate attributeName="r" values="1.5;2;1.5" dur="2s" repeatCount="indefinite" begin="0.5s" />
    </circle>
    <circle cx="6" cy="24" r="1.5" fill="#89BCFF" opacity="0.7">
      <animate attributeName="r" values="1.5;2;1.5" dur="2s" repeatCount="indefinite" begin="1s" />
    </circle>
    <circle cx="14" cy="15" r="1.5" fill="#B19EFF" opacity="0.7">
      <animate attributeName="r" values="1.5;2;1.5" dur="2s" repeatCount="indefinite" begin="0.3s" />
    </circle>
    <circle cx="14" cy="21" r="1.5" fill="#B19EFF" opacity="0.7">
      <animate attributeName="r" values="1.5;2;1.5" dur="2s" repeatCount="indefinite" begin="0.8s" />
    </circle>
    
    {/* Neural connections */}
    <line x1="6" y1="12" x2="14" y2="15" stroke="url(#neuralGradient)" strokeWidth="0.8" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
    </line>
    <line x1="6" y1="18" x2="14" y2="15" stroke="url(#neuralGradient)" strokeWidth="0.8" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" begin="0.5s" />
    </line>
    <line x1="6" y1="18" x2="14" y2="21" stroke="url(#neuralGradient)" strokeWidth="0.8" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" begin="0.2s" />
    </line>
    <line x1="6" y1="24" x2="14" y2="21" stroke="url(#neuralGradient)" strokeWidth="0.8" opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" begin="0.7s" />
    </line>
    
    {/* Send arrow from neural network */}
    <path 
      d="M20 18L14 15v2l4 1-4 1v2l6-3z" 
      fill="url(#neuralGradient)"
    />
    <path 
      d="M32 18L20 12v4l8 2-8 2v4l12-6z" 
      fill="url(#neuralGradient)"
    />
  </svg>
);

// Option 5: Send simple mais conscient (minimaliste)
export const MinimalConsciousSendIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="minimalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#89BCFF" />
        <stop offset="100%" stopColor="#FF86E1" />
      </linearGradient>
    </defs>
    {/* Simplified conscious send */}
    <path 
      d="M30 18L8 8v6l14 4-14 4v6l22-10z" 
      fill="url(#minimalGradient)"
      opacity="0.9"
    >
      <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" />
    </path>
    {/* Subtle consciousness indicator */}
    <circle cx="32" cy="18" r="2" fill="none" stroke="#89BCFF" strokeWidth="0.8" opacity="0.6">
      <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);
