import React from 'react';
import styled, { keyframes } from 'styled-components';

// Asymmetric floating animations
const drift1 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(40px, -60px) rotate(5deg); }
  66% { transform: translate(-30px, 40px) rotate(-3deg); }
`;

const drift2 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-50px, 80px) rotate(-8deg); }
`;

const drift3 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  40% { transform: translate(60px, 30px) scale(1.1); }
  80% { transform: translate(-20px, -50px) scale(0.95); }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  background: #121212;
`;

// Layered color blocks instead of smooth gradients
const ColorBlock = styled.div`
  position: absolute;
  opacity: 0.12;
  will-change: transform;
`;

// Coral block - top right
const CoralBlock = styled(ColorBlock)`
  width: 500px;
  height: 500px;
  background: #ff6b6b;
  top: -10%;
  right: -5%;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: ${drift1} 25s ease-in-out infinite;
`;

// Teal block - bottom left
const TealBlock = styled(ColorBlock)`
  width: 450px;
  height: 450px;
  background: #00d4aa;
  bottom: -15%;
  left: -8%;
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
  animation: ${drift2} 30s ease-in-out infinite;
`;

// Magenta block - center right
const MagentaBlock = styled(ColorBlock)`
  width: 350px;
  height: 350px;
  background: #e040fb;
  top: 35%;
  right: 10%;
  border-radius: 60% 40% 50% 50% / 50% 60% 40% 50%;
  animation: ${drift3} 20s ease-in-out infinite;
`;

// Yellow block - top left
const YellowBlock = styled(ColorBlock)`
  width: 300px;
  height: 300px;
  background: #ffd93d;
  top: 10%;
  left: 15%;
  border-radius: 40% 60% 70% 30% / 40% 50% 50% 60%;
  animation: ${drift1} 18s ease-in-out infinite reverse;
`;

// Lime block - bottom center
const LimeBlock = styled(ColorBlock)`
  width: 280px;
  height: 280px;
  background: #c6ff00;
  bottom: 20%;
  left: 40%;
  border-radius: 50% 50% 40% 60% / 60% 40% 60% 40%;
  animation: ${drift2} 22s ease-in-out infinite reverse;
`;

// Diagonal stripe accent
const DiagonalStripe = styled.div`
  position: absolute;
  width: 3px;
  height: 200px;
  background: linear-gradient(180deg, transparent, #ff6b6b, transparent);
  transform: rotate(45deg);
  opacity: 0.15;
  
  &:nth-child(1) {
    top: 20%;
    left: 10%;
  }
  &:nth-child(2) {
    top: 60%;
    right: 20%;
    background: linear-gradient(180deg, transparent, #00d4aa, transparent);
  }
`;

// Enhanced noise overlay for texture
const NoiseOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.06;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  pointer-events: none;
`;

// Subtle grid with asymmetric spacing
const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 80px 80px;
  opacity: 0.4;
`;

const AnimatedBackground = () => {
  return (
    <BackgroundContainer>
      <CoralBlock />
      <TealBlock />
      <MagentaBlock />
      <YellowBlock />
      <LimeBlock />
      <DiagonalStripe />
      <DiagonalStripe />
      <GridOverlay />
      <NoiseOverlay />
    </BackgroundContainer>
  );
};

export default AnimatedBackground;
