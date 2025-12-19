import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const GlowElement = styled.div`
  position: fixed;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  background: radial-gradient(
    circle,
    rgba(0, 212, 255, 0.15) 0%,
    rgba(168, 85, 247, 0.1) 30%,
    transparent 70%
  );
  filter: blur(40px);
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
  opacity: ${props => props.visible ? 0.8 : 0};
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  will-change: left, top;
`;

const CursorGlow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let animationFrameId;

        const handleMouseMove = (e) => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }

            animationFrameId = requestAnimationFrame(() => {
                setPosition({ x: e.clientX, y: e.clientY });
                setVisible(true);
            });
        };

        const handleMouseLeave = () => {
            setVisible(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return <GlowElement x={position.x} y={position.y} visible={visible} />;
};

export default CursorGlow;
