import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedBackground from '../subComponents/AnimatedBackground';
import FloatingOrbs from '../subComponents/FloatingOrbs';
import Navbar from '../subComponents/Navbar';
import GlitchText from '../subComponents/GlitchText';
import { Work } from '../data/WorkData';

const colors = ['#ff6b6b', '#00d4aa', '#e040fb', '#ffd93d', '#c6ff00'];
const categories = ['All', ...new Set(Work.map(project => project.category))];

const PageContainer = styled.div`
  background: #121212;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  width: 100vw;
`;

const ContentWrapper = styled.main`
  margin: 0 auto;
  max-width: 1320px;
  padding: 8rem 4rem 5rem;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 7rem 1.25rem 3rem;
  }
`;

const Header = styled.header`
  margin-bottom: 3rem;
`;

const PageTitle = styled(motion.h1)`
  color: #faf8f5;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  letter-spacing: -0.04em;
  margin: 0 0 1rem;

  .accent {
    color: #ff6b6b;
    position: relative;
  }

  .accent::after {
    background: #ffd93d;
    bottom: 0;
    content: '';
    height: 0.12em;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: -1;
  }
`;

const Subtitle = styled(motion.p)`
  color: #a0a0a0;
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 0;
  max-width: 650px;
`;

const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? props.color : 'transparent'};
  border: 1px solid ${props => props.active ? props.color : '#2a2a2a'};
  border-radius: 999px;
  color: ${props => props.active ? '#121212' : '#a0a0a0'};
  cursor: pointer;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.65rem 1rem;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${props => props.color};
    color: ${props => props.active ? '#121212' : props.color};
  }
`;

const Spotlight = styled(motion.article)`
  background: linear-gradient(135deg, #24201f 0%, #171717 55%, #102522 100%);
  border: 2px solid ${props => props.color};
  border-radius: 20px;
  display: grid;
  gap: 2rem;
  grid-template-columns: 0.8fr 1.5fr;
  margin-bottom: 3rem;
  overflow: hidden;
  padding: clamp(1.5rem, 4vw, 3rem);
  position: relative;

  &::after {
    background: ${props => props.color};
    border-radius: 50%;
    content: '';
    filter: blur(2px);
    height: 240px;
    opacity: 0.12;
    position: absolute;
    right: -80px;
    top: -90px;
    width: 240px;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const SpotlightLabel = styled.span`
  color: ${props => props.color};
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
`;

const SpotlightIndex = styled.div`
  color: ${props => props.color};
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 700;
  line-height: 0.85;
  opacity: 0.85;
`;

const SpotlightTitle = styled.h2`
  color: #faf8f5;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  letter-spacing: -0.04em;
  line-height: 1;
  margin: 0.75rem 0 1rem;
  max-width: 620px;
`;

const SpotlightText = styled.p`
  color: #b6b6b6;
  font-size: 1rem;
  line-height: 1.75;
  margin: 0 0 1.5rem;
  max-width: 650px;
`;

const SpotlightHint = styled.p`
  color: #6a6a6a;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  margin: 1.5rem 0 0;
  text-transform: uppercase;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  border: 1px solid ${props => props.color}60;
  border-radius: 5px;
  color: ${props => props.color};
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.4rem 0.65rem;
`;

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const ProjectLink = styled.a`
  background: ${props => props.primary ? props.color : 'transparent'};
  border: 1px solid ${props => props.primary ? props.color : '#3a3a3a'};
  border-radius: 7px;
  color: ${props => props.primary ? '#121212' : '#faf8f5'};
  display: inline-flex;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.7rem 1rem;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background: ${props => props.primary ? '#ffd93d' : 'transparent'};
    border-color: ${props => props.primary ? '#ffd93d' : props.color};
    color: ${props => props.primary ? '#121212' : props.color};
    transform: translateY(-2px);
  }
`;

const Status = styled.span`
  align-items: center;
  border: 1px solid ${props => props.color}50;
  border-radius: 7px;
  color: ${props => props.color};
  display: inline-flex;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.7rem 1rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectTile = styled(motion.article)`
  background: #1b1b1b;
  border: 1px solid #2a2a2a;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  min-height: 260px;
  padding: 1.25rem;
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    border-color: ${props => props.color};
    transform: translateY(-5px);
    box-shadow: 0 12px 30px ${props => props.color}18;
  }
`;

const TileTop = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;

const TileIndex = styled.span`
  color: ${props => props.color};
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
`;

const Signal = styled.div`
  align-items: center;
  color: #6a6a6a;
  display: flex;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.68rem;
  gap: 0.35rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  &::before {
    background: ${props => props.color};
    border-radius: 50%;
    content: '';
    height: 6px;
    width: 6px;
  }
`;

const TileTitle = styled.h3`
  color: #faf8f5;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  line-height: 1.2;
  margin: 0 0 0.6rem;
`;

const TileMeta = styled.p`
  color: ${props => props.color};
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 0 0 0.9rem;
  text-transform: uppercase;
`;

const TileDescription = styled.p`
  color: #929292;
  display: -webkit-box;
  font-size: 0.88rem;
  line-height: 1.6;
  margin: 0;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const TileFooter = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 1.25rem;
`;

const TileAction = styled.a`
  color: ${props => props.color};
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: #faf8f5;
  }
