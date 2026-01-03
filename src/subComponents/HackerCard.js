import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #0d0d0d;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px; /* Space for the borders to show */
  z-index: 1;
  isolation: isolate;
  
  /* Simple Border */
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px; /* Matching InnerCard rounded corners + padding roughly */
`;

const InnerCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #121212;
  border-radius: 12px;
  overflow: hidden;
  z-index: 10;
  display: flex;
  flex-direction: column;
`;



const BackgroundText = styled.div`
  position: absolute;
  inset: 0;
  font-family: 'Space Grotesk', monospace;
  font-size: 0.8rem;
  line-height: 1;
  word-break: break-all;
  white-space: pre-wrap;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
  
  /* The Gradient Mask Effect */
  color: transparent;
  background-image: radial-gradient(
    circle at ${props => props.x}px ${props => props.y}px, 
    rgba(0, 180, 216, 1) 0%, 
    rgba(0, 212, 170, 0.8) 25%, 
    rgba(255, 255, 255, 0.2) 60%,
    transparent 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
`;

// Center Bolt Icon
const boltSize = 60;
const CenterIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${boltSize}px;
  height: ${boltSize}px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 50%;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.75); /* Soft edges */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  pointer-events: none;
  backdrop-filter: blur(2px);
`;

const BoltIcon = styled.i`
  color: #fff;
  font-size: 1.5rem;
`;

const ContentLayer = styled.div`
  position: relative;
  z-index: 20;
  height: 100%;
  width: 100%;
`;

const defaultChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>[]{}!@#$%^&*()";

const HackerCard = ({ children, className, icon, ...props }) => {
  const [text, setText] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  // Calculate how many chars needed to fill the card roughly
  const generateRandomText = () => {
    if (!containerRef.current) return '';
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    // Approx char size 12px * 8px
    const cols = Math.floor(width / 8);
    const rows = Math.floor(height / 12);
    const totalChars = cols * rows;

    let result = '';
    for (let i = 0; i < totalChars; i++) {
      result += defaultChars.charAt(Math.floor(Math.random() * defaultChars.length));
    }
    return result;
  };

  useEffect(() => {
    setText(generateRandomText());
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    // Scramble text on move
    // For performance, maybe don't regenerate entire string every frame if it's huge, 
    // but user requested "Every time it fires".
    // Let's do a partial update or full update depending on performance.
    // Full update is simpler.
    setText(generateRandomText());
  };

  return (
    <CardContainer
      ref={containerRef}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      {...props}
    >
      {/* Corner Icons Removed */}

      <InnerCard>
        {/* HACKER BACKGROUND */}
        <BackgroundText visible={isHovered} x={mousePos.x} y={mousePos.y}>
          {text}
        </BackgroundText>

        {/* CENTER ICON OVERLAY */}
        {(icon !== null) && (
          <CenterIconWrapper style={{ opacity: isHovered ? 1 : 0, transition: 'opacity 0.3s' }}>
            {icon ? icon : <BoltIcon className="fa-solid fa-bolt-lightning" />}
          </CenterIconWrapper>
        )}

        {/* ACTUAL CONTENT */}
        <ContentLayer>
          {children}
        </ContentLayer>
      </InnerCard>
    </CardContainer>
  );
};

export default HackerCard;
