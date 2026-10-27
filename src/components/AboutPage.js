import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedBackground from '../subComponents/AnimatedBackground';
import FloatingOrbs from '../subComponents/FloatingOrbs';
import Navbar from '../subComponents/Navbar';
import GlitchText from '../subComponents/GlitchText';
import developerAstronaut from '../assets/Images/developer-astronaut.svg';

const wobble = keyframes`
  0%, 100% { transform: translateY(0px) rotate(-2deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
`;

const statusPulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(0, 212, 170, 0.45); }
  50% { box-shadow: 0 0 0 6px rgba(0, 212, 170, 0); }
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
  width: clamp(350px, 45vw, 550px);
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

const MissionSection = styled.section`
  width: min(1320px, calc(100% - 8rem));
  margin: 0 auto;
  padding: 2rem 0 6rem;
  position: relative;
  z-index: 10;

  @media (max-width: 968px) {
    width: calc(100% - 4rem);
  }

  @media (max-width: 600px) {
    width: calc(100% - 2rem);
  }
`;

const SectionEyebrow = styled.p`
  color: #00d4aa;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  margin: 0 0 0.75rem;
  text-transform: uppercase;
`;

const SectionHeading = styled.h2`
  color: #faf8f5;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  letter-spacing: -0.03em;
  margin: 0 0 2rem;
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.85fr);
  gap: 1.5rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const MissionPanel = styled(motion.div)`
  background: rgba(30, 30, 30, 0.9);
  border: 2px solid #2a2a2a;
  border-radius: 16px;
  padding: clamp(1.25rem, 3vw, 2rem);
`;

const PanelHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const PanelTitle = styled.h3`
  color: #faf8f5;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.02em;
  margin: 0;
  text-transform: uppercase;
`;

const Status = styled.span`
  align-items: center;
  color: #00d4aa;
  display: inline-flex;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  gap: 0.45rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  &::before {
    animation: ${statusPulse} 2s infinite;
    background: #00d4aa;
    border-radius: 50%;
    content: '';
    height: 7px;
    width: 7px;
  }
`;

const TelemetryList = styled.div`
  display: grid;
  gap: 1.1rem;
`;

const TelemetryRow = styled.div`
  align-items: center;
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 1fr auto;
`;

const TelemetryLabel = styled.span`
  color: #a0a0a0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const TelemetryValue = styled.strong`
  color: ${props => props.color || '#faf8f5'};
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.05rem;
`;

const TelemetryBar = styled.div`
  background: #2a2a2a;
  border-radius: 99px;
  grid-column: 1 / -1;
  height: 5px;
  overflow: hidden;

  &::after {
    background: ${props => props.color || '#00d4aa'};
    border-radius: inherit;
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.width || '80%'};
  }
`;

const Architecture = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  justify-content: center;
  min-height: 210px;
  position: relative;

  &::before {
    background: linear-gradient(90deg, #ff6b6b, #00d4aa, #ffd93d);
    content: '';
    height: 2px;
    left: 8%;
    opacity: 0.45;
    position: absolute;
    right: 8%;
    top: 50%;
  }
`;

const ArchitectureNode = styled.span`
  background: #121212;
  border: 1px solid ${props => props.color || '#2a2a2a'};
  border-radius: 8px;
  color: ${props => props.color || '#faf8f5'};
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.7rem 0.8rem;
  position: relative;
  z-index: 1;
`;

const Terminal = styled.div`
  background: #121212;
  border: 1px solid #2a2a2a;
  border-radius: 10px;
  color: #a0a0a0;
  font-family: 'Courier New', monospace;
  font-size: 0.86rem;
  line-height: 1.8;
  margin-top: 1.5rem;
  padding: 1rem 1.2rem;

  .prompt { color: #ff6b6b; }
  .command { color: #faf8f5; }
  .output { color: #00d4aa; }
`;

const Timeline = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const TimelineButton = styled.button`
  background: ${props => props.active ? '#2a2a2a' : 'rgba(30, 30, 30, 0.8)'};
  border: 2px solid ${props => props.active ? props.color : '#2a2a2a'};
  border-radius: 12px;
  color: #faf8f5;
  cursor: pointer;
  min-height: 145px;
  padding: 1.25rem;
  text-align: left;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.color};
    transform: translateY(-4px);
  }

  &:focus-visible {
    outline: 2px solid #ffd93d;
    outline-offset: 3px;
  }
`;

