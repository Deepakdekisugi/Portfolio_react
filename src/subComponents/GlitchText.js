import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Glitch animation keyframes
const glitchAnim1 = keyframes`
  0% {
    clip-path: inset(40% -6px 61% 0);
    transform: translate(-2px, -1px);
  }
  5% {
    clip-path: inset(30% -6px 65% 0);
    transform: translate(2px, 1px);
  }
  10% {
    clip-path: inset(75% -6px 20% 0);
    transform: translate(-1px, 2px);
  }
  15% {
    clip-path: inset(25% -6px 58% 0);
    transform: translate(1px, -2px);
  }
  20% {
    clip-path: inset(50% -6px 36% 0);
    transform: translate(-2px, 1px);
  }
  25% {
    clip-path: inset(80% -6px 5% 0);
    transform: translate(2px, -1px);
  }
  30% {
    clip-path: inset(15% -6px 72% 0);
    transform: translate(-1px, 2px);
  }
  35% {
    clip-path: inset(60% -6px 25% 0);
    transform: translate(1px, -1px);
  }
  40% {
    clip-path: inset(10% -6px 85% 0);
    transform: translate(-2px, 1px);
  }
  45% {
    clip-path: inset(70% -6px 15% 0);
    transform: translate(2px, -2px);
  }
  50% {
    clip-path: inset(35% -6px 50% 0);
    transform: translate(-1px, 1px);
  }
  55% {
    clip-path: inset(88% -6px 2% 0);
    transform: translate(1px, -1px);
  }
  60% {
    clip-path: inset(5% -6px 90% 0);
    transform: translate(-2px, 2px);
  }
  65% {
    clip-path: inset(45% -6px 40% 0);
    transform: translate(2px, -1px);
  }
  70% {
    clip-path: inset(65% -6px 20% 0);
    transform: translate(-1px, 1px);
  }
  75% {
    clip-path: inset(20% -6px 70% 0);
    transform: translate(1px, -2px);
  }
  80% {
    clip-path: inset(55% -6px 30% 0);
    transform: translate(-2px, 1px);
  }
  85% {
    clip-path: inset(78% -6px 10% 0);
    transform: translate(2px, -1px);
  }
  90% {
    clip-path: inset(32% -6px 55% 0);
    transform: translate(-1px, 2px);
  }
  95% {
    clip-path: inset(85% -6px 8% 0);
    transform: translate(1px, -1px);
  }
  100% {
    clip-path: inset(42% -6px 45% 0);
    transform: translate(-2px, 1px);
  }
`;

const glitchAnim2 = keyframes`
  0% {
    clip-path: inset(85% -6px 10% 0);
    transform: translate(2px, 1px);
  }
  5% {
    clip-path: inset(20% -6px 75% 0);
    transform: translate(-2px, -1px);
  }
  10% {
    clip-path: inset(60% -6px 35% 0);
    transform: translate(1px, 2px);
  }
  15% {
    clip-path: inset(35% -6px 55% 0);
    transform: translate(-1px, -2px);
  }
  20% {
    clip-path: inset(90% -6px 5% 0);
    transform: translate(2px, 1px);
  }
  25% {
    clip-path: inset(45% -6px 45% 0);
    transform: translate(-2px, -1px);
  }
  30% {
    clip-path: inset(8% -6px 88% 0);
    transform: translate(1px, 2px);
  }
  35% {
    clip-path: inset(70% -6px 20% 0);
    transform: translate(-1px, -1px);
  }
  40% {
    clip-path: inset(25% -6px 68% 0);
    transform: translate(2px, 1px);
  }
  45% {
    clip-path: inset(82% -6px 12% 0);
    transform: translate(-2px, -2px);
  }
  50% {
    clip-path: inset(50% -6px 42% 0);
    transform: translate(1px, 1px);
  }
  55% {
    clip-path: inset(15% -6px 78% 0);
    transform: translate(-1px, -1px);
  }
  60% {
    clip-path: inset(95% -6px 2% 0);
    transform: translate(2px, 2px);
  }
  65% {
    clip-path: inset(38% -6px 55% 0);
    transform: translate(-2px, -1px);
  }
  70% {
    clip-path: inset(72% -6px 18% 0);
    transform: translate(1px, 1px);
  }
  75% {
    clip-path: inset(12% -6px 82% 0);
    transform: translate(-1px, -2px);
  }
  80% {
    clip-path: inset(58% -6px 35% 0);
    transform: translate(2px, 1px);
  }
  85% {
    clip-path: inset(28% -6px 65% 0);
    transform: translate(-2px, -1px);
  }
  90% {
    clip-path: inset(78% -6px 15% 0);
    transform: translate(1px, 2px);
  }
  95% {
    clip-path: inset(42% -6px 50% 0);
    transform: translate(-1px, -1px);
  }
  100% {
    clip-path: inset(88% -6px 6% 0);
    transform: translate(2px, 1px);
  }
`;

const glitchSkew = keyframes`
  0% {
    transform: skew(0deg);
  }
  10% {
    transform: skew(2deg);
  }
  20% {
    transform: skew(-1deg);
  }
  30% {
    transform: skew(1deg);
  }
  40% {
    transform: skew(-2deg);
  }
  50% {
    transform: skew(0deg);
  }
  60% {
    transform: skew(1deg);
  }
  70% {
    transform: skew(-1deg);
  }
  80% {
    transform: skew(2deg);
  }
  90% {
    transform: skew(-2deg);
  }
  100% {
    transform: skew(0deg);
  }
`;

const GlitchContainer = styled.span`
  position: relative;
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: ${props => props.color || 'inherit'};
  
  ${props => props.isActive && css`
    animation: ${glitchSkew} 0.5s ease-in-out;
  `}
`;

const GlitchBase = styled.span`
  position: relative;
  display: inline-block;
`;

const GlitchLayer = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  opacity: 0;
  pointer-events: none;
  
  ${props => props.isActive && props.layer === 1 && css`
    opacity: 0.8;
    color: #ff6b6b;
    text-shadow: -2px 0 #00d4aa;
    animation: ${glitchAnim1} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  `}
  
  ${props => props.isActive && props.layer === 2 && css`
    opacity: 0.8;
    color: #00d4aa;
    text-shadow: 2px 0 #ff6b6b, -1px 0 #e040fb;
    animation: ${glitchAnim2} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  `}
`;

const GlitchText = ({ children, color, className }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  React.useEffect(() => {
    const triggerGlitch = () => {
      const duration = Math.random() * 300 + 200; // 200-500ms glitch duration
      setIsGlitching(true);

      setTimeout(() => {
        setIsGlitching(false);

        // Schedule next glitch
        const nextDelay = Math.random() * 3000 + 2000; // 2-5s delay
        timeoutId = setTimeout(triggerGlitch, nextDelay);
      }, duration);
    };

    // Initial random delay start
    let timeoutId = setTimeout(triggerGlitch, Math.random() * 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <GlitchContainer
      color={color}
      className={className}
      isActive={isGlitching}
    >
      <GlitchBase>{children}</GlitchBase>
      <GlitchLayer layer={1} isActive={isGlitching} aria-hidden="true">
        {children}
      </GlitchLayer>
      <GlitchLayer layer={2} isActive={isGlitching} aria-hidden="true">
        {children}
      </GlitchLayer>
    </GlitchContainer>
  );
};

export default GlitchText;
