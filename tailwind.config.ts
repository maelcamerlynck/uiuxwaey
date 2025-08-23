import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        'chat': {
          'dark': '#160211',
          'muted': '#56637E',
          'light-muted': '#AAA',
          'blue-blur': '#89BCFF',
          'pink-blur': '#FF86E1',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "aiPulse": {
          "0%, 100%": {
            transform: "scale(1) translate(0, 0)",
            opacity: "0.8"
          },
          "25%": {
            transform: "scale(1.1) translate(10px, -5px)",
            opacity: "0.9"
          },
          "50%": {
            transform: "scale(0.95) translate(-5px, 10px)",
            opacity: "0.7"
          },
          "75%": {
            transform: "scale(1.05) translate(15px, 5px)",
            opacity: "0.85"
          }
        },
        "consciousnessFlow": {
          "0%": {
            transform: "rotate(0deg) translateX(20px) rotate(0deg)",
            opacity: "0.7"
          },
          "33%": {
            transform: "rotate(120deg) translateX(30px) rotate(-120deg)",
            opacity: "0.8"
          },
          "66%": {
            transform: "rotate(240deg) translateX(25px) rotate(-240deg)",
            opacity: "0.6"
          },
          "100%": {
            transform: "rotate(360deg) translateX(20px) rotate(-360deg)",
            opacity: "0.7"
          }
        },
        "thoughtWave": {
          "0%, 100%": {
            transform: "translateY(0px) scale(1)",
          },
          "25%": {
            transform: "translateY(-15px) scale(1.02)",
          },
          "50%": {
            transform: "translateY(10px) scale(0.98)",
          },
          "75%": {
            transform: "translateY(-8px) scale(1.01)",
          }
        },
        "particleFloat": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px) scale(1)",
            opacity: "0.4"
          },
          "25%": {
            transform: "translateY(-20px) translateX(15px) scale(1.1)",
            opacity: "0.6"
          },
          "50%": {
            transform: "translateY(15px) translateX(-10px) scale(0.9)",
            opacity: "0.3"
          },
          "75%": {
            transform: "translateY(-10px) translateX(20px) scale(1.05)",
            opacity: "0.5"
          }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ai-pulse": "aiPulse 8s ease-in-out infinite",
        "consciousness-flow": "consciousnessFlow 15s linear infinite",
        "thought-wave": "thoughtWave 12s ease-in-out infinite",
        "particle-float": "particleFloat 16s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
