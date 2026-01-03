import React from 'react';
import styled, { keyframes } from 'styled-components';

const moveLeft = keyframes`
  0% {
    transform: scale(1) translateX(0);
    opacity: 1;
  }
  100% {
    transform: scale(0.9) translateX(-25%);
    opacity: 0;
  }
`;

const moveRight = keyframes`
  0% {
    transform: scale(1) translateX(0);
    opacity: 1;
  }
  100% {
    transform: scale(0.9) translateX(25%);
    opacity: 0;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%; /* Adapts to parent */
  display: flex;
  justify-content: center;
  align-items: center;
  isolation: isolate; /* Create new stacking context */
`;

const BaseImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%; /* Rounded corners as requested, or maybe border-radius from parent? User said "Round the corners" - usually implies fully rounded or specific px. Let's assume circle for profile or soft round? "Round the corners" -> maybe just border-radius. */
  border-radius: 20px; /* Matching common card style, or user might mean circle? "Round the corners" usually means border-radius. Let's go with 20px like cards, or maybe 50% if it's a profile circle. The previous one (Me) was typical profile. Let's check Main.js to see previous style. */
`;

/* 
  Checking Main.js context (from memory/previous views):
  ProfileImage usually has clip-path or border-radius.
  The user request simply says "Round the corners".
  I'll stick to a nice rounded rect (20px) or allow override.
  Actually, the prompt says "A singular vertical orientation image... Round the corners".
  I will use 20px.
*/

const StaticImage = styled(BaseImage)`
  z-index: 10;
  border-radius: 20px;
`;

const AnimatedImage = styled(BaseImage)`
  z-index: 1;
  border-radius: 20px;
  animation-duration: 3s;
  animation-timing-function: linear; /* "infinite loop" smooth usually linear or ease-out */
  animation-iteration-count: infinite;
  /* animation-name will be set by styled component prop */
`;

const EchoLeft = styled(AnimatedImage)`
  animation-name: ${moveLeft};
  animation-delay: ${props => props.delay}s;
`;

const EchoRight = styled(AnimatedImage)`
  animation-name: ${moveRight};
  animation-delay: ${props => props.delay}s;
`;

const EchoImage = ({ src, alt = "Echo Image" }) => {
    // 4 pairs, 3 seconds duration -> 0.75s stagger
    const pairs = [0, 1, 2, 3];

    return (
        <Container>
            {pairs.map((i) => (
                <React.Fragment key={i}>
                    <EchoLeft src={src} alt="" delay={i * 0.75} />
                    <EchoRight src={src} alt="" delay={i * 0.75} />
                </React.Fragment>
            ))}
            <StaticImage src={src} alt={alt} />
        </Container>
    );
};

export default EchoImage;
