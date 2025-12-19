import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Import Bold Display Font */
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

  :root {
    /* Core Backgrounds - Warm Charcoal/Gray */
    --bg-primary: #121212;
    --bg-secondary: #1e1e1e;
    --bg-tertiary: #2a2a2a;
    --bg-card: #2a2a2a;
    
    /* Bold Accent Colors */
    --accent-coral: #ff6b6b;
    --accent-teal: #00d4aa;
    --accent-magenta: #e040fb;
    --accent-lime: #c6ff00;
    --accent-yellow: #ffd93d;
    
    /* Legacy aliases */
    --accent-cyan: #00d4aa;
    --accent-purple: #e040fb;
    --accent-pink: #ff6b6b;
    --accent-blue: #00d4aa;
    
    /* Bold Gradients */
    --gradient-primary: linear-gradient(135deg, #ff6b6b 0%, #ffd93d 100%);
    --gradient-accent: linear-gradient(135deg, #00d4aa 0%, #c6ff00 100%);
    --gradient-magenta: linear-gradient(135deg, #e040fb 0%, #ff6b6b 100%);
    --gradient-rainbow: linear-gradient(90deg, #ff6b6b, #ffd93d, #c6ff00, #00d4aa, #e040fb);
    --gradient-glow: radial-gradient(circle, rgba(255, 107, 107, 0.15) 0%, transparent 60%);
    
    /* Text Colors */
    --text-primary: #faf8f5;
    --text-secondary: #a0a0a0;
    --text-muted: #6a6a6a;
    
    /* Glass Effects */
    --glass-bg: rgba(42, 42, 42, 0.85);
    --glass-border: rgba(255, 255, 255, 0.12);
    --glass-blur: blur(16px);
    
    /* Bold Shadows */
    --shadow-glow: 0 0 40px rgba(255, 107, 107, 0.25);
    --shadow-teal: 0 0 40px rgba(0, 212, 170, 0.25);
    --shadow-card: 8px 8px 0px rgba(0, 0, 0, 0.4);
    --shadow-tactile: 4px 4px 0px var(--accent-coral);
    
    /* Transitions */
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-bounce: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    --transition-playful: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Inter', 'Segoe UI', sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    min-height: 100vh;
  }

  /* Bold Display Headings */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.02em;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Custom Scrollbar - Bold colors */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--accent-coral);
    border-radius: 0;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--accent-magenta);
  }

  /* Selection */
  ::selection {
    background: var(--accent-coral);
    color: var(--bg-primary);
  }

  /* Keyframe Animations - Handcrafted feel */
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-15px) rotate(2deg); }
    75% { transform: translateY(-10px) rotate(-2deg); }
  }

  @keyframes pulse-glow {
    0%, 100% { 
      box-shadow: 0 0 20px rgba(255, 107, 107, 0.3);
    }
    50% { 
      box-shadow: 0 0 50px rgba(255, 107, 107, 0.5), 0 0 30px rgba(0, 212, 170, 0.3);
    }
  }

  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes wobble {
    0%, 100% { transform: rotate(-1deg); }
    50% { transform: rotate(1deg); }
  }

  @keyframes bounce-in {
    0% { transform: scale(0.9); opacity: 0; }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  @keyframes color-cycle {
    0% { color: var(--accent-coral); }
    25% { color: var(--accent-yellow); }
    50% { color: var(--accent-lime); }
    75% { color: var(--accent-teal); }
    100% { color: var(--accent-coral); }
  }

  /* Utility Classes */
  .glass-card {
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    border: 2px solid var(--glass-border);
    border-radius: 12px;
  }

  .gradient-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .bold-shadow {
    box-shadow: var(--shadow-card);
  }

  .tactile-shadow {
    box-shadow: var(--shadow-tactile);
  }

  /* Noise/Grain texture overlay - Increased for handcrafted feel */
  .grain-overlay::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.06;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  }
`;

export default GlobalStyle;