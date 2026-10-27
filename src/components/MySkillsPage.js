import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedBackground from '../subComponents/AnimatedBackground';
import FloatingOrbs from '../subComponents/FloatingOrbs';

import Navbar from '../subComponents/Navbar';
import HackerCard from '../subComponents/HackerCard';
import GlitchText from '../subComponents/GlitchText';
import AiBrainSvg from '../assets/Images/ai-brain.svg';
import WorkspaceSvg from '../assets/Images/workspace.svg';

// Glitch animation keyframes


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
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 7rem 2rem 3rem;
  }
`;

const PageHeader = styled.div`
  margin-bottom: 4rem;
`;

const PageTitle = styled(motion.h1)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: #faf8f5;
  letter-spacing: -0.02em;
  
  .accent {
    color: #e040fb;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0.1em;
      left: 0;
      width: 100%;
      height: 0.12em;
      background: #c6ff00;
      z-index: -1;
    }
  }
`;

const PageSubtitle = styled(motion.p)`
  color: #a0a0a0;
  font-size: 1.15rem;
  max-width: 600px;
  line-height: 1.7;
`;

const LabStatus = styled(motion.div)`
  align-items: center;
  background: #1e1e1e;
  border: 2px solid #2a2a2a;
  border-radius: 12px;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  padding: 1rem 1.25rem;

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const LabStatusText = styled.span`
  color: ${props => props.color || '#a0a0a0'};
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const SkillsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;



// Replaced by HackerCard styling
// const SkillCategory = styled(motion.div)...

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;



const CategoryTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #faf8f5;
  position: relative;
  display: inline-block;
  
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    pointer-events: none;
  }
  
  &::before {
    color: #ff6b6b;
    text-shadow: -2px 0 #00d4aa;
  }
  
  &::after {
    color: #00d4aa;
    text-shadow: 2px 0 #ff6b6b, -1px 0 #e040fb;
  }
`;

const CategoryDescription = styled.p`
  color: #a0a0a0;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const tagColors = ['#ff6b6b', '#00d4aa', '#e040fb', '#ffd93d', '#c6ff00'];

const SkillTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  background: ${props => props.color}15;
  border: 2px solid ${props => props.color}35;
  border-radius: 8px;
  color: ${props => props.color};
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.color}25;
    transform: translateY(-2px);
    box-shadow: 3px 3px 0px ${props => props.color}30;
  }
`;

const TechStackSection = styled(motion.div)`
  background: #1e1e1e;
  border: 2px solid #2a2a2a;
  border-radius: 16px;
  padding: 2.5rem;
  position: relative;
  
  /* Gradient accent bar */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ff6b6b, #ffd93d, #c6ff00, #00d4aa, #e040fb);
    border-radius: 16px 16px 0 0;
  }
`;

const TechStackTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #faf8f5;
  margin-bottom: 2rem;
  text-align: center;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1.5rem;
`;

const TechItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem;
  border-radius: 12px;
  transition: all 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  background: transparent;
  border: 2px solid transparent;

  &:hover {
    background: #2a2a2a;
    border-color: ${props => props.hovercolor || '#ff6b6b'}50;
    transform: translateY(-5px) rotate(2deg);
    box-shadow: 4px 4px 0px ${props => props.hovercolor || '#ff6b6b'}30;

    span {
      color: ${props => props.hovercolor || '#ff6b6b'};
    }
  }
`;

const TechIcon = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 12px;
  background: ${props => props.color || '#2a2a2a'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #faf8f5;
`;

const TechName = styled.span`
  color: #6a6a6a;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
  transition: color 0.3s ease;
`;

const skillCategories = [
  {
    title: 'Frontend Development',
    color: '#00d4aa',
    description: 'Building responsive interfaces that complement reliable backend systems.',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Redux', 'Next.js', 'Tailwind CSS', 'Styled Components', 'Framer Motion', 'Responsive Design']
  },
  {
    title: 'Java Backend & Microservices',
    color: '#ff6b6b',
    description: 'Designing secure, maintainable services with Java, Spring Boot, and distributed-system patterns.',
    skills: ['Java', 'Core Java', 'Java 8+', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'Microservices', 'DTO Mapping', 'Validation', 'Exception Handling', 'Spring Security', 'JWT', 'RBAC']
  },
  {
    title: 'Databases, Messaging & Caching',
    color: '#e040fb',
    description: 'Building data access layers and asynchronous services for scalable applications.',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQL', 'JPA', 'Database Indexing', 'Query Optimization', 'Apache Kafka', 'Producers', 'Consumers', 'Event-Driven Architecture', 'Idempotent Consumers']
  },
  {
    title: 'AI Integration',
    color: '#ffd93d',
    description: 'Applying AI capabilities to document processing and career-focused products.',
    skills: ['Gemini AI', 'LangChain4j', 'PDF Parsing', 'Document Chunking', 'Semantic Retrieval', 'Context-Aware Q&A', 'AI Resume Generation', 'Interview Preparation']
  },
  {
    title: 'Cloud, DevOps & Quality',
    color: '#c6ff00',
    description: 'Supporting delivery, testing, observability, and production troubleshooting.',
    skills: ['AWS', 'EC2', 'Docker', 'Jenkins', 'CI/CD', 'Maven', 'Git', 'Linux', 'Shell Scripting', 'JUnit 5', 'Mockito', 'SonarQube', 'Swagger/OpenAPI', 'Postman', 'Logback']
  },
  {
    title: 'CS Fundamentals',
    color: '#00d4aa',
    description: 'Fundamentals used to design, implement, and troubleshoot software systems.',
    skills: ['JavaScript', 'Python', 'C', 'C++', 'Bash', 'Data Structures', 'Algorithms', 'OOP', 'DBMS', 'OS Concepts', 'System Design', 'Problem Solving']
  }
];

