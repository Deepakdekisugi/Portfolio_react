import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedBackground from '../subComponents/AnimatedBackground';
import FloatingOrbs from '../subComponents/FloatingOrbs';
import Navbar from '../subComponents/Navbar';
import astronaut from '../assets/Images/spaceman.png';

const wobble = keyframes`
  0%, 100% { transform: translateY(0px) rotate(-2deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
`;

const PageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  background: #121212;
`;

const ContentWrapper = styled.section`
  min-height: 100vh;
  padding: 8rem 4rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 968px) {
    flex-direction: column;
    padding: 7rem 2rem 3rem;
    gap: 3rem;
  }
`;

const TextSection = styled(motion.div)`
  flex: 1.2;
  max-width: 650px;
`;

const PageTitle = styled(motion.h1)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #faf8f5;
  letter-spacing: -0.02em;
  
  .accent {
    color: #00d4aa;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0.1em;
      left: 0;
      width: 100%;
      height: 0.12em;
      background: #ff6b6b;
      z-index: -1;
    }
  }
`;

const Bio = styled(motion.div)`
  background: #1e1e1e;
  border: 2px solid #2a2a2a;
  border-radius: 16px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  
  /* Colored left accent bar */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(180deg, #ff6b6b, #ffd93d, #00d4aa);
    border-radius: 16px 0 0 16px;
  }
`;

const BioText = styled.p`
  color: #a0a0a0;
  font-size: 1.1rem;
  line-height: 1.9;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Highlight = styled.span`
  color: #ff6b6b;
  font-weight: 600;
`;

const HighlightTeal = styled.span`
  color: #00d4aa;
  font-weight: 600;
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: #1e1e1e;
  border: 2px solid #2a2a2a;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;

  &:hover {
    border-color: ${props => props.accentcolor || '#ff6b6b'};
    transform: translateY(-5px) rotate(1deg);
    box-shadow: 6px 6px 0px ${props => props.accentcolor || '#ff6b6b'}30;
  }
`;

const StatNumber = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.color || '#ff6b6b'};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  color: #6a6a6a;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
`;

const ImageSection = styled(motion.div)`
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AstronautWrapper = styled.div`
  position: relative;
  width: clamp(250px, 30vw, 380px);
  animation: ${wobble} 5s ease-in-out infinite;

  /* Coral background blob */
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 80%;
    height: 80%;
    background: #ff6b6b;
    border-radius: 40% 60% 50% 50% / 50% 40% 60% 50%;
    z-index: -1;
    opacity: 0.15;
  }

  /* Teal accent circle */
  &::after {
    content: '';
    position: absolute;
    bottom: 10px;
    right: -10px;
    width: 50%;
    height: 50%;
    background: #00d4aa;
    border-radius: 50%;
    z-index: -1;
    opacity: 0.12;
  }
`;

const AstronautImage = styled.img`
  width: 100%;
  height: auto;
  filter: drop-shadow(8px 8px 0px rgba(255, 107, 107, 0.2));
`;

const ContactLinks = styled(motion.div)`
  display: flex;
  gap: 1.25rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const ContactLink = styled.a`
  padding: 0.9rem 1.8rem;
  background: ${props => props.primary ? '#ff6b6b' : 'transparent'};
  border: 2px solid ${props => props.primary ? '#ff6b6b' : '#2a2a2a'};
  border-radius: 10px;
  color: ${props => props.primary ? '#121212' : '#faf8f5'};
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: ${props => props.primary ? '5px 5px 0px rgba(0, 0, 0, 0.3)' : 'none'};

  &:hover {
    transform: ${props => props.primary ? 'translate(-3px, -3px)' : 'translateY(-3px)'};
    box-shadow: ${props => props.primary
    ? '8px 8px 0px rgba(255, 107, 107, 0.3)'
    : '0 6px 15px rgba(0, 212, 170, 0.2)'};
    background: ${props => props.primary ? '#ffd93d' : 'transparent'};
    border-color: ${props => props.primary ? '#ffd93d' : '#00d4aa'};
    color: ${props => props.primary ? '#121212' : '#00d4aa'};
  }
`;

const AboutPage = () => {
  return (
    <PageContainer>
      <AnimatedBackground />
      <FloatingOrbs />
      <Navbar />

      <ContentWrapper>
        <TextSection
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.68, -0.55, 0.265, 1.55] }}
        >
          <PageTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            About <span className="accent">Me</span>
          </PageTitle>

          <Bio
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <BioText>
              I'm a <Highlight>Full-Stack MERN Developer</Highlight> and engineering student based in India,
              passionate about building complete web applications from frontend to backend.
            </BioText>
            <BioText>
              Currently working with <HighlightTeal>MongoDB</HighlightTeal>, <HighlightTeal>Express</HighlightTeal>,
              <HighlightTeal> React</HighlightTeal>, and <HighlightTeal>Node.js</HighlightTeal> to build
              production-ready applications. Also exploring <Highlight>AI/ML</Highlight> with Python,
              neural networks, and machine learning fundamentals.
            </BioText>
            <BioText>
              My journey started with C and algorithms (built a chess engine!), progressed through
              frontend development, and now I'm going full-stack while diving into AI. I believe in
              learning by building real projects.
            </BioText>
          </Bio>

          <StatsGrid
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <StatCard accentcolor="#ff6b6b" whileHover={{ scale: 1.03 }}>
              <StatNumber color="#ff6b6b">2+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatCard>
            <StatCard accentcolor="#00d4aa" whileHover={{ scale: 1.03 }}>
              <StatNumber color="#00d4aa">10+</StatNumber>
              <StatLabel>Projects Done</StatLabel>
            </StatCard>
            <StatCard accentcolor="#ffd93d" whileHover={{ scale: 1.03 }}>
              <StatNumber color="#ffd93d">5+</StatNumber>
              <StatLabel>Happy Clients</StatLabel>
            </StatCard>
          </StatsGrid>

          <ContactLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ContactLink href="mailto:dk376907@gmail.com" primary>
              Get In Touch →
            </ContactLink>
            <ContactLink href="/resume.pdf" download>
              Download Resume
            </ContactLink>
          </ContactLinks>
        </TextSection>

        <ImageSection
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }}
        >
          <AstronautWrapper>
            <AstronautImage src={astronaut} alt="Astronaut" />
          </AstronautWrapper>
        </ImageSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default AboutPage;
