import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import AnimatedBackground from '../subComponents/AnimatedBackground';
import FloatingOrbs from '../subComponents/FloatingOrbs';
import Navbar from '../subComponents/Navbar';
import Me from '../assets/Images/profile-img.png';

const wobble = keyframes`
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
`;

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  background: #121212;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8rem 4rem 4rem;
  position: relative;
  z-index: 10;
  gap: 4rem;

  @media (max-width: 968px) {
    flex-direction: column-reverse;
    padding: 7rem 2rem 3rem;
    text-align: center;
    gap: 3rem;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 650px;
  z-index: 10;
`;

const Greeting = styled(motion.p)`
  color: #00d4aa;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '//';
    color: #ff6b6b;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.8rem, 7vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #faf8f5;
  letter-spacing: -0.03em;
  
  .accent {
    color: #ff6b6b;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0.05em;
      left: 0;
      width: 100%;
      height: 0.12em;
      background: #ffd93d;
      z-index: -1;
    }
  }

  .mern {
    color: #00d4aa;
  }

  .ai {
    color: #e040fb;
  }
`;

const RoleText = styled(motion.p)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: 500;
  color: #a0a0a0;
  margin-bottom: 2rem;
  line-height: 1.6;
  
  .highlight {
    color: #00d4aa;
    font-weight: 600;
  }

  .highlight-pink {
    color: #e040fb;
    font-weight: 600;
  }
`;

const HeroDescription = styled(motion.p)`
  color: #a0a0a0;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 520px;

  @media (max-width: 968px) {
    margin: 0 auto 2.5rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2rem;
  background: #ff6b6b;
  border: none;
  border-radius: 10px;
  color: #121212;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.3);
  position: relative;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 9px 9px 0px rgba(255, 107, 107, 0.3);
    background: #ffd93d;
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.3);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2rem;
  background: transparent;
  border: 3px solid #2a2a2a;
  border-radius: 10px;
  color: #faf8f5;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &:hover {
    border-color: #00d4aa;
    color: #00d4aa;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 212, 170, 0.15);
  }
`;

const HeroImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  max-width: 420px;
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: clamp(260px, 32vw, 350px);
  height: clamp(260px, 32vw, 350px);

  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    width: 100%;
    height: 100%;
    background: #ff6b6b;
    border-radius: 30% 70% 60% 40% / 60% 40% 60% 40%;
    z-index: -2;
    animation: ${wobble} 6s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 55%;
    height: 55%;
    background: #00d4aa;
    border-radius: 50%;
    z-index: -1;
    animation: ${pulse} 4s ease-in-out infinite;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  border: 4px solid #2a2a2a;
  position: relative;
  z-index: 1;
`;

// Tech Stack Pills
const TechPills = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2rem;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const TechPill = styled.span`
  padding: 0.4rem 0.9rem;
  background: ${props => props.color}18;
  border: 2px solid ${props => props.color}40;
  border-radius: 20px;
  color: ${props => props.color};
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
`;

// ============ JOURNEY ROADMAP SECTION ============

const JourneySection = styled.section`
  padding: 5rem 4rem 6rem;
  position: relative;
  z-index: 10;
  background: #0f0f0f;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem 5rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: #faf8f5;
  
  .accent {
    color: #ffd93d;
  }
`;

const SectionSubtitle = styled(motion.p)`
  color: #6a6a6a;
  font-size: 1.1rem;
  max-width: 550px;
  margin: 0 auto;
`;

// Road container
const RoadContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 0;
`;

// The road itself
const Road = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 100%;
  background: linear-gradient(180deg, #2a2a2a 0%, #2a2a2a 100%);
  border-radius: 4px;
  
  /* Road dashed lines */
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 100%;
    background: repeating-linear-gradient(
      180deg,
      #ffd93d 0px,
      #ffd93d 20px,
      transparent 20px,
      transparent 35px
    );
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    left: 25px;
    transform: none;
  }
`;

// Milestones container
const Milestones = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
`;

