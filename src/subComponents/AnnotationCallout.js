import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(255, 107, 107, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 107, 107, 0); }
`;

const CalloutContainer = styled(motion.div)`
  position: absolute;
  z-index: 20;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  pointer-events: auto; /* Enable interaction */
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: scale(1.05);
    z-index: 30;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const CursorWrapper = styled.div`
  position: relative;
  width: 32px; /* Increased from 20px */
  height: 32px; /* Increased from 20px */
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px; /* Increased from 10px */
    height: 16px; /* Increased from 10px */
    background: ${props => props.color || '#ff6b6b'};
    border-radius: 50%;
    opacity: 0.5;
    animation: ${pulse} 2s infinite;
    z-index: -1;
  }
`;

const CursorIcon = styled.svg`
  width: 100%;
  height: 100%;
  fill: ${props => props.color || '#ff6b6b'};
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
  transform: rotate(-15deg);
`;

const CommentBubble = styled.div`
  background: rgba(20, 20, 20, 0.85); /* Darker, richer background */
  backdrop-filter: blur(12px); /* Stronger blur */
  border: 1px solid ${props => props.color ? `${props.color}60` : '#ff6b6b60'}; /* More visible border */
  border-radius: 4px 12px 12px 12px;
  padding: 10px 14px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset; /* Inner glow */
  max-width: 220px;
  animation: ${float} 4s ease-in-out infinite;
  transition: all 0.3s ease;

  ${CalloutContainer}:hover & {
    box-shadow: 
      0 12px 40px rgba(0, 0, 0, 0.4),
      0 0 0 1px ${props => props.color || '#ff6b6b'}; /* Glow border on hover */
    background: rgba(30, 30, 30, 0.95);
  }
`;

const RoleLabel = styled.span`
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.color || '#ff6b6b'};
  margin-bottom: 2px;
  letter-spacing: 0.05em;
`;

const CommentText = styled.p`
  color: #e0e0e0;
  font-size: 0.85rem;
  line-height: 1.3;
  margin: 0;
  font-weight: 500;
`;

const AnnotationCallout = ({
  sequence = [],
  initialDelay = 0
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // New state for hover pause

  useEffect(() => {
    // Initial entrance
    const startTimeout = setTimeout(() => {
      setIsVisible(true);
    }, initialDelay * 1000);

    return () => clearTimeout(startTimeout);
  }, [initialDelay]);

  useEffect(() => {
    if (!isVisible || isPaused) return; // Pause cycle if hovered

    // Time to show the current message
    const displayDuration = 6000; // Show for 6 seconds

    const cycleTimeout = setTimeout(() => {
      setIsVisible(false); // Fade out

      // Wait for fade out animation to finish (0.5s) before changing content
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % sequence.length);
        setIsVisible(true); // Fade back in
      }, 500);

    }, displayDuration);

    return () => clearTimeout(cycleTimeout);
  }, [isVisible, currentIndex, sequence.length, isPaused]);

  if (sequence.length === 0) return null;

  const currentItem = sequence[currentIndex];

  return (
    <AnimatePresence mode='wait'>
      {isVisible && (
        <CalloutContainer
          key={currentIndex} // Re-mount or re-animate on index change
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            top: currentItem.top || 'auto',
            left: currentItem.left || 'auto',
            right: currentItem.right || 'auto',
            bottom: currentItem.bottom || 'auto'
          }}
          exit={{ opacity: 0, scale: 0.8, y: -10 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          style={{
            top: currentItem.top || 'auto',
            left: currentItem.left || 'auto',
            right: currentItem.right || 'auto',
            bottom: currentItem.bottom || 'auto'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <CursorWrapper color={currentItem.color}>
            <CursorIcon viewBox="0 0 24 24" color={currentItem.color}>
              <path d="M5.5 3.5l12 11.5l-5.5 1.5l3.5 5.5l-2.5 1.5l-3.5 -5.5l-2 3z" />
            </CursorIcon>
          </CursorWrapper>
          <CommentBubble color={currentItem.color}>
            <RoleLabel color={currentItem.color}>{currentItem.role}</RoleLabel>
            <CommentText>{currentItem.text}</CommentText>
          </CommentBubble>
        </CalloutContainer>
      )}
    </AnimatePresence>
  );
};

export default AnnotationCallout;