`;

const getStatus = (project) => {
  if (project.category === 'Backend Engineering') return 'Production system';
  if (project.category === 'AI Applications') return 'AI application';
  if (project.category === 'Frontend Development') return 'Portfolio build';
  return 'Engineering project';
};

const ProjectLinks = ({ project, color }) => (
  <LinkRow>
    {project.demo && (
      <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer" primary color={color} onClick={event => event.stopPropagation()}>
        Open demo →
      </ProjectLink>
    )}
    {project.github && (
      <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer" color={color} onClick={event => event.stopPropagation()}>
        Source code
      </ProjectLink>
    )}
    {!project.demo && !project.github && <Status color={color}>{getStatus(project)}</Status>}
  </LinkRow>
);

const WorkPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeProjectId, setActiveProjectId] = useState(Work[0]?.id);
  const filteredProjects = useMemo(
    () => activeCategory === 'All'
      ? Work
      : Work.filter(project => project.category === activeCategory),
    [activeCategory]
  );
  const spotlight = filteredProjects.find(project => project.id === activeProjectId) || filteredProjects[0];
  const remainingProjects = filteredProjects.filter(project => project.id !== spotlight?.id);
  const spotlightColor = colors[Work.indexOf(spotlight) % colors.length];

  useEffect(() => {
    if (filteredProjects.length > 0 && !filteredProjects.some(project => project.id === activeProjectId)) {
      setActiveProjectId(filteredProjects[0].id);
    }
  }, [activeCategory, activeProjectId, filteredProjects]);

  useEffect(() => {
    if (filteredProjects.length < 2) return undefined;

    const cycle = window.setInterval(() => {
      setActiveProjectId(currentId => {
        const availableProjects = filteredProjects.filter(project => project.id !== currentId);
        const nextProject = availableProjects[Math.floor(Math.random() * availableProjects.length)];
        return nextProject ? nextProject.id : currentId;
      });
    }, 7000);

    return () => window.clearInterval(cycle);
  }, [filteredProjects]);

  return (
    <PageContainer>
      <AnimatedBackground />
      <FloatingOrbs />
      <Navbar />

      <ContentWrapper>
        <Header>
          <PageTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlitchText>Project <span className="accent">Observatory</span></GlitchText>
          </PageTitle>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore the systems, experiments, and products I have built across backend engineering, AI, and frontend development.
          </Subtitle>
        </Header>

        <FilterBar aria-label="Filter projects by category">
          {categories.map((category, index) => (
            <FilterButton
              key={category}
              type="button"
              active={activeCategory === category}
              color={colors[index % colors.length]}
              onClick={() => setActiveCategory(category)}
            >
              {category} {category === 'All' && `(${Work.length})`}
            </FilterButton>
          ))}
        </FilterBar>

        {spotlight ? (
          <>
            <Spotlight
              color={spotlightColor}
              key={spotlight.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div>
                <SpotlightLabel color={spotlightColor}>Featured signal // {spotlight.category}</SpotlightLabel>
                <SpotlightIndex color={spotlightColor}>
                  {String(Work.indexOf(spotlight) + 1).padStart(2, '0')}
                </SpotlightIndex>
                <SpotlightLabel color="#ffd93d">
                  {spotlight.period || 'Selected engineering work'}
                </SpotlightLabel>
              </div>
              <div>
                <SpotlightTitle>{spotlight.name}</SpotlightTitle>
                <SpotlightText>
                  {spotlight.description} {spotlight.details || ''}
                </SpotlightText>
                <TagList>
                  {spotlight.tags.map((tag, index) => (
                    <Tag key={tag} color={colors[index % colors.length]}>{tag}</Tag>
                  ))}
                </TagList>
                <ProjectLinks project={spotlight} color={spotlightColor} />
                <SpotlightHint>Auto-rotates every 7 seconds · select any signal to promote it</SpotlightHint>
              </div>
            </Spotlight>

            {remainingProjects.length > 0 && (
              <ProjectGrid>
                {remainingProjects.map((project, index) => {
                  const color = colors[Work.indexOf(project) % colors.length];
                  return (
                    <ProjectTile
                      key={project.id}
                      color={color}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.05 }}
                      role="button"
                      tabIndex={0}
                      aria-label={`Promote ${project.name} to featured project`}
                      onClick={() => setActiveProjectId(project.id)}
                      onKeyDown={event => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          setActiveProjectId(project.id);
                        }
                      }}
                    >
                      <TileTop>
                        <TileIndex color={color}>
                          {String(Work.indexOf(project) + 1).padStart(2, '0')} / SIGNAL
                        </TileIndex>
                        <Signal color={color}>{project.category}</Signal>
                      </TileTop>
                      <TileTitle>{project.name}</TileTitle>
                      <TileMeta color={color}>{project.period || 'Engineering project'}</TileMeta>
                      <TileDescription>{project.description}</TileDescription>
                      <TileFooter>
                        <Signal color={color}>Online</Signal>
                        {project.github || project.demo ? (
                          <TileAction
                            href={project.github || project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            color={color}
                            onClick={event => event.stopPropagation()}
                          >
                            Inspect →
                          </TileAction>
                        ) : (
                          <TileAction as="span" color={color}>{getStatus(project)}</TileAction>
                        )}
                      </TileFooter>
                    </ProjectTile>
                  );
                })}
              </ProjectGrid>
            )}
          </>
        ) : (
          <Status color="#ff6b6b">No projects in this channel</Status>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default WorkPage;
