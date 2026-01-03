import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedBackground from '../subComponents/AnimatedBackground';
import FloatingOrbs from '../subComponents/FloatingOrbs';

import Navbar from '../subComponents/Navbar';
import HackerCard from '../subComponents/HackerCard';
import GlitchText from '../subComponents/GlitchText';
import { Work } from '../data/WorkData';



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
    color: #ff6b6b;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0.1em;
      left: 0;
      width: 100%;
      height: 0.12em;
      background: #ffd93d;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2.5rem;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

// Replaced by HackerCard, but keeping ProjectContent styling
// const ProjectCard = styled(motion.article)...

// ProjectImage removed/unused as we use center icon in HackerCard

const ProjectContent = styled.div`
  padding: 1.75rem 2rem 2rem;
`;

const ProjectNumber = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${props => props.color || '#ff6b6b'};
  margin-bottom: 0.5rem;
  display: block;
  letter-spacing: 0.1em;
`;

const ProjectTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #faf8f5;
  margin-bottom: 0.75rem;
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

const ProjectDescription = styled.p`
  color: #a0a0a0;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

// Colorful bold tags
const tagColors = ['#ff6b6b', '#00d4aa', '#e040fb', '#ffd93d', '#c6ff00'];

const Tag = styled.span`
  padding: 0.4rem 0.9rem;
  background: ${props => props.color}15;
  border: 2px solid ${props => props.color}40;
  border-radius: 6px;
  color: ${props => props.color};
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.color}25;
    transform: translateY(-2px);
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

// Tactile button style
const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.3rem;
  background: ${props => props.primary ? '#ff6b6b' : 'transparent'};
  border: 2px solid ${props => props.primary ? '#ff6b6b' : '#2a2a2a'};
  border-radius: 8px;
  color: ${props => props.primary ? '#121212' : '#faf8f5'};
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: ${props => props.primary ? '4px 4px 0px rgba(0, 0, 0, 0.2)' : 'none'};

  &:hover {
    transform: ${props => props.primary ? 'translate(-2px, -2px)' : 'translateY(-2px)'};
    box-shadow: ${props => props.primary
    ? '6px 6px 0px rgba(255, 107, 107, 0.3)'
    : '0 4px 12px rgba(0, 212, 170, 0.2)'};
    background: ${props => props.primary ? '#ffd93d' : 'transparent'};
    border-color: ${props => props.primary ? '#ffd93d' : '#00d4aa'};
    color: ${props => props.primary ? '#121212' : '#00d4aa'};
  }
`;

const EmptyState = styled(motion.div)`
  text-align: center;
  padding: 4rem 2rem;
  background: #1e1e1e;
  border: 2px dashed #2a2a2a;
  border-radius: 16px;
`;

const EmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const EmptyTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  color: #faf8f5;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const EmptyText = styled.p`
  color: #6a6a6a;
  font-size: 1rem;
`;

const getProjectIcon = (tags) => {
  const tagLower = tags[0]?.toLowerCase() || '';
  if (tagLower.includes('c') && !tagLower.includes('css')) return 'C';
  if (tagLower.includes('python')) return 'Py';
  if (tagLower.includes('javascript') || tagLower.includes('js')) return 'JS';
  if (tagLower.includes('react')) return 'Re';
  if (tagLower.includes('node')) return 'No';
  return '</>';
};

const accentColors = ['#ff6b6b', '#00d4aa', '#e040fb', '#ffd93d', '#c6ff00'];

const WorkPage = () => {
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
            <GlitchText>Major <span className="accent">Projects</span></GlitchText>
          </PageTitle>

          <PageSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Engineering projects showcasing algorithms, full-stack development, and machine learning. Built with a focus on practical problem-solving.
          </PageSubtitle>
        </PageHeader>

        {Work && Work.length > 0 ? (
          <ProjectsGrid>
            {Work.map((project, index) => (
              <HackerCard
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                icon={<span style={{ fontSize: '2rem', fontWeight: 700, color: accentColors[index % accentColors.length] }}>{getProjectIcon(project.tags)}</span>}
              >
                <ProjectContent>
                  <ProjectNumber color={accentColors[index % accentColors.length]}>
                    {String(index + 1).padStart(2, '0')}
                  </ProjectNumber>
                  <ProjectTitle data-text={project.name}>{project.name}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TagsContainer>
                    {project.tags.map((tag, tagIndex) => (
                      <Tag key={tagIndex} color={tagColors[tagIndex % tagColors.length]}>
                        {tag}
                      </Tag>
                    ))}
                  </TagsContainer>
                  <LinksContainer>
                    {project.demo && (
                      <ProjectLink
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        primary
                      >
                        Live Demo →
                      </ProjectLink>
                    )}
                    {project.github && (
                      <ProjectLink
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </ProjectLink>
                    )}
                  </LinksContainer>
                </ProjectContent>
              </HackerCard>
            ))}
          </ProjectsGrid>
        ) : (
          <EmptyState
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <EmptyIcon>{ }</EmptyIcon>
            <EmptyTitle>Projects Coming Soon</EmptyTitle>
            <EmptyText>I'm working on some exciting projects. Stay tuned!</EmptyText>
          </EmptyState>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default WorkPage;
