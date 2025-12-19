import React, { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

// Playful asymmetric float animation
const float = (x1, y1, x2, y2, x3, y3, rot) => keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.7; }
  25% { transform: translate(${x1}px, ${y1}px) rotate(${rot}deg); opacity: 0.9; }
  50% { transform: translate(${x2}px, ${y2}px) rotate(-${rot}deg); opacity: 0.6; }
  75% { transform: translate(${x3}px, ${y3}px) rotate(${rot / 2}deg); opacity: 0.8; }
`;

const OrbsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`;

// Mix of shapes - not just circles
const Shape = styled.div`
  position: absolute;
  background: ${props => props.color};
  filter: blur(${props => props.blur}px);
  opacity: 0.7;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  left: ${props => props.left}%;
  top: ${props => props.top}%;
  border-radius: ${props => props.borderRadius};
  animation: ${props => float(
    props.x1, props.y1,
    props.x2, props.y2,
    props.x3, props.y3,
    props.rotation
)} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  will-change: transform, opacity;
`;

const FloatingOrbs = () => {
    const shapes = useMemo(() => [
        // Coral rounded square
        {
            size: 16,
            left: 12,
            top: 25,
            color: '#ff6b6b',
            blur: 1,
            borderRadius: '30%',
            duration: 15,
            delay: 0,
            rotation: 45,
            x1: 25, y1: -35, x2: 50, y2: 15, x3: 15, y3: 40
        },
        // Teal diamond
        {
            size: 14,
            left: 85,
            top: 18,
            color: '#00d4aa',
            blur: 0,
            borderRadius: '10%',
            duration: 18,
            delay: 1,
            rotation: 45,
            x1: -35, y1: 25, x2: -15, y2: 50, x3: 35, y3: 35
        },
        // Magenta circle
        {
            size: 20,
            left: 65,
            top: 65,
            color: '#e040fb',
            blur: 2,
            borderRadius: '50%',
            duration: 20,
            delay: 0.5,
            rotation: 10,
            x1: 40, y1: -40, x2: -25, y2: -25, x3: 15, y3: 35
        },
        // Yellow square
        {
            size: 10,
            left: 28,
            top: 70,
            color: '#ffd93d',
            blur: 0,
            borderRadius: '20%',
            duration: 12,
            delay: 2,
            rotation: 30,
            x1: -15, y1: -25, x2: 35, y2: 15, x3: -25, y3: 45
        },
        // Lime circle
        {
            size: 18,
            left: 92,
            top: 55,
            color: '#c6ff00',
            blur: 1,
            borderRadius: '50%',
            duration: 16,
            delay: 0.3,
            rotation: 15,
            x1: -50, y1: 15, x2: -25, y2: -35, x3: 15, y3: 25
        },
        // Coral dot
        {
            size: 8,
            left: 8,
            top: 55,
            color: '#ff6b6b',
            blur: 0,
            borderRadius: '50%',
            duration: 22,
            delay: 1.2,
            rotation: 5,
            x1: 30, y1: 35, x2: 60, y2: -15, x3: 25, y3: -50
        },
        // Teal rounded
        {
            size: 12,
            left: 48,
            top: 35,
            color: '#00d4aa',
            blur: 1,
            borderRadius: '40%',
            duration: 14,
            delay: 1.8,
            rotation: 25,
            x1: 15, y1: -15, x2: -25, y2: 35, x3: 40, y3: 8
        },
        // Magenta small
        {
            size: 22,
            left: 75,
            top: 88,
            color: '#e040fb',
            blur: 2,
            borderRadius: '35%',
            duration: 19,
            delay: 3,
            rotation: 20,
            x1: -35, y1: -45, x2: 25, y2: -70, x3: -15, y3: -25
        },
    ], []);

    return (
        <OrbsContainer>
            {shapes.map((shape, index) => (
                <Shape
                    key={index}
                    {...shape}
                />
            ))}
        </OrbsContainer>
    );
};

export default FloatingOrbs;