// Single milestone
const Milestone = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  position: relative;
  
  &:nth-child(odd) {
    flex-direction: row;
    text-align: left;
    padding-right: calc(50% + 2rem);
    
    @media (max-width: 768px) {
      flex-direction: row;
      padding-right: 0;
      padding-left: 60px;
    }
  }
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    text-align: right;
    padding-left: calc(50% + 2rem);
    
    @media (max-width: 768px) {
      flex-direction: row;
      text-align: left;
      padding-left: 60px;
      padding-right: 0;
    }
  }
`;

// Milestone marker (dot on the road)
const MilestoneMarker = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
  background: ${props => props.color || '#ff6b6b'};
  border-radius: 50%;
  border: 4px solid #121212;
  z-index: 5;
  box-shadow: 0 0 20px ${props => props.color || '#ff6b6b'}50;
  
  @media (max-width: 768px) {
    left: 25px;
  }
`;

// Milestone content card
const MilestoneCard = styled.div`
  background: #1e1e1e;
  border: 2px solid #2a2a2a;
  border-radius: 16px;
  padding: 1.5rem 2rem;
  max-width: 380px;
  transition: all 0.3s ease;
  position: relative;
  
  /* Colored left/right bar */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    ${props => props.side === 'left' ? 'right: -4px;' : 'left: -4px;'}
    width: 4px;
    height: 100%;
    background: ${props => props.color || '#ff6b6b'};
    border-radius: ${props => props.side === 'left' ? '0 16px 16px 0' : '16px 0 0 16px'};
    
    @media (max-width: 768px) {
      left: -4px;
      right: auto;
      border-radius: 16px 0 0 16px;
    }
  }
  
  &:hover {
    border-color: ${props => props.color || '#ff6b6b'}60;
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const MilestoneYear = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: ${props => props.color || '#ff6b6b'};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: 0.5rem;
`;

const MilestoneTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #faf8f5;
  margin-bottom: 0.5rem;
`;

const MilestoneDescription = styled.p`
  color: #a0a0a0;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const MilestoneIcon = styled.span`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  display: block;
`;

// Journey data
const journeyMilestones = [
  {
    year: "2022",
    icon: "🎓",
    title: "Started Engineering",
    description: "Began my engineering journey with a passion for technology and problem-solving.",
    color: "#ff6b6b"
  },
  {
    year: "2022",
    icon: "💻",
    title: "Learning C & DSA",
    description: "Built a Chess Engine in C, mastered data structures and algorithms. Foundation for everything that followed.",
    color: "#ffd93d"
  },
  {
    year: "2023",
    icon: "🌐",
    title: "Frontend Development",
    description: "Dived into JavaScript, built Urban Company, GIPHY & Twitter clones. Learned responsive design and modern CSS.",
    color: "#00d4aa"
  },
  {
    year: "2023",
    icon: "⚛️",
    title: "React & Modern Frameworks",
    description: "Mastered React.js, state management, and component architecture. Built production-ready applications.",
    color: "#61dafb"
  },
  {
    year: "2024",
    icon: "🚀",
    title: "Full-Stack MERN",
    description: "Currently building full-stack applications with MongoDB, Express, React, Node.js. REST APIs and database design.",
    color: "#00d4aa"
  },
  {
    year: "2024",
    icon: "🤖",
    title: "AI/ML Journey",
    description: "Exploring machine learning, built digit recognition system. Learning neural networks, Python, and AI fundamentals.",
    color: "#e040fb"
  },
  {
    year: "Future",
    icon: "🎯",
    title: "What's Next",
    description: "Deep diving into AI/ML, contributing to open source, and preparing for industry roles. The journey continues...",
    color: "#c6ff00"
  }
];

// Quick Links Section
const QuickLinksSection = styled.section`
  padding: 5rem 4rem;
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const LinkCard = styled(motion(NavLink))`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: #1e1e1e;
  border: 2px solid #2a2a2a;
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: ${props => props.accentcolor || '#ff6b6b'};
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  &:hover {
    border-color: ${props => props.accentcolor || '#ff6b6b'};
    transform: translateY(-8px) translateX(5px);
    box-shadow: -8px 8px 0px ${props => props.accentcolor || '#ff6b6b'}20;

    &::before {
      transform: scaleY(1);
    }
  }
`;