const techStack = [
  { name: 'Java', abbr: 'Ja', color: 'rgba(255, 107, 107, 0.25)', hoverColor: '#ff6b6b' },
  { name: 'Spring Boot', abbr: 'SB', color: 'rgba(0, 212, 170, 0.25)', hoverColor: '#00d4aa' },
  { name: 'Kafka', abbr: 'Ka', color: 'rgba(247, 223, 30, 0.25)', hoverColor: '#ffd93d' },
  { name: 'Redis', abbr: 'Re', color: 'rgba(224, 64, 251, 0.25)', hoverColor: '#e040fb' },
  { name: 'MySQL', abbr: 'My', color: 'rgba(77, 179, 61, 0.25)', hoverColor: '#00d4aa' },
  { name: 'MongoDB', abbr: 'Mo', color: 'rgba(77, 179, 61, 0.25)', hoverColor: '#c6ff00' },
  { name: 'Docker', abbr: 'Do', color: 'rgba(56, 189, 248, 0.25)', hoverColor: '#00d4aa' },
  { name: 'AWS', abbr: 'AW', color: 'rgba(255, 152, 0, 0.25)', hoverColor: '#ffd93d' },
  { name: 'JUnit', abbr: 'Ju', color: 'rgba(255, 107, 107, 0.25)', hoverColor: '#ff6b6b' },
  { name: 'React', abbr: 'Re', color: 'rgba(97, 218, 251, 0.25)', hoverColor: '#00d4aa' },
  { name: 'Gemini AI', abbr: 'AI', color: 'rgba(224, 64, 251, 0.25)', hoverColor: '#e040fb' },
  { name: 'Git', abbr: 'Gt', color: 'rgba(240, 80, 51, 0.25)', hoverColor: '#ff6b6b' },
];

const MySkillsPage = () => {
  return (
    <PageContainer>
      <AnimatedBackground />
      <FloatingOrbs />
      <Navbar />

      <ContentWrapper>
        <PageHeader>
          <PageTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlitchText>My <span className="accent">Skills</span></GlitchText>
          </PageTitle>

          <PageSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Backend engineering, distributed systems, cloud tooling, frontend development, and AI integration
          </PageSubtitle>
        </PageHeader>

        <LabStatus
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <LabStatusText>Systems lab // capability matrix loaded</LabStatusText>
          <LabStatusText color="#00d4aa">12 core technologies online</LabStatusText>
        </LabStatus>

        <SkillsSection>
          {skillCategories.map((category, index) => (
            <HackerCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              icon={null}
            >
              <div style={{ padding: '2rem' }}>
                <CategoryHeader>
                  {/* Icon removed from here as it's now in the center bg */}
                  <CategoryTitle data-text={category.title}>{category.title}</CategoryTitle>
                </CategoryHeader>
                <CategoryDescription>{category.description}</CategoryDescription>
                <SkillTags>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillTag
                      key={skillIndex}
                      color={tagColors[skillIndex % tagColors.length]}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </SkillTag>
                  ))}
                </SkillTags>
              </div>
            </HackerCard>
          ))}
        </SkillsSection>

        {/* Illustrations Section */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div style={{
            background: '#1e1e1e',
            borderRadius: '16px',
            padding: '2rem',
            border: '2px solid #2a2a2a',
            textAlign: 'center'
          }}>
            <img src={WorkspaceSvg} alt="Developer workspace" style={{ width: '100%', maxWidth: '250px', marginBottom: '1rem' }} />
            <h4 style={{ color: '#faf8f5', fontFamily: 'Space Grotesk, sans-serif', marginBottom: '0.5rem' }}>Backend Engineering</h4>
            <p style={{ color: '#6a6a6a', fontSize: '0.9rem' }}>Building reliable distributed services</p>
          </div>
          <div style={{
            background: '#1e1e1e',
            borderRadius: '16px',
            padding: '2rem',
            border: '2px solid #2a2a2a',
            textAlign: 'center'
          }}>
            <img src={AiBrainSvg} alt="AI and Machine Learning" style={{ width: '100%', maxWidth: '250px', marginBottom: '1rem' }} />
            <h4 style={{ color: '#faf8f5', fontFamily: 'Space Grotesk, sans-serif', marginBottom: '0.5rem' }}>AI-Powered Applications</h4>
            <p style={{ color: '#6a6a6a', fontSize: '0.9rem' }}>Integrating AI into useful products</p>
          </div>
        </motion.div>

        <TechStackSection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <TechStackTitle><GlitchText>Tech Stack</GlitchText></TechStackTitle>
          <TechGrid>
            {techStack.map((tech, index) => (
              <TechItem
                key={index}
                hovercolor={tech.hoverColor}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <TechIcon color={tech.color}>{tech.abbr}</TechIcon>
                <TechName>{tech.name}</TechName>
              </TechItem>
            ))}
          </TechGrid>
        </TechStackSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default MySkillsPage;
