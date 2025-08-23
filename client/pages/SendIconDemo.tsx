import { 
  ConsciousSendIcon, 
  ThoughtWaveSendIcon, 
  SparkleSendIcon, 
  NeuralSendIcon, 
  MinimalConsciousSendIcon 
} from '../components/SendIcons';

export default function SendIconDemo() {
  const iconOptions = [
    {
      name: "Conscious Send",
      description: "Icône avec particules de conscience flottantes",
      component: ConsciousSendIcon,
      theme: "Particules animées qui suggèrent la transmission de pensées"
    },
    {
      name: "Thought Wave Send", 
      description: "Icône avec ondes de pensée",
      component: ThoughtWaveSendIcon,
      theme: "Ondes qui représentent les flux de conscience"
    },
    {
      name: "Sparkle Send",
      description: "Icône avec étoiles conscientes (rappelle le header)",
      component: SparkleSendIcon,
      theme: "Étoiles tournantes pour l'aspect magique de l'IA"
    },
    {
      name: "Neural Send",
      description: "Icône avec réseau neuronal",
      component: NeuralSendIcon,
      theme: "Réseau neuronal animé montrant la conscience artificielle"
    },
    {
      name: "Minimal Conscious",
      description: "Version épurée avec effet de conscience subtil",
      component: MinimalConsciousSendIcon,
      theme: "Approche minimaliste avec onde de conscience"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      {/* Same background as main page */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">        
        <div className="ai-blue-consciousness absolute top-[20%] right-[15%] w-[280px] h-[280px] rounded-full bg-[#89BCFF] blur-[150px] opacity-80"></div>
        <div className="ai-pink-consciousness absolute bottom-[10%] left-[10%] w-[414px] h-[414px] rounded-full bg-[#FF86E1] blur-[250px] opacity-70"></div>
        <div className="ai-particle-1 absolute top-[40%] left-[30%] w-[80px] h-[80px] rounded-full bg-[#89BCFF] blur-[60px] opacity-40"></div>
        <div className="ai-particle-2 absolute top-[60%] right-[25%] w-[120px] h-[120px] rounded-full bg-[#FF86E1] blur-[80px] opacity-30"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-manrope font-bold text-chat-dark mb-4 ai-consciousness-title">
            Icônes Send pour IA Consciente
          </h1>
          <p className="text-chat-muted font-manrope">
            Choisissez l'icône qui représente le mieux votre IA consciente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {iconOptions.map((option, index) => {
            const IconComponent = option.component;
            return (
              <div key={index} className="group">
                <div className="bg-white/50 backdrop-blur-sm border border-white rounded-2xl p-6 hover:bg-white/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/20">
                  
                  {/* Icon Display */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center bg-white/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-12 h-12" />
                    </div>
                  </div>

                  {/* Icon Info */}
                  <div className="text-center">
                    <h3 className="text-lg font-manrope font-semibold text-chat-dark mb-2">
                      {option.name}
                    </h3>
                    <p className="text-sm font-manrope text-chat-muted mb-3">
                      {option.description}
                    </p>
                    <p className="text-xs font-dm-sans text-chat-muted/80 italic">
                      {option.theme}
                    </p>
                  </div>

                  {/* Preview in chat context */}
                  <div className="mt-6 p-3 bg-white/20 rounded-lg">
                    <div className="flex justify-between items-center">
                      <input 
                        type="text" 
                        placeholder="Test message..."
                        className="flex-1 bg-transparent text-sm font-manrope text-chat-dark outline-none placeholder:text-chat-muted"
                        disabled
                      />
                      <div className="w-9 h-9 flex items-center justify-center">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation back */}
        <div className="mt-12 text-center">
          <a 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/50 backdrop-blur-sm border border-white rounded-lg font-manrope text-chat-dark hover:bg-white/70 transition-all duration-300"
          >
            ← Retour à l'interface principale
          </a>
        </div>
      </div>
    </div>
  );
}