const LinkNumber = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${props => props.color || '#ff6b6b'};
  margin-bottom: 0.75rem;
  letter-spacing: 0.1em;
`;

const LinkTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #faf8f5;
  margin-bottom: 0.75rem;
`;

const LinkDescription = styled.p`
  color: #a0a0a0;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const Main = () => {
  return (
    <MainContainer>
      <AnimatedBackground />
      <FloatingOrbs />
      <Navbar />

      <HeroSection>
        <HeroContent>
          <Greeting
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hello, I'm
          </Greeting>

          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="accent">Deepak</span>
          </HeroTitle>

          <RoleText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="highlight">Full-Stack MERN Developer</span> & <span className="highlight-pink">AI/ML Enthusiast</span>
          </RoleText>

          <TechPills
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <TechPill color="#00d4aa">⚛️ React</TechPill>
            <TechPill color="#ffd93d">🟨 JavaScript</TechPill>
            <TechPill color="#00d4aa">🟢 Node.js</TechPill>
            <TechPill color="#68a063">🍃 MongoDB</TechPill>
            <TechPill color="#e040fb">🐍 Python</TechPill>
            <TechPill color="#e040fb">🤖 ML</TechPill>
          </TechPills>

          <HeroDescription
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Engineering student building full-stack web applications and exploring the world of AI/ML.
            Turning ideas into real products with clean code.
          </HeroDescription>

          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <PrimaryButton to="/work">
              View Projects →
            </PrimaryButton>
            <SecondaryButton href="mailto:dk376907@gmail.com">
              Get In Touch
            </SecondaryButton>
          </ButtonGroup>
        </HeroContent>

        <HeroImageSection>
          <ImageWrapper
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.68, -0.55, 0.265, 1.55] }}
          >
            <ProfileImage src={Me} alt="Deepak" />
          </ImageWrapper>
        </HeroImageSection>
      </HeroSection>

      {/* Journey Roadmap Section */}
      <JourneySection>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="accent">Journey</span> 🛤️
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From writing first lines of code to building full-stack applications
          </SectionSubtitle>
        </SectionHeader>

        <RoadContainer>
          <Road />
          <Milestones>
            {journeyMilestones.map((milestone, index) => (
              <Milestone
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MilestoneMarker color={milestone.color} />
                <MilestoneCard
                  color={milestone.color}
                  side={index % 2 === 0 ? 'right' : 'left'}
                >
                  <MilestoneIcon>{milestone.icon}</MilestoneIcon>
                  <MilestoneYear color={milestone.color}>{milestone.year}</MilestoneYear>
                  <MilestoneTitle>{milestone.title}</MilestoneTitle>
                  <MilestoneDescription>{milestone.description}</MilestoneDescription>
                </MilestoneCard>
              </Milestone>
            ))}
          </Milestones>
        </RoadContainer>
      </JourneySection>

      {/* Quick Links */}
      <QuickLinksSection>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Explore <span className="accent">More</span>
          </SectionTitle>
        </SectionHeader>

        <LinksGrid>
          <LinkCard
            to="/about"
            accentcolor="#00d4aa"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <LinkNumber color="#00d4aa">01</LinkNumber>
            <LinkTitle>About Me</LinkTitle>
            <LinkDescription>
              My background, what I do, and what drives me to build things.
            </LinkDescription>
          </LinkCard>

          <LinkCard
            to="/skills"
            accentcolor="#e040fb"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <LinkNumber color="#e040fb">02</LinkNumber>
            <LinkTitle>Skills & Stack</LinkTitle>
            <LinkDescription>
              MERN stack, Python, AI/ML tools, and everything I work with.
            </LinkDescription>
          </LinkCard>

          <LinkCard
            to="/work"
            accentcolor="#ffd93d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <LinkNumber color="#ffd93d">03</LinkNumber>
            <LinkTitle>Major Projects</LinkTitle>
            <LinkDescription>
              Chess Engine, ML models, full-stack apps, and web clones.
            </LinkDescription>
          </LinkCard>
        </LinksGrid>
      </QuickLinksSection>
    </MainContainer>
  );
};

export default Main;
