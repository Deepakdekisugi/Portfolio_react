import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedBackground from '../subComponents/AnimatedBackground';
import FloatingOrbs from '../subComponents/FloatingOrbs';
import Navbar from '../subComponents/Navbar';
import AiBrainSvg from '../assets/Images/ai-brain.svg';
import WorkspaceSvg from '../assets/Images/workspace.svg';

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

const SkillsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const accentColors = ['#ff6b6b', '#00d4aa', '#e040fb', '#ffd93d'];

const SkillCategory = styled(motion.div)`
  background: #1e1e1e;
  border: 2px solid #2a2a2a;
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;

  /* Colored top accent bar */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.accentcolor || '#ff6b6b'};
    border-radius: 16px 16px 0 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  &:hover {
    border-color: ${props => props.accentcolor || '#ff6b6b'};
    transform: translateY(-8px) rotate(0.5deg);
    box-shadow: 8px 8px 0px ${props => props.accentcolor || '#ff6b6b'}25;

    &::before {
      transform: scaleX(1);
    }
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const CategoryIcon = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 12px;
  background: ${props => props.color || '#ff6b6b'}20;
  border: 2px solid ${props => props.color || '#ff6b6b'}40;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
`;

const CategoryTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #faf8f5;
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
    description: 'Building responsive, performant, and beautiful user interfaces with modern frameworks.',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Redux', 'Next.js', 'Tailwind CSS', 'Styled Components', 'Framer Motion', 'Responsive Design']
  },
  {
    title: 'Backend & MERN Stack',
    color: '#ff6b6b',
    description: 'Full-stack development with Node.js, Express, MongoDB, and REST API design.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth', 'Mongoose', 'MySQL', 'Socket.io', 'API Design', 'Authentication', 'CRUD Operations']
  },
  {
    title: 'AI & Machine Learning',
    color: '#e040fb',
    description: 'Exploring ML fundamentals, neural networks, computer vision, and AI applications.',
    skills: ['Python', 'NumPy', 'Pandas', 'TensorFlow', 'Keras', 'Scikit-learn', 'Neural Networks', 'Data Processing', 'OpenCV', 'Matplotlib', 'Jupyter']
  },
  {
    title: 'Tools & DevOps',
    color: '#ffd93d',
    description: 'Efficient development practices, version control, and deployment tools.',
    skills: ['Git', 'GitHub', 'VS Code', 'npm', 'Postman', 'Firebase', 'Linux', 'Docker', 'Vercel', 'Netlify', 'Terminal']
  },
  {
    title: 'Programming Languages',
    color: '#c6ff00',
    description: 'Core programming languages for different domains and problem-solving.',
    skills: ['JavaScript', 'Python', 'C', 'C++', 'Java', 'SQL', 'Bash']
  },
  {
    title: 'CS Fundamentals',
    color: '#00d4aa',
    description: 'Strong foundation in computer science concepts and problem-solving.',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'OS Concepts', 'System Design', 'Problem Solving']
  }
];

const techStack = [
  { name: 'React', abbr: 'Re', color: 'rgba(97, 218, 251, 0.25)', hoverColor: '#00d4aa' },
  { name: 'JavaScript', abbr: 'JS', color: 'rgba(247, 223, 30, 0.25)', hoverColor: '#ffd93d' },
  { name: 'TypeScript', abbr: 'TS', color: 'rgba(49, 120, 198, 0.25)', hoverColor: '#00d4aa' },
  { name: 'Node.js', abbr: 'No', color: 'rgba(68, 136, 62, 0.25)', hoverColor: '#c6ff00' },
  { name: 'Express', abbr: 'Ex', color: 'rgba(100, 100, 100, 0.25)', hoverColor: '#ffd93d' },
  { name: 'MongoDB', abbr: 'Mo', color: 'rgba(77, 179, 61, 0.25)', hoverColor: '#00d4aa' },
  { name: 'Python', abbr: 'Py', color: 'rgba(55, 118, 171, 0.25)', hoverColor: '#e040fb' },
  { name: 'TensorFlow', abbr: 'TF', color: 'rgba(255, 152, 0, 0.25)', hoverColor: '#ff6b6b' },
  { name: 'C', abbr: 'C', color: 'rgba(85, 85, 255, 0.25)', hoverColor: '#00d4aa' },
  { name: 'HTML5', abbr: 'HT', color: 'rgba(227, 79, 38, 0.25)', hoverColor: '#ff6b6b' },
  { name: 'CSS3', abbr: 'CS', color: 'rgba(38, 77, 228, 0.25)', hoverColor: '#e040fb' },
  { name: 'Tailwind', abbr: 'Tw', color: 'rgba(56, 189, 248, 0.25)', hoverColor: '#00d4aa' },
  { name: 'Git', abbr: 'Gt', color: 'rgba(240, 80, 51, 0.25)', hoverColor: '#ff6b6b' },
  { name: 'Firebase', abbr: 'Fb', color: 'rgba(255, 196, 0, 0.25)', hoverColor: '#ffd93d' },
  { name: 'Postman', abbr: 'Pm', color: 'rgba(255, 108, 55, 0.25)', hoverColor: '#ff6b6b' },
  { name: 'VS Code', abbr: 'VS', color: 'rgba(0, 122, 204, 0.25)', hoverColor: '#00d4aa' },
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
            My <span className="accent">Skills</span>
          </PageTitle>

          <PageSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A collection of technologies and tools I use to bring ideas to life
          </PageSubtitle>
        </PageHeader>

        <SkillsSection>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              accentcolor={category.color}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <CategoryHeader>
                <CategoryTitle>{category.title}</CategoryTitle>
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
            </SkillCategory>
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
            <h4 style={{ color: '#faf8f5', fontFamily: 'Space Grotesk, sans-serif', marginBottom: '0.5rem' }}>Full-Stack Development</h4>
            <p style={{ color: '#6a6a6a', fontSize: '0.9rem' }}>Building complete web applications</p>
          </div>
          <div style={{
            background: '#1e1e1e',
            borderRadius: '16px',
            padding: '2rem',
            border: '2px solid #2a2a2a',
            textAlign: 'center'
          }}>
            <img src={AiBrainSvg} alt="AI and Machine Learning" style={{ width: '100%', maxWidth: '250px', marginBottom: '1rem' }} />
            <h4 style={{ color: '#faf8f5', fontFamily: 'Space Grotesk, sans-serif', marginBottom: '0.5rem' }}>AI & Machine Learning</h4>
            <p style={{ color: '#6a6a6a', fontSize: '0.9rem' }}>Exploring neural networks and ML</p>
          </div>
        </motion.div>

        <TechStackSection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <TechStackTitle>Tech Stack</TechStackTitle>
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