const TimelineNumber = styled.span`
  color: ${props => props.color};
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  margin-bottom: 1.2rem;
`;

const TimelineTitle = styled.strong`
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  line-height: 1.3;
  margin-bottom: 0.6rem;
`;

const TimelineDescription = styled(motion.p)`
  color: #a0a0a0;
  font-size: 1rem;
  line-height: 1.7;
  margin: 1.5rem 0 0;
  max-width: 750px;
`;

const CommandLink = styled.a`
  align-items: center;
  border: 2px solid ${props => props.primary ? '#ff6b6b' : '#2a2a2a'};
  border-radius: 8px;
  color: ${props => props.primary ? '#121212' : '#faf8f5'};
  background: ${props => props.primary ? '#ff6b6b' : 'transparent'};
  display: inline-flex;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  gap: 0.5rem;
  padding: 0.85rem 1.15rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.primary ? '#ffd93d' : 'transparent'};
    border-color: ${props => props.primary ? '#ffd93d' : '#00d4aa'};
    color: ${props => props.primary ? '#121212' : '#00d4aa'};
    transform: translateY(-3px);
  }
`;

const AboutPage = () => {
  const [activeStage, setActiveStage] = useState(0);
  const journey = [
    {
      number: '01',
      title: 'C & Algorithms',
      description: 'The starting point: building a foundation in logic, data structures, and solving problems methodically.',
      color: '#ff6b6b'
    },
    {
      number: '02',
      title: 'Frontend Development',
      description: 'At Nirvana Studios, I learned to turn ideas into accessible, expressive interfaces that people enjoy using.',
      color: '#ffd93d'
    },
    {
      number: '03',
      title: 'Java Backend Engineering',
      description: 'At TapQwik, I moved into production systems with Java, Spring Boot, REST APIs, and microservice architecture.',
      color: '#00d4aa'
    },
    {
      number: '04',
      title: 'Distributed Systems & AI',
      description: 'Today I build reliable services with Kafka, Redis, AWS, and AI-powered products that are secure and maintainable.',
      color: '#e040fb'
    }
  ];

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
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlitchText>About <span className="accent">Me</span></GlitchText>
          </PageTitle>

          <Bio
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <BioText>
              I'm a <Highlight>Software Engineer and Java Backend Developer</Highlight> based in Bangalore, India,
              with 2.9 years of experience building reliable backend systems.
            </BioText>
            <BioText>
              My primary work spans <HighlightTeal>Java</HighlightTeal>, <HighlightTeal>Spring Boot</HighlightTeal>,
              microservices, REST APIs, <HighlightTeal>Kafka</HighlightTeal>, Redis, MySQL, MongoDB, Docker,
              AWS, and Jenkins. I also build React interfaces and AI-powered products with secure, maintainable services.
            </BioText>
            <BioText>
              I started with C and algorithms, moved through frontend development at Nirvana Studios,
              and transitioned into backend engineering at TapQwik Software Private Limited. I believe in
              learning by building production-focused systems and solving problems methodically.
            </BioText>
          </Bio>

          <StatsGrid
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <StatCard accentcolor="#ff6b6b" whileHover={{ scale: 1.03 }}>
              <StatNumber color="#ff6b6b">2.9</StatNumber>
              <StatLabel>System Uptime</StatLabel>
            </StatCard>
            <StatCard accentcolor="#00d4aa" whileHover={{ scale: 1.03 }}>
              <StatNumber color="#00d4aa">11</StatNumber>
              <StatLabel>Projects Shipped</StatLabel>
            </StatCard>
            <StatCard accentcolor="#ffd93d" whileHover={{ scale: 1.03 }}>
              <StatNumber color="#ffd93d">2</StatNumber>
              <StatLabel>Career Modules</StatLabel>
            </StatCard>
          </StatsGrid>

          <ContactLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ContactLink href="mailto:kumardeepakcse22@gmail.com" primary>
              Initiate Collaboration →
            </ContactLink>
            <ContactLink href="https://www.linkedin.com/in/deepak-kumar4/" target="_blank" rel="noopener noreferrer">
              Connect On LinkedIn
            </ContactLink>
            <ContactLink href="/resume.pdf" download>
              Download Dossier
            </ContactLink>
          </ContactLinks>
        </TextSection>

        <ImageSection
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }}
        >
          <AstronautWrapper>
            <AstronautImage src={developerAstronaut} alt="Developer Astronaut" />
          </AstronautWrapper>
        </ImageSection>
      </ContentWrapper>

      <MissionSection>
        <SectionEyebrow>{'// live mission telemetry'}</SectionEyebrow>
        <SectionHeading>Reliable systems. Human-sized thinking.</SectionHeading>
        <MissionGrid>
          <MissionPanel
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <PanelHeader>
              <PanelTitle>System telemetry</PanelTitle>
              <Status>Online</Status>
            </PanelHeader>
            <TelemetryList>
              <TelemetryRow>
                <TelemetryLabel>Primary mission</TelemetryLabel>
                <TelemetryValue color="#ff6b6b">Backend systems</TelemetryValue>
                <TelemetryBar color="#ff6b6b" width="92%" />
              </TelemetryRow>
              <TelemetryRow>
                <TelemetryLabel>Current location</TelemetryLabel>
                <TelemetryValue color="#ffd93d">Bangalore, IN</TelemetryValue>
                <TelemetryBar color="#ffd93d" width="78%" />
              </TelemetryRow>
              <TelemetryRow>
                <TelemetryLabel>Deployment mode</TelemetryLabel>
                <TelemetryValue color="#00d4aa">Production-ready</TelemetryValue>
                <TelemetryBar color="#00d4aa" width="86%" />
              </TelemetryRow>
            </TelemetryList>
            <Terminal>
              <div><span className="prompt">$</span> <span className="command">whoami</span></div>
              <div className="output">deepak@backend-engineer</div>
              <div><span className="prompt">$</span> <span className="command">cat principles.txt</span></div>
              <div className="output">Build clearly. Scale thoughtfully. Learn by shipping.</div>
            </Terminal>
          </MissionPanel>

          <MissionPanel
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <PanelHeader>
              <PanelTitle>Service architecture</PanelTitle>
              <Status>Healthy</Status>
            </PanelHeader>
            <Architecture aria-label="Technology architecture">
              <ArchitectureNode color="#ff6b6b">React UI</ArchitectureNode>
              <ArchitectureNode color="#ffd93d">REST API</ArchitectureNode>
              <ArchitectureNode color="#00d4aa">Spring Boot</ArchitectureNode>
              <ArchitectureNode color="#e040fb">Kafka</ArchitectureNode>
              <ArchitectureNode color="#00d4aa">Redis / SQL</ArchitectureNode>
              <ArchitectureNode color="#ffd93d">AWS</ArchitectureNode>
            </Architecture>
          </MissionPanel>
        </MissionGrid>
      </MissionSection>

      <MissionSection id="mission-log">
        <SectionEyebrow>{'// mission log // career trajectory'}</SectionEyebrow>
        <SectionHeading>How I got here</SectionHeading>
        <Timeline role="tablist" aria-label="Career timeline">
          {journey.map((stage, index) => (
            <TimelineButton
              key={stage.number}
              type="button"
              role="tab"
              aria-selected={activeStage === index}
              active={activeStage === index}
              color={stage.color}
              onClick={() => setActiveStage(index)}
            >
              <TimelineNumber color={stage.color}>{stage.number} {'// MODULE'}</TimelineNumber>
              <TimelineTitle>{stage.title}</TimelineTitle>
              <span style={{ color: '#6a6a6a', fontSize: '0.78rem' }}>
                {activeStage === index ? 'ACTIVE' : 'OPEN LOG'}
              </span>
            </TimelineButton>
          ))}
        </Timeline>
        <TimelineDescription
          key={journey[activeStage].number}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          role="tabpanel"
        >
          <strong style={{ color: journey[activeStage].color }}>
            {journey[activeStage].title}:
          </strong>{' '}
          {journey[activeStage].description}
        </TimelineDescription>
        <ContactLinks>
          <CommandLink href="mailto:kumardeepakcse22@gmail.com" primary>
            [ INITIATE COLLABORATION ]
          </CommandLink>
          <CommandLink href="/work">
            [ VIEW MISSION LOG ]
          </CommandLink>
          <CommandLink href="/resume.pdf" download>
            [ DOWNLOAD DOSSIER ]
          </CommandLink>
        </ContactLinks>
      </MissionSection>
    </PageContainer>
  );
};

export default AboutPage;
